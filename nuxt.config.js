export default {
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
          'black' : '#000000',
          'white': '#ffffff',
          'light-gray': '#f5f5f5',
          'gray': '#cccccc',
          'gray-2': '#B1B1B1',
          'gray-3': '#aaaaaa',
          'gray-4': '#DBDBDB',
          'gray-5': '#ECECEC',
          'mine-shaft': '#2a2a2a',
          'tundora': '#434343',
          'scorpion': '#595959',
          'red': '#f20000',
          'fern': '#5DBB63',
          'blue': '#0000ff',
        },
        fontFamily: {
          sans: ['InterVariable'],
          body: ['Arial'],
          serif: ['Times New Roman'],
        },
        extend: {
          lineHeight: {
            'inherit': 'inherit',
          },
        }
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
