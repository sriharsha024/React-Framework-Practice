export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths according to your project structure
  ],
  theme: {
    extend: { 
        colors:{
            'custom-blue': '#1E90FF',
            'custom-green': '#00FF00',
            'custom-red': '#FFFFFF',
        }
    },
  },
  plugins: [],
};