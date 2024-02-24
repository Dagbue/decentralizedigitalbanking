<template>
  <section id="SetupCard" class="dashboard-section-wrapper">
    <div class="margin-bottom margin-medium">
      <div class="margin-bottom margin-small">

        <div v-if =" this.contacts.checkingBalance > 0 && this.contacts.isPinSet === 'Yes' && this.contacts.firstName != null" class="dashboard-section-header">
          <div class="text-style-allcaps">Complete setup (3/3)</div>
          <div class="kyc-progress-bar-full">
            <div class="progress-indicator"></div>
          </div>
        </div>

        <div v-else-if = "this.contacts.firstName != null && this.contacts.isPinSet === 'Yes'" class="dashboard-section-header">
          <div class="text-style-allcaps">Complete setup (2/3)</div>
          <div class="kyc-progress-bar-fifty">
            <div class="progress-indicator"></div>
          </div>
        </div>

        <div v-else-if = "this.contacts.firstName != null && this.contacts.checkingBalance > 0" class="dashboard-section-header">
          <div class="text-style-allcaps">Complete setup (2/3)</div>
          <div class="kyc-progress-bar-fifty">
            <div class="progress-indicator"></div>
          </div>
        </div>

        <div v-else-if ="this.contacts.firstName != null || this.contacts.isPinSet === 'No' || this.contacts.checkingBalance === 0" class="dashboard-section-header">
          <div class="text-style-allcaps">Complete setup (1/3)</div>
          <div class="kyc-progress-bar-twenty-five">
            <div class="progress-indicator"></div>
          </div>
        </div>

        <div v-else class="dashboard-section-header">
          <div class="text-style-allcaps">Complete setup (0/3)</div>
          <div class="kyc-progress-bar">
            <div class="progress-indicator"></div>
          </div>
        </div>

      </div>

      <div class="kyc-wrapper">


        <router-link to="/settingsView">
          <a class="setup-link w-inline-block">
            <div class="setup-title-wrapper"><img src="@/assets/images/KYC.svg" loading="lazy" alt="">
              <div class="setup-title">
                <div class="text-block-50">KYC Status</div>
                <div class="text-block-51">Complete your verification process</div>
              </div>
            </div>
            <!--                    <div class="checkmark active"><img src="@/assets/images/Component-1.svg" loading="lazy" alt=""></div>-->
            <div class="checkmark active" v-if="this.contacts.firstName != null"><img src="@/assets/images/Component-1.svg" loading="lazy" alt=""></div>
<!--            <div class="checkmark pending" v-else-if="this.userInfo.customerKycStatus === 'PENDING'"><img src="@/assets/images/Component-1.svg" loading="lazy" alt=""></div>-->
<!--            <div class="checkmark failed" v-else-if="this.userInfo.customerKycStatus === 'FAILED'"><img src="@/assets/images/Component-1.svg" loading="lazy" alt=""></div>-->
            <div class="checkmark" v-else></div>
          </a>
        </router-link>
        <div class="divider"></div>
        <router-link to="/loginAndSecurity">
          <a class="setup-link w-inline-block">
            <div class="setup-title-wrapper">
              <i class='bx bx-lock'></i>
              <div class="setup-title">
                <div class="text-block-50">Set Pin</div>
                <div class="text-block-51">Setup your pin to start transacting</div>
              </div>
            </div>
            <div class="checkmark active" v-if="this.contacts.isPinSet === 'Yes'"><img src="@/assets/images/Component-1.svg" loading="lazy" alt=""></div>
            <div class="checkmark" v-else ></div>

          </a>
        </router-link>

        <div class="divider"></div>

        <router-link to="/fundWalletView">
          <a class="setup-link w-inline-block">
            <div class="setup-title-wrapper"><img src="@/assets/images/Group-48095688.png" loading="lazy" width="45" alt="">
              <div class="setup-title">
                <div class="text-block-50">Deposit</div>
                <div class="text-block-51">Deposit into your account</div>
              </div>
            </div>
            <div class="checkmark active" v-if="this.contacts.checkingBalance > 0"><img src="@/assets/images/Component-1.svg" loading="lazy" alt=""></div>
            <div class="checkmark" v-else></div>
          </a>
        </router-link>
      </div>

    </div>
  </section>
</template>

<script>
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase/config";

export default {
  name: "SetupCard",
  data(){
    return {
      contacts: [],
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
        'accountStatus': doc.data().accountStatus,
        'createdAt': doc.data().createdAt
      }
      this.contacts = data
    });

  },

  computed:{

  },

}
</script>

<style scoped >
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.bx-lock{
  color: rgba(1, 103, 91, 0.8);
  font-size: 39px;
  padding-right: 4px;
}
</style>