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
            <IconGear />
            <span>Dashboard</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'MyLeads' }">
            <IconMylead />
            My Leads
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'WhiteLabelReports' }">
            <IconWhiteLebelSetting />
            White Label Reports
          </RouterLink>
        </li>

        <li>
          <RouterLink :to="{ name: 'OrganicRanking' }">
            <IconOrganicRanking />
            Organic Rankings
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'ReportTemplate' }">
            <IconReportTemplet />
            Report Template
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'EmbedSettings' }">
            <IconEmbedSettings />
            Embed Settings
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'WhiteLabelSettings' }">
            <IconWhiteSetting />
            White Label Settings
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'Tools' }">
            <IconTools />
            Tools
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'ReferralProgram' }">
            <IconRefrelProgram />
            Referral Program
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'VideoTutorials' }">
            <IconTutorial />
            Tutorials
          </RouterLink>
        </li>
        <li>
          <a href="https://serpwizz.com/contact-us/" target="_blank">
            <IconReportBug />
            Report A Bug
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

import IconGear from '@/components/icons/sidebar/IconDashboard.vue'
import IconEmbedSettings from '@/components/icons/sidebar/IconEmbedSettings.vue'
import IconMylead from '@/components/icons/sidebar/IconMylead.vue'
import IconOrganicRanking from '@/components/icons/sidebar/IconOrganicRanking.vue'
import IconRefrelProgram from '@/components/icons/sidebar/IconRefrelProgram.vue'
import IconReportBug from '@/components/icons/sidebar/IconReportBug.vue'
import IconReportTemplet from '@/components/icons/sidebar/IconReportTemplet.vue'
import IconTools from '@/components/icons/sidebar/IconTools.vue'
import IconTutorial from '@/components/icons/sidebar/IconTutorial.vue'
import IconWhiteLebelSetting from '@/components/icons/sidebar/IconWhiteLebelSetting.vue'
import IconWhiteSetting from '@/components/icons/sidebar/IconWhiteSetting.vue'
</script>
