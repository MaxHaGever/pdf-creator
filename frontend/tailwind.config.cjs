/* eslint-env node */
module.exports = {
  // 1) Tell Tailwind which files to scan for class names:
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  // 2) (Optional) Extend the default theme:
  theme: {
    extend: {},
  },
  // 3) Any official or 3rd‑party plugins:
  plugins: [],
}
