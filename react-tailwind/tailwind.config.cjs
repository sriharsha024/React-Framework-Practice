module.exports = {
    darkMode: 'class',
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'custom-blue': '#1E90FF',
          'custom-green': '#00FF00',
          'custom-red': '#FF0000',
        },
        borderRadius: {
          'xl': '1.25rem',
        },
        boxShadow: {
          'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
          'xl': '0 15px 30px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: [],
  };
  