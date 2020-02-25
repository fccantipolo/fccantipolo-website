<template>
  <div class="layout">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/layouts/Navbar.vue'
import Footer from '~/layouts/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
