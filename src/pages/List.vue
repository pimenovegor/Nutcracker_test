<template>
  <main class="main">
    <h2 class="name">Фильмы</h2>
    <div class="options">
      <input
        :checked="sortBy === 'name'"
        @input="setSortBy($event.target.checked ? 'name' : '')"
        type="checkbox"
        name="sort-name"
        id="sort-name"
        class="checkbox"
      />
      <label for="sort-name" class="label">Отсортировать по названию</label>
      <input
        :checked="sortBy === 'year'"
        @input="setSortBy($event.target.checked ? 'year' : '')"
        type="checkbox"
        name="sort-year"
        id="sort-year"
        class="checkbox"
      />
      <label for="sort-year" class="label">Отсортировать по году</label>
    </div>
    <ul v-if="!loading" class="list">
      <MovieCard
        v-for="movie in sortedMovies"
        :key="movie.id"
        :movie="movie"
        @nameClick="this.$router.push(`/${movie.id}`)"
        class="movie-card"
      />
    </ul>
    <img
      v-else
      src="@/assets/svg/Loader.svg"
      alt="preloader"
      class="preloader"
    />
  </main>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: {
    MovieCard,
  },
  data: () => ({
    loading: true,
  }),
  created() {
    this.getData();
  },
  computed: {
    ...mapState({
      sortBy: (state) => state.sortBy,
    }),
    ...mapGetters(["sortedMovies"]),
  },
  methods: {
    ...mapActions(["getMoviesList"]),
    ...mapMutations(["setSortBy"]),
    async getData() {
      await this.getMoviesList();
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 10vw 0 10vw;

  .name {
    cursor: default;
    margin-top: 40px;
    font-weight: 500;
    font-size: 32px;
    color: #ffffff;
    text-align: start;
    margin-bottom: 18px;
  }

  .options {
    text-align: start;
    padding-bottom: 18px;
    margin-bottom: 40px;
    border-bottom: 1px solid #c4c4c4;

    .checkbox {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    .checkbox + label {
      display: inline-flex;
      align-items: center;
      user-select: none;
      &::before {
        content: "";
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-right: 10px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #c4c4c4;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
        cursor: pointer;
      }
    }
    .checkbox:checked + label::before {
      border-color: rgba(255, 82, 82, 0.98);
      background-color: rgba(255, 82, 82, 0.98);
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
      background-size: 11px;
    }

    .label {
      cursor: pointer;
      margin-right: 34px;
      font-weight: 400;
      font-size: 16px;
      color: #c4c4c4;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .movie-card:hover {
    margin-top: -8px;
    margin-bottom: 32px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
  }
}
</style>
