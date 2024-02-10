<template>
  <div class="alpha">
    <personal-loans-header/>
    <personal-loans-section1/>
    <personal-loans-section2/>
    <personal-loans-section3/>
    <checking-section3/>
    <footer-home/>
  </div>
</template>

<script>
import PersonalLoansHeader from "@/components/PersonalLoans/PersonalLoansHeader.vue";
import PersonalLoansSection1 from "@/components/PersonalLoans/PersonalLoansSection1.vue";
import PersonalLoansSection2 from "@/components/PersonalLoans/PersonalLoansSection2.vue";
import PersonalLoansSection3 from "@/components/PersonalLoans/PersonalLoansSection3.vue";
import CheckingSection3 from "@/components/Checking/CheckingSection3.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";

export default {
  name: "PersonalLoansView",
  components: {
    FooterHome,
    CheckingSection3,
    PersonalLoansSection3, PersonalLoansSection2, PersonalLoansSection1, PersonalLoansHeader}
}
</script>

<style scoped>

</style>