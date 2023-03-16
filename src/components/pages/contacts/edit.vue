<template>
  <layout>
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Update Your Data Please</h3>
      </div>
      <form @submit.prevent="submitForm">
        <div class="card-body">
          <div class="form-group">
            <label>Name</label>
            <input
              v-model="contacts.contactInfo.name"
              type="text"
              class="form-control"
              placeholder="Enter Your Name"
            />
            <p
              class="text-red"
              v-for="error in v$.name.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Job Title</label>
            <input
              v-model="contacts.contactInfo.job"
              type="text"
              class="form-control"
              placeholder="Enter Your Jop Title"
            />
            <p
              class="text-red"
              v-for="error in v$.job.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              v-model="contacts.contactInfo.email"
              type="email"
              class="form-control"
              placeholder="Enter Your Email"
            />
            <p
              class="text-red"
              v-for="error in v$.email.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Address</label>
            <input
              v-model="contacts.contactInfo.address"
              type="address"
              class="form-control"
              placeholder="Enter Your Address"
            />
            <p
              class="text-red"
              v-for="error in v$.address.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>About</label>
            <textarea
              v-model="contacts.contactInfo.about"
              type="phone"
              class="form-control"
              placeholder="Write Something About You"
            />
            <p
              class="text-red"
              v-for="error in v$.about.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Agreed hourly rate</label>
            <input
              v-model="contacts.contactInfo.rate"
              type="text"
              class="form-control"
              placeholder="Enter Your Hourly Rate"
            />
            <p
              class="text-red"
              v-for="error in v$.rate.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input
              v-model="contacts.contactInfo.phone"
              type="phone"
              class="form-control"
              placeholder="Enter Your Phone"
            />
            <p
              class="text-red"
              v-for="error in v$.phone.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="form-group">
            <label>Image</label>
            <div class="input-group mb-0">
              <input type="file" class="form-control" id="inputGroupFile02" />
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
          <button type="submit" class="btn btn-primary">Update Contact</button>
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
  console.log("good");
  const result = await v$.value.$validate();
  if (result) {
    contacts.updateContact();
  } else {
    console.log("good");
  }
};
</script>