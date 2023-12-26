<template>
  <Layout>
    <div class="card">
      <div class="card-header bg-info">Charts</div>
      <div class="card-body d-sm-flex flex-column">
        <BarChart />
        <LineChart />
      </div>
    </div>
  </Layout>
</template>

<script setup>
import LineChart from "./LineChart.vue";
import Layout from "../../Layout.vue";
import BarChart from "./BarChart.vue";
</script>