/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly KV_REST_API_URL: string;
  readonly KV_REST_API_TOKEN: string;
  readonly WORKOUT_PIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
