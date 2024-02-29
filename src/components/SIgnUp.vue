<template>
  <h1>新規登録</h1>
  <form>
    <input type="text" id="email" v-model="email" placeholder="email">
    <input type="password" id="password" v-model="password" placeholder="password">
    <button value="新規登録" @click="handleSignUp">新規登録</button>
  </form>
  <p>既にアカウントをお持ちの方は<router-link to="/">こちら</router-link>へ</p>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from '../firebase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default{
  name: 'SignUp',
  setup() {
    const email = ref('');
    const password = ref('');
    const currentUser = ref(null);
    const router = useRouter();


    const handleSignUp = async() => {
      try {
        const credentialUser = await createUserWithEmailAndPassword(auth, email.value, password.value)
        currentUser.value = credentialUser.user;
        router.push("/top");
      }catch(error) {
        console.log('ユーザー登録できませんでした', error)
      }
    }
    return { email, password, handleSignUp }
  }
}
</script>

<style>

</style>