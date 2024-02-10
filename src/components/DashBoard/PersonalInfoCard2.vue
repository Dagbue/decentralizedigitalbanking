<!--suppress ALL -->
<template>
  <section id="PersonalInfoCard" class="personal-info-wrapper">
    <div class="header">
      <div class="margin-bottom margin-xxsmall">
        <div class="text-block-53">Account information</div>
      </div>
      <div class="text-block-54">Update your account details here.</div>
    </div>
    <div class="form-body">
      <div class="w-form">


        <form  id="email-form" name="email-form" data-name="Email Form" method="get">
          <!--          <div class="name-wrapper">-->
          <!--            <div class="left">-->
          <!--              <label for="name-2">First name</label>-->
          <!--              &lt;!&ndash;                                <input type="text" class="input-field set w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2">&ndash;&gt;-->
          <!--              <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.FirstName}}</p>-->
          <!--            </div>-->
          <!--            <div class="right">-->
          <!--              <label for="name-4">Last name</label>-->
          <!--              &lt;!&ndash;                                <input type="text" class="input-field set w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="" id="name-3">&ndash;&gt;-->
          <!--              <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.LastName}}</p>-->
          <!--            </div>-->
          <!--          </div>-->
          <div class="email-wrapper">
            <label for="name">Account Name</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name" data-name="Name" placeholder="" id="name">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.firstName}} {{this.contacts.lastName}}</p>
          </div>
          <div class="email-wrapper">
            <label for="name">Account Type</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name" data-name="Name" placeholder="" id="name">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.accType}}</p>
          </div>
          <div class="email-wrapper">
            <label for="name">Account Number</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name" data-name="Name" placeholder="" id="name">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.accNumber}}</p>
          </div>
          <div class="email-wrapper">
            <label for="name-4">Account Tier</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.accTier}}</p>

          </div>
          <div class="email-wrapper">
            <label for="name-6">SSN/Tax ID</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name-6" data-name="Name 6" placeholder="" id="name-6">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.ssn}}</p>
          </div>
          <div class="email-wrapper">
            <label for="name-5">Date of birth</label>
            <!--                              <input type="text" class="input-field set w-input" maxlength="256" name="name-5" data-name="Name 5" placeholder="" id="name-5">-->
            <p class="input-field set w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Account Name" id="field-3">{{this.contacts.dob}}</p>
          </div>

          <div class="notice">
            <label for="name-7" class="field-label-2">NOTE:</label>
            <label for="name-7" class="field-label">You are unable to edit this profile because your account has been verified. If you feel that you need to edit, please reach out to the support team.</label>
          </div>
        </form>

        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";

export default {
  name: "PersonalInfoCard2",
  data(){
    return {
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

  mounted() {

  },
}
</script>

<style scoped >
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.header {
  margin-bottom: 1rem;
}

.name-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.left {
  width: 47%;
}

.right {
  width: 47%;
}

.input-field.set {
  margin-top: 0.5rem;
}

.email-wrapper {
  margin-top: 1rem;
}

.tabs {
  padding-bottom: 3rem;
}

.notice {
  margin-top: 1rem;
  padding: 14px;
  border-radius: 8px;
  background-color: #eaecf0;
}

.field-label {
  color: #475467;
  text-transform: lowercase;
}

.field-label-2 {
  color: #1a1d27;
}

.w-form {
  margin: 0 0 15px;
}
.w-form-done {
  display: none;
  padding: 20px;
  text-align: center;
  background-color: #dddddd;
}
.w-form-fail {
  display: none;
  margin-top: 10px;
  padding: 10px;
  background-color: #ffdede;
}
</style>