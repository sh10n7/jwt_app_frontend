
import { createRouter, createWebHistory } from 'vue-router';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue';
import TopComp from '../components/Top.vue';
import MyPage from '../components/MyPage.vue';
const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/top',
    name: 'TopComp',
    component: TopComp,
    meta: { requiresAuth: true } // このルートは認証が必要であるという明記。
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
export default router;