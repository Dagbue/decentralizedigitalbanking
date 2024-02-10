<template>
  <div>
  <div id="slider">
    <div class="arrowLeft" @click="arrowLeft()"></div>
    <Slides :image="images[chosenImage]" />
    <div class="arrowRight" @click="arrowRight()"></div>
  </div>

    <div class="section-2">
      <p class="section-2-text">I am looking for</p>

        <select
            class="input-form-3"
            aria-required="required"
            data-name="Field"
            placeholder="Select Country"
            aria-placeholder="Select Country"
            v-model="AccountType"
        >
          <option selected disabled value="">Choose account type</option>
          <option :value="null" disabled>Choose account type</option>
          <option value="CheckingAccount">A Checking Account</option>
          <option value="SavingsAccount">A Savings Account</option>
          <option value="IRA">An Individual Retirement Account</option>
        </select>
      </div>



    <div v-show="this.AccountType === 'CheckingAccount'" class="section-3">

      <p class="header">Checking Account</p>

      <div class="section-3-content">

        <div class="section-3-content-1">

          <div>
            <p class="section-3-text-1">Checking Account</p>
            <p class="section-3-text-2">Stop paying big bank fees.</p>
            <p class="section-3-text-3">A Checking Account with DDB can save you hundreds of dollars.</p>
            <div class="separate">
              <span class="icon">=</span>
              <p class="section-3-text-4">Shop at millions of locations with a free Visa debit card</p>
            </div>
            <div class="separate">
              <span class="icon">?</span>
              <p class="section-3-text-4">Manage your checking account anytime with Digital Banking</p>
            </div>
          </div>

          <div>
            <img src="https://www.dcu.org/content/dam/dcu/global/home/illustrations/DCU_ILLUS_LOC_HomePage_C05A_CheckingAccount_01.svg" alt="image-checking" class="image-checking"/>
          </div>

        </div>

        <div class="section-3-content-1">

          <p class="text-1-i"> FREE CHECKING <br/> WITH EARN MORE </p>
          <hr class="new1">
          <p class="text-2-i">AS HIGH AS</p>
          <p class="section-3-text-2">0.20% APY</p>

          <p class="text-4-i">On balances up to and including $100,000.</p>
          <p class="text-3-i" @click="checking">View Now</p>

        </div>

        <div class="section-3-content-1">

          <p class="text-1-i"> HSA CHECKING</p>
          <hr class="new1">
          <p class="text-2-i">AS HIGH AS</p>
          <p class="section-3-text-2">0.10% APY</p>

          <p class="text-4-i">Conveniently pay for qualified healthcare expenses while earning dividends.</p>
          <p class="text-3-i" @click="checking">View Now</p>

        </div>

      </div>

    </div>

    <div v-show="this.AccountType === 'SavingsAccount'" class="section-3">

      <p class="header">Savings Account</p>

      <div class="section-3-content">

        <div class="section-3-content-1">

          <div>
            <p class="section-3-text-1">SAVINGS ACCOUNTS</p>
            <p class="section-3-text-2">Kickstart your savings with DDB.</p>
            <p class="section-3-text-3">Plenty of options to help you save faster - and smarter.</p>
            <div class="separate">
              <span class="icon">=</span>
              <p class="section-3-text-4">Calculate how you'll need to save to reach a goal</p>
            </div>
            <div class="separate">
              <span class="icon">?</span>
              <p class="section-3-text-4">Prepare for your future, visit our Financial Education Center</p>
            </div>
          </div>

          <div>
            <img src="https://www.dcu.org/content/dam/dcu/global/home/illustrations/DCU_ILLUS_LOC_HomePage_C05A_SavingsAccount_01.svg" alt="image-checking" class="image-checking"/>
          </div>

        </div>

        <div class="section-3-content-1">

          <p class="text-1-i"> PRIMARY SAVINGS </p>
          <hr class="new1">
          <p class="text-2-i">AS HIGH AS</p>
          <p class="section-3-text-2">6.17% APY</p>

          <p class="text-4-i">Kickstart your savings by earning one of the highest rates nationally.</p>
          <p class="text-3-i" @click="savings">View Now</p>

        </div>

        <div class="section-3-content-1">

          <p class="text-1-i">ADVANTAGE SAVINGS</p>
          <hr class="new1">
          <p class="text-2-i">STARTING AT</p>
          <p class="section-3-text-2">3.56% APY</p>

          <p class="text-4-i">Get the most out of your savings with a faster way to grow your money.</p>
          <p class="text-3-i" @click="savings">View Now</p>

        </div>

      </div>

    </div>

    <div v-show="this.AccountType === 'IRA'" class="section-3">

      <p class="header">Individual Retirement Account</p>

      <div class="section-3-content">

        <div class="section-3-content-1">

          <div>
            <p class="section-3-text-1">Individual Retirement Account</p>
            <p class="section-3-text-2">Kickstart your IRA with DDB.</p>
            <p class="section-3-text-3">Plenty of options to help you retire faster - and smarter.</p>
            <div class="separate">
              <span class="icon">=</span>
              <p class="section-3-text-4">Calculate how you'll need to save to reach your goal</p>
            </div>
            <div class="separate">
              <span class="icon">?</span>
              <p class="section-3-text-4">Prepare for your retire, visit our Financial Education Center</p>
            </div>
          </div>

          <div>
            <img src="https://www.dcu.org/content/dam/dcu/global/home/illustrations/DCU_ILLUS_LOC_HomePage_C05A_EquityLinePlus_01.svg" alt="image-checking" class="image-checking"/>
          </div>

        </div>

        <div class="section-3-content-1">

          <p class="text-1-i">Roth IRA</p>
          <hr class="new1">
          <p class="text-2-i">AS HIGH AS</p>
          <p class="section-3-text-2">1.17% APY</p>

          <p class="text-4-i">Kickstart your Retirement by saving in one of the highest rates nationally.</p>
          <p class="text-3-i" @click="ira">View Now</p>

        </div>

        <div class="section-3-content-1">

          <p class="text-1-i">SEP IRA <br/> (Simplified Employee Pension) </p>
          <hr class="new1">
          <p class="text-2-i">STARTING AT</p>
          <p class="section-3-text-2">2.56% APY</p>

          <p class="text-4-i">Get the most out of your retirement with a faster way to grow your money.</p>
          <p class="text-3-i" @click="ira">View Now</p>

        </div>

      </div>

    </div>


  </div>

