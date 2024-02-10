<template>
  <div class="alpha">

    <div class="section-1">
      <p class="text-1">What makes Decentralized Bank Different?</p>
      <hr class="new1">
<!--      <p class="text-2">How can we help?</p>-->
    </div>

    <div class="section-2">

      <div class="section-2-content">
        <img src="https://www.dcu.org/content/dam/dcu/global/home/illustrations/DCU_ILLUS_LOC_HomePage_C08_YourOpinion_01.svg.svg" alt="crd-low-cost" class="section-2-content-image">

        <div class="section-2-content-text">
          <p class="section-2-content-text-1">Your Opinion Counts</p>
          <p class="section-2-content-text-2">
            We invite you to share your feedback about DDB's products and services.
          </p>
        </div>
      </div>

      <div class="section-2-content">
        <img src="https://www.dcu.org/content/dam/dcu/global/home/illustrations/DCU_ILLUS_LOC_HomePage_C08_ForWholeFamily_01.svg.svg" alt="crd-low-cost" class="section-2-content-image">

        <div class="section-2-content-text">
          <p class="section-2-content-text-1">Financial Education</p>
          <p class="section-2-content-text-2" >
            We’re a digital credit union that empowers our members of all ages to achieve their financial goals.
          </p>
        </div>
      </div>

      <div class="section-2-content">
        <img src="https://www.dcu.org/content/dam/dcu/global/home/illustrations/DCU_ILLUS_LOC_HomePage_C08_Balance_01.svg.svg" alt="crd-low-cost" class="section-2-content-image">

        <div class="section-2-content-text">
          <p class="section-2-content-text-1">BALANCESM Program</p>
          <p class="section-2-content-text-2" >
            Helping you build a better financial future with free, trusted guidance; and resources.
          </p>
        </div>
      </div>

    </div>

    <div class="section-2">

      <div class="section-2-content">
        <img src="https://www.dcu.org/content/dam/dcu/global/home/illustrations/DCU_ILLUS_LOC_HomePage_C08_FinTech_01.svg.svg" alt="crd-low-cost" class="section-2-content-image">

        <div class="section-2-content-text">
          <p class="section-2-content-text-1">FinTech Innovation</p>
          <p class="section-2-content-text-2">
            Members benefit from the latest in FinTech innovation through our support of seed-stage startups.
          </p>
        </div>
      </div>

      <div class="section-2-content">
        <img src="https://www.dcu.org/content/dam/dcu/global/home/illustrations/DCU_ILLUS_LOC_HomePage_C08_DCUKids_01.svg" alt="crd-low-cost" class="section-2-content-image">

        <div class="section-2-content-text">
          <p class="section-2-content-text-1">DDB for Kids</p>
          <p class="section-2-content-text-2" >
            Our 501 (c)(3) non-profit charitable foundation to benefit children and families.
          </p>
        </div>
      </div>

      <div class="section-2-content">
        <img src="https://www.dcu.org/content/dam/dcu/global/home/illustrations/DCU_ILLUS_LOC_HomePage_C08_GrowthFountain_01.svg.svg" alt="crd-low-cost" class="section-2-content-image">

        <div class="section-2-content-text">
          <p class="section-2-content-text-1">EVERFI Program</p>
          <p class="section-2-content-text-2" >
            Interactive modules on planning, saving, and borrowing to help you build your financial acumen.
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Section4"
}
</script>

<style scoped>
.alpha{
  background-color: #f8f8f8;
  padding-top: 3%;
  padding-bottom: 1%;
}

.section-1{
  padding-left: 50px;
}

.text-1{
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

.text-2{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  font-size: 20px;
  color: #222222;
}

.section-2{
  display: flex;
  /*margin-right: 3%;*/
  margin-left: 5%;
  margin-top: 4%;
  margin-bottom: 4%;
}
.section-2-content{
  display: block;
  /*justify-content: space-between;*/
  /*align-content: center;*/
  /*align-items: center;*/
  width: 30%;
}

.section-2-content-text-1{
  font-weight: 600;
  color: #068765;
  font-size: 22px;
  margin-bottom: 1%;
  margin-top: 3%;
  text-align: center;
}

.section-2-content-text-2{
  margin: 0;
  font-size: 17px;
  /*color: #818a91;*/
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.38;
  padding-top: 1.5%;
  text-align: center;
}

.section-2-content-image{
  height: 100px;
  width: 100px;
  object-fit: cover;
  /*margin-right: 5px;*/
  /*margin-left: 5px;*/
  display: block;
  margin-right: auto;
  margin-left: auto;
}


@media (max-width: 1000px) {
  .section-2-content-text-2{
    font-size: .750rem;
    width: 95%;
  }

  .section-2-content-text-1{
    font-size: 16px;
  }
}

@media (max-width: 700px) {
  .section-2{
    display: block;
    margin: 2.5% 2% 2.5% 4%;
  }

  .section-2-content{
    margin-bottom: 4%;
    width: 100%;
  }

  .section-2-content-text-2{
    font-size: .875rem;
    width: 95%;
  }

  .section-2-content-text-1{
    font-size: 18px;
  }

}

</style>