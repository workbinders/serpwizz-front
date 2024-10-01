<template>
  <Auth>
    <template #head>
      <h1>Dashboard</h1>
      <div class="page-header-tools" id="run-audit-tour">
        <a class="btn btn-primary" data-toggle="modal" onclick="run_audit.showModal()"
          >Run Audit
        </a>
      </div>
    </template>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Refer -->
      <div class="card card-compact refer-card">
        <div class="card-body">
          <h2 class="card-title">Refer friend and get 25% credit</h2>

          <div class="join bg-white items-center pr-3">
            <input
              type="text"
              class="input w-full gray-text truncate !border-0 !bg-white"
              id="textToCopy"
              :value="`${APP_URL}?refer-by=12456789`"
            />
            <IconCopy />
          </div>
          <div>
            <div
              class="position-absolute text-primary mt-1"
              style="display: none; color: white"
              id="copySuccessMessage"
            >
              Copied successfully.
            </div>
          </div>

          <div class="grid grid-cols-3 text-center pt-4">
            <div>
              <div class="font-semibold text-lg">1</div>
              <div class="text-xs">Referral Signup</div>
            </div>
            <div>
              <div class="font-semibold text-lg">0</div>
              <div class="text-xs">Successful Referrals</div>
            </div>
            <div>
              <div class="font-semibold text-lg">$0.00</div>
              <div class="text-xs">Credits Earned</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Refer /-->

      <!-- Last 10 leads -->
      <div class="card bg-white pl-5 pr-2 py-4">
        <div class="flex gap-3">
          <div id="chartdiv" class="chartdivdashboard has-shadow w-32" role="progressbar"></div>

          <div class="overflow-x-auto my-auto">
            <table class="table">
              <tbody>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
                <tr>
                  <th>
                    <div class="bg-secondary h-5 w-5 rounded-md">&nbsp;</div>
                  </th>
                  <td>Converted Leads</td>
                  <td>10</td>
                </tr>
                <tr>
                  <th>
                    <div class="bg-[#FFD54F] h-5 w-5 rounded-md">&nbsp;</div>
                  </th>
                  <td>Other Leads</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td colspan="3">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Last 10 leads /-->

      <!-- Total Leads -->
      <div class="card bg-white p-5">
        <div class="my-auto flex flex-col gap-6 text-xs">
          <div>
            <div class="flex justify-between" id="lead-graph-tour">
              <div>Total Leads</div>
              <div>44</div>
            </div>
            <div class="progress progress-primary w-full bg-primary bg-opacity-30">
              <progress
                class="progress progress-primary w-full bg-primary bg-opacity-30"
                role="progressbar"
                aria-valuenow="4.4"
                aria-valuemin="0"
                aria-valuemax="1000"
                style="width: 4.4%"
              ></progress>
            </div>
          </div>
          <div>
            <div class="flex justify-between" id="white-label-tour">
              <div>White Label</div>
              <div>10</div>
            </div>

            <div class="progress progress-info w-full bg-info bg-opacity-30">
              <progress
                class="progress progress-info w-full bg-info bg-opacity-30"
                role="progressbar"
                aria-valuenow="1"
                aria-valuemin="0"
                aria-valuemax="1000"
                style="width: 1%"
              ></progress>
            </div>
          </div>
          <div>
            <div class="flex justify-between" id="converted-leads-tour">
              <div>Converted Leads</div>
              <div>30</div>
            </div>

            <div class="progress progress-success w-full bg-success bg-opacity-30">
              <progress
                class="progress progress-success w-full bg-success bg-opacity-30"
                role="progressbar"
                aria-valuenow="3"
                aria-valuemin="0"
                aria-valuemax="1000"
                style="width: 3%"
              ></progress>
            </div>
          </div>
        </div>
      </div>
      <!-- Total Leads /-->
    </div>

    <div class="table-cover">
      <div class="table-cover-heading" id="lead-tour">
        <h2>Last 10 leads</h2>
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
                <th id="website-tour">Website</th>
                <th>Contact</th>
                <th>Full Name</th>
                <th>Score</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 10" key="i">
                <td>
                  <a href="#" target="_blank" >developer.zapier.com</a>
                </td>
                <td>0123456789</td>
                <td>John Doe</td>
                <td>
                  <div class="progress_lead" data-percentage="59">
                    <span class="progress_lead-left">
                      <span class="progress_lead-bar"></span>
                    </span>
                    <span class="progress_lead-right">
                      <span class="progress_lead-bar"></span>
                    </span>
                    <div class="progress_lead-value">
                      <div>59</div>
                    </div>
                  </div>
                </td>
                <td data-search="14 Jun 23" data-order="14 Jun 23">14 Jun 23</td>
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

                  <a
                    href="#"
                    class="waves-effect waves-light delete_keyword"
                    data-id="0"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Delete Report"
                    ><IconTrash
                  /></a>
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
import { inject } from 'vue'

// Layout
import Auth from '@/layouts/Auth.vue'

import IconCopy from '@/components/icons/IconCopy.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconDownload from '@/components/icons/IconDownload.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconTrash from '@/components/icons/IconTrash.vue'

const APP_URL = inject('APP_URL')
</script>
