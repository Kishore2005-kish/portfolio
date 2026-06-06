import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const runtime = "edge";
export const alt = `${profile.name} - ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(145deg, #050505 0%, #0f172a 42%, #064e3b 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              background: "#10b981",
            }}
          />
          <p style={{ fontSize: 28, fontWeight: 600, color: "#6ee7b7", margin: 0 }}>Portfolio</p>
        </div>
        <div>
          <p style={{ fontSize: 76, fontWeight: 700, lineHeight: 1, margin: 0, letterSpacing: "-0.04em" }}>
            {profile.name}
          </p>
          <p style={{ fontSize: 36, fontWeight: 600, marginTop: 24, color: "#d1fae5", lineHeight: 1.2 }}>
            {profile.role}
          </p>
          <p style={{ fontSize: 26, marginTop: 28, color: "rgba(248,250,252,0.72)", maxWidth: 900, lineHeight: 1.4 }}>
            {profile.headline}
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
