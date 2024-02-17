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

          <div class="margin-bottom margin-small">
            <div class="dashboard-section-header">
              <div style="margin-top: 3%; margin-bottom: 3%" class="text-style-allcaps">Your Accounts</div>
              <div @click="onPostClick" class="sep">
<!--                <div class="progress-indicator"></div>-->
                <i class='bx bx-transfer'></i>
                <p>Transfer</p>
              </div>
            </div>
          </div>

          <div class="kyc-wrapper">


            <router-link to="">
              <a class="setup-link w-inline-block">
                <div class="setup-title-wrapper"><img src="@/assets/images/KYC.svg" loading="lazy" alt="">
                  <div class="setup-title">
                    <div class="text-block-50">Free Checking 2</div>
                    <div class="text-block-51">Available</div>
                  </div>
                </div>
                <div class="setup-title">
                  <div class="text-block-50">&#36;{{formatNumber(this.contacts.checkingBalance)}}.00</div>
                </div>
              </a>
            </router-link>
            <div class="divider"></div>

            <router-link to="">
              <a class="setup-link w-inline-block">
                <div class="setup-title-wrapper"><img src="@/assets/images/KYC.svg" loading="lazy" alt="">
                  <div class="setup-title">
                    <div class="text-block-50">Primary Savings 1</div>
                    <div class="text-block-51">Available</div>
                  </div>
                </div>
                <div class="setup-title">
                  <div class="text-block-50">&#36;{{formatNumber(this.contacts.savingBalance)}}.00</div>
                </div>
              </a>
            </router-link>

            <div class="divider"></div>
            <router-link to="">
              <a class="setup-link w-inline-block">
                <div class="setup-title-wrapper"><img src="@/assets/images/KYC.svg" loading="lazy" alt="">
                  <div class="setup-title">
                    <div class="text-block-50">DDB IRA</div>
                    <div class="text-block-51">Available</div>
                  </div>
                </div>
                <div class="setup-title">
                  <div class="text-block-50">&#36;{{formatNumber(this.contacts.IRABalance)}}.00</div>
                </div>
              </a>
            </router-link>
          </div>

        </div>

        <div >
          <div class="margin-bottom margin-small">
            <div class="dashboard-section-header">
              <div style="margin-top: 2%; margin-bottom: 2%" class="text-style-allcaps">Transactions</div>
            </div>
          </div>
<!--          <div class="forth-section">-->

<!--            <div class="form-group fg&#45;&#45;search">-->
<!--              <button type="submit"><i class="fa fa-search"></i></button>-->
<!--              <input type="text" class="input" placeholder="search"/>-->
<!--            </div>-->

<!--            <div class="action">-->
<!--              <div class="action-content">-->
<!--                <img src="@/assets/Export.svg"  alt="Export"/>-->
<!--                <p>Export</p>-->
<!--              </div>-->

<!--&lt;!&ndash;              <div class="action-content">&ndash;&gt;-->
<!--&lt;!&ndash;                <img src="@/assets/Filterslines.svg"  alt="Export"/>&ndash;&gt;-->
<!--&lt;!&ndash;                <p>Sort</p>&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->

<!--              <div class="action-content">-->
<!--                <img src="@/assets/FunnelSimple.svg"  alt="Export"/>-->
<!--                <p>Filter</p>-->
<!--              </div>-->

<!--            </div>-->

<!--          </div>-->

          <div  class="transactions-wrapper padding-custom2">

            <div v-if="this.history.length > 0"  class="transaction-state">

              <div class="transactions _1 w-inline-block">

                <!--                  <div class="txn-details" style="justify-content: space-between" v-for="items in this.paginatedItems" :key="items.key">-->

                <!--                    <div class="separate-1">-->
                <!--                      <p>-->
                <!--                        <i class='bx bx-log-in-circle' v-if="items.drCr === 'CR'"></i>-->
                <!--                        <i class='bx bx-log-out-circle' v-if="items.drCr === 'DR'" ></i>-->
                <!--                      </p>-->
                <!--                    </div>-->

                <!--                    <div class="separate-2">-->
                <!--                      <div class="name-text">{{userInfo.customerFirstName}} {{userInfo.customerLastName}}</div>-->
                <!--&lt;!&ndash;                      <p class="text-block-76" v-if="items.transactionStatus === 'VERIFIED'">{{items.transactionStatus}}</p>&ndash;&gt;-->
                <!--&lt;!&ndash;                      <p class="text-block-77" v-else>{{items.transactionStatus}}</p>&ndash;&gt;-->
                <!--                    </div>-->

                <!--                    <div class="separate-3">-->
                <!--                      <p class="amount-text" >{{ items.amount | formatAmount }}-->
                <!--                        <span v-if="items.accountNumber === accountCAD">CAD</span>-->
                <!--                        <span v-if="items.accountNumber === accountNaira">NG</span>-->
                <!--                      </p>-->

                <!--                    </div>-->

                <!--                    <div class="separate-3">-->
                <!--                      <p class="amount-text">{{items.eventDate | formatDate }}</p>-->
                <!--                    </div>-->

                <!--                  </div>-->

                <table>

                  <tbody v-for="child in paginatedItems" :key="child.key">

                  <tr >
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
                        <!--                      <p class="text-block-76" v-if="items.transactionStatus === 'VERIFIED'">{{items.transactionStatus}}</p>-->
                        <!--                      <p class="text-block-77" v-else>{{items.transactionStatus}}</p>-->
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

            <section  v-else id="EmptyStateCard" class="empty-state">
              <img src="@/assets/images/Frame-162940.png" loading="lazy" width="40" alt="">
              <div class="margin-top margin-small">
                <div class="empty-state-text">You have no transaction yet. When you do, it&#x27;ll show up here.</div>
              </div>
            </section>

          </div>


        </div>

      </div>



    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";
