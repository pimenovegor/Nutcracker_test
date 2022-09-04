<template>
  <li class="card">
    <section class="poster">
      <img :src="movie.poster" alt="poster" />
    </section>
    <section class="info">
      <h3 @click="$emit('nameClick')" class="name">{{ movie.title }}</h3>
      <div v-if="movie.collapse?.duration" class="time">
        <span>{{ movie.collapse.duration[0] }}</span>
        <img src="@/assets/svg/Vector.svg" alt="logo" />
      </div>
      <div class="text">
        <span>{{ movie.year }}, </span>
        <MovieCardInfo :arr="movie.genres" />
      </div>
      <div class="text">
        <span>Режиссёр: </span>
        <MovieCardInfo :arr="movie.directors" />
      </div>
      <div class="text">
        <span>Актеры: </span>
        <MovieCardInfo :arr="movie.actors" class="actors" />
      </div>
      <span class="description">
        {{ movie.description }}
      </span>
    </section>
  </li>
</template>

<script>
import MovieCardInfo from "@/components/MovieCardInfo.vue";
export default {
  components: {
    MovieCardInfo,
  },
  props: {
    movie: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  transition: 0.3s;
  transform: scale(1);
  position: relative;
  display: flex;
  list-style: none;
  background: #4d4747;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 24px;

  .poster {
    flex-shrink: 0;
    width: 168px;
    display: flex;
    background: #c4c4c4;

    img {
      display: block;
      margin: auto;
      width: 112px;
      height: 168px;
    }
  }

  .info {
    padding: 32px 32px 32px 24px;
    .name {
      cursor: pointer;
      margin-bottom: 12px;
      font-weight: 700;
      font-size: 36px;
      color: #ffffff;
    }

    .time {
      position: absolute;
      display: flex;
      align-items: center;
      padding: 0 26px 0 25px;
      height: 30px;
      right: 0;
      top: 32px;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      background:  linear-gradient(105deg, transparent 17px, #C4C4C4 0)  top left;

      img {
        margin-left: 12px;
        display: inline-block;
        width: 16px;
        height: 18px;
      }
    }

    .text {
      display: flex;
      font-weight: 700;
      font-size: 12px;
      line-height: 12px;
      text-transform: uppercase;
      color: #988f8f;
      margin-bottom: 8px;
      &last-child {
        margin-bottom: 0;
      }

      .actors {
        margin-left: 8px;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        text-indent: 0;
        text-transform: capitalize;
        color: #e5e5e5;
        &::first-line {
          margin-top: 0;
          line-height: 0;
        }
      }
    }

    .description {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
    }
  }
}
</style>
