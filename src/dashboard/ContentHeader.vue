<template>
  <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0">{{x}}</h1>
                <button @click="fun" class="m-0">Dashboard</button>
              </div>
              <!-- /.col -->
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->
</template>

<script setup>
import {ref} from "vue";
import router from "../router/index";
const x = ref("")
const fun = () =>{
 const y = router.currentRoute.value.fullPath
  x.value = y
  console.log(router.currentRoute.value.fullPath)
}
</script>

<style>

</style>