<template>
  <div class="header">
    <mortgages-header/>
    <mortgages-section1/>
    <mortgages-section2/>
    <mortgages-section3/>
    <checking-section3/>
    <footer-home/>
  </div>
</template>

<script>
import MortgagesHeader from "@/components/Mortgages/MortgagesHeader.vue";
import MortgagesSection1 from "@/components/Mortgages/MortgagesSection1.vue";
import MortgagesSection2 from "@/components/Mortgages/MortgagesSection2.vue";
import MortgagesSection3 from "@/components/Mortgages/MortgagesSection3.vue";
import CheckingSection3 from "@/components/Checking/CheckingSection3.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";

export default {
  name: "MortgagesView",
  components: {FooterHome, CheckingSection3, MortgagesSection3, MortgagesSection2, MortgagesSection1, MortgagesHeader}
}
</script>

<style scoped>

</style>