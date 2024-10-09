<template>
  <Auth>
    <template #head>
      <h1>My Leads</h1>
    </template>

    <div class="table-cover">
      <div class="table-cover-heading" id="lead-tour">
        <h2>Leads</h2>
      </div>
      <div class="px-4 mt-4 flex justify-between items-center">
        <div class="join input pr-0 w-80">
          <button>
            <IconSearch />
          </button>
          <input
            type="text"
            id="searchInput"
            placeholder="Search"
            class="input !border-0 w-full h-full"
          />
        </div>
        <div class="flex gap-3">
          <button id="copyButton" type="button" class="action-btn">
            <IconCopy class="w-5" />
            Copy
          </button>
          <button id="excelButton" type="button" class="action-btn">
            <IconDownload />
            Excel
          </button>
          <button id="csvButton" type="button" class="action-btn">
            <IconDownload />
            CSV
          </button>
          <button id="pdfButton" type="button" class="action-btn">
            <IconDownload />
            PDF
          </button>
        </div>
      </div>

      <div class="px-4 mt-4 flex">
        <div class="overflow-x-auto w-full">
          <table id="leadTable" class="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Website</th>
                <th>Phone</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Custom Field</th>
                <th>Opt-In</th>
                <th>Score</th>
                <th>Report Date</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(lead, index) in data?.leads?.data" :key="index">
                <td>
                  <a :href="`mailto:${lead.email}`"> {{ lead.email }} </a>
                </td>
                <td>
                  <a href="#" target="_blank">{{ lead.website }}</a>
                </td>
                <td>{{ lead.phone }}</td>
                <td>{{ lead.first_name }}</td>
                <td>{{ lead.last_name }}</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <div class="progress_lead" data-percentage="59">
                    <span class="progress_lead-left">
                      <span class="progress_lead-bar"></span>
                    </span>
                    <span class="progress_lead-right">
                      <span class="progress_lead-bar"></span>
                    </span>
                    <div class="progress_lead-value">
                      <div>{{ lead.score }}</div>
                    </div>
                  </div>
                </td>
                <td data-search="14 Jun 23" data-order="14 Jun 23">{{ lead.date }}</td>
                <td>Website</td>
                <td class="action-td">
                  <div class="arrow-up"></div>

                  <a
                    href="#"
                    target="_blank"
                    class="waves-effect waves-light"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="View Report"
                  >
                    <IconEdit />
                  </a>

                  <button
                    data-id="0"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Delete Report"
                    @click="deleteLead(lead.id, index)"
                  >
                    <IconTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Auth>
</template>

<script setup>
import { inject, ref, onMounted } from 'vue'
import leadService from '@/services/leads'

// Layout
import Auth from '@/layouts/Auth.vue'

import IconCopy from '@/components/icons/IconCopy.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconDownload from '@/components/icons/IconDownload.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconTrash from '@/components/icons/IconTrash.vue'

const APP_URL = inject('APP_URL')

const data = ref([])

const loadData = async () => {
  try {
    data.value = await leadService.index()
  } catch (error) {
    console.error('Error loading data:', error)
  }
}

const deleteLead = async (id, index) => {
  try {
    console.log(id)

    if (confirm('Are you sure to delete lead?')) {
      await leadService.delete(id)
      data.value.leads.data.splice(index, 1)
    }
  } catch (error) {
    console.error('Error loading data:', error)
  }
}

onMounted(loadData)
</script>
