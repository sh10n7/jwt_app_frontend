<template>
  <div>
    <button>ログアウト</button>
    <button>マイページ</button>
  </div>
  <div>
    <form>
      <div class="form_element">
        <label for="title">タイトル</label><br>
        <input type="text" id="title">
      </div>
      <div class="form_element">
        <label for="review">感想</label><br>
        <textarea id="review"></textarea>
      </div>
      <input type="submit" value="送信">
    </form>
    <ShowList />
  </div>
</template>

<script>
import ShowList from './ShowList.vue';

export default {
  name: 'TopComp',
  components: {
    ShowList
  },
}
</script>

<style>
form {
  margin: 24px auto;
}
</style>