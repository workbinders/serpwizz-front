<template>
  <Auth>
    <template #head>
      <h1>White Label Report</h1>
    </template>

    <div class="content-head">
      <div class="flex justify-between items-center w-full">
        <h1>Audit a new website</h1>
        <div class="w-fit">
          <div class="join">
            <FormField name="email" class="join-item">
              <Field type="email" placeholder="Email" class="input w-full join-item" name="email" />
            </FormField>
            <button class="btn btn-primary join-item">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <div class="table-cover">
      <div class="table-cover-heading" id="lead-tour">
        <h2>Your Generated Reports</h2>
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
                <th>Website</th>
                <th>Date</th>
                <th>Score</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 10" key="i">
                <td>
                  <a href="#" target="_blank" >developer.zapier.com</a>
                </td>
                <td>2023-01-11</td>
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
import { ref, onMounted } from 'vue'
import * as yup from 'yup'
// Stores
import service from '@/services/reportTemplates'

// Layout
import Auth from '@/layouts/Auth.vue'

// Images
import PerlemonLogo from '@/assets/images/perlemon-logo.png'
import IconCopy from '@/components/icons/IconCopy.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconDownload from '@/components/icons/IconDownload.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconTrash from '@/components/icons/IconTrash.vue'

const selectedLogo = PerlemonLogo

const form = ref({
  company_logo: null,
  report_header_text: null,
  company_name: null,
  company_email: null,
  company_website: null,
  company_phone: null,
  company_address: null,
  custom_title_status: false,
  custom_title: null
})

const schema = yup.object({
  // company_logo: yup
  // .string()
  // .required('Please enter your first name.')
  // .min(3, 'First name must be at least 3 characters'),
  report_header_text: yup
    .string()
    .required('Please enter header text.')
    .max(50, 'Report Header Text must be 50 characters or less.'),
  company_name: yup
    .string()
    .required('Please enter comapny name.')
    .min(3, 'Comapny name must be at least 3 characters')
    .max(50, 'Comapny name must be 50 characters or less.'),
  company_email: yup.string().email('Please enter valid email'),
  company_website: yup.string().required('Please enter comapny webiste.').url(),
  company_phone: yup.string().required('Please enter comapny phone number.'),
  company_address: yup.string().required('Please enter comapny address.'),
  custom_title: yup.string().nullable().max(50, 'Custom title must be 50 characters or less.')
})

onMounted(async () => {
  const response = await service.get()
  if (response.status) {
    form.value = response.data
  }
})

const submit = async () => {
  await service.store(form.value)
}
</script>
