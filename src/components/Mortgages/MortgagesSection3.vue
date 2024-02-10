<template>
  <div class="alpha">

    <div class="section-1">
      <p class="text-1">Resources</p>
      <p class="text-2">Materials & resources to help you make an informed decision when buying, refinancing or improving your home.</p>
      <hr class="new1">
    </div>

    <div class="section-3">

      <p class="section-3-header">Home Buying Guide</p>

      <p class="section-3-sub-header">
        Save money on buying a new home and get the best rates for refinancing or improving your home.
      </p>


    </div>

    <div class="section-3">

      <p class="section-3-header">First Time Home Buyer Guide</p>

      <p class="section-3-sub-header">
        Helpful resources and tools to assist with your home buying process.
      </p>


    </div>


    <p class="last"></p>

  </div>
</template>

<script>
export default {
  name: "MortgagesSection3"
}
</script>

<style scoped>
.alpha{
  background-color: #f8f8f8;
  padding-top: 4%;
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
  padding-bottom: 5px;
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
  padding-bottom: 5px;
}

.section-2{
  display: flex;
  justify-content: space-around;
  margin-right: 3%;
  margin-left: 5%;
  margin-top: 2%;
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
  width: 22%;
  object-fit: cover;
  /*margin-right: 5px;*/
  /*margin-left: 5px;*/
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.last{
  padding-left: 3%;
  width: 85%;
  color: #222222;
}

.section-3{
  padding-left: 50px;
  margin-top: 2%;
  margin-bottom: 2%;
}

.section-3-header{
  font-size: 23px;
  color: #222222;
  font-weight: 900;
  padding-bottom: 10px;
}

.section-3-sub-header{
  font-size: 18px;
  color: #667085;
  width: 80%;
  font-weight: 900;
  padding-bottom: 10px;
  line-height: 1.3;
}

.section-3-list{
  font-size: 18px;
  padding-bottom: 5px;
  padding-left: 1%;
  color: #667085;
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