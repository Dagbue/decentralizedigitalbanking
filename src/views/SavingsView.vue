<template>
  <div class="alpha">
    <savings-header/>
    <savings-section1/>
    <savings-section2/>
    <savings-section3/>
    <checking-section3/>
    <footer-home/>
  </div>
</template>

<script>
import SavingsHeader from "@/components/Savings/SavingsHeader.vue";
import SavingsSection1 from "@/components/Savings/SavingsSection1.vue";
import SavingsSection2 from "@/components/Savings/SavingsSection2.vue";
import SavingsSection3 from "@/components/Savings/SavingsSection3.vue";
import CheckingSection3 from "@/components/Checking/CheckingSection3.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";

export default {
  name: "SavingsView",
  components: {FooterHome, CheckingSection3, SavingsSection3, SavingsSection2, SavingsSection1, SavingsHeader}
}
</script>

<style scoped>

</style>