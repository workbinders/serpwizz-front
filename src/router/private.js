export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/private/Dashboard.vue'),
    meta: {
      title: 'Dashboard',
      requiresAuth: true
    }
  },
  {
    path: '/my-leads',
    name: 'MyLeads',
    component: () => import('../views/private/MyLeads.vue'),
    meta: {
      title: 'My Leads',
      requiresAuth: true
    }
  },
  {
    path: '/white-label-reports',
    name: 'WhiteLabelReports',
    component: () => import('../views/private/WhiteLabelReports.vue'),
    meta: {
      title: 'White Label Reports',
      requiresAuth: true
    }
  },
  {
    path: '/organic-ranking',
    name: 'OrganicRanking',
    component: () => import('../views/private/OrganicRanking.vue'),
    meta: {
      title: 'Organic Ranking',
      requiresAuth: true
    }
  },
  {
    path: '/report-template',
    name: 'ReportTemplate',
    component: () => import('../views/private/ReportTemplate.vue'),
    meta: {
      title: 'Report Template',
      requiresAuth: true
    }
  },
  {
    path: '/embed-settings',
    name: 'EmbedSettings',
    component: () => import('../views/private/EmbeddedForm.vue'),
    meta: {
      title: 'Organic Ranking',
      requiresAuth: true
    }
  },
  {
    path: '/white-label-settings',
    name: 'WhiteLabelSettings',
    component: () => import('../views/private/WhiteLabelSettings.vue'),
    meta: {
      title: 'White Label Settings',
      requiresAuth: true
    }
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import('../views/private/tools/Index.vue'),
    meta: {
      title: 'Tools',
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'ToolsIndex',
        component: () => import('../views/private/tools/Tools.vue'),
        meta: {
          title: 'Tools',
          requiresAuth: true
        }
      },
      {
        path: 'title-tag-checker',
        name: 'TitleTagCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Title Tag Checker',
          description_1:
            'A title tag is a piece of HTML code used to tell search engines the ‘name’ of your page. An SEO title can be up to 70 characters long (when optimizing for Google) and should include the keyword you want the page to rank for. 💪',
          description_2:
            'A title tag is a piece of HTML code used to tell search engines the ‘name’ of your page.',
          requiresAuth: true
        }
      },
      {
        path: 'meta-description-checker',
        name: 'MetaDescriptionCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Meta Description Checker',
          description_1:
            "A clear, concise, accurate description of a web page that should be about 300 characters in length. It isn't visible on the actual website, but appears on a SERP - meaning it's vital to good SEO rankings! 🌟!",
          requiresAuth: true
        }
      },
      {
        path: 'meta-keyword-checker',
        name: 'MetaKeywordCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Meta Keyword Checker',
          description_1:
            'This is list of keywords that you fill in that is only visible to the search engine bots. It may or may not be used by Google, but other search engines do take notice, and you want your page to rank in them all! 💯',
          description_2:
            'You need relevant keywords in your metadata if you want to improve your SEO ranking! See our tool tip for advice about how to do this 🛠️.',
          requiresAuth: true
        }
      },
      {
        path: 'all-header-tags-checker',
        name: 'AllHeaderTagCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'All Header Tag Checker',
          description_1:
            'HTML Header tags are a great way to tell search engines what your page is about, and the keywords it should rank for. 🤓',
          requiresAuth: true
        }
      },
      {
        path: 'image-alt-tags-checker',
        name: 'ImageAltTagCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Image Alt Tag',
          description_1:
            "Searchbots don't see the way humans do. Alt Tags are a great way to tell them what's in an image. They can then rank it in image searches - which can be a great source of organic traffic! 😃",
          requiresAuth: true
        }
      },
      {
        path: 'keyword-density-consistency-checker',
        name: 'KeywordDensityConsistencyCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Keyword Density & Consistency Checker',
          description_1:
            "To be effective, a page's content should focus on the keywords you want to rank for. These keywords should also be used across the title, meta and header tags. The more consistent your keywords are, the better search engines will understand the goals of your content. 🎯",
          requiresAuth: true
        }
      },
      {
        path: 'html-text-ratio-checker',
        name: 'HTMLTextRatioCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Text/Html Ratio Checker',
          description_1:
            "Having a low text-to-HTML ratio won't be viewed negatively by Google or other search engines on its own, but a poor one may impact user experience and result in bounce-rates! 📉",
          requiresAuth: true
        }
      },
      {
        path: 'gzip-compression-checker',
        name: 'GZipCompressionCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'GZIP Compression Checker',
          description_1:
            'Gzip is a method of compressing files for faster network transfers. This allows your web server to provide smaller file sizes that load faster for your website users. ⌛️',
          requiresAuth: true
        }
      },
      {
        path: 'ip-address-canonicalization-checker',
        name: 'IPAddressCanonicalizationCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'IP Address Canonicalization Checker',
          description_1:
            "When a site's IP address is canonicalized, the IP address redirects to the domain name. IP Canonicalization can help you to improve your SEO ranking. 🎆",
          requiresAuth: true
        }
      },
      {
        path: 'xml-sitemap-checker',
        name: 'XMLSitemapCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'XML Sitemap Checker',
          description_1:
            "XML Sitemaps are important for SEO because they make it easier for Google to find your site's pages. This matters because Google ranks web PAGES - not just websites! ✅",
          requiresAuth: true
        }
      },
      {
        path: 'robots-txt-checker',
        name: 'RobotsTxtCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Robots.txt Checker',
          description_1:
            "A robots.txt file tells Search Engine crawlers which pages or files the crawler can or can't request from your site. This is used mainly to avoid overloading your site with requests; it is not a mechanism for keeping a web page out of Google.",
          requiresAuth: true
        }
      },
      {
        path: 'embedded-object-checker',
        name: 'EmbeddedObjectCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Embedded Object Checker',
          description_1:
            'An embedded object is any external media that is included in a web page using the HTML command. For example, when sharing a YouTube video on your web page, that video can be shown using the HTML embed code provided by YouTube. Currently, Google prefers this to iFrames. Just ensure that the coding is correct and you are not serving up broken or dangerous links! 🎥',
          requiresAuth: true
        }
      },
      {
        path: 'domain-age-checker',
        name: 'DomainAgeCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Domain Age Checker',
          description_1:
            "Check out how old any domain is - the older the domain the more authority it may have! SEOs call these types of domains 'aged domains' 🙂",
          requiresAuth: true
        }
      },
      {
        path: 'favicon-checker',
        name: 'FaviconCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Favicon Checker',
          description_1:
            'A favicon is a visual representation of your website. SEO is all about branding and marketing and the more visible your website is, the more users are likely to click on your website and remember who you are 😁',
          requiresAuth: true
        }
      },
      {
        path: 'error-page-checker',
        name: 'ErrorPageCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Custom 404 Page Checker',
          description_1:
            'A custom 404 page is a great way to stop users from getting confused if they follow a broken link and can even be a great branding opportunity! ✋',
          requiresAuth: true
        }
      },
      {
        path: 'htaccess-redirect-checker',
        name: 'HtaccessRedirectCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Htaccess Redirect Checker',
          description_1:
            'Htaccess file allows you to set server configuration for a specific directory. It is designed to create SEO-friendly redirects. Check to see if you have any 🤠',
          requiresAuth: true
        }
      },
      {
        path: 'page-size-checker',
        name: 'PageSizeCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Page Size Checker',
          description_1:
            'When it comes to your website pages, size matters. The smaller the file size of a page, the faster it will load for anyone who requests it. Always try to make sure your pages are not weighed down by extra code, images that are too large and other issues! ⚡️',
          requiresAuth: true
        }
      },
      {
        path: 'email-privacy-checker',
        name: 'EmailPrivacyCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Email Privacy Checker',
          description_1:
            'Displaying plain text emails makes it easy for bots to scrape the addresses and spam you. Making use of a contact form that shields 🛡 your email address is a better idea.',
          requiresAuth: true
        }
      },
      {
        path: 'url-rewrite-checker',
        name: 'URLRewriteCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'URL Rewrite Checker',
          description_1:
            "Url rewriting is a process of appending or modifying any url structure while loading a page to make it go from looking 'UGLY' to look good - check to see if you have any rewrites in place 💪🏻",
          requiresAuth: true
        }
      },
      {
        path: 'underscore-url-checker',
        name: 'URLUnderscoreCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'URL Underscore Checker',
          description_1:
            'Google views hyphens in URLs as word separators, while an underscore in your URL will not be recognized. This means using hyphens makes it much easier for Google to figure out what a page is about - and should be used instead of underscores whenever possible. ⌨️',
          requiresAuth: true
        }
      },
      {
        path: 'link-analysis-checker',
        name: 'LinkAnalysisCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Link Analysis Checker',
          description_1:
            'Making use of in-page links is an SEO must, but try to keep them useful and relevant, as well as accurate! 🤓',
          requiresAuth: true
        }
      },
      {
        path: 'iframe-checker',
        name: 'IFrameCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'IFrame Checker',
          description_1:
            'iFrames tend to neither help nor hurt your search engine ranking. They are not duplicate content, but they are not original either, so the less they are used the better. Some also believe Google currently prefers embeds over iFrames. 💁',
          requiresAuth: true
        }
      },
      {
        path: 'whois-data-checker',
        name: 'WhoisDataCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Whois Data Checker',
          description_1:
            'who is a widely used Internet record listing that identifies who owns a domain and how to get in contact with them. The internet corporation for Assigned Names and Numbers (ICANN) regulates Name registration and ownership 🔍',
          requiresAuth: true
        }
      },
      {
        path: 'indexed-page-checker',
        name: 'IndexedPageCheckerTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Indexed Page Checker',
          requiresAuth: true
        }
      },
      {
        path: 'backlinks-counter',
        name: 'BacklinksCounterTool',
        component: () => import('../views/private/tools/Tool.vue'),
        meta: {
          title: 'Backlinks Counter',
          description_1:
            "It's important that you make sure that search engines have indexed all the pages you want them to see. 🗂",
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/referral-program',
    name: 'ReferralProgram',
    component: () => import('../views/private/ReferralProgram.vue'),
    meta: {
      title: 'Referral Program',
      requiresAuth: true
    }
  },
  //   TO DO
  {
    path: '/video-tutorials',
    name: 'VideoTutorials',
    component: () => import('../views/private/VideoTutorials.vue'),
    meta: {
      title: 'Video Tutorials',
      requiresAuth: true
    }
  }
]
