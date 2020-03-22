<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row h-50 mb-3">
        <h1 class="text-warning m-auto">MOON MINER</h1>
      </div>
      <div class="row">
        <div class="col-3">
          <Inventory />
        </div>
        <div class="col-6">
          <Moon />
        </div>
        <div class="col-3">
          <div class="row h-50">
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
  background-color: black;
}
</style>
