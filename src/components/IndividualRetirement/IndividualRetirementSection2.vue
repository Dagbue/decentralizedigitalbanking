<template>
  <div class="alpha">
    <div class="content-alpha">

      <div class="content-1">
        <!--        <p class="text-1">-->
        <!--          FEEL RIGHT AT HOME-->
        <!--        </p>-->
        <p class="text-2">
          About Roth IRAs
        </p>
        <p class="text-3">
          A Roth IRA is a savings plan ideal for someone anticipating retiring in a higher income bracket and
          prefer to pay taxes on your retirement now instead of later. With a Roth IRA, you make annual
          non-tax-deductible contributions, but the interest earned is tax-free when you withdraw money.
          Get started with as little as $1,000 today.
        </p>
      </div>

      <div class="content-2">
        <img src="@/assets/happy-couple-cooking-dinner-.jpeg" alt="section-1-image" class="image"/>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "IndividualRetirementSection2"
}
</script>

<style scoped>

.content-alpha{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 3%;
  padding-top: 4.3%;
}

.content-1{
  width: 50%;
}

.content-2{
  width: 50%;
}

.image{
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.text-1{
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: 1.6px;
  text-align: left;
  text-transform: uppercase;
  color: #3c790f !important;
  vertical-align: middle;
}

.text-2{
  color: #01675b;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 33px;
  line-height: 1.5;
  margin: 0;
}

.text-3{
  font-size: 20px;
  font-weight: normal;
  line-height: 1.6;
  margin: 0;
  width: 85%;
}

.text-4{
  display: inline-block;
  background-color: #ffffff;
  border: 1.8px solid #0f2e6d;
  color: #0f2e6d;
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 3%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-4:hover{
  background-color: #0f2e6d;
  border: 1.8px solid #0f2e6d;
  color: #ffffff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

@media (max-width: 990px) {
  .text-1{
    line-height: 1.4;
  }

  .text-2{
    line-height: 1.3;
  }

  .text-3{
    line-height: 1.4;
  }

  .text-4{
    padding: 9px 30px;
    margin-top: 2%;
  }
}

@media (max-width: 700px) {
  .content-alpha{
    display: flex;
    flex-direction: column-reverse;
  }

  .content-1{
    width: 100%;
  }

  .content-2{
    width: 100%;
  }

  .text-2{
    text-align: center;
    margin-top: 1%;
    margin-bottom: 1%;
  }

  .text-3{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

}

@media (max-width: 500px) {

}

</style>