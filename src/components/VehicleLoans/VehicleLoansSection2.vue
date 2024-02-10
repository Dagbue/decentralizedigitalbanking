<template>
  <div class="alpha">

    <div class="section-2">

      <div class="part-1">
        <img src="https://www.dcu.org/content/dam/dcu/global/plp/illustrations/DCU_ILLUS_LOC_PLP_C16A_DCU%20Auto%20Insurance_01.svg" alt="" class="image">
        <div class="inner">
          <p class="text-2">DDB Auto Insurance</p>
          <p class="text-3">Helping you choose auto insurance you need.</p>
          <p class="text-4">Start Now</p>
        </div>
      </div>

      <div class="part-1">
        <img src="https://www.dcu.org/content/dam/dcu/global/plp/illustrations/DCU_ILLUS_LOC_PLP_C16A_Payment%20Protection_01.svg" alt="" class="image">
        <div class="inner">
          <p class="text-2">Payment Protection</p>
          <p class="text-3">Relieve financial stress from loan payments.</p>
          <p class="text-4">Start Now</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "VehicleLoansSection2"
}
</script>

<style scoped>
.alpha{
  /*background-color: #f8f8f8;*/
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
  justify-content: center;
  width: 100%;
}

.image{
  padding-right: 3%;
  width: 15%;
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
</style>