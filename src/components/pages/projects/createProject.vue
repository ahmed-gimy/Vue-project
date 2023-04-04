<template>
  <layout>
    <div class="card card-info">
      <div class="card-header">
        <h3 class="card-title">Add Your Data Please</h3>
      </div>
      <form @submit.prevent="submitForm">
        <div class="card-body">
          <div class="form-group">
            <label>Name</label>
            <input
              :style="{ 'border-color': v$.name.$error ? 'red' : '' }"
              class="form-control"
              type="text"
              v-model="projects.rowInfo.name"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.name.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Client</label>
            <input
              :style="{ 'border-color': v$.Client.$error ? 'red' : '' }"
              class="form-control"
              type="text"
              v-model="projects.rowInfo.Client"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.Client.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Leader</label>
            <input
              :style="{ 'border-color': v$.Leader.$error ? 'red' : '' }"
              class="form-control"
              type="text"
              v-model="projects.rowInfo.Leader"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.Leader.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Status</label>
            <select
              :style="{ 'border-color': v$.Status.$error ? 'red' : '' }"
              class="form-select"
              v-model="projects.rowInfo.Status"
            >
              <option value="On Hold">On Hold</option>
              <option value="Canceled">Canceled</option>
              <option value="Success">Success</option>
            </select>
            <p
              class="text-red my-0"
              v-for="error in v$.Status.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>budget</label>
            <input
              :style="{ 'border-color': v$.budget.$error ? 'red' : '' }"
              class="form-control"
              type="number"
              v-model="projects.rowInfo.budget"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.budget.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>description</label>
            <textarea
              :style="{ 'border-color': v$.description.$error ? 'red' : '' }"
              class="form-control"
              type="text"
              v-model="projects.rowInfo.description"
            ></textarea>
            <p
              class="text-red my-0"
              v-for="error in v$.description.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>duration</label>
            <input
              :style="{ 'border-color': v$.duration.$error ? 'red' : '' }"
              class="form-control"
              type="number"
              v-model="projects.rowInfo.duration"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.duration.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
        <div class="card-footer text-center">
          <button class="btn btn-info">
            Add Project
          </button>
        </div>
      </form>
    </div>
  </layout>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
// eslint-disable-next-line no-unused-vars
import { required } from "@vuelidate/validators";
import { projects } from "../../../stores/projectsStore";
import layout from "../../Layout.vue";

const v$ = useVuelidate(projects.rules, projects.rowInfo, {
  $autoDirty: true,
});
const submitForm = async () => {
  const isValid = await v$.value.$validate();
  if (isValid) {
    projects.addProject();
  }
};
</script>