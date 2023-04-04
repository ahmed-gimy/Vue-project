<template>
  <layout>
    <div class="flex-sm-column">
      <router-link
        @click="projects.resetRowInfo()"
        to="/projects/create"
        class="btn btn-success my-2 mr-2"
      >
        <i class="fas fa-plus nav-icon"></i>
        Add
      </router-link>
      <router-link
        @click="edit()"
        to="/projects/edit"
        class="btn btn-info mr-2"
      >
        <i class="fas fa-pencil-alt nav-icon"></i>
        Edit
      </router-link>
      <button @click="deleteProject()" class="btn btn-danger mt-2 mb-2">
        <i class="fas fa-trash nav-icon"></i>
        Delete
      </button>
    </div>
    <div class="card p-2">
      <DataTable
        ref="table"
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
import { ref, onMounted } from "vue";
import { projects } from "../../../stores/projectsStore";
import layout from "../../Layout.vue";
import DataTable from "datatables.net-vue3";
import DataTablesLib from "datatables.net";
import DataTablesCore from "datatables.net-bs5";
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
import Swal from "sweetalert2";

pdfmake.vfs = pdfFonts.pdfMake.vfs;
window.jSZip = jsZip;

DataTable.use(DataTablesCore, DataTablesLib, Editor, print, ButtonsHtml5);

const table = ref();
let dt;

onMounted(function () {
  dt = table.value.dt;
});

function deleteProject() {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      remove();
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
}

function remove() {
  dt.rows({ selected: true }).every(function () {
    let idx = projects.data.indexOf(this.data());
    projects.data.splice(idx, 1);
  });
}

function edit() {
  dt.rows({ selected: true }).every(function () {
    let row = this.data();
    projects.rowInfo = { ...row };
    projects.editedProject = row;
  });
}
</script>



<style>
.dt-button {
  cursor: pointer;
  border: none;
  background-color: rgb(172, 170, 170);
  border-radius: 5px;
  padding: 5px 5px;
}
</style>





