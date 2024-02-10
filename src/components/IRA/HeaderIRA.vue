<template>
  <div class="alpha">
    <div class="content-alpha">

      <div class="content-1">
<!--        <p class="text-1">-->
<!--          OUR BEST SAVING ACCOUNT-->
<!--        </p>-->
        <p class="text-2">
          Retirement Accounts
        </p>
        <p class="text-3">
          Federally-insured, safe, and sensible options to grow your nest egg.
        </p>
        <p class="text-4" @click="onPostClick">
          Open an Account
        </p>
      </div>

      <div class="content-2">
        <img src="https://www.dcu.org/content/dam/dcu/global/plp/images/DCU_IMG_LOC_PLP-Retirement_C10_1280_920_Mobile_PageHero_01.jpg" alt="section-1-image" class="image"/>
      </div>

    </div>
    <div class="section-2">
      <p class="section-2-text">Offerings</p>
      <p class="section-2-text">Resources</p>
      <p class="section-2-text">Contact</p>
      <p class="section-2-text">Apply</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HeaderIRA",
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
  background-color: #f8f8f8;
}

.content-alpha{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 3%;
  padding-top: 4.3%;
  padding-bottom: 4%;
}

.content-1{
  width: 50%;
}

.content-2{
  width: 50%;
}

.image{
  width: 80%;
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
  color: #01675b !important;
  vertical-align: middle;
}

.text-2{
  color: #272727;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 35px;
  line-height: 1.5;
  margin: 0;
}

.text-3{
  font-size: 20px;
  font-weight: normal;
  line-height: 1.6;
  margin: 0;
  width: 85%;
  color: #272727;
}

.text-4{
  display: inline-block;
  background-color: #01675b;
  border: 1.8px solid #01675b;
  color: #ffffff;
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 3%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-4:hover{
  background-color: #068765;
  border: 1.8px solid #068765;
  color: #ffffff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.section-2{
  background-color: #01675b;
  display: flex;
  justify-content: right;
  align-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 25px;
  padding-right: 6%;
}

.section-2-text{
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 300;
  margin-bottom: 0.64rem;
  padding-left: 2%;
  padding-right: 2%;
  color: #FFFFFF;
}

.section-2-text:hover{
  text-decoration: underline;
}

.input-form-2{
  /*margin-top: 7%;*/
  /*display: block;*/
  /*justify-content: center;*/
}

.input-form-3{
  order: 1;
  width: 30%;
  padding: 12px 10px;
  /*margin: 8px 0;*/
  display: inline-block;
  box-sizing: border-box;
  margin-left: 2%;
}

select{
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #D0D5DD;
  background-color: transparent;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #ffffff;
  font-size: 20px;
}

select:focus {
  border-bottom: 1px solid #D0D5DD;
  border-radius: 4px;
}

option{
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
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
    display: block;
    padding-bottom: 5%;
    text-align: center;
    margin-left: unset;
    margin-right: unset;
  }

  .content-1{
    width: 100%;
  }

  .content-2{
    width: 100%;
  }

  .text-2{
    font-size: 33px;
  }

  .text-1{
    text-align: center;
    width: 95%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .text-3{
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .text-4{
    margin-bottom: 3%;
  }
}

@media (max-width: 500px) {
  .image{
    width: 92%;
  }
  .section-2-text{
    font-size: 1rem;
  }
}

</style>