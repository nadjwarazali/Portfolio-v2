// components/gradientBackground.tsx
export default function GradientBackground() {
  return (
    <>
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-40px, 30px) scale(1.05); }
          66% { transform: translate(20px, -30px) scale(0.95); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, 40px) scale(0.95); }
          66% { transform: translate(-30px, -20px) scale(1.05); }
        }
        .blob1 { animation: blob1 12s ease-in-out infinite; }
        .blob2 { animation: blob2 15s ease-in-out infinite; }
        .blob3 { animation: blob3 18s ease-in-out infinite; }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background: "#f0f1f5",
          overflow: "hidden",
        }}
      >
        {/* Blob 1 — deep blue */}
        <div
          className="blob1"
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "60vw",
            height: "60vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,34,255,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Blob 2 — indigo */}
        <div
          className="blob2"
          style={{
            position: "absolute",
            top: "30%",
            right: "-15%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(60,20,200,0.14) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Blob 3 — soft blue accent */}
        <div
          className="blob3"
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "30%",
            width: "45vw",
            height: "45vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,80,255,0.12) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>
    </>
  );
}