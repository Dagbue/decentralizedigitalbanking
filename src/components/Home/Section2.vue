<template>
  <div class="alpha">

    <div class="section-1">
      <p class="text-1-i">Benefits & Offers.</p>
      <hr class="new1">
      <p class="text-2-ii">Whether you’re in need of personal banking or business banking, DDB has helpful tools &
        resources for you.</p>
    </div>

    <div class="section-2">

      <div class="section-2-content">

        <div class="section-2-content-1">

          <p class="text-1"> Savings Account </p>
          <hr class="new2">
          <p class="text-4">Advantage Savings. Advantage You.</p>
          <p class="text-2">Earn 3.56% APY – higher than the national average.</p>
          <p class="text-3" @click="savings">View Now</p>

        </div>

        <div class="section-2-content-1">

          <p class="text-1">DDB Realty</p>
          <hr class="new2">
          <p class="text-4">What's your home really worth?.</p>
          <p class="text-2">Set a more accurate home price with a Free Market Analysis.</p>
          <p class="text-3" @click="realty">View Now</p>

        </div>

        <div class="section-2-content-1">

          <p class="text-1">Home Equity Loans</p>
          <hr class="new2">
          <p class="text-4" >Borrow money for just about anything.</p>
          <p class="text-2">Your home's equity could provide the way.</p>
          <p class="text-3" @click="realty">View Now</p>

        </div>


      </div>

    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Section2",
  methods: {
    savings(){
      this.$router.push("/saving");
      window.scrollTo(0, 0);
    },

    realty(){
      this.$router.push("/mortgagesView");
      window.scrollTo(0, 0);
    },

  }
}
</script>

<style scoped>

.alpha{
  background-color: #f8f8f8;
  padding-top: 3%;
  /*padding-bottom: 5%;*/
}

.section-1{
  padding-left: 50px;
}

.text-1-i{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  font-size: 28px;
  color: #222222;
}

hr.new1 {
  border: solid 0.0725rem #04aa84;
  margin-top: 10px;
  margin-bottom: 10px;
  color: inherit;
  width: 5%;
}

.text-2-ii{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  font-size: 20px;
  color: #222222;
}


.section-2{
  /*--bs-bg-opacity: 1;*/
  /*--bs-tertiary-100-rgb: 233, 240, 255;*/
  /*background-color: rgba(var(--bs-tertiary-100-rgb), var(--bs-bg-opacity)) !important;*/
  padding-bottom: 4rem !important;
}

.header{
  font-size: 34px;
  line-height: 1.15;
  margin: 0;
  color: #272727;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  text-align: center;
  padding-bottom: 1rem !important;
  padding-top: 3rem !important;
}

.section-2-content{
  display: flex;
  justify-content: space-between;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 5%;
}

.section-2-content-1{
  background-color: #fff;
  max-width: 100%;
  border: 0.5px solid rgba(4, 170, 142 ,0.8);
  box-shadow: 0 0 10px rgba(4, 170, 142 ,0.1);
  border-radius: 4px;
  padding: 2.5rem 2rem;
  width: 410px;
  height: 400px;
  text-align: center;
}

.text-1{
  color: #222222;
  font-size: 25px;
  line-height: 1.26;
  margin: 0;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  padding-top: 1.5%;
}

hr.new2 {
  border: solid 0.0625rem #272727;
  margin: 1.5rem 0;
  color: inherit;
  border-top: var(--bs-border-width) solid;
  opacity: .25;
  --bs-border-width: 1px;
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.text-2{
  font-size: 1.7rem;
  font-weight: bold;
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 7%;
  padding-top: 2%;
}

.text-3{
  display: inline-block;
  background-color: #01675b;
  border: 1px solid #01675b;
  color: #ffffff;
  padding: 10px 30px;
  border-radius: 5px;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.text-3:hover{
  background-color: #068765;
  border: 1px solid #068765;
  color: #FFFFFF;
}

.text-4{
  font-size: 17px;
  color: #667085;
}

@media (max-width: 1000px) {
  .section-1-content-text-2{
    font-size: .750rem;
    width: 95%;
  }

  .section-1-content-text-1{
    font-size: 16px;
  }
  .section-2-content{
    display: block;
  }

  .section-2-content-1{
    width: 500px;
    margin-bottom: 3%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 700px) {
  .section-1{
    display: block;
    margin: 2.5% 2% 2.5% 4%;
  }

  .section-1-content{
    margin-bottom: 4%;
    width: 100%;
  }

  .section-1-content-text-2{
    font-size: .875rem;
    width: 95%;
  }

  .section-1-content-text-1{
    font-size: 18px;
  }

  .section-1{
    padding-left: 10px;
    padding-right: 10px;
  }

}

@media (max-width: 500px) {

}
</style>