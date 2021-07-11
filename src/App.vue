<template>
<div>
<ListTask :repositories="repositories"/>
<AddTask @addTask="addTask"/>
</div>
</template>

<script>
import AddTask from './components/AddTask.vue'
import ListTask from './components/ListTask.vue'
import { getAllTask } from "../api/repositories/FetchTaskRepository";
import { ref } from "vue";

export default {
  name: 'App',
  components: {
    AddTask,
    ListTask
  },
  setup() {
    const repositories = ref([]);
    const getTasksRepositories = async () => {
      repositories.value = await getAllTask();
    };

    getTasksRepositories();
    return {
      repositories,
      getTasksRepositories,
    };
  },
  
   methods: {
    addTask(data) {

      this.repositories.push(data);
     
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
