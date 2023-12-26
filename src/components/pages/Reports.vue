<template>
  <layout>
    <div class="d-sm-flex">
      <div class="col-12 col-sm-6 col-md-3">
        <div class="info-box">
          <span class="info-box-icon bg-info elevation-1"><i class="fas fa-phone-alt"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">Contacts</span>
            <span class="info-box-number">
              {{ contacts.contacts.length }}
              <router-link
                to="/contacts/create"
                class="btn btn-sm float-right btn-success ml-2"
                @click="contacts.resetContactInfo()"
              >
                <i class="fas fa-plus nav-icon"></i>
              </router-link>
              <router-link
                to="/contacts"
                class="btn btn-sm float-right btn-info"
              >
                <i class="fas fa-eye"></i>
              </router-link>
            </span>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <div class="info-box mb-3">
          <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-cart-plus"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">Products</span>
            <span class="info-box-number">{{ products.products.length
            }}<router-link
                to="/products/create"
                class="btn btn-sm float-right btn-success ml-2"
                @click="contacts.resetContactInfo()"
              >
                <i class="fas fa-plus nav-icon"></i>
              </router-link>
              <router-link
                to="/products"
                class="btn btn-sm float-right btn-info"
              >
                <i class="fas fa-eye"></i> </router-link></span>
          </div>
        </div>
      </div>

      <div class="clearfix hidden-md-up"></div>
      <div class="col-12 col-sm-6 col-md-3">
        <div class="info-box mb-3">
          <span class="info-box-icon bg-success elevation-1"><i class="fas fa-project-diagram"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">Projects</span>
            <span class="info-box-number">{{ projects.projects.length
            }}<router-link
                to="/projects/create"
                class="btn btn-sm float-right btn-success ml-2"
                @click="contacts.resetContactInfo()"
              >
                <i class="fas fa-plus nav-icon"></i>
              </router-link>
              <router-link
                to="/projects"
                class="btn btn-sm float-right btn-info"
              >
                <i class="fas fa-eye"></i> </router-link></span>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <div class="info-box mb-3">
          <span class="info-box-icon bg-warning elevation-1"><i class="fas fa-users"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">New Members</span>
            <span class="info-box-number">{{ users.users.length
            }}<router-link
                to="/users/create"
                class="btn btn-sm float-right btn-success ml-2"
                @click="contacts.resetContactInfo()"
              >
                <i class="fas fa-plus nav-icon"></i>
              </router-link>
              <router-link
                to="/users"
                class="btn btn-sm float-right btn-info"
              >
                <i class="fas fa-eye"></i> </router-link></span>
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
    <div class="card mb-0">
      <div class="card-header bg-info">
        <div class="card-title">Charts Report</div>
      </div>
      <div class="card-body">
        <BarChart />
      </div>
    </div>
  </layout>
</template>

<script setup>
import layout from "../Layout.vue";
import LineChart from "./Home/LineChart.vue";
import BarChart from "./Home/BarChart.vue";
import { projects } from "../../stores/projectsStore";
import { products } from "../../stores/productsStore";
import { contacts } from "../../stores/contactsStore";
import { users } from "../../stores/usersStore";
</script>
