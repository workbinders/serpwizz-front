<template>
  <Auth>
    <template #head>
      <div class="flex justify-between items-center w-full">
        <h1>Referral Program</h1>
      </div>
    </template>

    <div class="table-cover">
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
          <table class="table">
            <!-- head -->
            <thead d class="font-bold">
              <tr>
                <th>User</th>
                <th>Amount</th>
                <th>Register Date</th>
                <th>Status</th>
                <th>Commission</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sample@gmail.com</td>
                <td>24</td>
                <td>12.07.2018</td>
                <td>Registered</td>
                <td>-</td>

                <td class="action-td">
                  <button type="button">
                    <img src="./images/trash.svg" alt="" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>sample@gmail.com</td>
                <td>0</td>
                <td>12.07.2018</td>
                <td>Registered</td>
                <td>-</td>

                <td class="action-td">
                  <button type="button">
                    <img src="./images/trash.svg" alt="" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>sample@gmail.com</td>
                <td>3</td>
                <td>12.07.2018</td>
                <td>Registered</td>
                <td>-</td>

                <td class="action-td">
                  <button type="button">
                    <img src="./images/trash.svg" alt="" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>sample@gmail.com</td>
                <td>24</td>
                <td>12.07.2018</td>
                <td>Registered</td>
                <td>-</td>

                <td class="action-td">
                  <button type="button">
                    <img src="./images/trash.svg" alt="" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>sample@gmail.com</td>
                <td>24</td>
                <td>12.07.2018</td>
                <td>Registered</td>
                <td>-</td>

                <td class="action-td">
                  <button type="button">
                    <img src="./images/trash.svg" alt="" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>sample@gmail.com</td>
                <td>24</td>
                <td>12.07.2018</td>
                <td>Registered</td>
                <td>-</td>

                <td class="action-td">
                  <button type="button">
                    <img src="./images/trash.svg" alt="" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>sample@gmail.com</td>
                <td>0</td>
                <td>12.07.2018</td>
                <td>Registered</td>
                <td>-</td>

                <td class="action-td">
                  <button type="button">
                    <img src="./images/trash.svg" alt="" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- <div class="pagination label-text gap-5">
            <div class="flex">
              Rows per page:
              <span class="flex ml-3 gap-2"
                >10 <img src="/src/images/down-arrow.svg" alt="svg"
              /></span>
            </div>
            <div class="label-text flex gap-2"><span>1-10</span>of<span>20</span></div>
            <div class="flex gap-5">
              <img src="/src/images/left-arrow.svg" alt="svg" />
              <img src="/src/images/right-arrow.svg" alt="svg" />
            </div>
          </div> -->
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

const selectedLogo = PerlemonLogo
const showVideoTutorial = ref(false)
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
