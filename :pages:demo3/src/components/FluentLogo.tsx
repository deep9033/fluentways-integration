
import React from "react";

const LOGO_SRC = "/uploaded/logo-1.png";

/**
 * Brand logo: displays the uploaded FluentWays logo image, always centered and perfectly sized.
 */
const FluentLogo: React.FC<{ size?: number }> = ({ size = 34 }) => (
  <div
    style={{
      width: size,
      height: size,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}
    aria-label="FluentWays Logo"
  >
    <img
      src={LOGO_SRC}
      alt="FluentWays Logo"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block",
      }}
      draggable={false}
    />
  </div>
);

export default FluentLogo;
