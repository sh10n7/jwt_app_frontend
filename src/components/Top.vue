<template>
  <div>
    <button @click="handleSignOut">ログアウト</button>
    <button>マイページ</button>
  </div>
  <div>
    <form>
      <div class="form_element">
        <label for="title">タイトル</label><br>
        <input type="text" id="title" v-model="book.title">
      </div>
      <div class="form_element">
        <label for="review">感想</label><br>
        <textarea id="review" v-model="book.review"></textarea>
      </div>
      <input type="submit" value="送信" @click.prevent="registerBook">
    </form>
    <ShowList :books="books"/>
  </div>
</template>

<script>
import { auth, signOut, onAuthStateChanged } from '../firebase';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import  apiClient  from '../api/axios'; 
import ShowList from './ShowList.vue';

export default {
  name: 'TopComp',
  components: {
    ShowList
  },
  setup() {
    const currentUser = ref(null);
    const router = useRouter();
    const book = ref({
      title: '',
      review: '',
      uid: ''
    })
    const books = ref([])
    

    onMounted(async() => {
      //現在ログイン中のユーザーを取得するための処理。
      auth.onAuthStateChanged((user) => {
        // userの値が存在していたら、currenUserオブジェクトの値をuser.valueにする
        if (user) {
          currentUser.value = auth.currentUser;
        } else {
          currentUser.value = null;
        }
      });
      // 本のデータを全て取得する処理
      const response = await apiClient.get('/books');
      books.value = response.data;
    });

    const handleSignOut = async () => {
      await signOut(auth);
      // サインアウトしたらjwtをremoveする
      localStorage.removeItem ('jwt');
      router.push("/");
    };

    const registerBook = async() => {
      // 現在のログインユーザーのuidに代入。
      const uid = currentUser.value.uid;
      // bookオブジェクトのuidにログインユーザーのuidを代入
      book.value.uid = uid;

      try {
        const response = await apiClient.post('/books', book.value);
        book.value = response.data;
        books.value.push(book.value);
        // 入力フォームのリセット
        book.value = {title: '', review: '', uid: ''}
      } catch(error){
        console.log('レビューの保存ができませんでした', error)
      }

    }
    return { book, books,handleSignOut, onAuthStateChanged, registerBook }
  }
}
</script>

<style>
form {
  margin: 24px auto;
}
</style>
