<template >
  <dashboard-layout>
    <home-wrapper-card/>
<!--    <IntroMessageModal @close="hideDialog" v-if="dialogIsVisible"/>-->
    <div class="lawrence">
      <actions-card/>
      <br/>
      <br/>
      <setup-card/>
      <transactions-card/>
      <referral-card/>
      <review-card/>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import HomeWrapperCard from "@/components/DashBoard/HomeWrapperCard.vue";
import ActionsCard from "@/components/DashBoard/ActionsCard.vue";
import SetupCard from "@/components/DashBoard/SetupCard.vue";
import TransactionsCard from "@/components/DashBoard/TransactionsCard.vue";
import ReferralCard from "@/components/DashBoard/ReferralCard.vue";
import ReviewCard from "@/components/DashBoard/ReviewCard.vue";


export default {
  name: "HomeView",
  components: {
    ReviewCard,
    ReferralCard,
    TransactionsCard,
    SetupCard,
    ActionsCard,
    HomeWrapperCard,
    DashboardLayout
  },
  data() {
    return {
      dialogIsVisible: false,
    };
  },

  methods: {
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },

  },
}
</script>

<style scoped>

.lawrence{
  margin-left: 25%;
  margin-right: 25%;
}
@media screen and (max-width: 1286px) {
  .lawrence{
    margin-left: 20%;
    margin-right: 20%;
  }
}
@media screen and (max-width: 990px) {
  .lawrence{
    margin-left: 20%;
    margin-right: 20%;
  }
}
@media screen and (max-width: 767px){
  .lawrence{
    margin-left: 2%;
    margin-right: 2%;
  }
}

</style>