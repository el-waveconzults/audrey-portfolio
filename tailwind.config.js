module.exports = {
    content: ["./src/**/*.{.html,js}"],
  theme: {
      
    extend: {
        maxWidth: {
        'custom': '1440px',
        },
        screens: {
          'xs': '320px', // Custom breakpoint for 320px and above
        },
      },
    },
    plugins: [],
  };