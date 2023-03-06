<template>
  <body class="hold-transition sidebar-mini layout-fixed">
    <div >
      <Preloader></Preloader>
      
    </div>
    <router-view/>
  </body>
</template>

<script setup>
import Preloader from "./dashboard/Preloader.vue";
</script>

<style>

</style>
