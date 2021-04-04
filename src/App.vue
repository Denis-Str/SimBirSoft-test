<template lang="pug">
  div#app
    app-header
    .container
      router-view
</template>

<script>
import AppHeader from "@/components/header/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader
  }
}
</script>

<style lang="scss" src="./style/layout.scss"></style>
