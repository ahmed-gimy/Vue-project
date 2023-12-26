<template>
    <layout>
        <router-link
            to="/quote/create"
            class="btn btn-success my-2"
            @click="quotations.resetQuoteInfo()"
        >
            <i class="fas fa-plus nav-icon mx-2"></i>Add Quotation
        </router-link>

        <div class="card">
            <div class="card-header bg-info">
                <h3 class="card-title">
                    <i class="nav-icon fas fa-dollar-sign mr-2"></i>Quotations
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

            <div class="card-body table-responsive p-0">
                <table class="table table-hover table-head-fixed text-nowrap">
                    <thead>
                        <tr v-if="quotations.quotes.length >= 1">
                            <th>Name</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Extra Houres</th>
                            <th>Status</th>
                            <th>Budget</th>
                            <th>Leader</th>
                            <th>Client</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <h3
                            class="text-center"
                            v-if="quotations.quotes.length < 1"
                        >
                            No Quotations Are Found
                        </h3>
                        <tr
                            v-for="(quote, index) in quotations.quotes"
                            :key="index"
                        >
                            <td>{{ quote.name }}</td>
                            <td>{{ quote.description }}</td>
                            <td>{{ quote.duration }}</td>
                            <td>{{ quote.extrahoures }}</td>
                            <td>{{ quote.status }}</td>
                            <td>{{ quote.budget }}</td>
                            <td>{{ quote.leader }}</td>
                            <td>{{ quote.client }}</td>
                            <td class="text-center">
                                <button
                                    title="convert to project"
                                    class="btn btn-success btn-sm mx-2 rounded-circle"
                                    @click="confirmConverting(index)"
                                >
                                    <i class="fas fa-share fa-rotate-180"></i>
                                </button>
                                <router-link
                                    to="/quote/edit"
                                    class="btn btn-info btn-sm rounded-circle"
                                    @click="quotations.editQuote(index)"
                                >
                                    <i class="fas fa-pencil-alt"></i>
                                </router-link>
                                <button
                                    @click="quotations.deleteQuote(index)"
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
import { quotations } from "../../../stores/quotesStore";
import { projects } from "../../../stores/projectsStore";
import layout from "../../Layout.vue";
import { ref, watch } from "vue";
import Swal from "sweetalert2";

const search = ref("");

watch(search, () => {
    quotations.search(search.value.toLowerCase());
});

const convertQuoteToProject = (index) => {
    projects.projectInfo = { ...quotations.quotes[index] };
    projects.addProject();
};

const confirmConverting = (index) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, convert it!",
    }).then((result) => {
        if (result.isConfirmed) {
            convertQuoteToProject(index);
            quotations.deleteQuoteConfirm(index);
        }
    });
};
</script>
