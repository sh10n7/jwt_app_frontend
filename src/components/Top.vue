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
    <showList />
  </div>
</template>

<script>
import showList from './showList.vue';

export default {
  name: 'TopComp',
  components: {
    showList
  },
}
</script>

<style>
form {
  margin: 24px auto;
}
</style>