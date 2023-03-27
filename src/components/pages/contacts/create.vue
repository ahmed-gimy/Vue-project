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
              v-model="contacts.contactInfo.name"
              type="text"
              class="form-control"
              placeholder="Enter Your Name"
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
            <label>Job Title</label>
            <input
              :style="{ 'border-color': v$.job.$error ? 'red' : '' }"
              v-model="contacts.contactInfo.job"
              type="text"
              class="form-control"
              placeholder="Enter Your Jop Title"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.job.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              :style="{ 'border-color': v$.email.$error ? 'red' : '' }"
              v-model="contacts.contactInfo.email"
              type="email"
              class="form-control"
              placeholder="Enter Your Email"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.email.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Address</label>
            <input
              :style="{ 'border-color': v$.address.$error ? 'red' : '' }"
              v-model="contacts.contactInfo.address"
              type="address"
              class="form-control"
              placeholder="Enter Your Address"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.address.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>About</label>
            <textarea
              :style="{ 'border-color': v$.about.$error ? 'red' : '' }"
              v-model="contacts.contactInfo.about"
              type="phone"
              class="form-control"
              placeholder="Write Something About You"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.about.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Agreed hourly rate</label>
            <input
              :style="{ 'border-color': v$.rate.$error ? 'red' : '' }"
              v-model="contacts.contactInfo.rate"
              type="text"
              class="form-control"
              placeholder="Enter Your Hourly Rate"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.rate.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input
              :style="{ 'border-color': v$.phone.$error ? 'red' : '' }"
              v-model="contacts.contactInfo.phone"
              type="phone"
              class="form-control"
              placeholder="Enter Your Phone"
            />
            <p
              class="text-red my-0"
              v-for="error in v$.phone.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Image</label>
            <div class="input-group mb-0">
              <input type="file" class="form-control" id="inputGroupFile02" @change="contacts.onFileChange"/>
              <label class="input-group-text" for="inputGroupFile02"
                >Upload</label
              >
            </div>
            <p
              class="text-red my-0"
              v-for="error in v$.img.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
        <div class="card-footer text-center">
          <button type="submit" class="btn btn-info">Add Contact</button>
        </div>
      </form>
    </div>
  </layout>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
// eslint-disable-next-line no-unused-vars
import { required } from "@vuelidate/validators";
import { contacts } from "../../../stores/contactsStore";
import layout from "../../Layout.vue";

const v$ = useVuelidate(contacts.rules, contacts.contactInfo, {
  $autoDirty: true,
});
const submitForm = async () => {
  const isValid = await v$.value.$validate();
  if (isValid) {
    contacts.addContact();
  }
};


</script>