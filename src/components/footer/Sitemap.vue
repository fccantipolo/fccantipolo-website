<template>
  <div class="column is-2">
    <h1 class="title is-5">
      Sitemap
    </h1>
    <ul>
      <li v-for="link in links" :key="link.id">
        <g-link :to="link.path">
          {{ link.path }}
        </g-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['links']
}
</script>
