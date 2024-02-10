<template>
  <div class="alpha">
    <div class="content-alpha">

      <div class="content-1">


        <img src="@/assets/san-antonio-skyline.jpg" alt="section-1-image" class="image"/>

      </div>

      <div class="content-2">
        <!--        <p class="text-1">-->
        <!--          LOAN PAYMENT OPTION-->
        <!--        </p>-->
        <p class="text-2">
          Our Story
        </p>
        <p class="text-3">

          Decentralized Digital Banking (DDB) originated from the forward-thinking vision of Digital Equipment
          Corporation (DEC) in 1979, during its rapid growth in the global computer industry. Seeking to enhance
          employee benefits, DEC established DDB, offering personalized banking services through an employee-owned
          Digital Bank. The unique approach aimed to reinvest earnings back into members, resulting in reduced loan
          rates, improved savings rates, and complimentary/low-fee services.

        </p>

        <p class="text-3">
          Officially chartered by the National Digital Banking Administration in October 1979, DDB commenced
          operations in the Bahamas, quickly growing into a formidable institution. In 1999, the institution
          underwent a significant transformation, adopting the name Decentralized Digital Banking to reflect its
          commitment to its rich heritage for longstanding members and its high-tech financial capabilities for
          newer members.
        </p>
        <p class="text-3">
          Fueled by positive word of mouth and unwavering member loyalty, DDB has become the largest Digital Bank in
          the Bahamas and ranks among the top 20 nationwide. Boasting a global community exceeding 1 million members,
          DDB remains steadfast in prioritizing its members, offering unparalleled financial products and services to
          enhance their lives. Join Decentralized Digital Banking for a journey of financial empowerment and innovation.

        </p>
        <p class="text-4" @click="onPostClick">
          Open an Account
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection1",
  methods: {
    onPostClick() {
      this.$router.push("/signUpEmail");
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>

.content-alpha{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 5%;
  /*margin-right: 3%;*/
  padding-top: 4.3%;
}

.content-1{
  width: 50%;
}

.content-2{
  width: 50%;
  padding-left: 3%;
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
  /*letter-spacing: normal;*/
  font-size: 33px;
  line-height: 1.5;
  margin: 0;
}

.text-3{
  font-size: 17px;
  font-weight: normal;
  line-height: 1.5;
  margin: 0;
  width: 86%;
  margin-bottom: 1%;
}

.text-4{
  display: inline-block;
  background-color: #ffffff;
  border: 1.8px solid #01675b;
  color: #01675b;
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 3%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-4:hover{
  background-color: #01675b;
  border: 1.8px solid #01675b;
  color: #ffffff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

@media (max-width: 990px) {
  .text-1{
    line-height: 1.4;
  }

  .text-2{
    line-height: 1.2;
  }

  .text-3{
    line-height: 1.4;
  }

  .text-4{
    padding: 9px 30px;
    margin-top: unset;
  }
}

@media (max-width: 700px) {

  .content-alpha{
    display: block;
    margin-left: unset;
    margin-right: unset;
  }

  .content-1{
    width: 100%;
    text-align: center;
  }

  .text-1{
    text-align: center;
    margin-bottom: 1%;
    margin-top: 2%;
  }

  .text-2{
    text-align: center;
    margin-bottom: 1%;
    margin-top: 1%;
  }

  .content-2{
    width: 100%;
    text-align: center;
  }

  .text-3{
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .text-4{
    margin-bottom: 3%;
    padding: 10px 40px;
  }

}

@media (max-width: 500px) {
  .image{
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .text-2{
    font-size: 32px;
  }

  .content-1{
    width: 100%;
  }

  .content-2{
    width: 100%;
  }

}
</style>