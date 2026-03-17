import { useCallback, useEffect, useRef, useState } from "react";

const COLORS = [
  "#6366f1", // indigo
  "#8b5cf6", // purple
  "#ec4899", // pink
  "#f43f5e", // rose
  "#f97316", // orange
  "#eab308", // yellow
  "#22c55e", // green
  "#14b8a6", // teal
  "#06b6d4", // cyan
  "#3b82f6", // blue
];

export default function DrawingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [colorIndex, setColorIndex] = useState(0);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  const currentColor = COLORS[colorIndex];

  const cycleColor = useCallback(() => {
    setColorIndex((prev) => (prev + 1) % COLORS.length);
  }, []);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.putImageData(imageData, 0, 0);
    };

    const preventScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("touchstart", preventScroll, { passive: false });
    canvas.addEventListener("touchmove", preventScroll, { passive: false });
    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("touchstart", preventScroll);
      canvas.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const pos = getPos(e);

    if (lastPos.current) {
      ctx.beginPath();
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowColor = currentColor;
      ctx.shadowBlur = 10;
      ctx.stroke();
    }

    lastPos.current = pos;
  };

  const handleMouseLeave = () => {
    lastPos.current = null;
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    cycleColor();
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="drawing-canvas"
        onMouseMove={draw}
        onMouseLeave={handleMouseLeave}
        onTouchStart={draw}
        onTouchMove={draw}
        onTouchEnd={handleMouseLeave}
        onContextMenu={handleContextMenu}
      />
      <div className="canvas-controls">
        <div className="color-hint" style={{ color: currentColor }}>
          Right-click to change color
        </div>
        <button className="reset-btn" onClick={clearCanvas}>
          Reset Canvas
        </button>
      </div>
    </>
  );
}
