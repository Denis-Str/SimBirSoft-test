<template lang="pug">
  li.word-component(v-if="typeProps === 'string'")
    .word__name {{ word }}
  li.word-component(v-else)
    .word__inner
      router-link(:to="{name: 'SingleWord', params: {id: word.hwi.hw , word}}")
        .word__name {{ word.hwi.hw }}
      .word__fl {{ word.fl }}
      .word__shortdef {{ word.shortdef[0] }}
    b-icon.favorites(
      @click.self="addToFavorites(word)"
      icon="star"
      :class="{'favorites--active': isFavorite}"
    )
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: {
    word: [Object, String]
  },
  data() {
    return {
      typeProps: "string",
      isFavorite: false
    }
  },
  watch: {
    word() {
      this.typeProps = typeof this.word;
    }
  },
  methods: {
    ...mapActions("dictionary", ["addFavorites", "removeFromFavorites"]),
    addToFavorites(word) {
      if (this.isFavorite) {
        this.isFavorite = false;
        this.removeFromFavorites({
          ...word,
          favorite: false
        })
      } else {
        this.isFavorite = true;
        this.addFavorites({
          ...word,
          favorite: true
        });
      }
    }
  },
  mounted() {
    if (this.word.favorite) this.isFavorite = this.word.favorite;
    this.typeProps = typeof this.word;
  }
}
</script>

<style lang="scss" scoped>
.word-component {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  padding: 10px;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: unset;
  }
}

.word__inner {
  flex: 1;
  display: flex;
}

.word__name {
  font-weight: 600;
  margin-right: 10px;
  white-space: nowrap;
}

.word__fl {
  font-style: italic;
  margin-right: 10px;
}

.favorites {
  cursor: pointer;

  &:hover {
    color: dodgerblue;
  }

  &--active {
    color: dodgerblue;
  }
}
</style>
