/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./playground/components/**/*.{js,vue,ts}",
    "./playground/layouts/**/*.vue",
    "./playground/pages/**/*.vue",
    "./playground/plugins/**/*.{js,ts}",
    "./playground/nuxt.config.{js,ts}",
    "./playground/app.vue",
    "./src/**/*.{js,vue,ts}",
    "./node_modules/@deegital/vue-trustup-io-toasteo/dist/index.cjs",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
