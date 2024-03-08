import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/checking',
    name: 'checking',
    component: () => import(/* webpackChunkName: "checking" */ '../views/CheckingView.vue')
  },
  {
    path: '/saving',
    name: 'saving',
    component: () => import(/* webpackChunkName: "saving" */ '../views/SavingsView.vue')
  },
  {
    path: '/iraview',
    name: 'iraview',
    component: () => import(/* webpackChunkName: "iraview" */ '../views/IraView.vue')
  },
  {
    path: '/vehicleLoans',
    name: 'vehicleLoans',
    component: () => import(/* webpackChunkName: "vehicleLoans" */ '../views/VehicleLoansView.vue')
  },
  {
    path: '/personalLoans',
    name: 'personalLoans',
    component: () => import(/* webpackChunkName: "personalLoans" */ '../views/PersonalLoansView.vue')
  },
  {
    path: '/mortgagesView',
    name: 'mortgagesView',
    component: () => import(/* webpackChunkName: "mortgagesView" */ '../views/MortgagesView.vue')
  },
  {
    path: '/studentLoan',
    name: 'studentLoan',
    component: () => import(/* webpackChunkName: "studentLoan" */ '../views/StudentLoanView.vue')
  },
  {
    path: '/wealthManagementView',
    name: 'wealthManagementView',
    component: () => import(/* webpackChunkName: "wealthManagementView" */ '../views/WealthManagementView.vue')
  },
  {
    path: '/individualRetirementView',
    name: 'individualRetirementView',
    component: () => import(/* webpackChunkName: "individualRetirementView" */ '../views/IndividualRetirementView.vue')
  },
  {
    path: '/GuidesView',
    name: 'GuidesView',
    component: () => import(/* webpackChunkName: "GuidesView" */ '../views/GuidesView.vue')
  },
  {
    path: '/ResourcesView',
    name: 'ResourcesView',
    component: () => import(/* webpackChunkName: "ResourcesView" */ '../views/ResourcesView.vue')
  },
  {
    path: '/FaqView',
    name: 'FaqView',
    component: () => import(/* webpackChunkName: "FaqView" */ '../views/FaqView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contactView',
    name: 'contactView',
    component: () => import(/* webpackChunkName: "contactView" */ '../views/ContactView.vue')
  },
  {
    path: '/openView',
    name: 'openView',
    component: () => import(/* webpackChunkName: "openView" */ '../views/OpenView.vue')
  },
  {
    path: '/loanView',
    name: 'loanView',
    component: () => import(/* webpackChunkName: "loanView" */ '../views/LoanView.vue')
  },

  {
    path: '/loginWithEmail',
    name: 'loginWithEmail',
    component: () => import(/* webpackChunkName: "loginWithEmail" */ '../views/Auth/LoginWithEmail.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: () => import(/* webpackChunkName: "forgotPassword" */ '../views/Auth/ForgotPassword.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/forgotPasswordVerifyEmail',
    name: 'forgotPasswordVerifyEmail',
    component: () => import(/* webpackChunkName: "forgotPasswordVerifyEmail" */ '../views/Auth/ForgotPasswordVerifyEmail.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/setNewPassword',
    name: 'setNewPassword',
    component: () => import(/* webpackChunkName: "setNewPassword" */ '../views/Auth/SetNewPassword.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/passwordResetSuccessful',
    name: 'passwordResetSuccessful',
    component: () => import(/* webpackChunkName: "passwordResetSuccessful" */ '../views/Auth/PasswordResetSuccessful.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/loginSuccess',
    name: 'loginSuccess',
    component: () => import(/* webpackChunkName: "loginSuccess" */ '../views/Auth/LoginSuccess.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/signUpEmail',
    name: 'signUpEmail',
    component: () => import(/* webpackChunkName: "signUpEmail" */ '../views/Auth/SignUpEmail.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/signUpDetails',
    name: 'signUpDetails',
    component: () => import(/* webpackChunkName: "signUpDetails" */ '../views/Auth/SignUpDetails.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/verifyEmailAddress',
    name: 'verifyEmailAddress',
    component: () => import(/* webpackChunkName: "verifyEmailAddress" */ '../views/Auth/VerifyEmailAddress.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/accountCreatedSuccessfully',
    name: 'accountCreatedSuccessfully',
    component: () => import(/* webpackChunkName: "accountCreatedSuccessfully" */ '../views/Auth/AccountCreatedSuccessfully.vue'),
    meta: { hideNavigation: true }
  },

  {
    path: '/homeView',
    name: 'homeView',
    component: () => import(/* webpackChunkName: "HomeView" */ '../views/DashBoard/HomeView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/transactionView',
    name: 'transactionView',
    component: () => import(/* webpackChunkName: "transactionView" */ '../views/DashBoard/TransactionView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/actionView',
    name: 'actionView',
    component: () => import(/* webpackChunkName: "actionView" */ '../views/DashBoard/ActionView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/referalHomeView',
    name: 'referalHomeView',
    component: () => import(/* webpackChunkName: "referalHomeView" */ '../views/DashBoard/ReferalHomeView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/settingsView',
    name: 'settingsView',
    component: () => import(/* webpackChunkName: "settingsView" */ '../views/DashBoard/SettingsView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/accountView',
    name: 'accountView',
    component: () => import(/* webpackChunkName: "accountInfoView" */ '../views/DashBoard/AccountView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/loginAndSecurity',
    name: 'loginAndSecurity',
    component: () => import(/* webpackChunkName: "loginAndSecurity" */ '../views/DashBoard/LoginAndSecurity.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/fundWalletView',
    name: 'fundWalletView',
    component: () => import(/* webpackChunkName: "fundWalletView" */ '../views/DashBoard/FundWalletView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/accountFundingView',
    name: 'accountFundingView',
    component: () => import(/* webpackChunkName: "accountFundingView" */ '../views/DashBoard/AccountFundingView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/accountFundingView2',
    name: 'accountFundingView2',
    component: () => import(/* webpackChunkName: "accountFundingView" */ '../views/DashBoard/AccountFundingView2.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/sendMoneyView',
    name: 'sendMoneyView',
    component: () => import(/* webpackChunkName: "sendMoneyView" */ '../views/DashBoard/SendMoneyView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/addRecipientView',
    name: 'addRecipientView',
    component: () => import(/* webpackChunkName: "addRecipientView" */ '../views/DashBoard/AddRecipientView.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/transferAmountView',
    name: 'transferAmountView',
    component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/TransferAmountView.vue'),
    meta: { hideNavigation: true }
  },

  // {
  //   path: '/peerToPeerView',
  //   name: 'peerToPeerView',
  //   component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/PeerToPeerView.vue'),
  //   meta: { hideNavigation: true }
  // },
  // {
  //   path: '/peerToPeerView2',
  //   name: 'peerToPeerView2',
  //   component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/PeerToPeerView2.vue'),
  //   meta: { hideNavigation: true }
  // },
  // {
  //   path: '/spotView',
  //   name: 'spotView',
  //   component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/SpotView.vue'),
  //   meta: { hideNavigation: true }
  // },
  // {
  //   path: '/orderDetail',
  //   name: 'orderDetail',
  //   component: () => import(/* webpackChunkName: "transferAmountView" */ '../views/DashBoard/OrderDetail.vue'),
  //   meta: { hideNavigation: true }
  // },

  {
    path: '/admin',
    name: 'dashBoardAdminLogin',
    component: () => import(/* webpackChunkName: "dashBoardAdminLogin" */ '../views/Admin/DashBoardAdminLogin.vue'),
    meta: { hideNavigation: true }
  },

  {
    path: '/dashBoard-side-bar-admin',
    name: 'dashBoardSideBarAdmin',
    component: () => import(/* webpackChunkName: "dashBoardSideBarAdmin" */ '../views/Admin/DashBoardSideBarAdmin.vue'),
    meta: { hideNavigation: true },
    redirect: { name: 'listOfUsers' },
    children: [
      {
        path: "/list-of-users",
        name: "listOfUsers",
        component: () =>
            import(/* webpackChunkName: "listOfUsers" */ "../views/Admin/ListOfUsers.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/add-new-account",
        name: "addNewAccount",
        component: () =>
            import(/* webpackChunkName: "listOfUsers" */ "../views/Admin/AddNewAccount.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/investments-list",
        name: "investmentsList",
        component: () =>
            import(/* webpackChunkName: "investmentsList" */ "../views/Admin/InvestmentsList.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/edit-balance",
        name: "editBalance",
        component: () =>
            import(/* webpackChunkName: "investmentsList" */ "../views/Admin/EditBalance.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/addTransactions",
        name: "addTransactions",
        component: () =>
            import(/* webpackChunkName: "investmentsList" */ "../views/Admin/AddTransactions.vue"),
        meta: { hideNavigation: true }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
