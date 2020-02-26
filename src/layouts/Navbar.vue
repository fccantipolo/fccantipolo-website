<template>
  <nav class="navbar is-primary is-transparent is-fixed-top" role="navigation" aria-label="navigation">
    <div class="container">
      <div class="navbar-brand">
        <g-link to="/" class="navbar-item">
          <img class="logo" src="@/assets/images/fcc_primary_large.png" alt="freeCodeCamp" />
          <h1 class="logo-suffix">
            | Antipolo
          </h1>
        </g-link>
        <a
          class="navbar-burger"
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
          @click.prevent="toggleMenu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          <g-link v-for="link in links" :key="link.id" :to="link.path" class="navbar-item">
            {{ link.path }}
          </g-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['links'],
  methods: {
    toggleMenu () {
      // Get the navbar-burger and navbar-menu elements
      let $el = document.querySelector('.navbar-burger')
      let $menu = document.querySelector(`#${$el.dataset.target}`)

      // Toggle classes of both elements
      $el.classList.toggle('is-active')
      $menu.classList.toggle('is-active')
    }
  }
}
</script>
