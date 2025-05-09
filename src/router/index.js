import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue'; // path must be correct
import UserManagementView from '../views/UserManagementView.vue'; // path must be correct
import AccountView from '../views/AccountView.vue';
import UserDetailsView from '../views/UserDetailsView.vue';
import UserEditView from '../views/UserEditView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import SubscriptionTiersView from '../views/SubscriptionTiersView.vue';
import PurchasedUsers from '../views/PurchasedUsers.vue';
import AirdropTasks from '../views/AirdropTasks.vue';
import AirdropTaskCompleted from '../views/AirdropTaskCompleted.vue';
import AirdropUsers from '../views/AirdropUsers.vue';
import Ranking from '../views/Ranking.vue';
import RankingProfiles from '../views/RankingProfiles.vue';
import Withdrawal from '../views/Withdrawal.vue';
import TradingCapital from '../views/TradingCapital.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/users',
    name: 'UserManagementView',
    component: UserManagementView,
  },
  {
    path: '/user-details',
    name: 'UserDetailsView',
    component: UserDetailsView,
  },
  {
    path: '/user-edit',
    name: 'UserEditView',
    component: UserEditView,
  },
  {
    path: '/subscription',
    name: 'SubscriptionTiersView',
    component: SubscriptionTiersView,
  },

  {
    path: '/account',
    name: 'AccountView',
    component: AccountView,
  },

  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
    meta: { requiresLayout: false },
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView,
    meta: { requiresLayout: false },
  },
  // other routes...
  {
    path: '/subscription/:planId',
    name: 'PurchasedUsers',
    component: PurchasedUsers,
  },
  {
    path: '/airdrop/',
    name: 'AirdropTasks',
    component: AirdropTasks,
  },
  {
    path: '/airdrop/:planId',
    name: 'AirdropTaskCompleted',
    component: AirdropTaskCompleted,
  },  
  {
    path: '/airdrop-user',
    name: 'AirdropUsers',
    component: AirdropUsers,
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: Ranking,
  },
  {
    path: '/ranking-profile',
    name: 'RankingProfile',
    component: RankingProfiles,
  },
  {
    path: '/withdrawal',
    name: 'Withdrawal',
    component: Withdrawal,
  },
  {
    path: '/trading-capital',
    name: 'TradingCapital',
    component: TradingCapital,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
