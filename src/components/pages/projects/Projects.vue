<template>
  <layout>
    <router-link to="/projects/create" class="btn btn-success my-2">
      <i class="fas fa-plus nav-icon"></i>
      Add Project
    </router-link>
    <router-link
      to="/projects/edit"
      class="btn btn-info m-2"
    >
      <i class="fas fa-pencil-alt nav-icon"></i>
      Edit Selected Project
    </router-link>
    <button class="btn btn-danger">
      <i class="fas fa-trash nav-icon"></i>
      Delete Selected Project
    </button>
    <div class="card p-2">
      <DataTable
        :data="projects.data"
        :columns="projects.columns"
        :options="{
          responsive: true,
          autoWidth: false,
          select: true,
          dom: 'Bfrtip',
        }"
        class="display table table-striped table-hover overflow-auto"
        width="100%"
      >
        <thead>
          <tr>
            <th>name</th>
            <th>description</th>
            <th>duration</th>
            <th>Status</th>
            <th>budget</th>
            <th>Leader</th>
            <th>Client</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(project, index) in projects.data" :key="index">
            <td>{{ project.name }}</td>
            <td>{{ project.description }}</td>
            <td>{{ project.duration }}</td>
            <td>{{ project.Status }}</td>
            <td>{{ project.budget }}</td>
            <td>{{ project.Leader }}</td>
            <td>{{ project.Client }}</td>
          </tr>
        </tbody>
      </DataTable>
    </div>
  </layout>
</template>

<script setup>
import { projects } from "../../../stores/projectsStore";
import layout from "../../Layout.vue";
import DataTable from "datatables.net-vue3";
import DataTablesLib from "datatables.net";
import DataTablesCore from "datatables.net-bs5";
// eslint-disable-next-line no-unused-vars
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import print from "datatables.net-buttons/js/buttons.print";
import Editor from "datatables.net-editor-bs5";
import jsZip from "jszip";
import pdfmake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import "datatables.net-buttons/js/buttons.colVis";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";
import "datatables.net-responsive-bs5";
import "datatables.net-scroller-bs5";
import "datatables.net-searchpanes-bs5";
import "datatables.net-select-bs5";
import "datatables.net-buttons-bs5";
import "datatables.net-bs5";
pdfmake.vfs = pdfFonts.pdfMake.vfs;
window.jSZip = jsZip;
DataTable.use(DataTablesCore, DataTablesLib, Editor, print);


</script>





