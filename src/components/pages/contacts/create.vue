<template>
    <layout>
        <div class="container">
            <div class="col-md-12">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Add Your Data Please</h3>
                        <div class="card-tools">
                            <!-- <button  type="button" class="btn bg-danger btn-sm">
                                <i class="fas fa-times"></i>
                            </button> -->
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
            </div>

        </div>
    </layout>
</template>

<script setup>
import { ref } from "vue";
import layout from "../../Layout.vue";
import router from "../../../router";

const x = {
    name: "",
    email: "",
    address: "",
    phone: "",
};
const newContact = ref({ ...x });
const contacts = ref([]);

const addContact = () => {
    contacts.value.push(newContact.value);
    newContact.value = { ...x };
    router.push({ path: '/contacts' })

};


</script>