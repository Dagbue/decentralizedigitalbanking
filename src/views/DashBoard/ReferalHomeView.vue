<template>
  <dashboard-layout>
    <div class="referral-header-wrapper">
      <div data-animation="over-right" data-collapse="small" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
        <NavBar/>
      </div>
    </div>
    <div class="margin-top margin-medium">
      <ReferralContentCard/>
    </div>
  </dashboard-layout>
</template>

<script>
import NavBar from "@/components/DashBoard/NavBar.vue";
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import ReferralContentCard from "@/components/DashBoard/ReferralContentCard.vue";

export default {
  name: "ReferalHomeView",
  components: {ReferralContentCard, DashboardLayout, NavBar}
}
</script>

<style scoped>

</style>