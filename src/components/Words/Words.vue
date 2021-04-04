<template lang="pug">
  section.words-component
    ul.word__list(v-if="isNotEmpty")
      word(
        v-for="(word, index) in wordsList"
        :key="index"
        :word="word"
      )
    p(v-else) No words in dictionary
</template>

<script>
import { mapState } from "vuex";
import Word from "@/components/Words/Word/Word";

export default {
  components: {
    Word
  },
  computed: {
    ...mapState("dictionary", {
      wordsList: state => state.wordsList
    }),
    isNotEmpty() {
      return Boolean(this.wordsList.length > 0 && this.wordsList !== "Word is required.")
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
