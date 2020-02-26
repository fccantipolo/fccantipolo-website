<template>
  <footer class="footer">
    <div class="container">
      <div class="columns is-centered is-multiline">

        <Note />

        <div class="column is-1" /> <!-- Offset -->
        
        <Sitemap :links="links" />

        <div class="column is-1" /> <!-- Offset -->

        <FCCLinks :fccLinks="fccLinks" />

        <div class="column is-half has-text-centered">
          <p>
            Made with ♥ by
            <a href="https://github.com/fccantipolo/fccantipolo-website/graphs/contributors" target="_blank" rel="noopener noreferrer">@fccantipolo</a>
          </p>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
import Note from '~/components/footer/Note.vue'
import Sitemap from '~/components/footer/Sitemap.vue'
import FCCLinks from '~/components/footer/FCCLinks.vue'

export default {
  components: {
    Note,
    Sitemap,
    FCCLinks
  },
  props: [
    'links',
    'fccLinks'
  ]
}
</script>
