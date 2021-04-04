<template lang="pug">
  .wrap
    section.main__content
      side-bar
      words
</template>

<script>
import SideBar from "@/components/SideBar/SideBar";
import Words from "@/components/Words/Words";

export default {
  name: "index",
  components: {
    SideBar,
    Words
  }
}
</script>

<style scoped>
.main__content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 50px;
}
</style>
