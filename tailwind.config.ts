import { nextui } from "@nextui-org/react";
import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

/*
Note : With the new TailwindCSS V4, this doesn't really do anything.
This is here because, without it, the auto-complete feature on IDE doesn't recognize Tailwind.
But if you want to make any changes, do it in the `globals.css` file inside @theme.
And add it here just so it recognizes the new name.
 */

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx,css,scss}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./styles/**/*.{css,scss}",
        "./app/globals.css",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                // Light mode
                strawberry: {
                    50: "#FFF0F5",
                    100: "#FFE0EB",
                    200: "#FFCCE0",
                    300: "#FFADC9",
                    400: "#FF8EB2",
                    500: "#FF6F9C",
                    600: "#E65C86",
                    700: "#CC4A71",
                    800: "#B3375C",
                    900: "#992447",
                },
                cream: {
                    50: "#FFFDF5",
                    100: "#FFF9E6",
                    200: "#FFF3CC",
                    300: "#FFEDB3",
                    400: "#FFE799",
                    500: "#FFE180",
                    600: "#E6CB73",
                    700: "#CCB566",
                    800: "#B39F59",
                    900: "#99894D",
                },
                mint: {
                    50: "#F0FFF5",
                    100: "#E0FFEB",
                    200: "#CCFFE0",
                    300: "#ADFFD1",
                    400: "#8EFFC2",
                    500: "#6FFCB4",
                    600: "#5CE6A0",
                    700: "#4ACC8C",
                    800: "#37B378",
                    900: "#249964",
                },
                // Extending shadcn colors
                    border: "hsl(var(--border))",
                    input: "hsl(var(--input))",
                    ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-quicksand)", "sans-serif"],
                display: ["var(--font-mochiy)", "cursive"],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [nextui(), tailwindcssAnimate],
};

export default config;