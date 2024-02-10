<template>
  <div class="alpha">

    <div class="section-1">
      <p class="text-1">Offerings</p>
      <p class="text-2">Still paying big bank fees? Save with a DDB Checking Account.</p>
      <hr class="new1">
    </div>

    <div class="section-2-alpha">

      <div class="section-2-inner">

        <div class="part-1">
          <p class="text-3">Free Checking</p>
          <hr class="new1">
          <div class="separate">
            <p class="text-4">On balances up to and including $1,000 with earn more.</p>
            <p class="text-5">AS HIGH AS <br/> <span class="price">0.20% APY</span> </p>
          </div>

          <div class="btn-part">
            <p class="btn" @click="onPostClick">Open Now</p>
          </div>
        </div>

        <div class="part-2">

          <div class="part-2-inner">
            <p class="text-6">MINIMUM TO OPEN</p>
            <p class="text-7">$0.00</p>
            <p class="text-6">MINIMUM TO EARN</p>
            <p class="text-7">$0.00</p>
          </div>

          <div class="part-2-inner">
            <p class="text-6">MONTHLY FEE</p>
            <p class="text-7">$0.00</p>

          </div>

        </div>

      </div>

      <div class="section-2-inner">

        <div class="part-1">
          <p class="text-3">HSA Checking</p>
          <hr class="new1">
          <div class="separate">
            <p class="text-4">Earn competitive dividends on your balance.</p>
            <p class="text-5">STARTING AT <br/> <span class="price">0.10% APY</span> </p>
          </div>

          <div class="btn-part">
            <p class="btn" @click="onPostClick">Open Now</p>
          </div>
        </div>

        <div class="part-2">

          <div class="part-2-inner">
            <p class="text-6">MINIMUM TO OPEN</p>
            <p class="text-7">$0.00</p>
            <p class="text-6">MINIMUM TO EARN</p>
            <p class="text-7">$0.00</p>
          </div>

          <div class="part-2-inner">
            <p class="text-6">MONTHLY FEE</p>
            <p class="text-7">$0.00</p>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "CheckingSection1",
  methods: {
    onPostClick() {
      this.$router.push("/signUpEmail");
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
.alpha{
  margin-top: 5%;
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

.text-2{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  font-size: 20px;
  color: #222222;
  padding-bottom: 5px;
}

.section-2-alpha{
  margin-top: 3%;
  display: flex;
  justify-content: space-around;
}

.part-1{
  background: #f8f8f8;
  padding: 0 1.8rem 1.8rem 1.8rem;
}

.part-2{
  display: flex;
  justify-content: space-around;
  margin-top: 4%;
  margin-bottom: 4%;
}

.section-2-inner{
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
  /*background: #f8f8f8;*/
  width: 600px;
  /*padding: 0 1.71rem;*/
  margin: 0;
}

.text-3{
  padding: 1.71rem 0 0 0;
  font-size: 1.15rem;
}

.separate{
  display: flex;
  /*justify-content: space-evenly;*/
  margin-top: 5%;
  margin-bottom: 5%;
}

.text-4{
  width: 60%;
  color: #212529;
  font-size: 17px;
}

.text-5{
  margin-left: 10%;
}

.text-6{
  color: #212529;
  font-size: 14px;
}

.text-7{
  font-size: 1.8rem;
  color: #01675a;
  padding-bottom: 5%;
}

.price{
  font-size: 1.8rem;
  color: #01675a;
  line-height: 2rem;
}

.btn{
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
.btn:hover{
  background-color: #068765;
  border: 1px solid #068765;
  color: #FFFFFF;
}


@media (max-width: 990px) {
}

@media (max-width: 700px) {
  .section-2-alpha{
    margin-top: 4%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .section-2-inner{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
  }
}

@media (max-width: 500px) {

  .section-2-inner{
    width: 370px;
  }

  .section-1{
    padding-left: 30px;
  }

  .text-1{
    font-size: 26px;
  }

  .text-2{
    font-size: 18px;
    padding-bottom: 2.5px;
  }

  .text-4{
    font-size: 16px;
  }
  .price{
    font-size: 1.5rem;
  }

  .text-6{
    font-size: 13px;
    width: 80%;
  }

  .text-7{
    font-size: 1.4rem;
  }

}


</style>