<template>
  <div>
    <button @click="handleSignOut">ログアウト</button>
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
import { auth, signOut, onAuthStateChanged } from '../firebase';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import ShowList from './ShowList.vue';

export default {
  name: 'TopComp',
  components: {
    ShowList
  },
  setup() {
    const currentUser = ref(null);
    const router = useRouter();
    

    onMounted(() => {
      //現在ログイン中のユーザーを取得するための処理。
      auth.onAuthStateChanged((user) => {
        // userの値が存在していたら、currenUserオブジェクトの値をuser.valueにする
        if (user) {
          currentUser.value = auth.currentUser;
        } else {
          currentUser.value = null;
        }
      });
    });

    const handleSignOut = async () => {
      await signOut(auth);
      router.push("/");
    };
    return { handleSignOut, onAuthStateChanged }
  }
}
</script>

<style>
form {
  margin: 24px auto;
}
</style>
