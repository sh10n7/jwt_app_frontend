<template>
  <h1>マイページ</h1>
  <ShowList :books="filterBooks"/>
</template>

<script>
import { onMounted, ref } from 'vue';
import ShowList from './ShowList.vue';
import apiClient from '../api/axios';


export default {
  name: 'MyPage',
  components:{
    ShowList
  },
  setup(){
    const filterBooks = ref([]);
    
    onMounted(async()=> {
      try {
        const response = await apiClient.get('/mybook', {
          headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
        })
        filterBooks.value = response.data;
      }catch(error){
        console.log('データの取得ができませんでした', error);
      }
    });
    return { filterBooks }
  }
}
</script>


<style>
</style>