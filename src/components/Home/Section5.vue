<template>
  <div class="alpha">
    <div class="content-alpha">

      <p class="text-1">Take the Mystery Out of Financial Planning</p>

      <p class="text-2">No matter what stage of life you’re in, we can help.</p>

      <p class="text-4" @click="onPostClick">Learn More</p>

    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Section5",
  methods: {
    onPostClick() {
      window.scrollTo(0, 0);
      this.$router.push("/about");
    },
  },
}
</script>

<style scoped>

.content-alpha{
  background-color: #eef7e8;
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);*/
  border-radius: 5px;
  /*margin-top: 5%;*/
  margin-bottom: 5%;
  padding: 100px 200px;
  text-align: center;
}

.text-1{
  color: #272727;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 32px;
  line-height: 1.15;
  margin: 0;
  padding-bottom: 15px;
}

.text-2{
  line-height: 1.4;
}

.text-4{
  display: inline-block;
  background-color: #222222;
  border: 1px solid #222222;
  color: #ffffff;
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 2%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/*.text-4:hover{*/
/*  background-color: #068765;*/
/*  border: 1px solid #068765;*/
/*  color: #FFFFFF;*/
/*  -webkit-transition: all 0.35s ease;*/
/*  transition: all 0.35s ease;*/
/*}*/

@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .content-alpha{
    padding: 100px 100px;
  }

  .text-4{
    margin-top: 3%;
  }
}

@media (max-width: 500px) {
  .content-alpha{
    padding: 100px 50px;
  }
}

</style>