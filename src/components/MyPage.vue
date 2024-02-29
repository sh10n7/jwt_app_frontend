<template>
  <h1>マイページ</h1>
  <h2>投稿一覧</h2>
  <ShowList />
</template>

<script>
import ShowList from './ShowList.vue';
export default {
  name: 'MyPage',
  components:{
    ShowList
  }
}
</script>


<style>
</style>