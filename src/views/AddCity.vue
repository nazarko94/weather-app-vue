<template>
  <div class="grid-wrapper">
    <div v-if="cities.length === 0" class="no-cities">
      <p >No cities added, add a new one?</p>
      <button @click="addCity">Add City</button>
    </div>
    <div v-else-if="cities.length > 5">
      <p>City list is Full</p>
      <button>Back to city list</button>
    </div>
    <div class="grid">
      <div class="city-link" v-for="(city, index) in cities" v-bind:key="index">
        <City v-bind:city="city" v-bind:edit="edit" />
      </div>
    </div>
  </div>
</template>

<script>
import City from "../components/City";

export default {
  name: "AddCity",
  props: ["cities", "edit"],
  created() {},
  methods: {
    addCity() {
      this.$emit("add-city");
    },
  },
  components: {
    City,
  },
};
</script>

<style lang="scss" scoped>
.grid-wrapper {
  background-color: #35495e;
  .no-cities {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  button {
    margin-top: 16px;
    padding: 8px 24px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: 500ms ease all;
    &:hover {
      outline: none;
      transform: scale(0.98);
    }
    &:focus {
      outline: none;
    }
  }
  .grid {
    display: grid;
    padding-top: 81px;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
    grid-auto-rows: 250px;
    @media (min-width: 400px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
