<template>
<!--  <transition-group name="fade" mode="out-in" tag="div" class="slides">-->
<!--    <div class="slideParent" :key="image.id">-->
<!--      <div class="slideImage">-->
<!--        <div class="slideTitle">-->

<!--          <div class="slideTitle-section-1">-->

<!--            <p class="text-1">{{ image.title }}</p>-->

<!--            <p class="text-2">{{ image.para }}</p>-->

<!--            <p class="text-3" >{{ image.para2 }}</p>-->

<!--            <p @click="onPostClick" class="text-4" >{{ image.para3 }}</p>-->

<!--          </div>-->

<!--          <div class="slideTitle-section-2">-->
<!--&lt;!&ndash;            <img v-show="this.image.id === 0" src="@/assets/AutumnCouple.jpg" alt="slide_show_image" class="slider-image"/>&ndash;&gt;-->

<!--            <img v-show="this.image.id === 0" src="https://images.unsplash.com/photo-1633381664938-acd1bdf25770?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fEFUTSUyMGNhcmR8ZW58MHx8MHx8fDA%3D" alt="slide_show_image" class="slider-image-1"/>-->

<!--&lt;!&ndash;            <img v-show="this.image.id === 2" src="@/assets/airport-couple.jpeg" alt="slide_show_image" class="slider-image"/>&ndash;&gt;-->
<!--          </div>-->


<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </transition-group>-->

  <transition-group name="fade" mode="out-in" tag="div" class="slides">
    <div class="slideParent" :key="image.id">
      <div class="slideImage" :style="setBackgroundImage">
        <div class="slideTitle">
          <div class="slideTitle-section-1">

            <p class="text-1">{{ image.title }}</p>

            <p class="text-2">{{ image.para }}</p>

            <p class="text-3" >{{ image.para2 }}</p>

            <p @click="onPostClick" class="text-4" >{{ image.para3 }}</p>

          </div>
<!--          <transition appear name="fade2" mode="out-in">-->
<!--            <h2>{{ image.title }}</h2>-->
<!--          </transition>-->

<!--          <transition appear name="fade2" mode="out-in">-->
<!--            <p @click="onPostClick">{{ image.para }}</p>-->
<!--          </transition>-->

          <!--          <a @click.prevent="onPostClick" class="btn btn-white btn-animated"-->
          <!--            >GET STARTED</a-->
          <!--          >-->
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Slides",
  props: ["image"],
  computed: {
    setBackgroundImage() {
      return { backgroundImage: "url(" + this.image.url + ")" };
    },
  },
  methods: {
    onPostClick() {
      this.$router.push("/checking");
    },
  },
};
</script>

<style scoped>
.slides .slideParent {
  height: 57vh;
  width: 100%;
  background-color: #f8f8f8;
}

.slides .slideImage {
  height: 100%;
  width: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  animation-fill-mode: forwards;
  animation-name: zoom;
  animation-duration: 3s;
  animation-iteration-count: 1;
  box-shadow: inset 1465px 0 10px -6px rgba(0, 0, 0, 0.5);
}
@keyframes zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1);
  }
}
.slideTitle {
  /*display: flex;*/
  /*justify-content: space-between;*/
  /*align-content: center;*/
  /*align-items: center;*/
  margin-left: 5.5%;
  /*margin-right: 3%;*/
  padding-top: 4.3%;
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
  color: #ffffff !important;
  vertical-align: middle;
  width: 80%;
}

.text-2{
  color: #ffffff;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 37px;
  line-height: 1.5;
  margin: 0;
  width: 85%;
}

.text-3{
  font-size: 16px;
  font-weight: normal;
  line-height: 1.6;
  margin: 0;
}

.text-4{
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

.text-4:hover{
  background-color: #068765;
  border: 1px solid #068765;
  color: #FFFFFF;
}

.slideTitle-section-1{
  width: 50%;
}

.slideTitle-section-2{
  width: 50%;
}

.slider-image{
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.slider-image-1{
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.fade-enter-active {
  animation-name: fadeEnter;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
.fade-move {
  transition: all 0.5s;
}
.fade-leave-active {
  animation-name: fadeLeave;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  position: absolute;
}
@keyframes fadeEnter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeLeave {
  from {
    opacity: 1;
  }
  to {
    opacity: 1;
  }
}


.fade2-enter-from {
  opacity: 0;
}
.fade2-enter-active {
  transition: opacity 5s ease-in;
}
.fade2-leave-to {
  opacity: 0;
}
.fade2-leave-active {
  transition: opacity 5s ease-in;
}

@media (max-width: 990px) {
  .slideTitle{
    padding-top: 10.5%;
  }
  .slideTitle h2{
    font-size: 39px;
    margin-right: 20%;
  }
}

@media (max-width: 700px) {
  .slides .slideParent {
    height: 80vh;
  }

  .slideTitle{
    text-align: center;
    display: block;
    margin-left: 2.5%;
    margin-right: 3%;
    padding-top: 5%;
  }

  .slideTitle {
    margin-left: unset;
    padding-top: 20%;
  }

  .text-1{
    text-align: center;
    width: unset;
  }

  .text-2{
    text-align: center;
    width: unset;
  }

  .text-3{
    text-align: center;
    width: unset;
  }

  .text-4{
    padding: 10px 100px;
  }


  .slideTitle-section-1{
    width: 100%;
  }

  .slideTitle-section-2{
    width: 100%;
  }

}

@media (max-width: 500px) {
  .slides .slideParent {
    height: 60vh;
  }

  .slideTitle {
    margin-left: unset;
    padding-top: 18%;
  }

  .text-1{
    font-size: 18px;
    text-align: center;
    width: unset;
  }

  .text-2{
    font-size: 25px;
    text-align: center;
    width: unset;
    margin-left: 2%;
    margin-right: 1%;
  }

}
</style>
