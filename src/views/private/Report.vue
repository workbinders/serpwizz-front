<template>
  <Report>
    <template #head>
      <div class="flex gap-2 items-center">
        <h1>Dashboard</h1>
        <img src="../../assets/images/right-arrow.svg" />
        Website Report
      </div>
      <div>
        <button class="btn btn-primary">
          <img src="../../assets/images/refresh.svg" />
          Refresh Results Now
        </button>
        <button class="btn border-primary hover:border-primary text-primary ml-2">
          <img src="../../assets/images/pdf-download.svg" />
          Download PDF
        </button>
      </div>
    </template>

    <div class="flex flex-col gap-4" v-if="lead">
      <div class="font-bold text-3xl">
        Website Report for Audit Results for {{ getHostName(lead.website) }}
      </div>
      <!-- <div class="label-text">Report Generated: December, 1 2022 05:59 AM*</div> -->
      <AnimatePulse class="w-44 h-3" />
    </div>
    <div class="flex flex-col gap-4" v-else>
      <AnimatePulse class="w-96 h-8" />
      <AnimatePulse class="w-44 h-3" />
    </div>

    <!-- Report start -->
    <div class="card bg-white p-4">
      <!-- TO DO White lable data -->
      <WhiteLable />

      <!-- TO DO Statistics -->
      <Statistics />
    </div>

    <!-- SEO Results -->
    <Result :result="result" />

    <!-- Usablity -->
    <Usablity />

    <!-- Performance -->
    <Performance />

    <!-- Technology -->
    <Technology />

    <!-- Social -->
    <Social />

    <!-- link -->
    <Link />

    <!-- Recommendations -->
    <Recommendations />

    <!-- Bottom button -->
    <div class="flex justify-center removepdf">
      <div class="flex justify-between gap-8">
        <div
          class="btn join-item border-primary bg-primary hover:bg-primary hover:text-white text-primary join flex justify-center items-center"
        >
          <img
            src="http://serpwizz.main/assets/images/document-white.svg"
            alt="svg"
            class="join-item"
          />
          <div class="join-item text-white">Download as PDF</div>
        </div>
        <div
          class="btn join-item border-primary text-primary join flex justify-center items-center"
        >
          <img src="http://serpwizz.main/assets/images/copy.svg" alt="svg" class="join-item" />
          <div class="join-item text-primary">Copy Report URL</div>
        </div>
        <a class="share-network-facebook"
          ><div
            class="btn join-item border-primary text-primary join flex justify-center items-center"
          >
            <img src="http://serpwizz.main/assets/images/fb.svg" alt="svg" class="join-item" />
            <div class="join-item text-primary">Facebook</div>
          </div></a
        >
        <a class="share-network-twitter"
          ><div
            class="btn join-item border-primary text-primary join flex justify-center items-center"
          >
            <img src="http://serpwizz.main/assets/images/x.svg" alt="svg" class="join-item" />
            <div class="join-item text-primary">Twitter</div>
          </div></a
        >
      </div>
    </div>
  </Report>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { inject, ref, onMounted } from 'vue'
import reportService from '@/services/report'
import { getHostName } from '@/utils/reportUtil'

// Layout
import Report from '@/layouts/Report.vue'

// Components
import AnimatePulse from '@/components/AnimatePulse.vue'
import WhiteLable from '@/components/report/WhiteLable.vue'
import Statistics from '@/components/report/Statistics.vue'
import Result from '@/components/report/Result.vue'
import Usablity from '@/components/report/Usablity.vue'
import Performance from '@/components/report/Performance.vue'
import Technology from '@/components/report/Technology.vue'
import Social from '@/components/report/Social.vue'
import Link from '@/components/report/Link.vue'
import Recommendations from '@/components/report/Recommendations.vue'

import IconCopy from '@/components/icons/IconCopy.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconDownload from '@/components/icons/IconDownload.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconTrash from '@/components/icons/IconTrash.vue'

const APP_URL = inject('APP_URL')

const route = useRoute()
const leadID = ref(false)
const lead = ref(false)
const result = ref(false)

const loadData = async () => {
  leadID.value = route.params.lead

  try {
    // TO DO
    // Load whitelable data
    lead.value = await reportService.index(leadID.value)
    console.log(lead.value)
  } catch (error) {
    console.error('Error loading data:', error)
  }
}

onMounted(loadData)
</script>
