<template>
  <div class="alpha">

    <div class="section-1">
      <p class="text-1">Bank With Us From Anywhere?</p>
      <hr class="new1">
      <!--      <p class="text-2">How can we help?</p>-->
    </div>

    <div class="section-alpha">
      <div class="section-2">

        <p class="part-1">
          <span style="font-size: 1.7rem">5,900+</span>
          Co-Op Shared Branches in the United States
        </p>
        <hr class="new2">

        <p class="part-2">
          <span style="font-size: 1.7rem">80,000+</span>
          Surcharge Free ATMs in the United States
        </p>
        <hr class="new3">

        <p class="part-2">
          <span style="font-size: 1.7rem">23</span>
          DCU Branches in MA & NH
        </p>
        <hr class="new3">

        <hr class="new4">
        <br/>
        <p class="part-4">
          TOTAL NUMBER OF DDB MEMBERS
        </p>

        <p class="part-5">
          1,106,90<span style="color: #068765;">2</span>
        </p>
        <br/>
        <hr class="new4">

        <p class="part-6">
          Pictures shown are for illustration purpose only
        </p>

      </div>

      <div class="section-3">
        <img src="https://www.dcu.org/content/dam/dcu/global/home/images/CoOpSharedBranches_Homepage_Desktop_IMG_DCU_785x480.jpg" alt="" class="image"/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Section6"
}
</script>

<style scoped>

.image{
  width: 90%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.alpha{
  /*background-color: #f8f8f8;*/
  /*padding-top: 1%;*/
  padding-bottom: 5%;
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
  margin-top: 5px;
  margin-bottom: 20px;
  color: inherit;
  width: 5%;
}

hr.new2 {
  border: solid 0.0725rem #04aa84;
  margin-top: 5px;
  margin-bottom: 20px;
  color: inherit;
  width: 15%;
}

hr.new3 {
  border: solid 0.0725rem #222222;
  margin-top: 5px;
  margin-bottom: 20px;
  color: inherit;
  width: 7%;
}

hr.new4 {
  border: solid 0.1px #222222;
  color: inherit;
  /*width: 15%;*/
}

.text-2{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  font-size: 20px;
  color: #222222;
}

.section-alpha{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
}

.part-1{
  color: #068765;
  display: block;
  font-size: 1.2rem;
  line-height: 1.43rem;
  padding-top: 1rem;
}

.part-2{
  color: #222222;
  display: block;
  font-size: 1.2rem;
  line-height: 1.43rem;
  padding-top: 1rem;
}

.part-4{
  color: #667085;
  font-size: 14px;
}

.part-5{
  color: #222222;
  display: block;
  font-size: 2rem;
  line-height: 1.43rem;
  padding-top: 1rem;
}

.part-6{
  margin-top: 5%;
}

@media (max-width: 1000px) {

}

@media (max-width: 700px) {
  .section-alpha{
    display: block;
  }

  .section-1{
    padding-left: 23px;
  }


  .section-2{
    margin-left: 5%;
    margin-right: 5%;
  }

  .section-3{
    margin-top: 7%;
    margin-bottom: 5%;
  }
}

@media (max-width: 500px) {

}

</style>