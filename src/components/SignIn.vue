<template>
  <h1>ログイン</h1>
  <input type="text" id="email" v-model="email" placeholder="email">
  <input type="password" id="password" v-model="password" placeholder="password">
  <button value="新規登録" @click="handleSignIn">ログイン</button>
  <p>アカウント作成がお済みでない場合は、こちらへ</p>
</template>

<script>
export default{
  name: 'SignIn',
}
</script>

<style>

</style>