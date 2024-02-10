<template>
  <section id="BalanceCard" class="balance-wrapper margin-top margin-large">
    <div class="balance heading-style-h2" >&#36;{{formatNumber(this.contacts.checkingBalance + this.contacts.savingBalance + this.contacts.IRABalance - this.contacts.withdrawAmount)}}.00</div>

<!--    <div class="balance heading-style-h2" v-else-if="this.accountState === 'NGN'">&#8358;0</div>-->
<!--    <div class="balance heading-style-h2" >&#8358;0.00</div>-->

<!--    <a data-w-id="b4a46994-6187-287f-f799-9f553a35b0df" v-if="this.accountState === 'CAD'" href="#" @click="showDialog" class="link-block w-inline-block">-->
<!--      <img src="@/assets/images/CAD.svg" loading="lazy" width="16" alt="">-->
<!--      <div class="dropdown-text dashboard text-size-small text-weight-medium">CAD Account</div>-->
<!--      <img src="@/assets/images/arrow-down.svg" loading="lazy" width="16" alt="">-->
<!--    </a>-->

<!--    <a data-w-id="b4a46994-6187-287f-f799-9f553a35b0df" v-else-if="this.accountState === 'NGN'" href="#" @click="showDialog" class="link-block w-inline-block">-->
<!--      <img src="@/assets/images/Nigeria-NG.svg" loading="lazy" width="16" alt="">-->
<!--      <div class="dropdown-text dashboard text-size-small text-weight-medium">NGN Account</div>-->
<!--      <img src="@/assets/images/arrow-down.svg" loading="lazy" width="16" alt="">-->
<!--    </a>-->

    <a data-w-id="b4a46994-6187-287f-f799-9f553a35b0df" href="#" @click="showDialog" class="link-block w-inline-block">
      <img src="@/assets/images/checked.svg" loading="lazy" width="16" alt="">
      <div class="dropdown-text dashboard text-size-small text-weight-medium">{{this.contacts.firstName}} {{this.contacts.lastName}}</div>
<!--      <div v-show="this.userData === 'account2'" class="dropdown-text dashboard text-size-small text-weight-medium">Hi {{this.contacts.AccountName2}}</div>-->
      <img src="@/assets/images/arrow-down.svg" loading="lazy" width="16" alt="">
    </a>


    <BalanceModalCard @close="hideDialog" v-if="dialogIsVisible"/>

  </section>
</template>

<script>
import BalanceModalCard from "@/components/Modals/BalanceModalCard.vue";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";

export default {
  name: "BalanceCard",
  components: {BalanceModalCard},
  data() {
    return {
      dialogIsVisible: false,
      userData2: "account2",
      userData3: "account1",
      userData4: "account3",
      contacts: [],
    };
  },



  async created() {
    const querySnapshot = await getDocs(collection(db, localStorage.getItem('userEmail')));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'email' : doc.data().email,
        'password' : doc.data().password,
        'checkingBalance' : doc.data().checkingBalance,
        'savingBalance' : doc.data().savingBalance,
        'IRABalance' : doc.data().IRABalance,
        'withdrawAmount' : doc.data().withdrawAmount,
        'firstName' : doc.data().firstName,
        'lastName' : doc.data().lastName,
        'address' : doc.data().address,
        'state' : doc.data().state,
        'city' : doc.data().city,
        'zipCode' : doc.data().zipCode,
        'accType' : doc.data().accType,
        'accNumber' : doc.data().accNumber,
        'accTier' : doc.data().accTier,
        'ssn' : doc.data().ssn,
        'dob' : doc.data().dob,
        'isPinSet' : doc.data().isPinSet,
        'pin' : doc.data().pin,
        'country' : doc.data().country,
        'createdAt': doc.data().createdAt
      }
      this.contacts = data
    });

  },

  computed: {
    userData() {
      return this.$store.getters.getUserData;
    },
  },

  methods: {
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    formatNumber(number) {
      // Convert the number to a string
      let numStr = String(number);

      // Split the string into integer and decimal parts (if any)
      const parts = numStr.split('.');
      const integerPart = parts[0];

      // Add commas for thousands and millions
      const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      // Join the integer and decimal parts (if any)
      const formattedNumber = parts.length === 2 ? formattedIntegerPart + '.' + parts[1] : formattedIntegerPart;

      return formattedNumber;
    },

  },

}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }
</style>