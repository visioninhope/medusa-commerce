import coreConfig from "tailwind/base.tailwind.config"

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...coreConfig,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
}
