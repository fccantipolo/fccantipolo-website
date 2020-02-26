<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <img class="seal" src="@/assets/images/fcc_secondary_large.png" alt="freeCodeCamp" />
          <p>
            <a href="https://web.facebook.com/groups/freeCodeCamp.Antipolo" target="_blank" rel="noopener noreferrer">freeCodeCamp Antipolo</a> is not affiliated with or endorsed by <a href="https://freecodecamp.org/?ref=freeCodeCamp.Antipolo" target="_blank" rel="noopener noreferrer">freeCodeCamp.org</a>.
            We are an independent local study group/community learning to code through <a href="https://freecodecamp.org/?ref=freeCodeCamp.Antipolo" target="_blank" rel="noopener noreferrer">freeCodeCamp.org</a>.
          </p>
          <p>
            All trademarks and other contents appearing in this site are property of it's respective owners.
          </p>
        </div>
        <div class="column is-1" />
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
        <div class="column is-1" />
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
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: [
    'links',
    'fccLinks'
    ]
}
</script>
