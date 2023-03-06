<template>
  <div class="wrapper">
    <navbar></navbar>
    <sidebar></sidebar>
    <div class="content-wrapper">
      <ContentHeader></ContentHeader>
      <section class="content">
        <div class="container-fluid">
          <button class="btn btn-primary mb-2">
            <i class="fas fa-plus nav-icon mx-2"></i>Add Contact
          </button>
          <div class="card card-solid table-responsive">
            <table class="table text-center table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td><i class="fas fa-pen nav-icon"></i></td>
                  <td><i class="fas fa-trash"></i></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td><i class="fas fa-pen nav-icon"></i></td>
                  <td><i class="fas fa-trash"></i></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td><i class="fas fa-pen nav-icon"></i></td>
                  <td><i class="fas fa-trash"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
          <slot />
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Navbar from "../dashboard/Navbar.vue";
import Sidebar from "../dashboard/Sidebar.vue";
import Footer from "../dashboard/Footer.vue";
import ContentHeader from "../dashboard/ContentHeader.vue";

// const contacts = [{
//   name: String,
//   phone: Number,
//   address: String,

// }];
</script>
