<script setup>
import { ref, defineEmits } from "vue";
import { nanoid } from "nanoid";

const emit = defineEmits();
const focused = ref(false);
const title = ref("");

function createTask(e) {
  if (title.value.trim()) {
    e.preventDefault();
    emit("add", {
      id: nanoid(),
      title: title.value.trim(),
    });
  }
  title.value = "";
}
</script>

<template>
  <div>
    <textarea
      v-model="title"
      @keydown.tab="createTask"
      @keyup.enter="createTask"
      @focus="focused = true"
      @blur="focused = false"
      style="border: none; resize: none; cursor: pointer; width: 100%"
      :class="{
        'h-7': !focused,
        'h-20': focused,
      }"
      :placeholder="
        !focused ? '+ Click To Add Task' : 'Enter A Title For This Task'
      "
    >
    </textarea>
  </div>
</template>
