<template>
  <layout>
    <div class="card card-info">
      <div class="card-header">
        <h3 class="card-title">Update Your Data Please</h3>
      </div>
      <form>
        <div class="card-body">
          <div class="form-group">
            <label>Name</label>
            <input
              class="form-control"
              type="text"
              v-model="projects.rowInfo.name"
            />
          </div>
          <div class="form-group">
            <label>Client</label>
            <input
              class="form-control"
              type="text"
              v-model="projects.rowInfo.Client"
            />
          </div>
          <div class="form-group">
            <label>Leader</label>
            <input
              class="form-control"
              type="text"
              v-model="projects.rowInfo.Leader"
            />
          </div>
          <div class="form-group">
            <label>Status</label>
            <select class="form-select" v-model="projects.rowInfo.Status">
              <option value="On Hold">On Hold</option>
              <option value="Canceled">Canceled</option>
              <option value="Success">Success</option>
            </select>
          </div>
          <div class="form-group">
            <label>budget</label>
            <input
              class="form-control"
              type="number"
              v-model="projects.rowInfo.budget"
            />
          </div>
          <div class="form-group">
            <label>description</label>
            <textarea
              class="form-control"
              type="text"
              v-model="projects.rowInfo.description"
            ></textarea>
          </div>
          <div class="form-group">
            <label>duration</label>
            <input
              class="form-control"
              type="number"
              v-model="projects.rowInfo.duration"
            />
          </div>
        </div>
        <div class="card-footer text-center">
          <button @click="projects.editProject" class="btn btn-info">
            Update Project
          </button>
        </div>
      </form>
    </div>
  </layout>
</template>
  
<script setup>
import { projects } from "../../../stores/projectsStore";
import layout from "../../Layout.vue";
</script>