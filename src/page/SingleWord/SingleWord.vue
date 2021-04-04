<template lang="pug">
  .single-word-component
    .single-word__header
      //почему то ошибка в консоли на hw :(
      h2.single-word__title Singe info - {{ info.meta["hw"] }}
      router-link(to="/starred-words") Back
    .single-word__meta(v-for="text in info.meta")
      span {{ text }}
    .single-word__shortdef(v-for="text in info.shortdef")
      p {{ text }}
</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
  data() {
    return {
      info: {}
    }
  },
  computed: {
    ...mapState("dictionary", {
      singleWord: state => state.singleWord
    })
  },
  methods: {
    ...mapActions("dictionary", ["addSingleWord"]),
  },
  mounted() {
    const status = Boolean(this.$route.params.word);

    if (status) {
      this.addSingleWord(this.$route.params.word)
      const singleData = this.$route.params.word;
      localStorage.setItem("single", JSON.stringify(singleData));
      this.info = this.singleWord;
    } else {
      const singleData = localStorage.getItem("single")
      this.info = JSON.parse(singleData);
    }
  }
}
</script>

<style lang="scss" scoped>
.single-word__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
