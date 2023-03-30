<template>
  <layout>
    <router-link to="/projects/create" class="btn btn-info my-2">
      <i class="fas fa-plus nav-icon"></i>
      Add Project
    </router-link>
    <div class="card p-2">
      <DataTable
        :data="projects.data"
        :columns="projects.columns"
        :options="{
          responsive: true,
          autoWidth: false,
          select: true,
          dom: 'Bfrtip',
          buttons: ButtonsHtml5
        }"
        class="display table table-striped table-hover overflow-auto"
        width="100%"
      >
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
import Buttons from "datatables.net-buttons-bs5";
import "datatables.net-bs5";
import "datatables.net-select";
import "datatables.net-responsive";
import "datatables.net-responsive-bs5";
import pdfmake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import jsZip from "jszip";
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import print from "datatables.net-buttons/js/buttons.print";
pdfmake.vfs = pdfFonts.pdfMake.vfs;
window.jSZip = jsZip;
DataTable.use(DataTablesCore, DataTablesLib, Buttons, print);
</script>





