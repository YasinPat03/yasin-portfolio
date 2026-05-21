import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yasin Patel — Computer Science @ Université de Montréal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 75% 20%, rgba(249,115,22,0.20), transparent 55%), #0a0a0a",
          color: "#fafafa",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI",
        }}
      >
        <div
          style={{
            fontFamily: "ui-monospace, Menlo, monospace",
            fontSize: 22,
            letterSpacing: 6,
            color: "rgb(249,115,22)",
            textTransform: "uppercase",
          }}
        >
          yasinpatel.dev
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 128,
              fontWeight: 600,
              letterSpacing: -4,
              lineHeight: 1.05,
            }}
          >
            Yasin Patel
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 32,
              color: "#a3a3a3",
              maxWidth: 1000,
            }}
          >
            Computer Science @ Université de Montréal — building full-stack
            web apps, ML systems, and developer tools.
          </div>
        </div>

        <div
          style={{
            fontFamily: "ui-monospace, Menlo, monospace",
            fontSize: 22,
            letterSpacing: 2,
            color: "#737373",
          }}
        >
          github.com/YasinPat03 · linkedin.com/in/yasin
        </div>
      </div>
    ),
    { ...size }
  );
}
