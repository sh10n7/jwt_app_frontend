<template>
  <h1>新規登録</h1>
  <input type="text" id="email" v-model="email" placeholder="email">
  <input type="password" id="password" v-model="password" placeholder="password">
  <button value="新規登録" @click="handleSignUp">新規登録</button>
  <p>既にアカウントをお持ちの方はこちらへ</p>
</template>

<script>
export default{
  name: 'SignUp',
}
</script>

<style>

</style>