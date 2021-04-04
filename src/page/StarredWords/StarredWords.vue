<template lang="pug">
  section.favorites-component
    h2.favorites__title Starred Words
    .favorites__content
      side-bar(:optionalSearch="true")
      ul.word__list(v-if="favoritesLength > 0")
        word(
          v-for="(word, index) in sortByFavoriteWord"
          :key="index"
          :word="word"
        )
      p(v-else) No words in favorites dictionary
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SideBar from "@/components/SideBar/SideBar";
import Word from "@/components/Words/Word/Word";

export default {
  components: {
    Word,
    SideBar
  },
  computed: {
    ...mapState("dictionary", {
      favoriteWord: state => state.favoriteWord
    }),
    ...mapGetters("dictionary", ["getWordByRadio"]),
    favoritesLength() {
      return this.sortByFavoriteWord.length;
    },
    sortByFavoriteWord() {
      if (this.favoriteWord === "") return this.getWordByRadio;
      return this.getWordByRadio.filter(word => word.hwi.hw.includes(this.favoriteWord));
    }
  },
}
</script>

<style lang="scss" scoped>
.favorites__title {
  margin-bottom: 25px;
}

.favorites__content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 50px;
}
</style>
