<template>
  <Auth>
    <template #head>
      <div class="flex justify-between items-center w-full">
        <h1 class="flex items-center gap-2">
          Tools <IconArrow />
          <span class="label-text font-normal opacity-70">{{ route.meta.title }}</span>
        </h1>
      </div>
    </template>

    <!-- Tool Form -->
    <div class="card bg-white p-3">
      <div class="page-title">{{ route.meta.title }}</div>
      <div class="label-text">
        {{ route.meta.description_1 }}
      </div>

      <!-- Form -->
      <Form @submit="submit" :validationSchema="schema" class="flex w-3/6 my-6 gap-4">
        <FormField name="website" class="w-full">
          <Field
            type="url"
            placeholder="Enter Website Url"
            class="input w-full"
            name="website"
            v-model="form.website"
          />
        </FormField>
        <button type="submit" class="btn btn-primary">Check</button>
      </Form>
      <div v-if="apiResponse?.html">
        <div v-html="apiResponse.html" class="mb-5"></div>
        <div v-if="apiResponse.TableHTML" class="mb-5">
          <div v-html="apiResponse.TableHTML" v-if="showDetails"></div>
          <button class="btn btn-primary" @click="showDetails = !showDetails">
            {{ showDetails ? 'Hide' : 'Show' }} details
          </button>
        </div>
        <component :is="dynamicTooltip"></component>
      </div>
    </div>

    <!-- Embedded Settings -->
    <div class="card bg-white p-3">
      <div class="page-title">Embedded Settings for {{ route.meta.title }}</div>
      <div class="label-text">
        {{ route.meta.description_2 ?? route.meta.description_1 }}
      </div>

      <Form @submit="embeddedSubmit" :validationSchema="schema" class="flex flex-col gap-5">
        <div class="border mt-5 rounded-md py-20">
          <div class="text-center mb-3 text-lg font-bold">{{ route.meta.title }} Checker</div>
          <FormField name="url" class="flex mx-auto w-3/6 gap-4">
            <Field
              type="url"
              placeholder="Enter Website Url"
              class="input w-full"
              name="website"
              v-model="embedded_form.website"
            />
          </FormField>
        </div>
        <div>
          <textarea
            name=""
            id=""
            class="textarea w-full border-dashed !border-gray-300 textarea-lg"
            disabled
          ></textarea>
        </div>
        <div class="text-right">
          <button type="submit" class="btn btn-primary" :disabled="loading">
            Generate Embedded code
          </button>
          <button type="button" class="btn btn-accent ml-4">Copy To Clipboard</button>
        </div>
      </Form>
    </div>
  </Auth>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import * as yup from 'yup'

// Stores
import service from '@/services/tools'

// Layout
import Auth from '@/layouts/Auth.vue'

// Components
import TitleTagTool from '@/components/Suggestions/TitleTagTool.vue'
import MetaDescriptionTool from '@/components/Suggestions/MetaDescriptionTool.vue'
import MetaKeywordTool from '@/components/Suggestions/MetaKeywordTool.vue'
import AllHeaderTagCheckerTool from '@/components/Suggestions/AllHeaderTagCheckerTool.vue'
import ImageAltTagCheckerTool from '@/components/Suggestions/ImageAltTagCheckerTool.vue'
import KeywordDensityConsistencyCheckerTool from '@/components/Suggestions/KeywordDensityConsistencyCheckerTool.vue'
import HTMLTextRatioCheckerTool from '@/components/Suggestions/HTMLTextRatioCheckerTool.vue'
import GZipCompressionCheckerTool from '@/components/Suggestions/GZipCompressionCheckerTool.vue'
import IPAddressCanonicalizationCheckerTool from '@/components/Suggestions/IPAddressCanonicalizationCheckerTool.vue'
import XMLSitemapCheckerTool from '@/components/Suggestions/XMLSitemapCheckerTool.vue'
import RobotsTxtCheckerTool from '@/components/Suggestions/RobotsTxtCheckerTool.vue'
import EmbeddedObjectCheckerTool from '@/components/Suggestions/EmbeddedObjectCheckerTool.vue'
import DomainAgeCheckerTool from '@/components/Suggestions/DomainAgeCheckerTool.vue'
import FaviconCheckerTool from '@/components/Suggestions/FaviconCheckerTool.vue'
import ErrorPageCheckerTool from '@/components/Suggestions/ErrorPageCheckerTool.vue'
import HtaccessRedirectCheckerTool from '@/components/Suggestions/HtaccessRedirectCheckerTool.vue'
import PageSizeCheckerTool from '@/components/Suggestions/PageSizeCheckerTool.vue'
import EmailPrivacyCheckerTool from '@/components/Suggestions/EmailPrivacyCheckerTool.vue'
import URLRewriteCheckerTool from '@/components/Suggestions/URLRewriteCheckerTool.vue'
import URLUnderscoreCheckerTool from '@/components/Suggestions/URLUnderscoreCheckerTool.vue'
import LinkAnalysisCheckerTool from '@/components/Suggestions/LinkAnalysisCheckerTool.vue'
import IFrameCheckerTool from '@/components/Suggestions/IFrameCheckerTool.vue'
import WhoisDataCheckerTool from '@/components/Suggestions/WhoisDataCheckerTool.vue'
import IndexedPageCheckerTool from '@/components/Suggestions/IndexedPageCheckerTool.vue'
import BacklinksCounterTool from '@/components/Suggestions/BacklinksCounterTool.vue'

