<template>
  <Auth>
    <template #head>
      <h1>Tutorials</h1>
    </template>

    <div class="card bg-white p-3">
      <div class="page-title">Video Tutorials - English</div>
      <div class="grid grid-cols-2 gap-7 my-5">
        <div class="btn join justify-start items-center" onclick="my_modal_1.showModal()">
          <div>
            <IconTutorialPlay />
          </div>
          <div>Exploring Your SERPWizz Dashboard</div>
        </div>

        <div class="btn join justify-start items-center" onclick="my_modal_1.showModal()">
          <div>
            <IconTutorialPlay />
          </div>
          <div>How To Upgrade SERPWizz Plan And Redeem Your Coupon Code</div>
        </div>

        <div class="btn join justify-start items-center" onclick="my_modal_1.showModal()">
          <div>
            <IconTutorialPlay />
          </div>
          <div>Analysing A SERPWizz Audit</div>
        </div>

        <div class="btn join justify-start items-center" onclick="my_modal_1.showModal()">
          <div>
            <IconTutorialPlay />
          </div>
          <div>Running An Audit With SERPWizz</div>
        </div>

        <div class="btn join justify-start items-center" onclick="my_modal_1.showModal()">
          <div>
            <IconTutorialPlay />
          </div>
          <div>How To Use A White Label Subdomain In SERPWizz</div>
        </div>

        <div class="btn join justify-start items-center" onclick="my_modal_1.showModal()">
          <div>
            <IconTutorialPlay />
          </div>
          <div>What Is The Purpose Of The "City"?</div>
        </div>
      </div>
      <div class="page-title">Video Tutorials - English</div>
      <div class="grid grid-cols-2 gap-7 my-5">
        <div class="btn join justify-start items-center" onclick="my_modal_1.showModal()">
          <div>
            <IconTutorialPlay />
          </div>
          <div>Esplorare La Vostra Pagina Iniziale Su SERPWizz</div>
        </div>

        <div class="btn join justify-start items-center" onclick="my_modal_1.showModal()">
          <div>
            <IconTutorialPlay />
          </div>
          <div>Svolgere Una Revisione SEO Con SERPWizz</div>
        </div>

        <div class="btn join justify-start items-center" onclick="my_modal_1.showModal()">
          <div>
            <IconTutorialPlay />
          </div>
          <div>
            Come Attivare Il Profilo Su SERPWizz, Aggiornare Il Vostro Piano, Utilizzare Un Codice
            Coupon
          </div>
        </div>

        <div class="btn join justify-start items-center" onclick="my_modal_1.showModal()">
          <div>
            <IconTutorialPlay />
          </div>
          <div>Analizzare Una Revisione SEO SERPWizz</div>
        </div>
      </div>
      <dialog
        id="my_modal_1"
        class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
      >
        <div class="modal-box bg-white rounded-lg !max-w-6xl">
          <div class="flex items-center justify-between border-b border-gray-300 p-4 mb-6">
            <div class="page-title">Exploring Your SERPWizz Dashboard</div>
            <form method="dialog">
              <button class="btn btn-circle btn-outline outline-none hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div class="w-[97%] rounded-lg overflow-hidden border border-black mx-4 my-6">
            <iframe
              width="100%"
              height="500px"
              src="https://www.youtube.com/embed/UsjDbbf3ctQ?si=JTLSxl__ochVh4wJ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </dialog>
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
import IconTutorialPlay from '@/components/icons/IconTutorialPlay.vue'


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
