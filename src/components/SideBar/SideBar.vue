<template lang="pug">
  .side-bar-component
    .side-bar__inner
      template(v-if="optionalSearch")
        label.side-bar__input-label(for="favoriteWord")
          input(
            class="side-bar__input-search"
            v-model="favoriteWord"
            type="text"
            id="favoriteWord"
            @input="setSearchFavorite($event)"
            autofocus
          )

        .side-bar__optional-search
          .optional-search__field(
            v-for="name in $options.radioNames"
          )
            input.optional-search__input(
              type="radio"
              :id="name"
              :value="name"
              v-model="radio"
            )
            label.side-bar__label(:for="name") {{ name }}

      template(v-else)
        label.side-bar__input-label(for="search")
          input(
            class="side-bar__input-search"
            v-model="word"
            type="text"
            id="search"
            @input="setSearch($event)"
            autofocus
          )
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: {
    optionalSearch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      word: "",
      favoriteWord: "",
      radio: "none"
    }
  },
  watch: {
    radio() {
      this.changeRadio(this.radio);
    },
  },
  methods: {
    ...mapActions("dictionary", ["fetchWord", "changeRadio", "changeFavoriteWord"]),
    setSearch(event) {
      localStorage.setItem("word", event.target.value);
      this.fetchWord(event.target.value);
    },
    setSearchFavorite(event) {
      this.changeFavoriteWord(event.target.value);
    }
  },
  mounted() {
    this.word = localStorage.getItem("word");
    this.fetchWord(this.word);
  },
  radioNames: ["abbreviation", "verb", "noun", "none"]
}
</script>

<style scoped>
.side-bar__inner {
  display: flex;
  flex-direction: column;
  background-color: #eaeaea;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  border-radius: 5px;
  min-height: 200px;
  padding: 5px;
}

.side-bar__input-search {
  width: 100%;
}

.optional-search__field {
  display: flex;
  align-items: center;
}

.optional-search__input {
  margin-right: 5px;
}

.side-bar__label {
  margin-bottom: unset;
}
</style>
