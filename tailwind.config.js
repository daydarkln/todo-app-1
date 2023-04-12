/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/flowbite/**/*.jsx"],
  theme: {
    colors: {
      pink: '#FF6DAB'    
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
}