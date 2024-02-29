<template>
  <h2>レビュー一覧</h2>
  <div>
    <ul class="review-lists"> 
      <li class="review-list">
        <p class="review-title">タイトル</p>
        <p>感想</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShowList',
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}

.review-list {
  border:1px solid #333;
  padding: 8px;
}

.review-title {
  font-weight: 400;
  margin: 8px 0;
}
</style>