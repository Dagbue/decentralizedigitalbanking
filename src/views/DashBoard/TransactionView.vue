<!--suppress JSUnresolvedFunction -->
<template>
<dashboard-layout>
  <div class="transaction-header-wrapper">
    <div data-animation="over-right" data-collapse="small" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
      <NavBar/>
    </div>
  </div>
  <div class="margin-top margin-small">
    <div class="transaction-wrapper">

      <div class="margin-bottom margin-medium">
        <TransactionFilterCard/>
      </div>


      <div>

        <div v-if="this.history.length > 0"  class="transaction-state">

          <div class="transactions _1 w-inline-block">

            <table>

              <tbody v-for="child in paginatedItems" :key="child.key">

              <tr>
                <td>
                  <div class="separate-1">
                    <i v-if="child.transactionType === 'deposit'" class='bx bx-log-in-circle' ></i>
                    <i v-if="child.transactionType === 'withdrawal'" class='bx bx-log-out-circle' ></i>
                  </div>
                </td>
                <td>
                  <div class="separate-3">
                    <p class="amount-text" >&#36;{{formatNumber(child.Amount)}}
                      <!--                    <span v-if="items.accountNumber === accountCAD">CAD</span>-->
                      <!--                    <span v-if="items.accountNumber === accountNaira">NG</span>-->
                    </p>
                  </div>
                </td>
                <td>
                  <div class="separate-2">
                    <div class="name-text">{{ child.bankName }}</div>
                    <!--                      <p class="text-block-76" v-if="items.transactionStatus === 'VERIFIED'">{{items.transactionStatus}}</p>-->
                    <!--                      <p class="text-block-77" v-else>{{items.transactionStatus}}</p>-->
                  </div>
                </td>
                <td>
                  <div class="separate-2">
                    <div class="name-text">{{child.To}}</div>
                  </div>
                </td>
                <td>
                  <div class="separate-2">
                    <div class="name-text">{{child.desc}}</div>
                  </div>
                </td>
                <td>
                  <div class="separate-3">
                    <p class="amount-text">{{formattedDate(child.createdAt)}}</p>
                  </div>
                </td>
              </tr>

              </tbody>

            </table>

            <div class="pagination">
              <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
              <div class="page-indicator">
                Page {{ currentPage }} of {{ totalPages }}
              </div>
              <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
            </div>
          </div>

        </div>

        <div v-else  class="empty-state">
          <img src="@/assets/images/Empty-Illustration.svg" loading="lazy" alt="">
          <div>You have no transactions yet!</div>
        </div>
      </div>


    </div>
  </div>
</dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import NavBar from "@/components/DashBoard/NavBar.vue";
import TransactionFilterCard from "@/components/DashBoard/TransactionFilterCard.vue";
import {database, db} from "@/firebase/config";
import {onValue, ref, orderByChild, query} from "firebase/database";
import {collection, getDocs} from "firebase/firestore";
// import {collection, getDocs} from "firebase/firestore";
// import {db} from "@/firebase/config";

export default {
  name: "TransactionView",
  components: {
    TransactionFilterCard,
    NavBar,
    DashboardLayout
  },
  data() {
    return {
      contacts2: [],
      amountCAD: "",
      amountNGN: "",
      currentPage: 1,
      itemsPerPage: 10,
      contacts: [],
      history: [],
    };
  },
  computed: {
    userData() {
      return this.$store.getters.getUserData;
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.history.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.history.length / this.itemsPerPage);
    },

  },
  methods: {
    formattedDate(dateValue) {
      const date = new Date(dateValue);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    },
    // convertCADtoNGN() {
    //   this.amountNGN = this.amountCAD * this.activeRate.data[1].rateSell;
    // },
    // convertNGNtoCAD() {
    //   this.amountCAD = this.amountNGN / this.activeRate.data[0].rateSell;
    // },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    goToPage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
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
  async created() {
    const myUserId = localStorage.getItem('userUid');
    const HistoryRef = query(ref(database, myUserId + "/Transactions", orderByChild('createdAt')));
    onValue(HistoryRef, (snapshot) => {
      let _history = [];
      snapshot.forEach((child) => {
        const key = child.key;
        const data = child.val()
        _history.push({
          key: key,
          To: data.To,
          Amount: data.Amount,
          bankName: data.bankName,
          accountNumber: data.accountNumber,
          routingNumber: data.routingNumber,
          transactionType: data.transactionType,
          desc: data.desc,
          createdAt: data.createdAt,
        })
      })
      this.history = _history;
    })

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
  mounted() {

  },
}
</script>

<style scoped>

.separate-1{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.separate-2{
  display: block;
  padding-left: 3%;
}

.separate-3{
  padding-left: 10%;
}

.bx-log-in-circle{
  color: #0aae43;
  font-size: 32px;
  font-weight: 300;
}

.bx-log-out-circle{
  color: #DB657B;
  font-size: 32px;
  font-weight: 300;
}
.pending{
  color: #FFBF00;
}
.name-text{
  text-transform: lowercase;
  font-size: 12px;
}
.amount-text{
  font-size: 11px;
}

.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
}

.previous{
  /*display: flex;*/
  /*align-content: center;*/
  /*align-items: center;*/
  text-align: center;
  /*padding: 8px 14px;*/
  gap: 8px;
  font-size: 12px;
  width: 120px;
  height: 32px;
  background: transparent;
  color: #101828;
  border: 1px solid rgba(26, 29, 39, 0.05);
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.previous:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.page-indicator{
  color: #667085;
  font-weight: 200;
  font-size: 15px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tr{
  border-bottom: 1px solid rgba(26, 29, 39, 0.05);
  width: 100%;
}

th {
  /*background-color: #F9FBFD;*/
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  /*color: #667085;*/
  text-align: center;
  width: 100%;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 15px 0;
  /*letter-spacing: 1px;*/
  color: #667085;
  font-weight: 200;
  font-size: 20px;
  min-width: 50px;
  max-width: 200px;
  /*border-bottom: 1px solid #E3EBF6;*/
}

td::first-letter {
  text-transform: capitalize;
}

.transaction-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 680px;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

@media (max-width: 500px) {
  .page-indicator{
    font-size: 11px;
  }
  .previous{
    font-size: 11px;
    width: 105px;
    height: 31px;
  }
  .name-text {
    font-size: 10px;
    width: 100%;
  }
  .amount-text {
    font-size: 10px;
    font-weight: 700;
    width: 100%;
  }

  .bx-log-in-circle{
    font-size: 22px;
    margin-right: unset;
    padding-right: unset;
  }

  .bx-log-out-circle{
    font-size: 22px;
    margin-right: unset;
    padding-right: unset;
  }

}

</style>