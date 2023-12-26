<template>
    <layout>
        <router-link
            to="/users/create"
            class="btn btn-success my-2"
            @click="users.resetUserInfo()"
        >
            <i class="fas fa-plus nav-icon mx-2"></i>Add User
        </router-link>

        <div class="card">
            <div class="card-header bg-info">
                <h3 class="card-title"><i class="nav-icon fas fa-users mr-2"></i>Users</h3>
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

            <div class="card-body table-responsive p-0">
                <table class="table table-hover table-head-fixed text-nowrap">
                    <thead>
                        <tr v-if="users.users.length >= 1">
                            <th>Name</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>About</th>
                            <th>Status</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <h3
                            class="text-center"
                            v-if="users.users.length < 1"
                        >
                            No Products Are Found
                        </h3>
                        <tr
                            v-for="(user, index) in users.users"
                            :key="index"
                        >
                            <td>{{ user.name }}</td>
                            <td>
                                <img
                                    class="img-circle"
                                    :src="user.image"
                                    alt="Image"
                                    width="30"
                                    height="30"
                                />
                            </td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.address }}</td>
                            <td>{{ user.about }}</td>
                            <td>{{ user.status }}</td>
                            <td class="text-center">
                                <router-link
                                    to="/users/edit"
                                    class="btn btn-info btn-sm rounded-circle"
                                    @click="users.editUser(index)"
                                >
                                    <i class="fas fa-pencil-alt"></i>
                                </router-link>
                                <button
                                    @click="users.deleteUser(index)"
                                    type="button"
                                    class="btn btn-danger btn-sm mx-2 rounded-circle"
                                >
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </layout>
</template>

<script setup>
import { users } from "../../../stores/usersStore";
import layout from "../../Layout.vue";
import { ref, watch } from "vue";

const search = ref("");

watch(search, () => {
    users.search(search.value.toLowerCase());
});
</script>
