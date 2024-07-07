/** @type {import('tailwindcss').Config} */
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      backgroundImage: {
        "bg": "linear-gradient(135deg, #FFC30B, #FF9F00, #FFF7E1)",
               "Hero" : "url('../src/assets/svg.png')",
               "btn" : "linear-gradient(135deg, #FFD700, #FFC300, #FFB300)",
              "About_Parallax" : "url('../src/assets/Parallax.png')",
              "Info3" : "url('../src/assets/info3.png')",
              "bg-1" : "url('../src/assets/bg-1.png')",
              "bg-2" : "url('../src/assets/honey-ai2.png')",
              "bg-contact" : "url('../src/assets/parallax2.png')"
        },
        
 
    },
  },
  plugins: [addVariablesForColors],
  
};


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

  