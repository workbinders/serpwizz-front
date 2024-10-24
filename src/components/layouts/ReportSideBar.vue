<template>
  <div class="drawer lg:drawer-open max-w-fit">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <!-- <div class="drawer-content flex flex-col items-center justify-center">
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
  </div> -->
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-0">
        <li>
          <RouterLink :to="{ name: 'Dashboard' }">
            <IconReport class="w-4 h-4" />
            <span>Results</span>
            <IconCheck class="w-6 h-6" />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'MyLeads' }">
            <IconSEOResult class="w-4 h-4" />
            SEO Results
            <IconCheck class="w-6 h-6" />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'WhiteLabelReports' }">
            <IconUsability class="w-4 h-4" />
            Usability
            <IconCheck class="w-6 h-6" />
          </RouterLink>
        </li>

        <li>
          <RouterLink :to="{ name: 'OrganicRanking' }">
            <IconPerformance class="w-4 h-4" />
            Performance
            <IconCheck class="w-6 h-6" />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'ReportTemplate' }">
            <IconTechnology class="w-4 h-4" />
            Technology
            <IconCheck class="w-6 h-6" />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'EmbedSettings' }">
            <IconSocial class="w-4 h-4" />
            Social Media
            <IconCheck class="w-6 h-6" />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'WhiteLabelSettings' }">
            <IconLink class="w-4 h-4" />
            Link Analysis
            <IconCheck class="w-6 h-6" />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'Tools' }">
            <IconBack class="w-4 h-4" />
            Back To Dashboard
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

import IconReport from '@/components/icons/reportSidebar/report.vue'
import IconSEOResult from '@/components/icons/reportSidebar/seo-result.vue'
import IconUsability from '@/components/icons/reportSidebar/usability.vue'
import IconPerformance from '@/components/icons/reportSidebar/performance.vue'
import IconTechnology from '@/components/icons/reportSidebar/technology.vue'
import IconSocial from '@/components/icons/reportSidebar/social.vue'
import IconLink from '@/components/icons/reportSidebar/link.vue'
import IconBack from '@/components/icons/reportSidebar/back.vue'
import IconCheck from '@/components/icons/reportSidebar/check.vue'
</script>
