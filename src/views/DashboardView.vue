<template>
  <SideBarMenu>
    <template #header-name> Dashboard </template>

    <template #content>
      <div
        style="border-width: 1px; border-color: rgba(255, 255, 255, 0.2)"
        class="rounded-md sm:w-1/2 w-[80%] m-auto"
      >
        <header class="p-4 flex items-center gap-4">
          <Avatar
            image="https://avatars.githubusercontent.com/u/48410066?v=4"
            class=""
            shape="circle"
            size="normal"
          />
          <div>Welcome to GrowServer</div>
        </header>
        <div style="border-top-width: 1px; border-color: rgba(255, 255, 255, 0.2)" class="p-8">
          <div>Only these for now</div>

          <PlayerHeadCanvas></PlayerHeadCanvas>
        </div>
      </div>
    </template>
  </SideBarMenu>
</template>

<script lang="ts" setup>
import Avatar from "primevue/avatar";
import SideBarMenu from "@/components/SideBarMenu.vue";
import PlayerHeadCanvas from "@/components/PlayerHeadCanvas.vue";
</script>
