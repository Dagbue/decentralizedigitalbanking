<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <form class="payment-modal" @submit.prevent="sendToNGNAccount">
        <div class="margin-bottom margin-medium">
          <div class="amount-profile-wrapper">
<!--            <div class="text-block-71">&#8358;{{this.transferFormData.amount | formatAmount}}</div>-->
            <div class="profile-image">
<!--              <div class="text-block-70">{{this.userInfo.customerFirstName[0]}}</div>-->
            </div>
          </div>
        </div>
        <div class="payment-details">
          <div class="payment-details-row">
            <div class="text-block-72">From</div>
            <div class="text-block-73 lawrence">{{this.transferForm.accDebit}}</div>
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">To</div>
            <div class="text-block-73">{{this.transferForm.creditAccountName}}</div>
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">Amount</div>
            <div class="text-block-73">{{this.transferForm.amountNGN}}</div>
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">Bank name</div>
            <div class="text-block-73">{{this.transferForm.bankName}}</div>
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">Account number</div>
            <div class="text-block-73">{{this.transferForm.creditAccountNumber}}</div>
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">Routing number</div>
            <div class="text-block-73">{{this.transferForm.creditRoutingNumber}}</div>
          </div>
          <div class="payment-details-row">
            <div class="text-block-72">Note</div>
            <div class="text-block-73">{{this.transferForm.note}}</div>
          </div>
        </div>
        <div class="margin-top margin-medium">
          <!--            <a href="#" @click="sendToNGNAccount"  class="button w-button">Proceed with payment</a>-->
<!--          <base-button :loading="loading"></base-button>-->
          <button class="button max-width-full w-button">Proceed with payment</button>
        </div>
        <div class="margin-top margin-small">
          <a href="#"  @click="cancel" class="button is-secondary w-button">Cancel payment</a>
        </div>
      </form>
    </dialog>
  </div>
</template>

<script>
import {collection, doc, getDocs, setDoc,increment} from "firebase/firestore";
import Swal from "sweetalert2";
import {  ref, set, push, serverTimestamp } from "firebase/database";
import {database, auth ,db} from "@/firebase/config";

export default {
  name: "ConfirmPaymentModal",
  emits: ['close'],
  data() {
    return {
      contacts: [],
      transactionType: "withdrawal",
    };
  },
  computed: {
    transferForm() {
      return this.$store.getters.getTransferForm;
    },
  },
  methods: {
    async sendToNGNAccount() {
      const myUserId = auth.currentUser.uid;
      const Deposit = ref(database, myUserId + "/Transactions");
      const newDeposit = push(Deposit);
      await set(newDeposit, {
        To: this.transferForm.creditAccountName,
        Amount: this.transferForm.amountNGN,
        bankName: this.transferForm.bankName,
        accountNumber: this.transferForm.creditAccountNumber,
        routingNumber: this.transferForm.creditRoutingNumber,
        transactionType: this.transactionType,
        desc: this.transferForm.note,
        createdAt: serverTimestamp(),
      })

      await setDoc(doc(db, localStorage.getItem('userEmail'), "USER"), {
        withdrawAmount: increment(this.transferForm.amountNGN),
      },{merge: true})
          .then(() => {
            console.log('saved')
          });

      await setDoc(doc(db, "listOfUsers", localStorage.getItem('userEmail')), {
        withdrawAmount: increment(this.transferForm.amountNGN),
      },{merge: true})
          .then(() => {
            console.log('saved')
          });

      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Transfer Successful!',
      });
      await this.$emit('close')
      await this.$router.push("/homeView");
      window.scrollTo(0, 0);
    },
     cancel() {
       this.$emit('close')
       this.$router.push("/addRecipientView");
       window.scrollTo(0, 0);
    }
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
}
</script>

<style scoped >
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }


.lawrence{
  text-transform: lowercase;
}

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
  top: 4vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 14rem);
  margin: 0;
  background-color: transparent;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
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
    top: 5vh;
    width: 27rem;
    height: 20rem;
    left: calc(50% - 12.4rem);
    right: 30px;
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: unset;
  }
}
</style>