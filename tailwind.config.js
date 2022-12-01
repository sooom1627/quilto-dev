module.exports = {
  content: [
    "./sections/*.liquid",
    "./layout/*.liquid",
+   "./templates/*.{liquid, json}",
+   "./snippets/*.liquid",
+   "./assets/*.{liquid, js}",
  ],
  prefix:"tw-",
  theme: {
    extend: {},
  },
  plugins: [],
}
