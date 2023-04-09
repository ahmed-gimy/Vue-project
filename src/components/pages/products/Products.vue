<template>
  <layout>
    <router-link to="/products/create" 
    class="btn btn-success my-2" @click="products.resetProductInfo()">
      <i class="fas fa-plus nav-icon mx-2"></i>Add Product
    </router-link>
    <button class="btn btn-info ml-2" @click="products.exportProducts()"><i
        class="fas fa-download mr-2"></i>Excel</button>
    <button class="btn btn-danger ml-2" 
    @click="products.createPdf()"><i class="fas fa-file-pdf mr-2"></i>PDF</button>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Products</h3>
        <div class="card-tools">
          <div class="input-group input-group-sm" style="width: 150px">
            <input v-model.trim="search" type="search" name="table_search" class="form-control float-right"
              placeholder="Search" />
            <div class="input-group-append">
              <button type="submit" class="btn btn-default">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card-body table-responsive p-0">
        <table class="table table-hover table-head-fixed text-nowrap">
          <thead>
            <tr v-if="products.products.length >= 1">
              <th>Name</th>
              <th>Image</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th class="text-center hide-in-pdf">Edit</th>
              <th class="text-center hide-in-pdf">Delete</th>
            </tr>
          </thead>
          <tbody>
            <h3 class="text-center" v-if="products.products.length < 1">
              No Products Are Found
            </h3>
            <tr v-for="(product, index) in products.products" :key="index">
              <td>{{ product.name }}</td>
              <td>
                <img class="img-circle" :src="product.image" alt="Product Image" width="30" height="30" />
              </td>
              <td>{{ product.category }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.status }}</td>
              <td class="text-center hide-in-pdf">
                <router-link to="/products/edit" class="btn btn-info btn-sm" @click="products.editProduct(index)">
                  <i class="fas fa-pencil-alt"></i>
                  Edit
                </router-link>
              </td>
              <td class="text-center hide-in-pdf">
                <button @click="products.deleteProduct(index)" type="button" class="btn btn-danger btn-sm mx-2">
                  <i class="fas fa-trash"></i>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </layout>
</template>

<script setup>
import { products } from "../../../stores/productsStore";
import layout from "../../Layout.vue";
import { ref, watch } from "vue";

const search = ref("");

watch(search, () => {
  products.search(search.value.toLowerCase());
});
</script>

