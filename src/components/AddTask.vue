<template>
  <label for="task">Nazwa zadania</label>
  <input v-model="message" placeholder="opis zadanie" type="text" />
  <button @click="addTasks">dodaj</button>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import { addTask } from "../../api/repositories/FetchTaskRepository"

export default defineComponent({
  setup() {
    let repositories = [];
    let message = "";
    return {
      repositories,
      message,
    };
  },
  methods: {
    async addTasks() {
      const data = await addTask({description: this.message});
      this.emit('addTask',data)
    },
  },
});
</script>
