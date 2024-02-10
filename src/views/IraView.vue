<template>
  <div class="alpha">
    <header-i-r-a/>
    <section-i-r-a/>
    <section2-i-r-a/>
    <section3-i-r-a/>
    <checking-section3/>
    <footer-home/>
  </div>
</template>

<script>
import HeaderIRA from "@/components/IRA/HeaderIRA.vue";
import SectionIRA from "@/components/IRA/SectionIRA.vue";
import Section2IRA from "@/components/IRA/Section2IRA.vue";
import Section3IRA from "@/components/IRA/Section3IRA.vue";
import CheckingSection3 from "@/components/Checking/CheckingSection3.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";

export default {
  name: "IraView",
  components: {FooterHome, CheckingSection3, Section3IRA, Section2IRA, SectionIRA, HeaderIRA}
}
</script>

<style scoped>

</style>