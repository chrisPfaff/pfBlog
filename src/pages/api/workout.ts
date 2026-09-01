import type { APIRoute } from 'astro';
import { Redis } from '@upstash/redis';

export const prerender = false;

const WORKOUT_KEY = 'workout-log';

function getRedis() {
  const url = import.meta.env.KV_REST_API_URL;
  const token = import.meta.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    return null;
  }

  return new Redis({ url, token });
}

function checkPin(request: Request): boolean {
  const pin = request.headers.get('x-workout-pin');
  const expectedPin = import.meta.env.WORKOUT_PIN;

  if (!expectedPin) {
    return false;
  }

  return pin === expectedPin;
}

export const GET: APIRoute = async ({ request }) => {
  if (!checkPin(request)) {
    return new Response(JSON.stringify({ error: 'Invalid PIN' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const redis = getRedis();
  if (!redis) {
    return new Response(JSON.stringify({ error: 'Storage not configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const data = await redis.get(WORKOUT_KEY);

  return new Response(JSON.stringify({ value: data || null }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request }) => {
  if (!checkPin(request)) {
    return new Response(JSON.stringify({ error: 'Invalid PIN' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const redis = getRedis();
  if (!redis) {
    return new Response(JSON.stringify({ error: 'Storage not configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = await request.json();
  await redis.set(WORKOUT_KEY, body.value);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
