<template>
  <div class="layout">
    <Navbar :links="links" />
    <slot />
    <Footer :links="links" :fccLinks="fccLinks" />
  </div>
</template>

<script>
import Navbar from '~/layouts/Navbar.vue'
import Footer from '~/layouts/Footer.vue'

export default {
  data () {
    return {
      links: [
        {
          id: 0,
          path: '/blog'
        },
        {
          id: 1,
          path: '/meetups'
        },
        {
          id: 2,
          path: '/resources'
        },
        {
          id: 3,
          path: '/about'
        }
      ],
      fccLinks: [
        {
          id: 0,
          path: '/news'
        },
        {
          id: 1,
          path: '/forum'
        },
        {
          id: 2,
          path: '/learn'
        }
      ]
    }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>
