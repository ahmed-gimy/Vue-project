<template>
  <layout>
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Add Your Data Please</h3>
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
              <input type="file" class="custom-file-input" />
              <label class="custom-file-label">Choose file</label>
            </div>
          </div>
        </div>

        <div class="card-footer text-center">
          <button
            @click.prevent="contacts.addContact"
            type="button"
            class="btn btn-primary"
          >
            Add Contact
          </button>
        </div>
      </form>
    </div>
  </layout>
</template>

<script setup>
import { contacts } from "../../../stores/contactsStore";
import layout from "../../Layout.vue";
// import { ref } from "vue";
// import router from "../../../router";

// const contactInfo = {
//   name: "",
//   job: "",
//   email: "",
//   address: "",
//   phone: "",
//   about: "",
//   img: "",
// };
// const contactInfo = ref({ ...contactInfo });
// const contacts = ref([]);

// const addContact = () => {
//   contacts.value.push(contactInfo.value);
//   contactInfo.value = { ...contactInfo };
//   router.push({ path: "/contacts" });
// };
</script>