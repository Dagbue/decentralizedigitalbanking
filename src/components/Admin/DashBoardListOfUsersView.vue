<template>
  <div class="alpha">
    <div class="body">
      <h2>List of Users</h2>
      <div class="row trans-mgt">
        <div class="form-group fg--search">
          <button type="submit"><i class="fa fa-search"></i></button>
          <input type="text" class="input" placeholder="Search User List..."/>
        </div>
        <div class="row filter_group">
          <!--          <div class="blue">Download transactions</div>-->
          <div class="action-content">
            <img src="@/assets/Filterslines.svg"  alt="Export"/>
            <p>Filter</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-5">
      <div class="empty-state" v-if="this.contacts.length === 0" >
        <img src="@/assets/empty.svg" alt="empty">
        <p class="empty-state-text-1">You have nothing to see</p>
        <p class="empty-state-text-2">This is where your list of users will appear</p>
        <!--        <p class="empty-state-text-3">-->
        <!--          <i class='bx bx-plus' ></i>-->
        <!--          Transaction-->
        <!--        </p>-->
      </div>

      <div class="table" v-if="this.contacts.length >0">
          <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Password</th>
            <th>Date Created</th>
            <th>Account Status</th>
          </tr>

          <tbody v-for="child in paginatedItems" :key="child.key">
          <tr>
              <td>{{child.firstName}}</td>
              <td>{{child.lastName}}</td>
              <td>{{child.email}}</td>
              <td>{{child.country}}</td>
              <td>{{child.password}}</td>
              <td>{{child.createdAt.toDate().toDateString()}}</td>
            <td>{{child.accountStatus}}</td>
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

        <form>
          <p class="header">Update Account Status</p>
          <div class="fields-alpha-2">
            <label class="fields-alpha-2-label">Select Email</label>
            <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>
              <option v-for="option in contacts" :key="option" :value="option.email" >
                {{ option.email }}
              </option>
            </select>
            <p class="btn" @click="active">Active</p>
            <p class="btn" @click="pending">Pending</p>
            <p class="btn" @click="blocked">Blocked</p>
          </div>
        </form>

      </div>

    </div>
  </div>
</template>

<script>
import {collection, getDocs, doc, setDoc} from "firebase/firestore";
import {auth, db} from "@/firebase/config";
import {deleteDoc,getFirestore} from "@firebase/firestore";
import Swal from "sweetalert2";
export default {
  name: "DashBoardListOfUsersView",
  data()  {
    return {
      contacts: [],
      SelectEmail: "",
      currentPage: 1,
      itemsPerPage: 7,
      accountStatus1: "active",
      accountStatus2: "pending",
      accountStatus3: "blocked",
    }
  },
  computed:{
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.contacts.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.contacts.length / this.itemsPerPage);
    },
  },

  async created() {
    const querySnapshot = await getDocs(collection(db, "listOfUsers"));
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
        'accountStatus' : doc.data().accountStatus,
        'createdAt': doc.data().createdAt
      }
      this.contacts.push(data)
    })
  },

  methods: {
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

    async update() {
      const db = getFirestore();
      const docRef = doc(db, "listOfUsers", this.SelectEmail);
      await deleteDoc(docRef)
          .then(() => {
            console.log("Entire Document has been deleted successfully.")
          })
          .catch(error => {
            console.log(error);
          })

      const docRef2 = doc(db, this.SelectEmail, "USER");
      await deleteDoc(docRef2)
          .then(async () => {
            await Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'User Deleted Successfully!',
            });
            await location.reload();
          })
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'error',
              text: error.message,
            });
          })
    },

    async update2() {
      await setDoc(doc(db, auth.currentUser.email, "USER"), {
        // accountStatus : accountStatus.value,

      },{merge: true})
          .then(() => {
            console.log('saved')
          });

      await setDoc(doc(db, "listOfUsers", auth.currentUser.email), {
        // accountStatus : accountStatus.value,
      },{merge: true})
          .then(() => {
            console.log('saved')
          });

      const docRef2 = doc(db, this.SelectEmail, "USER");
      await deleteDoc(docRef2)
          .then(async () => {
            await Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'User Deleted Successfully!',
            });
            await location.reload();
          })
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'error',
              text: error.message,
            });
          })
    },


    async active() {
      await setDoc(doc(db, this.SelectEmail, "USER"), {
        accountStatus : this.accountStatus1,

      },{merge: true})
          .then(() => {
            console.log('saved')
          });

      await setDoc(doc(db, "listOfUsers", this.SelectEmail), {
        accountStatus : this.accountStatus1,
      },{merge: true})

          .then(async () => {
            await Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'User status updated Successfully!',
            });
          })
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'error',
              text: error.message,
            });
          })
      await location.reload();
    },

    async pending() {
      await setDoc(doc(db, this.SelectEmail, "USER"), {
        accountStatus : this.accountStatus2,

      },{merge: true})
          .then(() => {
            console.log('saved')
          });

      await setDoc(doc(db, "listOfUsers", this.SelectEmail), {
        accountStatus : this.accountStatus2,
      },{merge: true})

          .then(async () => {
            await Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'User status updated Successfully!',
            });
          })
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'error',
              text: error.message,
            });
          })
      await location.reload();
    },

    async blocked() {
      await setDoc(doc(db, this.SelectEmail, "USER"), {
        accountStatus : this.accountStatus3,

      },{merge: true})
          .then(() => {
            console.log('saved')
          });

      await setDoc(doc(db, "listOfUsers", this.SelectEmail), {
        accountStatus : this.accountStatus3,
      },{merge: true})

          .then(async () => {
            await Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'User status updated Successfully!',
            });
          })
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'error',
              text: error.message,
            });
          })
      await location.reload();
    },
  }
}
</script>

