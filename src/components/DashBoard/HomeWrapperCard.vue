<template>
  <section id="HomeWrapperCard" class="dashboard-header-wrapper">
    <div data-animation="over-right" data-collapse="small" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">

      <section  class="navbar-container">


        <a  class="brand w-nav-brand">
          <img src="@/assets/companylogo-inverse.svg" loading="lazy" width="130" alt="">
        </a>


        <nav role="navigation" v-show="!mobile"  class="wrapper w-nav-menu">


          <div class="nav-menu-wrapper">
            <router-link to="/homeView"><a  aria-current="page" class="nav-link w-nav-link w--current">Home</a></router-link>
            <router-link to="/actionView"><a  aria-current="page" class="nav-link w-nav-link">Accounts</a></router-link>
            <router-link to="/transactionView"><a  class="nav-link w-nav-link">Transactions</a></router-link>
            <router-link to="/referalHomeView"><a class="nav-link w-nav-link">Referrals</a></router-link>
          </div>

          <div class="settings-wrapper">
<!--              <i class='bx bx-power-off ' @click="logOut"></i>-->
              <i class='bx bx-log-out' @click="logOut"></i>
            <router-link to="/settingsView">
              <div  class="account-link w-inline-block">
                <div> ⚙️</div>
              </div>
            </router-link>
          </div>


        </nav>



        <div class="icon">
          <i @click="toggleMobileNav" class='bx bx-menu-alt-right' v-show="mobile" :class="{ 'icon-active': mobileNav }"></i>
        </div>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <li @click="toggleMobileNav2"><router-link :to="{name: 'homeView'}" class="link">Home</router-link></li>
            <li @click="toggleMobileNav2"><router-link :to="{name: 'actionView'}" class="link">Accounts</router-link></li>
            <li @click="toggleMobileNav2"><router-link :to="{name: 'transactionView'}" class="link">Transactions</router-link></li>
            <li @click="toggleMobileNav2"><router-link :to="{name: 'referalHomeView'}" class="link">Referrals</router-link></li>
            <div class="separate">
              <li @click="toggleMobileNav2"><i class='bx bx-log-out' style="color: #ffffff" @click="logOut"></i></li>
              <li @click="toggleMobileNav2"><router-link :to="{name: 'settingsView'}"><div style="margin-top: 6px"  class="account-link w-inline-block"><div> ⚙️</div></div></router-link></li>
            </div>
          </ul>
        </transition>


      </section>

    </div>
    <balance-card/>
  </section>
</template>

<script>
// import { useStore } from 'vuex'
// import {computed} from "vue";
// import router from "@/router";
import BalanceCard from "@/components/DashBoard/BalanceCard.vue";

export default {
  name: "HomeWrapperCard",
  components: {BalanceCard},
  // setup() {
  //   const store = useStore()
  //   const handleClick = async () => {
  //     await store.dispatch('logout')
  //     await localStorage.clear()
  //     await router.push('/loginWithEmail')
  //   }
  //   router.push('/homeView')
  //   return { handleClick,
  //     user: computed(() => store.state.user),
  //     authIsReady: computed(() => store.state.authIsReady)}
  // },
  data()  {
    return {
      value1: false,
      scrolledNav: null,
      mobile: true,
      mobileNav: null,
      windowWidth: null,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    logOut(){
      this.$store.dispatch('logout')
      this.$router.push('/loginWithEmail')
    },
    toggleMobileNav2(){
      this.mobileNav = false;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 768){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false
    },
  }
}
</script>

<style scoped>

h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.bx-log-out{
  color: #fff;
  font-size: 30px;
  padding-top: 7px;
  cursor: pointer;
}


.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  color: #fff;
  padding-top: 15px;
}

.icon i {
  cursor: pointer;
  font-size: 30px;
  transition: 0.8s ease all;
}

.icon-active {
  transform: rotate(360deg);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 225px;
  height: 100%;
  background-color: #01675b;
  top: 0;
  left: 0;
}

.dropdown-nav li {
  margin-left: 0;
  padding-top: 10%;
  padding-bottom: 10%;
  text-align: center;
}

.dropdown-nav li .link {
  color: #ffffff;
  font-size: 17px;
  transition: .5s ease all;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
}

.dropdown-nav li .link:hover {
  border-color: #ffffff;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-225px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.separate{
  display: flex;
  justify-content: center;
}


@media screen and (max-width: 770px){
  .bx-power-off{
    color: #ffffff;
  }

  .account-link {
    background-color: #1a1d27;
    color: #fff;
  }
}


</style>