<template>
  <div class="wrapper">
    <navbar class=""></navbar>
    <sidebar></sidebar>
    <div class="content-wrapper">
      <ContentHeader />
      <section class="content">
        <div class="container-fluid">
          <slot />
        </div>
      </section>
    </div>
    <Footer class=""></Footer>
  </div>
</template>

<script setup>
import Navbar from "../dashboard/Navbar.vue";
import Sidebar from "../dashboard/Sidebar.vue";
import Footer from "../dashboard/Footer.vue";
import ContentHeader from "../dashboard/ContentHeader.vue";
</script>
