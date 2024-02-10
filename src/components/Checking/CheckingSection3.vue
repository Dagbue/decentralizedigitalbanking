<template>
  <div class="alpha">
    <div class="section-1">
      <p class="text-1">We're Here to Help</p>
      <hr class="new1">
    </div>

    <div class="section-2">

      <div class="part-1">
        <img src="https://www.dcu.org/etc.clientlibs/dcu/clientlibs/clientlib-site/resources/images/svg/green-email.svg" alt="" class="image">
        <div class="inner">
          <p class="text-2">Email</p>
          <p class="text-3">Get assistance by Email.</p>
          <p class="text-4" @click="onPostClick">Contact</p>
        </div>
      </div>

      <div class="part-1">
        <img src="https://www.dcu.org/etc.clientlibs/dcu/clientlibs/clientlib-site/resources/images/svg/green-location.svg" alt="" class="image">
        <div class="inner">
          <p class="text-2">Visit</p>
          <p class="text-3">Find a Branch or ATM.</p>
          <p class="text-4" @click="onPostClick">Find</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "CheckingSection3",
  methods: {
    onPostClick() {
      this.$router.push("/contactView");
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
.alpha{
  margin-top: 5%;
  margin-bottom: 7%;
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
  /*padding-left: 10%;*/
  margin-top: 3%;
}

.part-1{
  display: flex;
  justify-content: center;
  width: 100%;
}

.image{
  padding-right: 2%;
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


@media (max-width: 1000px) {
}

@media (max-width: 700px) {
  .section-2{
    display: block;
  }

  .part-1{
    margin-top: 5%;
  }
}

</style>