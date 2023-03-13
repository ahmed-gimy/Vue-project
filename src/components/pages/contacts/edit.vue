<template>
  <layout>
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Update Your Data Please</h3>
      </div>
      <form>
        <div class="card-body">
          <div class="form-group">
            <label>Name</label>
            <input
              required
              v-model="contacts.contactInfo.name"
              type="text"
              class="form-control"
              placeholder="Enter Your Name"
            />
          </div>
          <div class="form-group">
            <label>Jop Title</label>
            <input
              required
              v-model="contacts.contactInfo.job"
              type="text"
              class="form-control"
              placeholder="Enter Your Jop Title"
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              required
              v-model="contacts.contactInfo.email"
              type="email"
              class="form-control"
              placeholder="Enter Your Email"
            />
          </div>
          <div class="form-group">
            <label>Address</label>
            <input
              required
              v-model="contacts.contactInfo.address"
              type="address"
              class="form-control"
              placeholder="Enter Your Address"
            />
          </div>
          <div class="form-group">
            <label>About</label>
            <textarea
              required
              v-model="contacts.contactInfo.about"
              type="phone"
              class="form-control"
              placeholder="Write Something About You"
            />
          </div>
          <div class="form-group">
            <label>Agreed hourly rate</label>
            <input
              required
              v-model="contacts.contactInfo.rate"
              type="text"
              class="form-control"
              placeholder="Enter Your Hourly Rate"
            />
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input
              required
              v-model="contacts.contactInfo.phone"
              type="phone"
              class="form-control"
              placeholder="Enter Your Phone"
            />
          </div>
          <div class="form-group">
            <label>Image</label>

            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile" />
              <label class="custom-file-label" for="customFile"></label>
            </div>
          </div>
        </div>

        <div class="card-footer text-center">
          <button
            @click.prevent="contacts.updateContact"
            type="button"
            class="btn btn-primary"
          >
            Update Contact
          </button>
        </div>
      </form>
    </div>
  </layout>
</template>
  
  <script setup>
import { contacts } from "../../../stores/contactsStore";
import layout from "../../Layout.vue";
</script>