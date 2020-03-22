<template>
  <div class="inventory">
    <div class="row">
      <div>
        <h3 class="text-warning text-center mb-3 ml-5">INVENTORY</h3>
        <div v-for="upGrade in upGrades" :key="upGrade.name" class="upGrades">
          <div class="border bg-black mb-3 ml-5 p-2">
            <img :src="upGrade.img" height="50" width="50" class="img-fluid m-auto" />
            <span class="badge badge-success text-dark ml-3">Quantity: {{upGrade.quantity}}</span>
            <span class="badge badge-info text-dark ml-3">Modifier: {{upGrade.modifier}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Inventory",
  prop: ["upGrade"],
  computed: {
    upGrades() {
      return this.$store.state.upGrades;
    }
  }
};
</script>
<style scoped>
.bg-black {
  background-color: black;
}
</style>