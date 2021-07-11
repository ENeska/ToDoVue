<template>
  <div>
    <h1>Task List</h1>
    <div v-for="item in repositories.data" :key="item._id">
      <span>{{ item.createdAt }}</span>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
  repositories: [] 
  }

  
  // setup() {
  //   const repositories = ref([]);
  //   const getTasksRepositories = async () => {
  //     repositories.value = await getAllTask();
  //   };

  //   getTasksRepositories();
  //   return {
  //     repositories,
  //     getTasksRepositories,
  //   };
  // },
});
</script>