<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row mb-3">
        <h1 class="text-warning m-auto">MOON MINER</h1>
      </div>
      <div class="row">
        <div class="col-12 col-lg-3">
          <Inventory />
        </div>
        <div class="col-12 col-lg-6">
          <Moon />
        </div>
        <div class="col-12 col-lg-3">
          <div class="row h-75">
            <Depot />
          </div>
          <div class="row text-center">
            <Stats />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Moon from "../components/Moon";
import Inventory from "../components/Inventory";
import Depot from "../components/Depot";
import Stats from "../components/Stats";
export default {
  name: "Home",
  components: {
    Moon,
    Inventory,
    Depot,
    Stats
  }
};
</script>

<style>
.home {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: black;
}
</style>