<style scoped>
.body{
  padding: 32px;
}
h2{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #353542;
}
.row{
  display: flex;

}
.trans-mgt{
  margin-top: 17px;
  /* align-items: center; */
}
.filter_group{
  margin-left: auto;
  gap: 16px;
}

.white{
  display: flex;
  align-items: center;
  align-content: center;
  background-color: #FFFFFF;
  border: 1px solid #D0D5DD;
  font-size: 13px;
  padding:  6px 14px;
  border-radius: 5px;
  gap: 10px;
}
.blue{
  display: flex;
  align-items: center;
  align-content: center;
  padding: 6px 14px;
  border-radius: 5px;
  font-size: 13px;
  background-color: #1570EF;
  border: 1px solid #1570EF;
  color: #ffffff;
}

.fg--search {
  background: white;
  position: relative;
  width: 400px;
  margin-left: 1%;
}
.fg--search input {
  width: 100%;
  padding: 10px;
  padding-left: 15px;
  display: block;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
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
  color: #667085;
  margin-right: 10px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
.table{
  margin-left: 2%;
  margin-right: 3%;
}

tr{
  border: 1px solid #E3EBF6;
}

th {

  background-color: #F9FBFD;
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  color: #667085;
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

.empty-state{
  text-align: center;
  margin-top: 7%;
  margin-right: 8%;
}

.empty-state-text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #353542;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.empty-state-text-2{
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #353542;
  padding-bottom: 1.25%;
}

.empty-state-text-3{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 8px;
  width: 130px;
  margin-right: auto;
  margin-left: auto;
  height: 35px;
  background: #0765FF;
  color: #FFFFFF;
  border: 1px solid #0765FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 5px;
  font-size: 13px;
}

.empty-state-text-3:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.action-content{
  display: flex;
  align-items: center;
  align-content: center;
  padding: 8px 14px;
  gap: 8px;
  width: 88px;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  margin-right: 13px;
}

.action-content:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.action-content p {
  color: #667085;
  font-size: 13px;
}

.fields-alpha-2{
  background-color: #818a91;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 5px;
  margin-top: 2%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}

.fields-alpha-2-label{
  color: #101828;
}

.btn{
  /*margin-top: 3%;*/
  color: #ffffff;
  background-color: #01675b;
  border: 1px solid #01675b;
  padding: 5px 10px;
  /*display: block;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  text-align: center;
  width: 100px;
  font-size: 12px;
  border-radius: 5px;
  transition: all 0.3s ease-in;
}

.btn:hover{
  background-color: #ffffff;
  border: 1px solid #ffffff;
  color: #01675b;
}

select {
  width: 45%;
  padding: 4px;
  /*padding-left: 15px;*/
  display: block;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 5px;
}

.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
}

.previous{
  /*display: flex;*/
  /*align-content: center;*/
  /*align-items: center;*/
  text-align: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 12px;
  width: 100px;
  height: 30px;
  background: transparent;
  color: #667085;
  /*border: 1px solid #1570EF;*/
  border: 1px solid #E3EBF6;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.previous:hover{
  box-shadow: 0 0 5px rgba(16, 24, 40, 0.2);
}

.page-indicator{
  color: #667085;
  font-weight: 200;
  font-size: 13px;
}

.header{
  text-align: center;
  margin-top: 3%;
  font-size: 18px;
}
</style>