import NavBar from "@/components/DashBoard/NavBar.vue";
import {collection, getDocs} from "firebase/firestore";
import {auth, database, db} from "@/firebase/config";
import {onValue, ref} from "firebase/database";

export default {
  name: "ActionView",
  components: {NavBar, DashboardLayout},
  data(){
    return {
      userData2: "account1",
      userData3: "account2",
      userData4: "account3",
      contacts: [],
      amountCAD: "",
      amountNGN: "",
      currentPage: 1,
      itemsPerPage: 5,
      history: [],
    }
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
    onPostClick() {
      this.$router.push("/sendMoneyView");
    },
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
    const myUserId = auth.currentUser.uid;
    const HistoryRef = ref(database, myUserId + "/Transactions");
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
.bx-lock{
  color: #DCDCDC;
  font-size: 39px;
  padding-right: 4px;
}
.sep{
  display: flex;
  align-items: center;
  align-content: center;
  background-color: rgba(1, 103, 91, 1);
  color: #FFFFFF;
  padding: 6px 30px;
  border-radius: 5px;
}

.fg--search {
  background: white;
  position: relative;
  width: 400px;
}
.fg--search input {
  width: 100%;
  padding: 10px;
  padding-left: 15px;
  display: block;
  border: 1px solid #d0d5dd;
  border-radius: 6px;
}

.fg--search button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 10px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin-top: 5px;
}

.fa-search{
  color: #071333;
  margin-right: 10px;
}

.forth-section{
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}

.action{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}

.action-content{
  display: flex;
  align-items: center;
  align-content: center;
  padding: 8px 14px;
  gap: 8px;
  width: 99px;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #d0d5dd;
  border-radius: 4px;
  margin-right: 15px;
  margin-left: 15px;
}

.action-content p {
  color: #071333;
  font-size: 13px;
}

.action-content-btn{
  display: flex;
  align-items: center;
  align-content: center;
  padding: 8px 14px;
  gap: 8px;
  width: 126px;
  height: 36px;
  /* Primary/600 */
  background: #1570EF;
  /* Primary/600 */
  border: 1px solid #1570EF;
  /* Shadow/xs */
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  margin-right: 13px;
}

.bx-plus{
  color: #FFFFFF;
}

.action-content-btn p{
  color: #FFFFFF;
  font-size: 13px;
}

.action-content-switch{
  display: flex;
  align-items: center;
  align-content: center;
  border: 1px solid #E3EBF6;
  border-radius: 5px;
  color: #667085;
  padding: 10px 20px 10px 15px;
}

.bx-list-ul{
  padding-right: 15%;
}

.bx-grid-alt{
  padding-left: 15%;
}

h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.name-text{
  text-transform: lowercase;
}

.separate-1{
  /*padding-left: 2%;*/
}

.separate-2{
  display: block;
  /*padding-left: 8.5%;*/
  /*margin-top: 2%;*/
}

.separate-3{
  /*padding-left: 3%;*/
}

.bx-log-in-circle{
  color: #0aae43;
  font-size: 25px;
  font-weight: 300;
}

.bx-log-out-circle{
  color: #DB657B;
  font-size: 25px;
  font-weight: 300;
}

.pending{
  color: #FFBF00;
}

.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
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
}

th {

  /*background-color: #F9FBFD;*/
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  /*color: #667085;*/
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 15px 8px;
  /*letter-spacing: 1px;*/
  color: #667085;
  font-weight: 200;
  font-size: 15px;
  /*border-bottom: 1px solid #E3EBF6;*/
}

td::first-letter {
  text-transform: capitalize;
}

.bx-transfer{
  margin-right: 5px;
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
  }

  .bx-log-out-circle{
    font-size: 22px;
  }

}

</style>