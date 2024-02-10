<template>
  <div>
    <dashboard-layout>
      <dash-board-tests/>
    </dashboard-layout>
  </div>
</template>

<script>
import DashBoardTests from "../../../components/dashboard/dashboardTestHolder/DashBoardTests.vue";
import DashboardLayout from "@/layout/DashboardLayout.vue";
export default {
  name: "Tests",
  components: {DashboardLayout, DashBoardTests}
}
</script>

<style scoped>

</style>