import React from "react";
import { useEffect } from "react";
import "./componentCSS.css";

export default function Devfolio() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="apply-button devfolio-button"
      data-hackathon-slug="innerve-eight"
      data-button-theme="dark"
      style={{ height: "50px", width: "300px", marginBottom: "20px" }}
    ></div>
  );
}
