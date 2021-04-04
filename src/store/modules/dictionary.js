import axios from "axios";

const state = () => ({
  wordsList: [],
  favorites: [],
  currentRadio: "none",
  favoriteWord: ""
})

const actions = {
  async fetchWord({ commit }, word) {
    const apiKey = "33e2c1fe-1528-4227-8f1d-a1e8f708b425";
    const baseUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apiKey}`
    try {
      const { data } = await axios.get(baseUrl);
      commit("SET_WORDS", data);
    } catch (e) {
      console.log(e);
    }
  },
  addFavorites({ commit, state }, favoriteWord) {
    if (state.favorites.length === 0) {
      return commit("SET_FAVORITES", favoriteWord);
    } else {
      const condition = (word) => word.meta.id !== favoriteWord.meta.id;
      if (state.favorites.some(condition)) commit("SET_FAVORITES", favoriteWord);
    }
  },
  removeFromFavorites({ commit }, favoriteWord) {
    commit("DELETE_FAVORITES", favoriteWord);
  },
  changeRadio({ commit }, value) {
    commit("SET_RADIO", value);
  },
  changeFavoriteWord({ commit }, value) {
    commit("SET_FAVORITE_WORD", value);
  }
};
const mutations = {
  SET_WORDS(state, data) {
    state.wordsList = data;
  },
  SET_FAVORITES(state, favoriteWord) {
    state.favorites.push(favoriteWord);
  },
  DELETE_FAVORITES(state, favoriteWord) {
    state.favorites = state.favorites.filter(word => word.meta.id !== favoriteWord.meta.id);
  },
  SET_RADIO(state, value) {
    state.currentRadio = value;
  },
  SET_FAVORITE_WORD(state, word) {
    state.favoriteWord = word;
  },
};
const getters = {
  getWordByRadio: state => {
    if (state.currentRadio === "none") return state.favorites;
    return state.favorites.filter(word => word.fl === state.currentRadio);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
