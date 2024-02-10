<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <section>
        <div class="welcome-modal">
          <div class="modal-image-container"></div>
          <div class="margin-bottom margin-small">
            <div class="balance-heading-wrapper">
              <div class="left-block">
                <div class="text-block-57">Your accounts</div>
              </div>
              <div class="right-block">
                <a data-w-id="67fbd4d2-67b1-f382-36f8-ba9be3dc7334" @click="$emit('close')" class="w-inline-block"><img src="@/assets/images/close.svg" loading="lazy" alt=""></a>
              </div>
            </div>
          </div>

            <div @click="fetchData1" class="currency-card link-block-2 w-inline-block">
              <div class="left-block"><img src="@/assets/images/KYC.svg" loading="lazy" alt="">
                <div class="balance-details">
                  <div class="currency"> Free Checking 2</div>
                  <div class="balance-text">&#36;{{formatNumber(this.contacts.checkingBalance)}}.00</div>
                </div>
              </div>
              <div class="currency-switch">
<!--                <div class="right-block" v-if="this.userData === 'account1'">-->
<!--                  <img src="@/assets/images/checked.svg" loading="lazy" alt="">-->
<!--                </div>-->
                <div class="right-block" >
                  <img src="@/assets/images/Unchekced.svg" loading="lazy" alt="">
                </div>
              </div>
            </div>

            <div @click="fetchData2" class="currency-card link-block-2 w-inline-block">
              <div class="left-block"><img src="@/assets/images/KYC.svg" loading="lazy" alt="">
                <div class="balance-details">
                  <div class="currency"> Primary Savings 1</div>
                  <div class="balance-text">&#36;{{formatNumber(this.contacts.savingBalance)}}.00</div>
                </div>
              </div>

              <div @click="fetchData2" class="currency-switch">
<!--                <div class="right-block" v-if="this.userData === 'account2'" >-->
<!--                  <img src="@/assets/images/checked.svg" loading="lazy" alt="">-->
<!--                </div>-->
                <div class="right-block">
                  <img src="@/assets/images/Unchekced.svg" loading="lazy" alt="">
                </div>
              </div>




            </div>

          <div @click="fetchData3" class="currency-card link-block-2 w-inline-block">
            <div class="left-block"><img src="@/assets/images/KYC.svg" loading="lazy" alt="">
              <div class="balance-details">
                <div class="currency"> DDB IRA</div>
                <div class="balance-text">&#36;{{formatNumber(this.contacts.IRABalance)}}.00</div>
              </div>
            </div>

            <div @click="fetchData3" class="currency-switch">
              <!--                <div class="right-block" v-if="this.userData === 'account2'" >-->
              <!--                  <img src="@/assets/images/checked.svg" loading="lazy" alt="">-->
              <!--                </div>-->
              <div class="right-block">
                <img src="@/assets/images/Unchekced.svg" loading="lazy" alt="">
              </div>
            </div>




          </div>

        </div>
      </section>
    </dialog>
  </div>
</template>

<script>
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";

export default {
  name: "BalanceModalCard",
  emits: ['close'],
  data(){
    return {
      userData2: "account1",
      userData3: "account2",
      userData4: "account3",
      contacts: [],
    }
  },
  computed: {
    userData() {
      return this.$store.getters.getUserData;
    },
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

  methods: {
    fetchData1() {
      this.$store.dispatch('fetchUserData', this.userData2);
    },
    fetchData2() {
      this.$store.dispatch('fetchUserData', this.userData3);
    },
    fetchData3() {
      this.$store.dispatch('fetchUserData', this.userData4);
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
  }
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }



.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
}

div{
  padding-bottom: 10px;
}
h3{
  font-weight: bold;
}
p{

}
dialog {
  position: fixed;
  top: 18vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 13.5rem);
  margin: 0;
  /*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*/
  /*border-radius: 12px;*/
  /*padding: 1rem;*/
  background-color: transparent;
  /*color: black;*/
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}


.currency-switch{
  margin-top: 4%;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (max-width: 500px) {
  dialog {
    top: 18vh;
    width: 25rem;
    height: 20rem;
    /*left: unset;*/
    left: calc(50% - 11.4rem);
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: unset;
  }
}
</style>