import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    moviesList: [],
    movie: {},
    sortBy: "",
  },
  mutations: {
    setMoviesList(state, list) {
      state.moviesList = list;
    },
    setMovie(state, movie) {
      state.movie = movie;
    },
    setSortBy(state, sortBy) {
      state.sortBy = sortBy;
    },
  },
  getters: {
    sortedMovies(state, getters) {
      if (state.sortBy === "name") return getters.nameSorted;
      if (state.sortBy === "year") return getters.yearSorted;
      return state.moviesList;
    },
    nameSorted(state) {
      return [...state.moviesList].sort(
        (a, b) => a.title[0].charCodeAt(0) - b.title[0].charCodeAt(0)
      );
    },
    yearSorted(state) {
      return [...state.moviesList].sort((a, b) => a.year - b.year);
    },
  },
  actions: {
    async getMoviesList(context) {
      try {
        const res = await axios.get(
          "https://floating-sierra-20135.herokuapp.com/api/movies",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res);
        context.commit("setMoviesList", res.data?.data ?? []);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async getMovie(context, { id }) {
      try {
        const res = await axios.get(
          `https://floating-sierra-20135.herokuapp.com/api/movie/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        context.commit("setMovie", res.data?.data ?? { empty: true });
      } catch (error) {
        console.log(error);
      }
    },
    findMovieById(context, { id }) {
      const movie = context.state.moviesList.find((el) => el.id === id);
      context.commit("setMovie", movie);
    },
  },
});
