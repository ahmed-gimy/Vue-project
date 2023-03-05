<template>
    <div class="wrapper">
        <navbar></navbar>
        <sidebar></sidebar>
        <div class="content-wrapper">
        <!-- <ContentHeader></ContentHeader> -->

        <section class="content">
          <div class="container-fluid">
            <!-- <ExampleForm></ExampleForm> -->
          </div>
        </section>
      </div>
    </div>
</template>

<script>
import Navbar from "../dashboard/Navbar.vue";
import Sidebar from "../dashboard/Sidebar.vue";

export default {
    components: {
        Navbar,
        Sidebar
    }
}

</script>
