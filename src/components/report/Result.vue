<template>
  <div id="seo" class="card bg-white p-4">
    <div class="page-title py-2">SEO Results</div>

    <div class="rounded-lg bg-custom_gray mt-3">
      <div class="flex items-center my-6 mx-6">
        <div
          v-if="result"
          role="progressbar"
          class="radial-progress text-warning"
          style="--value: 60; --size: 10rem; --thickness: 0.5rem; color: rgb(255, 193, 7)"
        >
          <span class="font-bold text-5xl text-warning" style="color: rgb(255, 193, 7)">B</span>
        </div>
        <div v-else>
          <AnimatePulse class="w-28 h-28" />
        </div>
        <div class="flex-col items-center justify-center mx-11">
          <div class="page-title mb-1">
            <span v-if="result">Your SEO could be better!</span>
            <span v-else><AnimatePulse class="w-28 h-5" /></span>
          </div>
          <div class="label-text">
            <span v-if="result"
              >Not bad! Your SEO is pulling its weight - but it could be working harder for you. To
              level up, consider SEO strategies like content generation and link-building
              🕵🏽&zwj;♂️.</span
            >
            <span v-else><AnimatePulse class="w-96 h-5" /></span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-3 mt-4">
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/circleright.svg" />
            <span class="text-base font-semibold text-black">Title Tag</span>
          </div>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="flex ga-2 flex-col mt-2">
          <div class="flex items-center gap-3">
            <div class="text-base text-black">Title:</div>
            <div class="label-text">Apple</div>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-base text-black">Length:</div>
            <div class="label-text">5 character(s)</div>
          </div>
        </div>
        <div class="border-t bg-white w-full p-3 rounded-lg mt-3" style="display: none">
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span
            >1. The HTML title element sets a title for an HTML document <br />
            2. An appropriate title helps users as well as search engines to understand the purpose
            of the page<br />
            3. Texts enclosed within title tags are displayed on the upper right corner of the
            browser window when the page is opened</span
          >
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/circleclose.svg" />
            <span class="text-base font-semibold text-black">Meta Keyword</span>
          </div>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="mt-2">
          You need relevant keywords in your metadata if you want to improve your SEO ranking! 🛠️.
        </div>
        <div class="flex ga-2 flex-col mt-2">
          <div class="flex items-center gap-3">
            <div class="text-base text-black">Meta Keyword:</div>
            <div class="label-text">Meta keywords not found!</div>
          </div>
        </div>
        <div class="border-t bg-white w-full p-3 rounded-lg mt-3" style="display: none">
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span
            >1. Meta Keywords are placed in the HTML code to place emphasis on specific words on the
            webpage <br />
            2. They promote specific keywords in a webpage that may be searched more often <br />
            3. Short, four to five keywords placed in the header tag</span
          >
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="blockinnerrowwithshadow_new has-shadow">
          <div class="flex justify-between">
            <div class="flex gap-2">
              <img src="http://serpwizz.main/assets/images/circleclose.svg" />
              <span class="text-base font-semibold text-black">Meta Description</span>
            </div>
            <img src="http://serpwizz.main/assets/images/question.svg" />
          </div>
          <div class="mt-2">We couldn't find a Meta Description! 🛠️.</div>
          <div class="flex ga-2 flex-col mt-2">
            <div class="flex items-center gap-3">
              <div class="text-base text-black">Meta Description:</div>
              <div class="label-text"></div>
            </div>
            <div class="flex items-center gap-3">
              <div class="text-base text-black">Length:</div>
              <div class="label-text">0 character(s)</div>
            </div>
          </div>
          <div class="border-t bg-white w-full p-3 rounded-lg mt-3" style="display: none">
            <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
            <span
              >1. For web crawlers, this serves as the context for understanding the relevance of
              your page<br />
              2. For human users, it’s a chance to see what the page (and the brand) are all
              about<br />
              3. For you, it’s an opportunity to rank higher for relevant searches and persuade more
              web users to visit your site — instead of a competitor’s in the SERPs</span
            >
          </div>
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/icrlewarning.svg" />
            <span class="text-base font-semibold text-black">Text/Html Ratio</span>
          </div>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="my-2 w-10/12">
          Your text-to-HTML ratio needs an overhaul. Web pages with higher text content to HTML tend
          to be more readable and understandable for people - and keeps them coming back for more!
          See our tool tip for advice on why this matters 🛠️.
        </div>
        <div class="flex items-center gap-5">
          <div class="flex items-center gap-3">
            <div class="text-base text-black">Text to Html Ratio:</div>
            <div class="label-text">4.3%</div>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-base text-black">Text Content size:</div>
            <div class="label-text">4369</div>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-base text-black">Total Html Size:</div>
            <div class="label-text">101546</div>
          </div>
        </div>
        <div class="border-t bg-white w-full p-3 rounded-lg mt-3" style="display: none">
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span
            >1. The correlation percentage of actual text content found on a web page<br />
            2. Loading speed is a good way to check coding efficiency. If your site is loading
            slowly this will indicate you have too many HTML elements<br />
            3. Certain elements such as tables, JavaScript, flash, large white spaces, too many tabs
            and comments can all increase the amount of code you have on your web pages</span
          >
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/circleclose.svg" />
            <span class="text-base font-semibold text-black">IP Address Canonicalization</span>
          </div>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="mt-2">
          We couldn't find any IP Canonicalization! Without this, your IP address and domain name
          might experience some redirection issues. 🛠️.
        </div>
        <div class="border-t bg-white w-full p-3 rounded-lg mt-3" style="display: none">
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span
            >1. Redirects canonicalized IP addresses to the domain name<br />
            2. This improves the SEO ranking</span
          >
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/circleright.svg" />
            <span class="text-base font-semibold text-black">GZIP compression</span>
          </div>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="mt-2">We've found your GZIP Compression. Excellent work 😊.</div>
        <div class="mt-2">Your webpage is compressed from 99 KB to 18 KB (82.3 % size savings)</div>
        <div class="border-t bg-white w-full p-3 rounded-lg mt-3" style="display: none">
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span
            >1. A method of compressing files for faster network transfers<br />
            2.Allows your web server to serve smaller file sizes that load faster for your website
            users</span
          >
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/circleright.svg" />
            <span class="text-base font-semibold text-black">XML Sitemap</span>
          </div>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="mt-2">
          We've found your XML Sitemap - which means Search Bots will, as well 😊.
        </div>
        <div class="mt-2">
          <a target="_blanck" href="https://www.apple.com//sitemap.xml">
            https://www.apple.com//sitemap.xml</a
          >
        </div>
        <div class="border-t bg-white w-full p-3 rounded-lg mt-3" style="display: none">
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span>
            1. Helps Google crawl and list your website.<br />
            2. Allows your website to be indexed correctly, i.e. H. individual pages can be found
            and listed.<br />
            3.Tells Google exactly what type of content is on your site and where to find it</span
          >
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/circleright.svg" />
            <span class="text-base font-semibold text-black">Robots.txt</span>
          </div>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="mt-2">Nice! We've found your Robots.txt file 😊.</div>
        <div class="mt-2">
          <a target="_blanck" href="https://www.apple.com//robots.txt">
            https://www.apple.com//robots.txt</a
          >
        </div>
        <div class="border-t bg-white w-full p-3 rounded-lg mt-3" style="display: none">
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span
            >1. Tells search engine crawlers which pages or files the crawler can or cannot request
            from your site.<br />
            2. Prevents your website from being overloaded with requests and crashing.</span
          >
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/circleclose.svg" />
            <span class="text-base font-semibold text-black">Underscores in the URLs</span>
          </div>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="mt-2">
          Some of your URLs have underscores. That's not a good thing. 🛠️. : (11)
        </div>
        <div class="border-t bg-white w-full p-3 rounded-lg mt-3" style="display: none">
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span
            >1. Checks for underscores in URLs as word separators, since Google won’t be able to
            read these properly.<br />
            2. Allows your website to be properly indexed, meaning individual pages can be found and
            listed.<br />
            3. Tells Google exactly what type of content your website holds, and where to find
            it</span
          >
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/circleright.svg" />
            <span class="text-base font-semibold text-black">Embedded Objects</span>
          </div>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="mt-2">
          Perfect! We haven’t found any embedded objects on your website. This is good news for your
          page load times 😊.
        </div>
        <div class="border-t bg-white w-full p-3 rounded-lg mt-3" style="display: none">
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span
            >1. Any external media that is included in a web page using the HTML “embed” command.<br />
            2. Often preferred by Google over iFrame content.</span
          >
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/circleright.svg" />
            <span class="text-base font-semibold text-black">WWW Resolve</span>
          </div>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="mt-2">We've found your WWW Resolve - and it's looking good 😊.</div>
        <div class="border-t bg-white w-full p-3 rounded-lg mt-3" style="display: none">
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span
            >1. WWW Resolve is a redirection command in the server’s configuration file.<br />
            2. Automatically adds the “www.” before the domain name</span
          >
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/icrlewarning.svg" />
            <span class="text-base font-semibold text-black">URL Rewrite</span>
          </div>
        </div>
        <div class="mt-2">Some of your URLs aren’t leading where they should be. 🛠️.</div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/circleright.svg" />
            <span class="text-base font-semibold text-black">iFrame</span>
          </div>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="mt-2">We couldn't detect any iFrames here! Well done 😊.</div>
        <div
          style="
            border: 1px solid rgba(0, 0, 0, 0.08);
            background-color: rgba(225, 225, 226, 0.2);
            border-radius: 5px;
            padding: 10px;
            color: rgb(115, 115, 115);
            display: none;
          "
        >
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span>
            1. Allows for external content to be included within a web page.<br />
            2. Mainly useful to embed existing HTML document into a current page.<br />
            3. Can sometimes fail to display on Google searches</span
          >
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/circleright.svg" />
            <span class="text-base font-semibold text-black">Image Alt Tag</span>
          </div>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="flex ga-2 flex-col mt-2">
          <div class="flex items-center gap-3">
            <div class="text-base text-black">Total Images:</div>
            <div class="label-text">0 Image(s)</div>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-base text-black">Alt Tag Missing on:</div>
            <div class="label-text">0 Image(s)</div>
          </div>
        </div>
        <div class="border-t bg-white w-full p-3 rounded-lg mt-3" style="display: none">
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span
            >1. Alt tags provide texts which are read by the search engines.<br />
            2. Images with properly formatted alt text contribute to how the page is indexed and
            where it ranks.<br />
            3. Useful for users viewing a webpage on screen readers or browsers that can’t process
            images.
          </span>
        </div>
        <div class="border border-dashed mt-3 rounded-lg" style="display: none">
          <table class="table table-borderd tabledatabase centerblockwidthtable tblalign">
            <tbody class="text-primary"></tbody>
          </table>
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <span class="text-base font-semibold text-black">Domain Details</span>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="border-t bg-white w-full p-3 rounded-lg my-3" style="display: none">
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span
            >1. Domain information can help you determine the proper contact for any domain listed
            in the WhoIs database.<br />
            2. A WhoIs look-up identifies the administrator contact information, billing contact and
            the technical contact for each domain name listing or IP in the WhoIs database.</span
          >
        </div>
        <div class="rounded-xl overflow-hidden border border-gray-300 mt-3">
          <table class="table w-full">
            <tbody>
              <tr>
                <th>Domain Age</th>
                <th>35 Years, 305 Days</th>
              </tr>
              <tr>
                <th>Created Date</th>
                <th>19th-Feb-1987</th>
              </tr>
              <tr>
                <th>Updated Date</th>
                <th>16th-Feb-2022</th>
              </tr>
              <tr>
                <th>Expiry Date</th>
                <th>20th-Feb-2023</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row mb-3 mt-3">
          <div class="rounded-xl overflow-hidden border border-gray-300 mt-3" style="display: none">
            <table class="table table-hover mb-0">
              <tbody>
                <tr>
                  <td><br /></td>
                </tr>
                <tr>
                  <td>Domain Name: apple.com<br /></td>
                </tr>
                <tr>
                  <td>Registry Domain ID: 1225976_DOMAIN_COM-VRSN<br /></td>
                </tr>
                <tr>
                  <td>Registrar WHOIS Server: whois.corporatedomains.com<br /></td>
                </tr>
                <tr>
                  <td>Registrar URL: www.cscprotectsbrands.com<br /></td>
                </tr>
                <tr>
                  <td>Updated Date: 2022-02-16T01:15:06Z<br /></td>
                </tr>
                <tr>
                  <td>Creation Date: 1987-02-19T00:00:00Z<br /></td>
                </tr>
                <tr>
                  <td>Registrar Registration Expiration Date: 2023-02-20T05:00:00Z<br /></td>
                </tr>
                <tr>
                  <td>Registrar: CSC CORPORATE DOMAINS, INC.<br /></td>
                </tr>
                <tr>
                  <td>Sponsoring Registrar IANA ID: 299<br /></td>
                </tr>
                <tr>
                  <td>Registrar Abuse Contact Email: domainabuse@cscglobal.com<br /></td>
                </tr>
                <tr>
                  <td>Registrar Abuse Contact Phone: +1.8887802723<br /></td>
                </tr>
                <tr>
                  <td>Registry Registrant ID: <br /></td>
                </tr>
                <tr>
                  <td>Registrant Name: Domain Administrator<br /></td>
                </tr>
                <tr>
                  <td>Registrant Organization: Apple Inc.<br /></td>
                </tr>
                <tr>
                  <td>Registrant Street: One Apple Park Way<br /></td>
                </tr>
                <tr>
                  <td>Registrant City: Cupertino<br /></td>
                </tr>
                <tr>
                  <td>Registrant State/Province: CA<br /></td>
                </tr>
                <tr>
                  <td>Registrant Postal Code: 95014<br /></td>
                </tr>
                <tr>
                  <td>Registrant Country: US<br /></td>
                </tr>
                <tr>
                  <td>Registrant Phone: +1.4089961010<br /></td>
                </tr>
                <tr>
                  <td>Registrant Phone Ext: <br /></td>
                </tr>
                <tr>
                  <td>Registrant Fax: +1.4089741560<br /></td>
                </tr>
                <tr>
                  <td>Registrant Fax Ext: <br /></td>
                </tr>
                <tr>
                  <td>Registry Admin ID: <br /></td>
                </tr>
                <tr>
                  <td>Admin Name: Domain Administrator<br /></td>
                </tr>
                <tr>
                  <td>Admin Organization: Apple Inc.<br /></td>
                </tr>
                <tr>
                  <td>Admin Street: One Apple Park Way<br /></td>
                </tr>
                <tr>
                  <td>Admin City: Cupertino<br /></td>
                </tr>
                <tr>
                  <td>Admin State/Province: CA<br /></td>
                </tr>
                <tr>
                  <td>Admin Postal Code: 95014<br /></td>
                </tr>
                <tr>
                  <td>Admin Country: US<br /></td>
                </tr>
                <tr>
                  <td>Admin Phone: +1.4089961010<br /></td>
                </tr>
                <tr>
                  <td>Admin Phone Ext: <br /></td>
                </tr>
                <tr>
                  <td>Admin Fax: +1.4089741560<br /></td>
                </tr>
                <tr>
                  <td>Admin Fax Ext: <br /></td>
                </tr>
                <tr>
                  <td>Registry Tech ID: <br /></td>
                </tr>
                <tr>
                  <td>Tech Name: Domain Administrator<br /></td>
                </tr>
                <tr>
                  <td>Tech Organization: Apple Inc.<br /></td>
                </tr>
                <tr>
                  <td>Tech Street: One Apple Park Way<br /></td>
                </tr>
                <tr>
                  <td>Tech City: Cupertino<br /></td>
                </tr>
                <tr>
                  <td>Tech State/Province: CA<br /></td>
                </tr>
                <tr>
                  <td>Tech Postal Code: 95014<br /></td>
                </tr>
                <tr>
                  <td>Tech Country: US<br /></td>
                </tr>
                <tr>
                  <td>Tech Phone: +1.4089961010<br /></td>
                </tr>
                <tr>
                  <td>Tech Phone Ext: <br /></td>
                </tr>
                <tr>
                  <td>Tech Fax: +1.4089741560<br /></td>
                </tr>
                <tr>
                  <td>Tech Fax Ext: <br /></td>
                </tr>
                <tr>
                  <td>Name Server: c.ns.apple.com<br /></td>
                </tr>
                <tr>
                  <td>Name Server: d.ns.apple.com<br /></td>
                </tr>
                <tr>
                  <td>Name Server: b.ns.apple.com<br /></td>
                </tr>
                <tr>
                  <td>Name Server: a.ns.apple.com<br /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-center mt-3">
            <button class="btn border-primary text-primary read_more">
              <span>Read More</span> <img src="http://serpwizz.main/assets/images/up-arrow.svg" />
            </button>
          </div>
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/circleright.svg" />
            <span class="text-base font-semibold text-black">All Header Tags</span>
          </div>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="mt-2">Your headers are looking good 😊.</div>
        <div class="border-t bg-white w-full p-3 rounded-lg mt-3" style="display: none">
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span>
            1. Search engines use the header tags to index the structure and content of your web
            pages.<br />
            2. Users often skim a page by its headings. It is important to use headings to show the
            document structure.<br />
            3. "H1" headings should be used for main headings, followed by "H2" headings, then the
            less important "H3", and so on
          </span>
        </div>
        <div class="rounded-xl overflow-hidden border border-gray-300 mt-3">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Header Tags</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><h5>&lt;H1&gt;</h5></th>
                <th><h5>1</h5></th>
              </tr>
              <tr>
                <th><h5>&lt;H2&gt;</h5></th>
                <th><h5>4</h5></th>
              </tr>
              <tr>
                <th><h5>&lt;H3&gt;</h5></th>
                <th><h5>19</h5></th>
              </tr>
              <tr>
                <th><h5>&lt;H4&gt;</h5></th>
                <th><h5>0</h5></th>
              </tr>
              <tr>
                <th><h5>&lt;H5&gt;</h5></th>
                <th><h5>0</h5></th>
              </tr>
              <tr>
                <th><h5>&lt;H6&gt;</h5></th>
                <th><h5>0</h5></th>
              </tr>
            </tbody>
          </table>
          <table variant="success" class="table text-primary" style="display: none">
            <tbody>
              <tr>
                <td>&lt;H1&gt; <b>Apple</b> &lt;/H1&gt;</td>
              </tr>
              <tr>
                <td>&lt;H2&gt; <b>iPad mini</b> &lt;/H2&gt;</td>
              </tr>
              <tr>
                <td>&lt;H2&gt; <b>iPhone 16 Pro</b> &lt;/H2&gt;</td>
              </tr>
              <tr>
                <td>&lt;H2&gt; <b>iPhone 16</b> &lt;/H2&gt;</td>
              </tr>
              <tr>
                <td>&lt;H2&gt; <b>Apple Footer</b> &lt;/H2&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b>Apple Watch Series 10</b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b>AirPods&nbsp;4</b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b>AirPods&nbsp;Pro&nbsp;2</b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b>Apple Watch Ultra 2</b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b>Apple Trade In</b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b>Apple Card</b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b>Apple TV+</b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b>FAM Gallery</b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b> Shop and Learn Shop and Learn </b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b> Apple Wallet Apple Wallet </b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b> Account Account </b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b> Entertainment Entertainment </b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b> Apple Store Apple Store </b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b> For Business For Business </b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b> For Education For Education </b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b> For Healthcare For Healthcare </b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b> For Government For Government </b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b> Apple Values Apple Values </b> &lt;/H3&gt;</td>
              </tr>
              <tr>
                <td>&lt;H3&gt; <b> About Apple About Apple </b> &lt;/H3&gt;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="text-center mt-3">
          <button class="btn border-primary text-primary read_more">
            <span>Read More</span> <img src="http://serpwizz.main/assets/images/up-arrow.svg" />
          </button>
        </div>
      </div>
      <div class="rounded-lg bg-custom_gray p-3">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <img src="http://serpwizz.main/assets/images/circleright.svg" />
            <span class="text-base font-semibold text-black"
              >Keyword Density &amp; Consistency</span
            >
          </div>
          <img src="http://serpwizz.main/assets/images/question.svg" />
        </div>
        <div class="my-2">
          You've got quite a comprehensive keyword set! We recommend checking this frequently and
          adding new key words or phrases to keep your list optimized 😊.
        </div>
        <div class="border-t bg-white w-full p-3 rounded-lg mt-3" style="display: none">
          <b style="color: rgb(0, 0, 0)">Tool Tips:</b><br />
          <span
            >1. Search engines use the header tags to index the structure and content of your web
            pages.<br />
            2. Users often skim a page by its headings. It is important to use headings to show the
            document structure.<br />
            3. H1 headings should be used for main headings, followed by H2 headings, then the less
            important H3, and so on</span
          >
        </div>
        <h4 class="text-black font-semibold">Keyword Density</h4>
        <div class="rounded-xl overflow-hidden border border-gray-300 mt-3">
          <table class="table w-full">
            <thead class="bg-gray-200">
              <tr>
                <th>Keywords</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-slate-500">
                <td><span>apple</span></td>
                <td>28</td>
              </tr>
              <tr>
                <td><span>learn</span></td>
                <td>11</td>
              </tr>
              <tr>
                <td><span>more</span></td>
                <td>11</td>
              </tr>
              <tr>
                <td><span>store</span></td>
                <td>8</td>
              </tr>
              <tr>
                <td><span>shop</span></td>
                <td>7</td>
              </tr>
              <tr>
                <td><span>ipad</span></td>
                <td>6</td>
              </tr>
              <tr>
                <td><span>iphone</span></td>
                <td>6</td>
              </tr>
              <tr>
                <td><span>watch</span></td>
                <td>6</td>
              </tr>
              <tr>
                <td><span>available</span></td>
                <td>6</td>
              </tr>
              <tr>
                <td><span>trade-in</span></td>
                <td>6</td>
              </tr>
              <tr>
                <td><span>apple&nbsp;card</span></td>
                <td>6</td>
              </tr>
              <tr>
                <td><span>coming</span></td>
                <td>5</td>
              </tr>
              <tr>
                <td><span>will</span></td>
                <td>5</td>
              </tr>
              <tr>
                <td><span>apple&nbsp;intelligence</span></td>
                <td>4</td>
              </tr>
              <tr>
                <td><span>features</span></td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 class="text-black font-semibold my-3">Individual Keyword Consistency</h4>
        <div class="rounded-xl overflow-hidden border border-gray-300 mt-3">
          <table class="table w-full">
            <tbody>
              <tr class="text-center" style="background-color: #f2f3f8; color: #212529">
                <th>Keyword</th>
                <th>Frequency</th>
                <th>Title</th>
                <th>Meta Description Tagg</th>
                <th>Headings Tags</th>
              </tr>
              <tr class="text-center">
                <th>apple</th>
                <th>28</th>
                <th><i class="la la-check-circle text-success" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-check-circle text-success" style="font-size: 22px"></i></th>
              </tr>
              <tr class="text-center">
                <th>learn</th>
                <th>11</th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-check-circle text-success" style="font-size: 22px"></i></th>
              </tr>
              <tr class="text-center">
                <th>more</th>
                <th>11</th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
              </tr>
              <tr class="text-center">
                <th>store</th>
                <th>8</th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-check-circle text-success" style="font-size: 22px"></i></th>
              </tr>
              <tr class="text-center">
                <th>shop</th>
                <th>7</th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-check-circle text-success" style="font-size: 22px"></i></th>
              </tr>
              <tr class="text-center">
                <th>ipad</th>
                <th>6</th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-check-circle text-success" style="font-size: 22px"></i></th>
              </tr>
              <tr class="text-center">
                <th>iphone</th>
                <th>6</th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-check-circle text-success" style="font-size: 22px"></i></th>
              </tr>
              <tr class="text-center">
                <th>watch</th>
                <th>6</th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-check-circle text-success" style="font-size: 22px"></i></th>
              </tr>
              <tr class="text-center">
                <th>available</th>
                <th>6</th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
              </tr>
              <tr class="text-center">
                <th>trade-in</th>
                <th>6</th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
              </tr>
              <tr class="text-center">
                <th>apple&nbsp;card</th>
                <th>6</th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
              </tr>
              <tr class="text-center">
                <th>coming</th>
                <th>5</th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
              </tr>
              <tr class="text-center">
                <th>will</th>
                <th>5</th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
              </tr>
              <tr class="text-center">
                <th>apple&nbsp;intelligence</th>
                <th>4</th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
              </tr>
              <tr class="text-center">
                <th>features</th>
                <th>4</th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
                <th><i class="la la-times-circle text-danger" style="font-size: 22px"></i></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  result: {
    type: Object,
    required: true
  }
})

// Components
import AnimatePulse from '@/components/AnimatePulse.vue'

// Images
import IconCheck from '@/components/icons/reportSidebar/check.vue'
</script>
