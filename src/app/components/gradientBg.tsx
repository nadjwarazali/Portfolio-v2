export default function GradientBackground({ isDark = false }: { isDark?: boolean }) {
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
        .blob1 { animation: blob1 18s ease-in-out infinite; }
        .blob2 { animation: blob2 22s ease-in-out infinite; }
        .blob3 { animation: blob3 26s ease-in-out infinite; }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background: isDark ? "#06091a" : "#F5F0E8",
          overflow: "hidden",
        }}
      >
        {/* Blob 1 */}
        <div
          className="blob1"
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "70vw",
            height: "70vw",
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle, rgba(255,22,84,0.28) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(139,0,0,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Blob 2 */}
        <div
          className="blob2"
          style={{
            position: "absolute",
            top: "30%",
            right: "-15%",
            width: "60vw",
            height: "60vw",
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle, rgba(0,194,255,0.22) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(26,26,26,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Blob 3 */}
        <div
          className="blob3"
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "30%",
            width: "55vw",
            height: "55vw",
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle, rgba(10,255,173,0.18) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(180,140,80,0.15) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>
    </>
  );
}
