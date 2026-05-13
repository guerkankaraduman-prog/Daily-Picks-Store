import React, { useState } from "react";
export default function Particles() {

  const particles = Array.from(
    { length: 24 }
  );

  return (
    <div className="particles">

      {particles.map((_, index) => (

        <span
          key={index}
          className="particle"

          style={{
            left:
              `${Math.random() * 100}%`,

            animationDelay:
              `${Math.random() * 8}s`,

            animationDuration:
              `${8 + Math.random() * 12}s`,

            width:
              `${4 + Math.random() * 8}px`,

            height:
              `${4 + Math.random() * 8}px`,
          }}
        ></span>

      ))}

    </div>
  );
}