</template>

<script>
import Slides from "./Slides.vue";
export default {
  name: "sliderView",
  components: {
    Slides,
  },
  data() {
    return {
      images: [
        {
          id: 0,
          url: "https://www.dcu.org/content/dam/dcu/global/home/images/home-eq-desktop-retina.jpg",
          title: "Use your home’s equity for life’s important moments.",
          para: "Borrow up to 90% of your home's value with a 15-year fixed rate - APR as low as 7.99%.",
          para2: "",
          para3: "Rates & Disclosures",
        },
        {
          id: 1,
          url: "https://www.dcu.org/content/dam/dcu/global/home/images/13m-promo-carousel-desktop-retina.jpg",
          title: "Our Best Spending Account",
          para: "Get 5.39% APY with our limited-time 13-Month Promotional Certificate.",
          para2: "",
          para3: "Get Started",
        },
        // {
        //   id: 2,
        //   url: "",
        //   title: "Inflation Busting",
        //   para: "3.00% APY * High Yield Savings Account",
        //   para2: "Earn More Now with our new High Yield Savings Account!",
        //   para3: "Learn more",
        // },
      ],
      chosenImage: 0,
      intervalObject: null,
      AccountType: "CheckingAccount",
    };
  },
  methods: {
    arrowLeft() {
      clearInterval(this.intervalObject);
      this.moveLeft();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveLeft();
      }, 6000);
    },
    arrowRight() {
      clearInterval(this.intervalObject);
      this.moveRight();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveRight();
      }, 6000);
    },
    moveLeft() {
      var flag = this.chosenImage;
      flag--;
      if (flag < 0) {
        flag = this.images.length - 1;
      }
      this.chosenImage = flag;
    },
    moveRight() {
      var flag = this.chosenImage;
      flag++;
      if (flag >= this.images.length) {
        flag = 0;
      }
      this.chosenImage = flag;
    },
    checking(){
      this.$router.push("/checking");
      window.scrollTo(0, 0);
    },
    savings(){
      this.$router.push("/saving");
      window.scrollTo(0, 0);
    },
    ira(){
      this.$router.push("/iraview");
      window.scrollTo(0, 0);
    },
  },
  created() {
    var self = this;
    this.intervalObject = setInterval(() => {
      self.moveLeft();
    }, 6000);
  },
};
</script>

