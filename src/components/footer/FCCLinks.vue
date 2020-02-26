<template>
  <div class="column is-2">
    <h1 class="title is-5">
      freeCodeCamp
    </h1>
    <ul>
      <li v-for="fccLink in fccLinks" :key="fccLink.id">
        <a :href="`https://www.freecodecamp.org${fccLink.path}?ref=freeCodeCamp.Antipolo`" target="_blank" rel="noopener noreferrer">
          {{ fccLink.path }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['fccLinks']
}
</script>
