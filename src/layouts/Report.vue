<template>
  <div class="w-screen">
    <TopBar />
    <div class="body">
      <SideBar />
      <div class="content">
        <div v-if="$slots.head" class="content-head">
          <slot name="head"></slot>
        </div>
        <slot />
      </div>
    </div>
    <AuditPopup />
  </div>
</template>

<script setup>
import TopBar from '@/components/layouts/TopBar.vue'
import SideBar from '@/components/layouts/ReportSideBar.vue'
import AuditPopup from '@/components/AuditPopup.vue'
</script>
