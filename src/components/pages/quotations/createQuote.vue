<template>
  <layout>
    <div class="card card-info">
      <div class="card-header">
        <h3 class="card-title">Add Your Data Please</h3>
      </div>
      <form @submit.prevent="submitForm">
        <div class="card-body">
          <div class="form-group">
            <label>Name</label>
            <input
              :style="{ 'border-color': v$.name.$error ? 'red' : '' }"
              class="form-control"
              type="text"
              v-model="quotations.quoteInfo.name"
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
            <label>Client</label>
            <input
              :style="{ 'border-color': v$.client.$error ? 'red' : '' }"
              class="form-control"
              type="text"
              v-model="quotations.quoteInfo.client"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.client.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Leader</label>
            <input
              :style="{ 'border-color': v$.leader.$error ? 'red' : '' }"
              class="form-control"
              type="text"
              v-model="quotations.quoteInfo.leader"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.leader.$errors"
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
              v-model="quotations.quoteInfo.status"
            >
              <option value="On Hold">On Hold</option>
              <option value="Canceled">Canceled</option>
              <option value="Success">Success</option>
            </select>
            <p
              class="text-red my-0"
              v-for="error in v$.status.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>budget</label>
            <input
              :style="{ 'border-color': v$.budget.$error ? 'red' : '' }"
              class="form-control"
              type="number"
              v-model="quotations.quoteInfo.budget"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.budget.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              :style="{ 'border-color': v$.description.$error ? 'red' : '' }"
              class="form-control"
              type="text"
              v-model="quotations.quoteInfo.description"
            ></textarea>
            <p
              class="text-red my-0"
              v-for="error in v$.description.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Duration</label>
            <input
              :style="{ 'border-color': v$.duration.$error ? 'red' : '' }"
              class="form-control"
              type="number"
              v-model="quotations.quoteInfo.duration"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.duration.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Extra Houres</label>
            <input
              :style="{ 'border-color': v$.extrahoures.$error ? 'red' : '' }"
              class="form-control"
              type="number"
              v-model="quotations.quoteInfo.extrahoures"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.extrahoures.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
        <div class="card-footer text-center">
          <button class="btn btn-info">Add Quotation</button>
        </div>
      </form>
    </div>
  </layout>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
// eslint-disable-next-line no-unused-vars
import { required } from "@vuelidate/validators";
import { quotations } from "../../../stores/quotesStore";
import layout from "../../Layout.vue";

const v$ = useVuelidate(quotations.rules, quotations.quoteInfo, {
  $autoDirty: true,
});
const submitForm = async () => {
  const isValid = await v$.value.$validate();
  if (isValid) {
    quotations.addQuote();
  }
};
</script>
