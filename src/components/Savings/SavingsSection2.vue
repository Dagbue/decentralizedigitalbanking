<template>
  <div class="alpha">

    <div class="section-2">

      <div class="part-1">
        <img src="https://www.dcu.org/content/dam/dcu/global/plp/illustrations/DCU_ILLUS_LOC_PLP_C16A_Are%20You%20Financially%20Fit_01.svg" alt="" class="image">
        <div class="inner">
          <p class="text-2">Are You Financially Fit?</p>
          <p class="text-3">Learn ways to improve your finances.</p>
          <p class="text-4" @click="next">Start Now</p>
        </div>
      </div>

      <div class="part-1">
        <img src="https://www.dcu.org/content/dam/dcu/global/plp/illustrations/DCU_ILLUS_LOC_PLP_C16A_Direct%20Deposit_01.svg" alt="" class="image">
        <div class="inner">
          <p class="text-2">DDB Direct Deposit</p>
          <p class="text-3">Get paid up to two days early.</p>
          <p class="text-4" @click="next">Start Now</p>
        </div>
      </div>

      <div class="part-1">
        <img src="https://www.dcu.org/content/dam/dcu/global/plp/illustrations/DCU_ILLUS_LOC_PLP_C16A_Free%20Credit%20Score_01.svg" alt="" class="image">
        <div class="inner">
          <p class="text-2">Know Your Credit Score</p>
          <p class="text-3">Sign up to get your credit score each month.</p>
          <p class="text-4" @click="next">Start Now</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "SavingsSection2",
  methods: {
    next(){
      this.$router.push("/saving");
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
.alpha{
  background-color: #f8f8f8;
  padding-top: 3%;
  padding-bottom: 5%;
  margin-top: 6%;
  margin-bottom: 5%;
}
.section-1{
  padding-left: 60px;
}

.text-1{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  font-size: 28px;
  color: #222222;
  padding-bottom: 5px;
}

hr.new1 {
  border: solid 0.09rem #04aa84;
  margin-top: 10px;
  margin-bottom: 10px;
  color: inherit;
  width: 5%;
}

.section-2{
  display: flex;
  justify-content: center;
  padding-left: 3%;
  margin-top: 3%;
}

.part-1{
  display: flex;
  width: 100%;
}

.image{
  padding-right: 3%;
  width: 21%;
}

.text-2{
  font-size: 25px;
  font-weight: 900;
  padding-bottom: 5px;
}

.text-3{
  font-size: 19px;
  font-weight: 500;
  padding-bottom: 10px;
  color: #667085;
  width: 80%;
}


.text-4{
  background-color: #01675b;
  border: 1px solid #01675b;
  color: #ffffff;
  padding: 0.6em 35px 0.6em 35px;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
}
.text-4:hover{
  background-color: #068765;
  border: 1px solid #068765;
  color: #FFFFFF;
}

@media (max-width: 990px) {
}

@media (max-width: 700px) {
  .section-2{
    display: block;
    padding-left: unset;
    margin-top: 3%;
  }

  .part-1{
    margin-top: 5%;
  }
}

@media (max-width: 500px) {

}
</style>