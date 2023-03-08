<template>
  <layout>
    <div class="container">
      <router-link to="/contacts/create"  class="btn btn-primary m-2">
        <i class="fas fa-plus nav-icon mx-2"></i>Add Contact
      </router-link>
      <!-- <div v-if="showForm" class="col-md-12">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">Add Your Data Please</h3>
            <div class="card-tools">
              <button @click="showForm = false" type="button" class="btn bg-danger btn-sm">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>

          <form>
            <div class="card-body">
              <div class="form-group">
                <label>Name</label>
                <input required v-model="newContact.name" type="text" class="form-control"
                  placeholder="Enter Your Name" />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input required v-model="newContact.email" type="email" class="form-control"
                  placeholder="Enter Your Email" />
              </div>
              <div class="form-group">
                <label>Address</label>
                <input required v-model="newContact.address" type="address" class="form-control"
                  placeholder="Enter Your Address" />
              </div>
              <div class="form-group">
                <label>Phone</label>
                <input required v-model="newContact.phone" type="phone" class="form-control"
                  placeholder="Enter Your Phone" />
              </div>
            </div>

            <div class="card-footer">
              <button @click.prevent="addContact" type="button" class="btn btn-primary">
                Add Contact
              </button>
              <button @click="showForm = false" type="button" class="btn bg-danger btn mx-2">
                Close
              </button>
            </div>
          </form>
        </div>
      </div> -->
      <div class="col-md-12">
        <div class="card">
          <table class="table text-center table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(contact, index) in contacts" :key="index">
                <td>{{ contact.name }}</td>
                <td>{{ contact.email }}</td>
                <td>{{ contact.address }}</td>
                <td>{{ contact.phone }}</td>
                <td><i class="fas fa-pen nav-icon"></i></td>
                <td><i class="fas fa-trash"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </layout>
</template>

<script setup>
// import { ref } from "vue";
import layout from "../../Layout.vue";

// const showForm = ref(false);
// const x = {
//   name: "",
//   email: "",
//   address: "",
//   phone: "",
// };
// const newContact = ref({ ...x });
// const contacts = ref([]);

// const addContact = () => {
//   contacts.value.push(newContact.value);
//   showForm.value = false;
//   newContact.value = { ...x };
// };

</script>