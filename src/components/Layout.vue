<template>
  <div class="wrapper">
    <navbar class="mb-5"></navbar>
    <sidebar></sidebar>
    <div class="content-wrapper">
      <!-- <ContentHeader></ContentHeader> -->
      <section class="content">
        <div class="container-fluid">      
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
// import ContentHeader from "../dashboard/ContentHeader.vue";
</script>
