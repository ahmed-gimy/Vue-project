<template>
  <layout>
    <div class="d-sm-flex">
      <div class="col-12 col-sm-6 col-md-3">
        <div class="info-box">
          <span class="info-box-icon bg-info elevation-1"><i class="fas fa-phone-alt"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">Contacts</span>
            <span class="info-box-number">
              10
              <small></small>
              <button class="btn btn-sm float-right btn-success ml-2"><i class="fas fa-plus nav-icon"></i></button>
              <button class="btn btn-sm float-right btn-info"><i class="fas fa-eye"></i></button>
            </span>
          </div>

        </div>

      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <div class="info-box mb-3">
          <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-cart-plus"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">Products</span>
            <span class="info-box-number">41<button class="btn btn-sm float-right btn-success ml-2"><i
                  class="fas fa-plus nav-icon"></i></button>
              <button class="btn btn-sm float-right btn-info"><i class="fas fa-eye"></i></button></span>

          </div>

        </div>

      </div>


      <div class="clearfix hidden-md-up"></div>
      <div class="col-12 col-sm-6 col-md-3">
        <div class="info-box mb-3">
          <span class="info-box-icon bg-success elevation-1"><i class="fas fa-project-diagram"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">Projects</span>
            <span class="info-box-number">760<button class="btn btn-sm float-right btn-success ml-2"><i
                  class="fas fa-plus nav-icon"></i></button>
              <button class="btn btn-sm float-right btn-info"><i class="fas fa-eye"></i></button></span>
          </div>

        </div>

      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <div class="info-box mb-3">
          <span class="info-box-icon bg-warning elevation-1"><i class="fas fa-users"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">New Members</span>
            <span class="info-box-number">2,000<button class="btn btn-sm float-right btn-success ml-2"><i
                  class="fas fa-plus nav-icon"></i></button>
              <button class="btn btn-sm float-right btn-info"><i class="fas fa-eye"></i></button></span>
          </div>

        </div>

      </div>

    </div>
    <div class="card">
      <div class="card-header bg-info">
        <div class="card-title">Monthly Report</div>
      </div>
      <LineChart class="card-body m-2" />
    </div>
    <div class="card">
      <div class="card-header bg-info">
        <div class="card-title">Charts Report</div>
      </div>
      <BarChart class="card-body m-2" />
    </div>
  </layout>
</template>

<script setup>
import layout from "../Layout.vue";
import LineChart from "./Home/LineChart.vue";
import BarChart from "./Home/BarChart.vue";
</script>