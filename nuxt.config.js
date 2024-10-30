export default {
  server: {
    port: process.env.port || 3000 // default: 3000
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'The C.A.S.E Engineering Group',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/images/icon.jpg' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/app.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Tailwind
  tailwindcss: {
    config: {
      theme: {
        colors: {
          'red'   : '#FF0000',
          'black' : '#000000',
          'white': '#ffffff',
          'fern': '#5DBB63',
          'light-gray': '#EEEEEE',
          'gray': '#cccccc',
          'green' : '#008000',
          'darkgreen' : '#006400',
          'blue': '#0000ff',
          'lighblue': '#F4FBFF',
          'darkblue': '#003585',
        },
        fontFamily: {
          sans: ['InterVariable'],
          body: ['Arial'],
          serif: ['Times New Roman'],
        },
        extend: {
          lineHeight: {
            'inherit': 'inherit',
            '11': '2.75rem',
            '12': '3rem',
            '13': '3.25rem',
            '14': '3.5rem',
            '15': '3.75rem',
          },
          spacing: {
            '101': '31rem',
            '108': '38rem',
          },
        },
      },
      variants: {
        extend: {
          display: ['group-hover'],
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
