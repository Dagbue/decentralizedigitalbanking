<template>
  <div class="alpha">
    <vehicle-loans-header/>
    <vehicle-loans-section1/>
    <vehicle-loans-section2/>
    <vehicle-loans-section3/>
    <checking-section3/>
    <footer-home/>
  </div>
</template>

<script>
import VehicleLoansHeader from "@/components/VehicleLoans/VehicleLoansHeader.vue";
import VehicleLoansSection1 from "@/components/VehicleLoans/VehicleLoansSection1.vue";
import VehicleLoansSection2 from "@/components/VehicleLoans/VehicleLoansSection2.vue";
import VehicleLoansSection3 from "@/components/VehicleLoans/VehicleLoansSection3.vue";
import CheckingSection3 from "@/components/Checking/CheckingSection3.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";

export default {
  name: "VehicleLoansView",
  components: {
    FooterHome,
    CheckingSection3,
    VehicleLoansSection3,
    VehicleLoansSection2,
    VehicleLoansSection1,
    VehicleLoansHeader
  }
}
</script>

<style scoped>

</style>