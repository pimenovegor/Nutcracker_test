<template>
  <main class="main">
    <div class="options">
      <a @click="this.$router.push('/')" class="link"
        ><img src="@/assets/svg/Pointer.svg" alt="path" /><span class="text"
          >Назад к списку</span
        ></a
      >
    </div>
    <MovieCard v-if="!loading && movie.id" :movie="movie" />
    <img
      v-if="loading"
      src="@/assets/svg/Loader.svg"
      alt="preloader"
      class="preloader"
    />
    <span v-if="!loading && !movie.id" class="empty"
      >К сожалению, по вашему запросу ничего не найдено...</span
    >
  </main>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    MovieCard,
  },
  data: () => ({
    loading: true,
  }),
  beforeRouteEnter(to, from, next) {
    from.name === "List" ? (to.params.fetch = false) : (to.params.fetch = true);
    next();
  },
  created() {
    this.getData();
  },
  computed: {
    ...mapState({
      movie: (state) => state.movie,
    }),
  },
  methods: {
    ...mapActions(["getMovie", "findMovieById"]),
    async getData() {
      let { id, fetch } = this.$route.params;
      id = Number(id);
      if (fetch) {
        await this.getMovie({ id });
      } else {
        this.findMovieById({ id });
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 10vw 0 10vw;
  .options {
    margin-top: 40px;
    text-align: start;
    padding-bottom: 22px;
    margin-bottom: 40px;
    border-bottom: 1px solid #c4c4c4;

    .link {
      display: flex;
      align-items: center;
      cursor: pointer;
      color: rgba(255, 82, 82, 0.98);

      img {
        display: block;
        width: 12px;
        height: 20px;
      }

      .text {
        margin-left: 20px;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        text-decoration-line: underline;
      }
    }
  }

  .empty {
    margin-top: 48px;
    font-weight: 500;
    font-size: 32px;
    line-height: 32px;
    color: #ffffff;
  }
}
</style>