// Images
import IconArrow from '@/components/icons/IconArrow.vue'

const route = useRoute()
const loading = ref(false)
const showDetails = ref(false)
const apiResponse = ref(null)
const API_URL = route.path.split('/').pop()

const form = ref({
  website: null
})

const embedded_form = ref({
  website: null
})

const schema = yup.object({
  website: yup.string().required('Please enter webiste URL.').url()
})

const dynamicTooltip = computed(() => {
  switch (route.name) {
    case 'TitleTagCheckerTool':
      return TitleTagTool

    case 'MetaDescriptionCheckerTool':
      return MetaDescriptionTool

    case 'MetaKeywordCheckerTool':
      return MetaKeywordTool

    case 'AllHeaderTagCheckerTool':
      return AllHeaderTagCheckerTool

    case 'ImageAltTagCheckerTool':
      return ImageAltTagCheckerTool

    case 'KeywordDensityConsistencyCheckerTool':
      return KeywordDensityConsistencyCheckerTool

    case 'HTMLTextRatioCheckerTool':
      return HTMLTextRatioCheckerTool

    case 'GZipCompressionCheckerTool':
      return GZipCompressionCheckerTool

    case 'IPAddressCanonicalizationCheckerTool':
      return IPAddressCanonicalizationCheckerTool

    case 'XMLSitemapCheckerTool':
      return XMLSitemapCheckerTool

    case 'RobotsTxtCheckerTool':
      return RobotsTxtCheckerTool

    case 'EmbeddedObjectCheckerTool':
      return EmbeddedObjectCheckerTool

    case 'DomainAgeCheckerTool':
      return DomainAgeCheckerTool

    case 'FaviconCheckerTool':
      return FaviconCheckerTool

    case 'ErrorPageCheckerTool':
      return ErrorPageCheckerTool

    case 'HtaccessRedirectCheckerTool':
      return HtaccessRedirectCheckerTool

    case 'PageSizeCheckerTool':
      return PageSizeCheckerTool

    case 'EmailPrivacyCheckerTool':
      return EmailPrivacyCheckerTool

    case 'URLRewriteCheckerTool':
      return URLRewriteCheckerTool

    case 'URLUnderscoreCheckerTool':
      return URLUnderscoreCheckerTool

    case 'LinkAnalysisCheckerTool':
      return LinkAnalysisCheckerTool

    case 'IFrameCheckerTool':
      return IFrameCheckerTool

    case 'WhoisDataCheckerTool':
      return WhoisDataCheckerTool

    case 'IndexedPageCheckerTool':
      return IndexedPageCheckerTool

    case 'BacklinksCounterTool':
      return BacklinksCounterTool
  }
})

const submit = async () => {
  loading.value = true
  await service.get(form.value, API_URL).then((response) => {
    apiResponse.value = response.data
    APIResponseFormatter[route.name]()
  })
}

const embeddedSubmit = async () => {
  console.log('embeddedSubmit')
}

