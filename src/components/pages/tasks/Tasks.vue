<!-- eslint-disable no-unused-vars -->
<template>
  <layout>
    <div class="card card-solid">
      <div class="card-header">
        <div class="card-title">
          <button @click="createColumn" class="btn btn-info mb-2">
            <i class="fas fa-plus nav-icon mx-2"></i>Add New column
          </button>
        </div>
        <div class="card-tools">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <div class="input-group-append">
              <button type="submit" class="btn btn-info">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="card-body bg-info-subtle overflow-auto p-2 text-center">
        <h3 class="p-2" v-if="columns.length < 1">No Column Are Found</h3>
        <!-- <div> -->
        <draggable
          v-model="columns"
          group="columns"
          :animation="500"
          handle=".drag-handle"
          item-key="id"
          class="d-inline-flex"
        >
          <template #item="{ element: column }">
            <div class="column">
              <div class="card mx-2" style="min-width: 250px">
                <div class="card-header d-inline-flex">
                  <div class="card-title d-inline-flex">
                    <i
                      style="cursor: move"
                      class="bi bi-grip-horizontal drag-handle"
                    ></i>
                    <span class="mx-2">
                      <input
                        v-model="column.title"
                        style="border: none"
                        class="title-input bg-transparent focus:bg-white rounded"
                        type="text"
                        @keyup.enter="$event.target.blur()"
                        @keydown.backspace="
                          column.title === ''
                            ? (columns = columns.filter(
                                (c) => c.id !== column.id
                              ))
                            : null
                        "
                        @blur="
                          column.title === ''
                            ? (columns = columns.filter(
                                (c) => c.id !== column.id
                              ))
                            : null
                        "
                      />
                    </span>
                  </div>
                  <div class="card-tools d-inline-flex">
                    <button
                      type="button"
                      class="btn bg-info btn-sm mx-2"
                      data-card-widget="collapse"
                    >
                      <i class="fas fa-minus"></i>
                    </button>
                    <button
                      type="button"
                      class="btn bg-info btn-sm"
                      data-card-widget="remove"
                    >
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>

                <div class="card-body p-2">
                  <p
                    v-if="column.tasks.length > 0"
                    class="text-center bg-info-subtle rounded px-2"
                  >
                    Press Alt Key To Clone Task
                  </p>
                  <h5 v-if="column.tasks.length < 1">no taskes are found</h5>
                  <draggable
                    v-model="column.tasks"
                    :group="{ name: 'tasks', pull: alt ? 'clone' : true }"
                    :animation="200"
                    handle=".drag-handle"
                    item-key="id"
                  >
                    <template #item="{ element: task }">
                      <div
                        class="task-title d-flex justify-content-between bg-body-secondary border border-dark-subtle rounded mb-2"
                      >
                        <div class="d-flex">
                          <i
                            style="cursor: move"
                            class="drag-handle bi bi-grip-vertical pt-2 ml-1"
                          ></i>
                          <span class="bd-info p-2" style="">
                            <input
                              v-model="task.title"
                              style="border: none; width: 100%"
                              class="title-input bg-transparent focus:bg-white rounded"
                              type="text"
                              @keyup.enter="$event.target.blur()"
                            />
                          </span>
                        </div>
                        <div class="p-2 float-left">
                          <button
                            style="border: none"
                            class="bg-info mx-2 rounded"
                          >
                            <i
                              style="cursor: pointer"
                              class="fas fa-pencil-alt mx-2"
                            ></i>
                          </button>
                          <button
                            style="border: none"
                            class="bg-danger rounded"
                            @click="deleteTask(task.id)"
                          >
                            <i
                              style="cursor: pointer"
                              class="fas fa-trash mx-2"
                            ></i>
                          </button>
                        </div>
                      </div>
                    </template>
                  </draggable>
                </div>
                <new-task @add="column.tasks.push($event)" class="mx-2" />
              </div>
            </div>
          </template>
        </draggable>
        <!-- </div> -->
      </div>
    </div>
  </layout>
</template>

<script setup>
import NewTask from "./NewTask.vue";
import layout from "../../Layout.vue";
import draggable from "vuedraggable";
import { nanoid } from "nanoid";
import { nextTick, ref } from "vue";
import { useKeyModifier } from "@vueuse/core";

const alt = useKeyModifier("Alt");
const columns = ref([]);
let tasks = [];
const createColumn = () => {
  tasks = [];
  const columnInfo = {
    id: nanoid(),
    title: "",
    tasks,
  };
  columns.value.push(columnInfo);
  nextTick(() => {
    document.querySelector(".column:last-child .title-input").focus();
  });
};

// console.log(columns.value);
const deleteTask = (identity) => {
  // console.log(tasks[0].id);
  // tasks.filter((t) => {
  //   t.id != t[id];
  // });
  tasks.map((task, i) => {
    // console.log(t.id);
    // console.log(identity);
    // console.log(t.id == identity);
    if (task.id == identity) {
      removeByIndex(i);
    }
  });
};
function removeByIndex(index) {
  console.log("object");
  tasks = tasks.filter((t, i) => {
    i != index;
  });
}
</script>
