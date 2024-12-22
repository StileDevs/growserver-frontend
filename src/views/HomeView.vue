<template>
  <navbar-menu />
  <Card class="mt-16 mx-6 py-20">
    <template #content>
      <div class="text-center">
        <div class="sm:text-6xl text-4xl font-bold mb-3">GrowServer</div>
        <p>A Growtopia private server using NodeJS</p>
      </div>
    </template>
  </Card>
  <footer-menu />
</template>

<script setup lang="ts">
import Card from "primevue/card";
import NavbarMenu from "@/components/NavbarMenu.vue";
import FooterMenu from "@/components/FooterMenu.vue";
</script>
