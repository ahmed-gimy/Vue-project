<template>
  <layout>
    <router-link
      to="/contacts/create"
      class="btn btn-success my-2"
      @click="contacts.resetContactInfo()"
    >
      <i class="fas fa-plus nav-icon mx-2"></i>Add Contact
    </router-link>
    <section class="content">
      <div class="card card-solid">
        <div class="card-header bg-info">
          <h3 class="card-title">
            <i class="nav-icon fas fa-phone-alt mr-2"></i>Contacts
          </h3>
          <div class="card-tools">
            <div
              class="input-group input-group-sm"
              style="width: 150px"
            >
              <input
                v-model.trim="search"
                type="search"
                name="table_search"
                class="form-control float-right"
                placeholder="Search"
              />
              <div class="input-group-append">
                <button
                  type="submit"
                  class="btn btn-default"
                >
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body pb-0">
          <h3
            class="text-center"
            v-if="contacts.contacts.length < 1"
          >
            No Contacts Are Found
          </h3>
          <div class="row">
            <div
              v-for="(contact, index) in contacts.contacts"
              :key="index"
              class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column"
            >
              <div class="card bg-light d-flex flex-fill">
                <div class="card-header text-muted border-bottom-0">
                  {{ contact.job }}
                </div>
                <div class="card-body pt-0">
                  <div class="row">
                    <div class="col-7">
                      <h2 class="lead">
                        <b>{{ contact.name }}</b>
                      </h2>
                      <p class="text-muted text-sm"><b>About: </b> {{ contact.about }}</p>
                      <ul class="ml-4 mb-0 fa-ul text-muted">
                        <li class="small">
                          <span class="fa-li"><i class="fas fa-building"></i></span>
                          Address: {{ contact.address }}
                        </li>
                        <li class="small">
                          <span class="fa-li"><i class="fas fa-at"></i></span>
                          Email: {{ contact.email }}
                        </li>
                        <li class="small">
                          <span class="fa-li"><i class="fas fa-phone-alt"></i></span>
                          Phone: {{ contact.phone }}
                        </li>
                      </ul>
                    </div>
                    <div class="col-5 text-center">
                      <img
                        width="100"
                        height="100"
                        :src="contact.img"
                        alt="image"
                        class="img-circle"
                      />
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="text-right">
                    <router-link
                      to="/contacts/edit"
                      @click="contacts.editContact(index)"
                      class="btn btn-info btn-sm"
                    >
                      <i class="fas fa-pencil-alt"></i>
                      Edit
                    </router-link>
                    <button
                      @click="contacts.deleteContact(index)"
                      type="button"
                      class="btn btn-danger btn-sm mx-2"
                    >
                      <i class="fas fa-trash"></i>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>

<script setup>
import { contacts } from "../../../stores/contactsStore";
import layout from "../../Layout.vue";
import { ref, watch } from "vue";

const search = ref("");

watch(search, () => {
  contacts.search(search.value.toLowerCase());
});
</script>
