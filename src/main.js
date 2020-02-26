// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// Import styling
import '~/assets/styles.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add OGP tags
  head.meta.push(
    {
      property: 'og:site_name',
      content: 'freeCodeCamp Antipolo'
    },
    {
      property: 'og:title',
      content: 'freeCodeCamp Antipolo'
    },
    {
      property: 'og:description',
      content: 'A local study group in Antipolo City learning to code through freeCodeCamp.org'
    },
    {
      property: 'og:image',
      content: 'https://fccantipolo.netlify.com/banner.png'
    },
    {
      property: 'og:url',
      content: 'https://fccantipolo.netlify.com'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  )

  // Add has-navbar-fixed-top class to body
  head.bodyAttrs = { class: 'has-navbar-fixed-top' }
}
