<template>
  <div class="alpha">
    <checking-header/>
    <checking-section1/>
    <checking-section2/>
    <checking-section3/>
    <footer-home/>
  </div>
</template>

<script>
import CheckingHeader from "@/components/Checking/CheckingHeader.vue";
import CheckingSection1 from "@/components/Checking/CheckingSection1.vue";
import CheckingSection2 from "@/components/Checking/CheckingSection2.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";
import CheckingSection3 from "@/components/Checking/CheckingSection3.vue";

export default {
  name: "CheckingView",
  components: {CheckingSection3, FooterHome, CheckingSection2, CheckingSection1, CheckingHeader}
}
</script>

<style scoped>

</style>