<template>
  <layout>
    <div class="card card-primary">
      <div class="card-header bg-info">
        <h3 class="card-title">Add Your Data Please</h3>
      </div>
      <form @submit.prevent="submitForm">
        <div class="card-body">
          <div class="form-group">
            <label>Name</label>
            <input
              :style="{ 'border-color': v$.name.$error ? 'red' : '' }"
              v-model="products.productInfo.name"
              type="text"
              class="form-control"
              placeholder="Product Name"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.name.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Image</label>
            <div class="input-group mb-0">
              <input
                type="file"
                class="form-control"
                id="inputGroupFile02"
                @change="products.onFileChange"
              />
              <label class="input-group-text" for="inputGroupFile02"
                >Upload</label
              >
            </div>
            <p
              class="text-red my-0"
              v-for="error in v$.image.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Category</label>
            <select
              :style="{ 'border-color': v$.category.$error ? 'red' : '' }"
              class="form-select"
              v-model="products.productInfo.category"
            >
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
            </select>
            <p
              class="text-red my-0"
              v-for="error in v$.category.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              :style="{ 'border-color': v$.price.$error ? 'red' : '' }"
              v-model="products.productInfo.price"
              type="number"
              class="form-control"
              placeholder="Product Price"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.price.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Status</label>
            <select
              :style="{ 'border-color': v$.status.$error ? 'red' : '' }"
              class="form-select"
              v-model="products.productInfo.status"
            >
              <option value="In Stock">In Stock</option>
              <option value="Out Of Stock">Out Of Stock</option>
              <option value="Limited">Limited</option>
            </select>
            <p
              class="text-red my-0"
              v-for="error in v$.status.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
        <div class="card-footer text-center">
          <button type="submit" class="btn btn-info">Add Product</button>
        </div>
      </form>
    </div>
  </layout>
</template>


<script setup>
import useVuelidate from "@vuelidate/core";
// eslint-disable-next-line no-unused-vars
import { required } from "@vuelidate/validators";
import { products } from "../../../stores/productsStore";
import layout from "../../Layout.vue";

const v$ = useVuelidate(products.rules, products.productInfo, {
  $autoDirty: true,
});
const submitForm = async () => {
  const isValid = await v$.value.$validate();
  if (isValid) {
    products.addProduct();
  }
};
</script>