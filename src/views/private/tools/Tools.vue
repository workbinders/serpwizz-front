<template>
  <Auth>
    <template #head>
      <div class="flex justify-between items-center w-full">
        <h1>Tools</h1>
      </div>
    </template>

    <div class="card bg-white p-3">
      <div class="page-title">Validators / Testers</div>
      <div class="label-text">Select the tool you'd like to use:</div>
      <div class="flex flex-wrap gap-6 my-3 mt-5">
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'TitleTagCheckerTool' }"
          target="_blank"
        >
          Title Tag
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'MetaDescriptionCheckerTool' }"
          target="_blank"
        >
          Meta Description
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'MetaKeywordCheckerTool' }"
          target="_blank"
        >
          Meta Keyword
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'AllHeaderTagCheckerTool' }"
          target="_blank"
        >
          All Header Tags
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'ImageAltTagCheckerTool' }"
          target="_blank"
        >
          Image Alt Tag
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'KeywordDensityConsistencyCheckerTool' }"
          target="_blank"
        >
          Keyword Density & Consistency
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'HTMLTextRatioCheckerTool' }"
          target="_blank"
          >Text/Html Ratio</RouterLink
        >
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'GZipCompressionCheckerTool' }"
          target="_blank"
        >
          GZIP
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'IPAddressCanonicalizationCheckerTool' }"
          target="_blank"
        >
          IP Address Canonicalization
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'XMLSitemapCheckerTool' }"
          target="_blank"
        >
          Xml Sitemap
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'RobotsTxtCheckerTool' }"
          target="_blank"
        >
          Robots.txt
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'EmbeddedObjectCheckerTool' }"
          target="_blank"
        >
          Embedded Audits
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'DomainAgeCheckerTool' }"
          target="_blank"
        >
          Domain Age
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'FaviconCheckerTool' }"
          target="_blank"
        >
          Favicon
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'ErrorPageCheckerTool' }"
          target="_blank"
        >
          404 Page</RouterLink
        >
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'HtaccessRedirectCheckerTool' }"
          target="_blank"
        >
          Htaccess Redirect Checker
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'PageSizeCheckerTool' }"
          target="_blank"
        >
          Page Size Checker
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'EmailPrivacyCheckerTool' }"
          target="_blank"
        >
          Email Privacy Tool
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'URLRewriteCheckerTool' }"
          target="_blank"
        >
          URL Rewrite
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'URLUnderscoreCheckerTool' }"
          target="_blank"
        >
          URL Underscore
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'LinkAnalysisCheckerTool' }"
          target="_blank"
        >
          Link Analysis
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'IFrameCheckerTool' }"
          target="_blank"
        >
          Iframe
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'WhoisDataCheckerTool' }"
          target="_blank"
        >
          Whois Data Checker
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'IndexedPageCheckerTool' }"
          target="_blank"
        >
          Indexed page
        </RouterLink>
        <RouterLink
          class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          :to="{ name: 'BacklinksCounterTool' }"
          target="_blank"
        >
          Backlinks Counter
        </RouterLink>
      </div>
    </div>
  </Auth>
</template>

<script setup>
import { RouterLink } from 'vue-router'

// Layout
import Auth from '@/layouts/Auth.vue'
</script>
