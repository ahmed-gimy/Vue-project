<template>
  <layout>
    <div class="card p-2">
    <DataTable :data="data" class="display table table-striped" width="100%">
      <thead>
        <tr>
          <th>A</th>
          <th>B</th>
        </tr>
      </thead>
    </DataTable>
    </div>
  </layout>
</template>

<script setup>
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import DataTableLib from "datatables.net-bs5";
// eslint-disable-next-line no-unused-vars
import Buttons from "datatables.net-buttons-bs5";
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import { projects } from "../../../stores/projectsStore";
import layout from "../../Layout.vue";
DataTable.use(DataTablesCore, DataTableLib, ButtonsHtml5);
const data = projects.projects
</script>