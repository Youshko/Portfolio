/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".*.{html,js}"],
  theme: {
    screens: {
      
      'sm': '601px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      '12': '0.75rem',
      '16': '1rem',
      '21': '1.313rem',
      '28': '1.75rem',
      '38': '2.375rem',
      '50': '3.125rem',
      '60': '3.75rem', 
      '67': '4.188rem',
      '89': '5.563rem',
      '118': '7.375rem',
      '157': '9.813rem',
      '208': '13rem',
    },
    colors: {
      '100': '#fafafa',
      '200': '#e7e7e7',
      '300': '#cecece',
      '400': '#7d7d7d',
      '700': '#282828',
      '800': '#1f1f1f',
      'accent': '#146cef',
      'loompy': '#5c9f7b',
    },

    extend: {
      fontFamily:{
        poppins: "'poppins', 'sans'",
        fontFamily: {
          nohemiregular: "'nohemiregular', 'sans-serif'",
          fontFamily: {
            nohemilight: "nohemilight, 'sans-serif'",
           
            borderWidth: {
              '1': '1px',
            },
            
            spacing: {
              '22': '22px',
            },
            height: {
              '1px': '0.063rem',
            },
        },
      },
    },
  },

  plugins: [],
}
}
