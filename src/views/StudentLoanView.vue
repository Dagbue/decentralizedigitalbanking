<template>
  <div class="alpha">
    <student-loan-header/>
    <student-loan-section1/>
    <student-loan-section2/>
    <student-loan-section3/>
    <checking-section3/>
    <footer-home/>
  </div>
</template>

<script>
import StudentLoanHeader from "@/components/StudentLoan/StudentLoanHeader.vue";
import StudentLoanSection1 from "@/components/StudentLoan/StudentLoanSection1.vue";
import StudentLoanSection2 from "@/components/StudentLoan/StudentLoanSection2.vue";
import StudentLoanSection3 from "@/components/StudentLoan/StudentLoanSection3.vue";
import CheckingSection3 from "@/components/Checking/CheckingSection3.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";

export default {
  name: "StudentLoanView",
  components: {
    FooterHome,
    CheckingSection3, StudentLoanSection3, StudentLoanSection2, StudentLoanSection1, StudentLoanHeader}
}
</script>

<style scoped>

</style>