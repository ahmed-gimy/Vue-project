<template>
  <layout>
    <router-link
      to="/projects/create"
      class="btn btn-success my-2"
      @click="projects.resetProjectInfo()"
    >
      <i class="fas fa-plus nav-icon mx-2"></i>Add Project
    </router-link>
    <button
      class="btn btn-info ml-2"
      @click="projects.exportProjects()"
    >
      <i class="fas fa-download mr-2"></i>Excel
    </button>
    <button
      class="btn btn-danger ml-2"
      @click="projects.createPdf()"
    >
      <i class="fas fa-file-pdf mr-2"></i>PDF
    </button>

    <div class="card">
      <div class="card-header bg-info">
        <h3 class="card-title"><i class="fas fa-project-diagram mr-2"></i>Projects</h3>
        <div class="card-tools">
          <div
            class="input-group input-group-sm"
            style="width: 150px"
          >
            <input
              v-model.trim="search"
              type="search"
              name="table_search"
              class="form-control float-right"
              placeholder="Search"
            />
            <div class="input-group-append">
              <button
                type="submit"
                class="btn btn-default"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card-body table-responsive p-0">
        <table class="table table-hover table-head-fixed text-nowrap">
          <thead>
            <tr v-if="projects.projects.length >= 1">
              <th>Name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Extra Houres</th>
              <th>Status</th>
              <th>Budget</th>
              <th>Leader</th>
              <th>Client</th>
              <th
                id="element-to-hide"
                data-html2canvas-ignore="true"
                class="text-center"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <h3
              class="text-center"
              v-if="projects.projects.length < 1"
            >
              No Projects Are Found
            </h3>
            <tr
              v-for="(project, index) in projects.projects"
              :key="index"
            >
              <td>{{ project.name }}</td>
              <td>{{ project.description }}</td>
              <td>{{ project.duration }}</td>
              <td>{{ project.extrahoures }}</td>
              <td>{{ project.status }}</td>
              <td>{{ project.budget }}</td>
              <td>{{ project.leader }}</td>
              <td>{{ project.client }}</td>
              <td
                id="element-to-hide"
                data-html2canvas-ignore="true"
                class="text-center"
              >
                <router-link
                  to="/projects/edit"
                  class="btn btn-info btn-sm rounded-circle"
                  @click="projects.editProject(index)"
                >
                  <i class="fas fa-pencil-alt"></i>
                </router-link>
                <button
                  @click="projects.deleteProject(index)"
                  type="button"
                class="btn btn-danger btn-sm mx-2 rounded-circle"
              >
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</layout></template>

<script setup>
import { projects } from "../../../stores/projectsStore";
import layout from "../../Layout.vue";
import { ref, watch } from "vue";

const search = ref("");

watch(search, () => {
  projects.search(search.value.toLowerCase());
});
</script>
