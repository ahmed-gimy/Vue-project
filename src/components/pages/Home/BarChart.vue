<template>
  <div class="d-sm-flex flex-sm-wrap justify-content-center gap-5 mt-2">
    <div class="card p-2">
      <Bar
        style="height: 150px"
        class="m-2"
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
      <Radar
        style="height: 150px"
        class="m-2"
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
    </div>
    <div class=" card p-2">
      <Pie
        class="m-2 p-2 mt-5"
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
    </div>

    <div class="card p-2">
      <Bar
        style="height: 150px"
        class="m-2 mb-5"
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
      <Line
        style="height: 150px"
        class="m-2 mt-5"
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
    </div>
    
  </div>
</template>
  
  <script setup>
import { Bar, Pie, Line, Radar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
);

const chartData = {
  labels: ["January", "February", "March"],
  datasets: [
    {
      label: "My First dataset",
      data: [40, 20, 12],
    },
    {
      label: "My First dataset",
      data: [30, 25, 15],
    },
  ],
};

const chartOptions = {
  responsive: true,
};
</script>