<template>
  <nav class="navbar is-primary is-transparent is-fixed-top" role="navigation" aria-label="navigation">
    <div class="container">
      <div class="navbar-brand">
        <g-link to="/" class="navbar-item">
          <g-image class="logo" src="~/assets/images/fcc_primary_large.png" alt="freeCodeCamp" />
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
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          <g-link to="/blog" class="navbar-item">
            /blog
          </g-link>
          <g-link to="/meetups" class="navbar-item">
            /meetups
          </g-link>
          <g-link to="/resources" class="navbar-item">
            /resources
          </g-link>
          <g-link to="/about" class="navbar-item">
            /about
          </g-link>
        </div>
      </div>
    </div>
  </nav>
</template>