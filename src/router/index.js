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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