<style scoped>
#slider {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /*margin-top: 0.8%;*/
}
#slider .arrowLeft,
#slider .arrowRight {
  position: absolute;
  top: 50%;
  border: 20px solid transparent;
}
#slider .arrowLeft {
  border-right-color: #676767;
  z-index: 1;
}
#slider .arrowRight {
  right: 0;
  border-left-color: #676767;
}
#slider .squares div {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  display: inline-block;
  background-color: #676767;
  border-radius: 50%;
}

.section-2{
  background-color: #01675b;
  display: flex;
  align-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.section-2-text{
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 300;
  margin-bottom: 0.64rem;
  padding-left: 5%;
  color: #FFFFFF;
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


.section-3{
  /*--bs-bg-opacity: 1;*/
  /*--bs-tertiary-100-rgb: 233, 240, 255;*/
  /*background-color: rgba(var(--bs-tertiary-100-rgb), var(--bs-bg-opacity)) !important;*/
  padding-bottom: 4rem !important;
}

.header{
  font-size: 32px;
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

.section-3-content{
  display: flex;
  justify-content: space-between;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 2%;
}

.section-3-content-1{
  background-color: #fff;
  max-width: 100%;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 2.5rem 2rem;
  width: 410px;
  height: 470px;
}

.icon{
  background-color: #068765;
  padding: 0.5px 6px;
  color: #FFFFFF;
  border-radius: 50%;
  margin-right: 2%;
}

.separate{
  display: flex;
  align-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
}

.image-checking{
  width: 40%;
  margin-top: 6%;
  float: right;
}

.section-3-text-1{
  font-size: 1rem;
  line-height: .86rem;
  margin-bottom: 0.57rem;
  font-weight: bold;
  display: block;
  letter-spacing: 1px;
  color: #01675b;
}

.section-3-text-2{
  font-size: 2rem;
  line-height: 2.29rem;
  color: #272727;
}

.section-3-text-3{
  margin-top: .8rem;
  margin-bottom: .8rem;
  width: 100%;
  font-size: 1rem;
  line-height: 1.29rem;
}

.section-3-text-4{
  width: 75%;
  color: #667085;
}

.text-1-i{
  font-size: 1.14rem;
  position: relative;
  font-weight: bold;
  letter-spacing: 1px;
}

hr.new1 {
  border: solid 0.0725rem #04aa84;
  margin-top: 10px;
  margin-bottom: 10px;
  color: inherit;
  width: 25%;
}

.text-2-i{
  margin-top: 7px;
  margin-bottom: 7px;
}

.text-4-i{
  color: #667085;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
  line-height: 1.5;
}


.text-3-i{
  display: inline-block;
  background-color: #01675b;
  border: 1px solid #01675b;
  color: #ffffff;
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 4%;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.text-3-i:hover{
  background-color: #068765;
  border: 1px solid #068765;
  color: #FFFFFF;
}

@media (max-width: 1000px) {
  .section-3-content{
    display: block;
  }

  .section-3-content-1{
    width: 500px;
    margin-bottom: 3%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 700px){
  #slider .arrowLeft{
    display: none;
  }
  #slider .arrowRight{
    display: none;
  }
  .section-2-text{
    font-size: 1.3rem;
  }
  select{
    font-size: 17px;
  }
}
</style>
