<template>
  <layout>
    <router-link to="/contacts/create" class="btn btn-primary mb-2">
      <i class="fas fa-plus nav-icon mx-2"></i>Add Contact
    </router-link>
    <section class="content">
      <div class="card card-solid">
        <div class="card-header">
          <form action="simple-results.html">
            <div class="input-group card-tools">
              <input
                v-model.trim="search"
                type="search"
                class="form-control form-control"
                placeholder="Search... "
              />
              <div class="input-group-append">
                <button type="submit" class="btn btn-default">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="card-body pb-0">
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
                      <p class="text-muted text-sm">
                        <b>About: </b> {{ contact.about }}
                      </p>
                      <ul class="ml-4 mb-0 fa-ul text-muted">
                        <li class="small">
                          <span class="fa-li"
                            ><i class="fas fa-building"></i
                          ></span>
                          Address: {{ contact.address }}
                        </li>
                        <li class="small">
                          <span class="fa-li"><i class="fas fa-at"></i></span>
                          Email: {{ contact.email }}
                        </li>
                        <li class="small">
                          <span class="fa-li"
                            ><i class="fas fa-phone-alt"></i
                          ></span>
                          Phone: {{ contact.phone }}
                        </li>
                      </ul>
                    </div>
                    <div class="col-5 text-center">
                      <img
                        src="{{ contact.img }}"
                        alt="user-avatar"
                        class="img-circle img-fluid"
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
                      @click="
                        showModal = true;
                        actionIndex = index;
                      "
                      type="button"
                      class="btn btn-danger btn-sm mx-2"
                      data-toggle="modal"
                      data-target="#modal-default"
                    >
                      <i class="fas fa-trash"></i>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="showModal"
              class="modal fade show"
              id="modal-default"
              aria-modal="true"
              role="dialog"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header bg-danger">
                    <h4 class="modal-title">Warning</h4>
                    <button
                      @click="showModal = false"
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Are You Sure You Want To Delete This Contact ?</p>
                  </div>
                  <div class="modal-footer justify-content-between">
                    <button
                      @click="showModal = false"
                      type="button"
                      class="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      @click.prevent="
                        contacts.deleteContact(actionIndex);
                        showModal = false;
                      "
                      type="button"
                      class="btn btn-danger"
                      data-dismiss="modal"
                    >
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

const showModal = ref(false);
const actionIndex = ref(0);
const search = ref("");

watch(search, () => {
  contacts.value.contacts = contacts.value.contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.value.toLowerCase()) ||
      contact.about.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

