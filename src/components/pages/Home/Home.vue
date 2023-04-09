<template>
  <Layout>

    <div class="d-sm-flex flex-column">
      <BarChart />
      <LineChart />
    </div>
  </Layout>
</template>

<script setup>
import LineChart from "./LineChart.vue";
import Layout from "../../Layout.vue";
import BarChart from "./BarChart.vue";
</script>