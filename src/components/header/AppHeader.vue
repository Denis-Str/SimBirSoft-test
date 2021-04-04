<template lang="pug">
  b-navbar.app-header-component(type="dark", variant="dark")
    b-navbar-nav
      router-link.nav-link(to="/") Word Keeper
      router-link.nav-link(to="/starred-words") Starred Words
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .app-header-component {
    margin-bottom: 25px;
  }

  .navbar-nav {
    width: 100%;
    justify-content: space-between;
  }
</style>
