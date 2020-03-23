<template>
  <div class="tool">
    <div v-for="upGrade in upGrades" :key="upGrade.id" class="upGrades">
      <div
        v-show="upGrade.price < $store.state.availCheese"
        class="border p-2 mb-2 bg-black text-lght img-fluid"
      >
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <span class="ml-2 text-warning">
              <img
                :src="upGrade.img"
                height="50"
                width="50"
                class="img-fluid m-auto img-pointer"
                @click="addUpGrade(upGrade)"
              />
              {{upGrade.name}} - Cost: ${{upGrade.price}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tool",
  data() {
    return {
      auto: null
    };
  },
  props: {
    upGrade: { type: Object }
  },
  computed: {
    upGrades() {
      return this.$store.state.upGrades;
    }
  },
  methods: {
    addUpGrade(upGrade) {
      this.$store.dispatch("addUpGrade", upGrade);
      if (upGrade.auto == true) {
        clearInterval(this.auto);
      }
      this.auto = setInterval(() => {
        this.$store.dispatch("autoCheese", upGrade);
      }, 3000);
    }
  }
};
</script>

<style scoped>
</style>