const APIResponseFormatter = {
  // Tools functions
  TitleTagCheckerTool: () => {
    var HTML = ''
    var titleLength = apiResponse.value?.title.length
    var messageClass = APIResponseFormatter.getMessageClass(
      titleLength,
      apiResponse.value.min_length,
      apiResponse.value.max_length
    )

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`

    if (apiResponse.value?.title) {
      HTML += `<div class="label-text">`
      HTML += `Title: <span class="font-bold">${apiResponse.value.title}</span>`
      HTML += `</div>`

      HTML += `<div class="label-text">`
      HTML += `Length: <span class="font-bold">${apiResponse.value?.title.length} characters</span>`
      HTML += `</div>`
    }

    HTML += `</div>`

    apiResponse.value.html = HTML
  },
  MetaDescriptionCheckerTool: () => {
    var HTML = ''
    var messageClass = APIResponseFormatter.getMessageClass(
      apiResponse.value.description.length,
      apiResponse.value.min_length,
      apiResponse.value.max_length
    )

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`

    if (apiResponse.value?.description) {
      HTML += `<div class="label-text">`
      HTML += `Meta Description: <span class="font-bold">${apiResponse.value.description}</span>`
      HTML += `</div>`

      HTML += `<div class="label-text">`
      HTML += `Length: <span class="font-bold">${apiResponse.value?.description.length} characters</span>`
      HTML += `</div>`
    }

    HTML += `</div>`

    apiResponse.value.html = HTML
  },
  MetaKeywordCheckerTool: () => {
    var HTML = ''
    var messageClass = APIResponseFormatter.getMessageClass(
      apiResponse.value.keyword.length,
      apiResponse.value.min_length,
      apiResponse.value.max_length
    )

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`

    if (apiResponse.value?.keyword) {
      HTML += `<div class="label-text">`
      HTML += `Meta Keyword: <span class="font-bold">${apiResponse.value.keyword}</span>`
      HTML += `</div>`

      HTML += `<div class="label-text">`
      HTML += `Length: <span class="font-bold">${apiResponse.value?.keyword.length} characters</span>`
      HTML += `</div>`
    }

    HTML += `</div>`

    apiResponse.value.html = HTML
  },
  AllHeaderTagCheckerTool: () => {
    const HeaderKeys = Object.keys(apiResponse.value?.headers)

    var HTML = ''
    var messageClass = HeaderKeys.includes('h1') ? 'text-green-500' : 'text-yellow-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`
    HTML += `</div>`

    if (HeaderKeys.length > 0) {
      var TableHTML = ''
      TableHTML += '<table class="table table-zebra">'
      TableHTML += '<thead><tr><th class="!font-bold">Tag Value Details</th></tr></thead>'
      HeaderKeys.forEach((tag) => {
        Object.values(apiResponse.value.headers[tag]).forEach((innderText) => {
          TableHTML += `<thead><tr><td> &lt;${tag}&gt ${innderText} &lt;/${tag}&gt</td></tr></thead>`
        })
      })
      TableHTML += '</table>'
      apiResponse.value.TableHTML = TableHTML
    }

    apiResponse.value.html = HTML
  },
  KeywordDensityConsistencyCheckerTool: () => {
    const KeywordDensity = Object.keys(apiResponse.value?.keyword_density)
    var HTML = ''
    var messageClass =
      apiResponse.value.missing_alt_images_count == 0 ? 'text-yellow-500' : 'text-green-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`
    HTML += `</div>`

    if (KeywordDensity.length > 0) {
      var TableHTML = ''
      TableHTML += '<table class="table table-zebra">'
      TableHTML += '<thead><tr>'
      TableHTML += '<th class="!font-bold">Keyword</th>'
      TableHTML += '<th class="!font-bold">Frequency</th>'
      TableHTML += '<th class="!font-bold">Title</th>'
      TableHTML += '<th class="!font-bold">Meta Description Tag</th>'
      TableHTML += '<th class="!font-bold">Headings Tags</th>'
      TableHTML += '</tr></thead>'
      KeywordDensity.forEach((keyword, index) => {
        TableHTML += '<thead><tr>'
        TableHTML += `<td class='uppercase'>${keyword}</td>`
        TableHTML += `<td>${apiResponse.value?.keyword_density[keyword].count}</td>`
        TableHTML += `<td>${apiResponse.value?.keyword_density[keyword].in_document_title ? 'Yes' : 'No'}</td>`
        TableHTML += `<td>${apiResponse.value?.keyword_density[keyword].in_meta_description ? 'Yes' : 'No'}</td>`
        TableHTML += `<td>${apiResponse.value?.keyword_density[keyword].in_heading_tags ? 'Yes' : 'No'}</td>`
        TableHTML += '</tr></thead>'
      })
      TableHTML += '</table>'
      apiResponse.value.TableHTML = TableHTML
    }

    apiResponse.value.html = HTML
  },
  HTMLTextRatioCheckerTool: () => {
    var HTML = ''
    var messageClass = apiResponse.value?.text_ratio < 20 ? 'text-green-500' : 'text-yellow-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`

    HTML += `<div class="label-text">`
    HTML += `Text to Html Ratio: <span class="font-bold">${apiResponse.value.text_ratio}</span>`
    HTML += `</div>`

    HTML += `<div class="label-text">`
    HTML += `Text Content Size: <span class="font-bold">${apiResponse.value?.content_size}</span>`
    HTML += `</div>`

    HTML += `<div class="label-text">`
    HTML += `Total Html Size: <span class="font-bold">${apiResponse.value?.html_size}</span>`
    HTML += `</div>`

    HTML += `</div>`

    apiResponse.value.html = HTML
  },
  GZipCompressionCheckerTool: () => {
    var HTML = ''
    var messageClass = apiResponse.value?.is_gzip ? 'text-green-500' : 'text-yellow-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`

    HTML += `</div>`

    apiResponse.value.html = HTML
  },
  IPAddressCanonicalizationCheckerTool: () => {
    var HTML = ''
    var messageClass = apiResponse.value?.is_ip_canonicalization
      ? 'text-green-500'
      : 'text-yellow-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`
    HTML += `</div>`

    apiResponse.value.html = HTML
  },
  XMLSitemapCheckerTool: () => {
    var HTML = ''
    var messageClass = apiResponse.value?.is_sitemap_exist ? 'text-green-500' : 'text-yellow-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`
    HTML += `</div>`

    apiResponse.value.html = HTML
  },
  RobotsTxtCheckerTool: () => {
    var HTML = ''
    var messageClass = apiResponse.value?.is_robots_txt_exist ? 'text-green-500' : 'text-yellow-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`
    HTML += `</div>`

    apiResponse.value.html = HTML
  },
  EmbeddedObjectCheckerTool: () => {
    var HTML = ''
    var messageClass = apiResponse.value?.is_embedded_object_found
      ? 'text-yellow-500'
      : 'text-green-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`
    HTML += `</div>`

    apiResponse.value.html = HTML
  },
  DomainAgeCheckerTool: () => {
    var HTML = ''
    HTML = `<div class="flex flex-col gap-1">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `</div>`

    if (apiResponse.value.domain_age) {
      HTML += '<table class="table table-zebra">'

      HTML += `<tr><th>Domain</th><td>${apiResponse.value.host}</td></tr>`
      HTML += `<tr><th>Domain Age</th><td>${apiResponse.value.domain_age}</td></tr>`
      HTML += `<tr><th>Domain Created Date</th><td>${apiResponse.value.created_date}</td></tr>`
      HTML += `<tr><th>Domain updated Date</th><td>${apiResponse.value.updated_date}</td></tr>`
      HTML += `<tr><th>Domain expired Date</th><td>${apiResponse.value.expired_date}</td></tr>`

      HTML += '</table>'

      apiResponse.value.html = HTML
    }
  },
  FaviconCheckerTool: () => {
    var HTML = ''
    var messageClass = apiResponse.value?.favicon != false ? 'text-green-500' : 'text-yellow-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()

    if (apiResponse.value.favicon != false) {
      HTML += `<div><img src="http://www.google.com/s2/u/0/favicons?domain=${apiResponse.value.host}" />${apiResponse.value.message}</div>`
    }
    HTML += `</div>`
    apiResponse.value.html = HTML
  },
  ErrorPageCheckerTool: () => {
    var HTML = ''
    var messageClass = apiResponse.value?.errorPage != false ? 'text-green-500' : 'text-yellow-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`
    HTML += `</div>`
    apiResponse.value.html = HTML
  },
  HtaccessRedirectCheckerTool: () => {
    var HTML = ''
    var messageClass = apiResponse.value?.httpCode == 200 ? 'text-green-500' : 'text-yellow-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="label-text">Status: ${apiResponse.value.httpCode}</div>`
    HTML += `</div>`
    apiResponse.value.html = HTML
  },
  PageSizeCheckerTool: () => {
    var HTML = ''
    var messageClass =
      apiResponse.value?.size <= apiResponse.value?.max_size ? 'text-green-500' : 'text-yellow-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`
    HTML += `</div>`
    apiResponse.value.html = HTML
  },
  EmailPrivacyCheckerTool: () => {
    var HTML = ''
    var messageClass = apiResponse.value?.emailFound == true ? 'text-yellow-500' : 'text-green-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`
    HTML += `</div>`
    apiResponse.value.html = HTML
  },
  URLRewriteCheckerTool: () => {
    var HTML = ''
    var messageClass =
      apiResponse.value?.isURLRewrite == true ? 'text-green-500' : 'text-yellow-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`
    HTML += `</div>`
    apiResponse.value.html = HTML
  },
  URLUnderscoreCheckerTool: () => {
    var HTML = ''
    var messageClass =
      apiResponse.value?.hasUnderscore == true ? 'text-yellow-500' : 'text-green-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`
    HTML += `</div>`
    apiResponse.value.html = HTML
  },
  LinkAnalysisCheckerTool: () => {
    var HTML = ''

    HTML = `<div class="flex flex-col gap-1">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="label-text">${apiResponse.value.message}</div>`
    HTML += `</div>`
    const links = Object.values(apiResponse.value?.links)
    if (links.length > 0) {
      var TableHTML = ''
      TableHTML += '<table class="table table-zebra">'
      TableHTML += '<thead>'
      TableHTML += '<tr>'
      TableHTML += '<th class="!font-bold">Anchor</th>'
      TableHTML += '<th class="!font-bold">Type</th>'
      TableHTML += '<th class="!font-bold">Follow</th>'
      TableHTML += '</tr>'
      TableHTML += '</thead>'
      TableHTML += '<tbody>'
      apiResponse.value?.links.forEach((link) => {
        console.log(link)

        TableHTML += `<tr>`
        TableHTML += `<td><a href="${link.href}" targe="_blank">${link.text ? link.text : link.href}</a></td>`
        TableHTML += `<td>${link.type}</td>`
        TableHTML += `<td>${link.follow_type}</td>`
        TableHTML += `</tr>`
      })
      TableHTML += '</tbody>'
      TableHTML += '</table>'
      apiResponse.value.TableHTML = TableHTML
    }

    apiResponse.value.html = HTML
  },
  IFrameCheckerTool: () => {
    var HTML = ''
    var messageClass = apiResponse.value?.hasIFrame == true ? 'text-yellow-500' : 'text-green-500'

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div>${apiResponse.value.message}</div>`
    HTML += `</div>`
    apiResponse.value.html = HTML
  },
  WhoisDataCheckerTool: () => {
    var HTML = ''
    HTML = `<div class="flex flex-col gap-1">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `</div>`

    if (apiResponse.value.domain_age) {
      HTML += '<table class="table table-zebra">'

      HTML += `<tr><th>Domain</th><td>${apiResponse.value.host}</td></tr>`
      HTML += `<tr><th>Domain Age</th><td>${apiResponse.value.domain_age}</td></tr>`
      HTML += `<tr><th>Domain Created Date</th><td>${apiResponse.value.created_date}</td></tr>`
      HTML += `<tr><th>Domain updated Date</th><td>${apiResponse.value.updated_date}</td></tr>`
      HTML += `<tr><th>Domain expired Date</th><td>${apiResponse.value.expired_date}</td></tr>`
      HTML += '</table>'
      HTML += '<br /><br />'

      HTML += '<table class="table table-zebra">'
      apiResponse.value?.whois_data.forEach((data) => {
        HTML += `<tr><td>${data}</td></tr>`
      })
      HTML += '</table>'

      apiResponse.value.html = HTML
    }
  },

  IndexedPageCheckerTool: () => {
    var HTML = ''
    var google_indexed_pages_count = apiResponse.value?.google_indexed_pages_count.replace(',', '')
    var google_backlink_count_status = apiResponse.value?.google_backlink_count_status
    var messageClass = 'text-red-500'
    if (
      google_backlink_count_status.warning.min <= google_indexed_pages_count &&
      google_backlink_count_status.warning.max >= google_indexed_pages_count
    ) {
      messageClass = 'text-yellow-500'
    } else if (google_backlink_count_status.good.min <= google_indexed_pages_count) {
      messageClass = 'text-green-500'
    }

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div>${apiResponse.value.message}</div>`
    HTML += `</div>`
    apiResponse.value.html = HTML
  },

  BacklinksCounterTool: () => {
    var HTML = ''
    var messageClass =
      parseInt(apiResponse.value?.google_backlink_count) <= 0 ? 'text-yellow-500' : 'text-green-500'

    console.log(parseInt(apiResponse.value?.google_backlink_count) <= 0)

    HTML = `<div class="flex flex-col gap-1 ${messageClass}">`
    HTML += APIResponseFormatter.getResultForHTML()
    HTML += `<div class="font-bold">${apiResponse.value.message}</div>`
    HTML += `</div>`
    apiResponse.value.html = HTML
  },

  //   Helper functions
  getResultForHTML() {
    var HTML = `<div class="label-text">`
    HTML += `Result for <span class="font-bold">${apiResponse.value.host}</span>`
    return (HTML += `</div>`)
  },
  getMessageClass(valueLength, min, max) {
    var messageClass = 'text-red-500'
    if (valueLength >= min && valueLength <= max) {
      messageClass = 'text-green-500'
    } else if (valueLength > 0 && (valueLength < min || valueLength > max)) {
      messageClass = 'text-yellow-500'
    }

    return messageClass
  }
}
</script>
