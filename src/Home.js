import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    // Reset body layout when entering Home
    document.body.style.display = "block";
    document.body.style.justifyContent = "unset";
    document.body.style.alignItems = "unset";
    document.body.style.height = "auto";
    document.body.style.background = "#f3f3f3";

    // Cleanup (restore login styles when leaving Home)
    return () => {
      document.body.style.display = "flex";
      document.body.style.justifyContent = "center";
      document.body.style.alignItems = "center";
      document.body.style.height = "100vh";
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f3f3f3",
      }}
    >
      <h1 style={{ color: "#4f46e5", marginBottom: "10px" }}>
        Welcome to VISURA
      </h1>
      <p style={{ fontSize: "18px", color: "#333" }}>
        You’ve successfully logged in!
      </p>
    </div>
  );
}

export default Home;
