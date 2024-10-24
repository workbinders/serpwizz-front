<template>
  <div id="mobile" class="card bg-white p-4">
    <div class="page-title py-2">Performance</div>
    <div class="my-3 text-base">Mobile Section</div>
    <div class="rounded-lg bg-custom_gray p-4 py-5 flex w-full mx-auto gap-14">
      <div>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAHyARgDASIAAhEBAxEB/8QAHQABAAAHAQEAAAAAAAAAAAAAAAECAwUGBwgECf/EAFwQAAEDAwICBQQNBwcHCgYDAAEAAgMEBREGIRIxBxNBUWEUInGxCBcYMlNWgZGUlaHS0xUjQlJzwdE1YmNyk7LwJDNDgpKisxYlNDZFVHWjwuEnNzhkdPGDhOL/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAQMEAgUGB//EADIRAAICAQMDAwIEBQUBAAAAAAABAgMRBCExEhNRIjJBBbEUM2FxNHKBofAGI0KR0fH/2gAMAwEAAhEDEQA/ANLoiqQQyzv4IInyOxnDGknHyIQU0Xr/ACbXf9yqf7J38F5Xtcx7mvaWuacEEYIKAgiIgCIiAIiIAiIgCIiAIiIAiq0lNNWVUVNTRuknlcGMY3m4nYBbTsvRHeYTU/lGjpZpJKYinPlOI4pDtl+Bk45gAEZ7UBqdF67tb57Vcqmhq+Dr6d5jfwODhkdxC8iAIiIAiIgCIiAIiIAiIgCInNAEWWU1ms1G18N4ulL5cJDHLEHTt6gDGd2xODnZz2427c7WK7W9tE5j4KqGspZS4RzxBwBwdwQ4AgjI7O1AeBERAF67ZG2WoLXV8VCOEnrZesweW3mNcfsxsvIiAv8A5JH8aaD5qr8JWSoAbPI0StmAcR1jc4fvzGQDv4gFU0QBERAEREAREQBERAEREAREQF40fcY7Tqm118/+ZgqGPf4NzuV13DX0c7IXRVUDxMzjj4ZB57e8d4XFijk95QF71xBSU+rbrHbqg1NMJ3FsneSckZ7cEkZ7cKxoiAIiIAiIgCIiAIiIAiIgCi33w9KgiAyXUdkutTqG6T01srpoJaqV8ckdO9zXtLyQQQMEELxXamnorNb6eshkgqBLM8xStLXBpEYBIO+Dg/MrRxO7z86gSTzOUAREQG2/aB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvup7QOsfhLV9Id91dYogOTvaB1j8JavpDvuousUQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB5rnX0trt9TXV8zYKSnjMssjuTWgZJVrh1fp+TT1NfTd6OK0VJxFVTyCJjjvt5+MHY7HfYpry4C06LvdwdTQ1baakklMEwyyQBp81w7itD9K93ZffY4WK4w0FLbo5q5nDS0reGOMDrRho+RAbzo9caVrahkFHqSzzzPOGxx1kbnE+ABVyr71bLfWUlJX3CkpqqrPDTwyzNY+Y7DDQTk8xy71qLpK0Zoum6I5q6W12y3V0dC2WnqIImwyOm4QQMtwXZPYc81rS53qvbQdDt0u0dTVVMJlLWNBdLM1srRGBnmSA0Dv2QHXCLTjOlXUFn1Xa7drfSos9BdJOqp6hlQJS0kgDiI25kZ5EZyrlq/pLuMOr36X0RY/y5d4GdZVF0ojih8CT27jtHMDnyA2ii1nofpMnvNdd7LqC0mz6kt0LpzSufxNlYBnLT8o79jkeGK6a6X9Y6osE1bp7RbK2Wme4VEgn4YmgAENaCcudjcgeCA3si1lpzpdtNw6NavVlwhfSeRPMFRSg8Tuu2w1vLPFkY+XPIrH3dLWrLdQ0191Bol1Lpidzc1Mc/FJGxx2c5vPtH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"
          alt="image"
          class="border-8 border-gray-500 rounded-3xl w-48"
        />
      </div>
      <div class="flex items-center h-full w-full mt-10">
        <div class="w-full max-w-screen">
          <div class="rounded-xl overflow-hidden border border-gray-300">
            <table class="w-full">
              <thead class="bg-gray-200">
                <tr class="text-center">
                  <th colspan="2" class="py-2 px-4">PageSpeed Summary</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white">
                  <td class="py-2 px-4 flex items-center border-gray-300">
                    <img src="http://serpwizz.main/assets/images/tool.svg" alt="svg" class="mr-3" />
                    Consider Fixing
                  </td>
                  <td class="py-2 px-4 border border-gray-300">5</td>
                </tr>
                <tr class="bg-white">
                  <td class="py-2 px-4 flex items-center border border-gray-300">
                    <img
                      width="14px"
                      height="14px"
                      src="http://serpwizz.main/assets/images/icrlewarning.svg"
                      alt="svg"
                      class="mr-3"
                    />

                    Should Fix
                  </td>
                  <td class="py-2 px-4 border border-gray-300">15</td>
                </tr>
                <tr class="bg-white">
                  <td class="py-2 px-4 border flex items-center border-gray-300">
                    <img
                      width="14px"
                      height="14px"
                      src="http://serpwizz.main/assets/images/circleright.svg"
                      alt="svg"
                      class="mr-3"
                    />
                    Passed
                  </td>
                  <td class="py-2 px-4 border border-gray-300">10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="rounded-lg bg-custom_gray p-4 py-5 mt-3">
      <div class="flex justify-between">
        <div class="flex items-center gap-3">
          <img src="http://serpwizz.main/assets/images/icrlewarning.svg" alt="svg" />
          <div class="page-title">Should Fix</div>
        </div>
      </div>
      <div>
        <div>
          <div class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3">
            <div class="label-text flex items-center">
              <div class="label-text">First Contentful Paint</div>
              <div class="text-red-500 ml-2">[5.0&nbsp;s ]</div>
            </div>
            <div class="label-text mt-3">
              First Contentful Paint marks the time at which the first text or image is painted.
              <a href="https://web.dev/first-contentful-paint/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3">
            <div class="label-text flex items-center">
              <div class="label-text">Speed Index</div>
              <div class="text-red-500 ml-2">[11.6&nbsp;s ]</div>
            </div>
            <div class="label-text mt-3">
              Speed Index shows how quickly the contents of a page are visibly populated.
              <a href="https://web.dev/speed-index/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Largest Contentful Paint</div>
              <div class="text-red-500 ml-2">[17.5&nbsp;s ]</div>
            </div>
            <div class="label-text mt-3">
              Largest Contentful Paint marks the time at which the largest text or image is painted.
              <a
                href="https://web.dev/lighthouse-largest-contentful-paint/"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Time to Interactive</div>
              <div class="text-red-500 ml-2">[15.8&nbsp;s ]</div>
            </div>
            <div class="label-text mt-3">
              Time to interactive is the amount of time it takes for the page to become fully
              interactive.
              <a href="https://web.dev/interactive/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Max Potential First Input Delay</div>
              <div class="text-red-500 ml-2">[190&nbsp;ms ]</div>
            </div>
            <div class="label-text mt-3">
              The maximum potential First Input Delay that your users could experience is the
              duration of the longest task.
              <a
                href="https://web.dev/lighthouse-max-potential-fid/"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">First Meaningful Paint</div>
              <div class="text-red-500 ml-2">[8.6&nbsp;s ]</div>
            </div>
            <div class="label-text mt-3">
              First Meaningful Paint measures when the primary content of a page is visible.
              <a href="https://web.dev/first-meaningful-paint/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">First Contentful Paint (3G)</div>
              <div class="text-red-500 ml-2">[10670&nbsp;ms ]</div>
            </div>
            <div class="label-text mt-3">
              First Contentful Paint 3G marks the time at which the first text or image is painted
              while on a 3G network.
              <a
                href="https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Preload key requests</div>
              <div class="text-red-500 ml-2">[ ]</div>
            </div>
            <div class="label-text mt-3">
              Consider using `<link rel="preload" />` to prioritize fetching resources that are
              currently requested later in page load.
              <a href="https://web.dev/uses-rel-preload/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Ensure text remains visible during webfont load</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Leverage the font-display CSS feature to ensure text is user-visible while webfonts
              are loading.
              <a href="https://web.dev/font-display/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Avoid enormous network payloads</div>
              <div class="text-red-500 ml-2">[Total size was 4,128&nbsp;KiB ]</div>
            </div>
            <div class="label-text mt-3">
              Large network payloads cost users real money and are highly correlated with long load
              times.
              <a href="https://web.dev/total-byte-weight/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Reduce unused JavaScript</div>
              <div class="text-red-500 ml-2">[Potential savings of 158&nbsp;KiB ]</div>
            </div>
            <div class="label-text mt-3">
              Reduce unused JavaScript and defer loading scripts until they are required to decrease
              bytes consumed by network activity.
              <a href="https://web.dev/unused-javascript/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Minimize third-party usage</div>
              <div class="text-red-500 ml-2">[ ]</div>
            </div>
            <div class="label-text mt-3">
              Third-party code can significantly impact load performance. Limit the number of
              redundant third-party providers and try to load third-party code after your page has
              primarily finished loading.
              <a
                href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Eliminate render-blocking resources</div>
              <div class="text-red-500 ml-2">[Potential savings of 2,800&nbsp;ms ]</div>
            </div>
            <div class="label-text mt-3">
              Resources are blocking the first paint of your page. Consider delivering critical
              JS/CSS inline and deferring all non-critical JS/styles.
              <a
                href="https://web.dev/render-blocking-resources/"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Serve static assets with an efficient cache policy</div>
              <div class="text-red-500 ml-2">[37 resources found ]</div>
            </div>
            <div class="label-text mt-3">
              A long cache lifetime can speed up repeat visits to your page.
              <a href="https://web.dev/uses-long-cache-ttl/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Defer offscreen images</div>
              <div class="text-red-500 ml-2">[Potential savings of 2,166&nbsp;KiB ]</div>
            </div>
            <div class="label-text mt-3">
              Consider lazy-loading offscreen and hidden images after all critical resources have
              finished loading to lower time to interactive.
              <a href="https://web.dev/offscreen-images/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-3">
          <button class="btn border-primary w-40 hover:border-primary text-primary">
            <span> Read More </span> <img src="http://serpwizz.main/assets/images/up-arrow.svg" />
          </button>
        </div>
      </div>
    </div>
    <div class="rounded-lg bg-custom_gray p-4 py-5 mt-3">
      <div class="flex justify-between">
        <div class="flex items-center gap-3">
          <img src="http://serpwizz.main/assets/images/tool.svg" alt="svg" />
          <div class="page-title">Consider Fixing</div>
        </div>
      </div>
      <div>
        <div>
          <div class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3">
            <div class="label-text flex items-center">
              <div class="label-text">Total Blocking Time</div>
              <div class="text-red-500 ml-2">[220&nbsp;ms ]</div>
            </div>
            <div class="label-text mt-3">
              Sum of all time periods between FCP and Time to Interactive, when task length exceeded
              50ms, expressed in milliseconds.
              <a
                href="https://web.dev/lighthouse-total-blocking-time/"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3">
            <div class="label-text flex items-center">
              <div class="label-text">Efficiently encode images</div>
              <div class="text-red-500 ml-2">[Potential savings of 97&nbsp;KiB ]</div>
            </div>
            <div class="label-text mt-3">
              Optimized images load faster and consume less cellular data.
              <a href="https://web.dev/uses-optimized-images/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Minimize main-thread work</div>
              <div class="text-red-500 ml-2">[2.7&nbsp;s ]</div>
            </div>
            <div class="label-text mt-3">
              Consider reducing the time spent parsing, compiling and executing JS. You may find
              delivering smaller JS payloads helps with this.
              <a
                href="https://web.dev/mainthread-work-breakdown/"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Reduce unused CSS</div>
              <div class="text-red-500 ml-2">[Potential savings of 68&nbsp;KiB ]</div>
            </div>
            <div class="label-text mt-3">
              Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content
              to decrease bytes consumed by network activity.
              <a href="https://web.dev/unused-css-rules/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">JavaScript execution time</div>
              <div class="text-red-500 ml-2">[0.8&nbsp;s ]</div>
            </div>
            <div class="label-text mt-3">
              Consider reducing the time spent parsing, compiling, and executing JS. You may find
              delivering smaller JS payloads helps with this.
              <a href="https://web.dev/bootup-time/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-3">
          <button class="btn border-primary w-40 hover:border-primary text-primary">
            <span> Read More </span> <img src="http://serpwizz.main/assets/images/up-arrow.svg" />
          </button>
        </div>
      </div>
    </div>
    <div class="rounded-lg bg-custom_gray p-4 py-5 mt-3">
      <div class="flex justify-between">
        <div class="flex items-center gap-3">
          <img src="http://serpwizz.main/assets/images/circleright.svg" alt="svg" />
          <div class="page-title">Passed</div>
        </div>
      </div>
      <div>
        <div>
          <div class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3">
            <div class="label-text flex items-center">
              <div class="label-text">Initial server response time was short</div>
              <div class="text-red-500 ml-2">[Root document took 80&nbsp;ms ]</div>
            </div>
            <div class="label-text mt-3">
              Keep the server response time for the main document short because all other requests
              depend on it.
              <a href="https://web.dev/time-to-first-byte/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3">
            <div class="label-text flex items-center">
              <div class="label-text">Cumulative Layout Shift</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Cumulative Layout Shift measures the movement of visible elements within the viewport.
              <a href="https://web.dev/cls/" target="_blank" style="color: blue">Learn more</a>.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Properly size images</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Serve images that are appropriately-sized to save cellular data and improve load time.
              <a href="https://web.dev/uses-responsive-images/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Minify CSS</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Minifying CSS files can reduce network payload sizes.
              <a href="https://web.dev/unminified-css/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Minify JavaScript</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Minifying JavaScript files can reduce payload sizes and script parse time.
              <a href="https://web.dev/unminified-javascript/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Enable text compression</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Text-based resources should be served with compression to minimize total network
              bytes.
              <a href="gzip, deflate or brotli" target="_blank" style="color: blue">Learn more</a
              >(https://web.dev/uses-text-compression/).
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Preconnect to required origins</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Consider adding `preconnect` or `dns-prefetch` resource hints to establish early
              connections to important third-party origins.
              <a href="https://web.dev/uses-rel-preconnect/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Use video formats for animated content</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM
              videos for animations and PNG/WebP for static images instead of GIF to save network
              bytes.
              <a
                href="https://web.dev/efficient-animated-content/"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Avoid multiple page redirects</div>
              <div class="text-red-500 ml-2">[Potential savings of 630&nbsp;ms ]</div>
            </div>
            <div class="label-text mt-3">
              Redirects introduce additional delays before the page can be loaded.
              <a href="https://web.dev/redirects/" target="_blank" style="color: blue">Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Avoids `document.write()`</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              For users on slow connections, external scripts dynamically injected via
              `document.write` can delay page load by tens of seconds.
              <a href="https://web.dev/no-document-write/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-3">
          <button class="btn border-primary w-40 hover:border-primary text-primary">
            <span> Read More </span> <img src="http://serpwizz.main/assets/images/up-arrow.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="mobile" class="card bg-white p-4">
    <div class="page-title py-2">Performance</div>
    <div class="my-3 text-base">Desktop Section</div>
    <div class="rounded-lg bg-custom_gray p-4 py-5 flex w-full mx-auto gap-14">
      <div>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFcAfQDASIAAhEBAxEB/8QAHQABAAEFAQEBAAAAAAAAAAAAAAQDBQYHCAIBCf/EAFQQAAEDAwEEBQgHAwYKCQUAAAEAAgMEBREGBxIhMRMUQVGTGCJUVWFxgdMIFSMykaGxQsHRJFJicrLhFzNDU2NzlKLD8BY0NlaCkqOz8UVldITS/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EACwRAQACAgEDAgUEAgMAAAAAAAABAgMRBBIhMQVBEyJRgZEUMmHBI3EzQqH/2gAMAwEAAhEDEQA/ANLoiIwIiICIiAiIgu+mNO3HUtx6naoOlka3feS4AMbkAuOffy5q319LLQ1tRSVADZoJHRvAIOHA4PEcFP01qG5abr3Vlon6GdzDG4locC04OMH2gKFca2e419RWVbg+onkMkjgAMuJyeAQRlK+r6vo2yCnkcxwBBaM8wSOXLIBKiqbFdKyKJkcc26xmN0Bo4Y5Hlz9qCNNBNAQJopIyc432kZxz5qmpFXW1FWGCpldIGZLc9mTkqOgkQUVTUM34IXyNy4ZaM8hk/kqc0MsJAmifGTnG80jOOBVejuNXRs3aad0bc7xAxgn/AJCp1lXPWSdJUv35OOXYAJ9+EFBSYaKpngMsMTnsB3fN4nPu5qMpVNX1VNGI4JnMYHb+6OWe8jtQUpoJYAzpo3x743m7wxkd6pKRWVk9a9r6mTfcBgHAH6KOglU1BVVUTpKeF0jWnB3cZ/DmV56jVk46rPnh/kz28kirKiKndBHM9sLjlzAeBOMcfxUkXq4Nl6RtU4PxjIA4j28OPIILcQQcHgUX1zi5xc45JOSV8QTH2uuYQHUk3E4GGk+xUZ6Wop2tdPDJG13IuaQpIvFwDCzrLy04GCAeXLn7lQqayepBE0m8CQSAABkZ7v6x/FBHVWGnlma90UbntZjeI7MnAVJV6asqKZrmwSuY1xBcByJHLPuQVH22sY1pdTS4Jxwbkg8sEdh4jgVRqKeamkMdRE+N4zwcMduFIbda1pOKhx5cCAQOfLPLmfxKo1dXPVva6ofvubkDgBjJz2e0oKCrwUk08T5ImBzGcHecM8ieXPkD+CoKtT1M1O4OheWEODxjvGcH8yg9mhqRu/Yu857ox7XDmEFvrDjFLOcjPCMlemXGrZTshZM4RsdvtGBwPHjnn2n8V6F1rQGAVDvMOQcDOff2oIkkb4nbsrHMdjOHDBXlVquqmrJjNUyOkkIALjz4KigkRUVTLEJIoXvaeW6Mk+3HPHA8fYvhpKgSOj6CTfbkkBpOMc17hr6mCJscUpa1pyMAZHbjPPGeOOS9G51Zka/pcPawszgci7e/HPHPu7kFMUVUTIBTy7zCA5u6cgnlw9q+mhqwxzzTTBreZLDw5/wKqRXSsie9zZ3efjeBAIdgYGRyOFUfe7g5sjesENkbuvDWgbwxjjw5+1Bbl9aC5wa0EknAA7V8XqKR8UrJI3Fr2EOaR2EIK7qCra4tNNNkEtOGE8QcfrwXzqVXkDq0+T/oz/z2FVxd64Oa7p8vaQQ4taTkcjnGc8/xPevRvVwLsmpJOc8Wt9vs9pQRnUNWxuXU0wHfuHgo6n/XFf0Ji6y7oy5zt0gc3ZyeXbkqAg9wxPnlbHE3ee44AVUUNU4uDaaZ26QDusJxnlyVKKR0UjZGYDmnIyAfyKuH15X/AGhdM1xf94ujac8CO72oIjqKqaxz3U8wY0bxJYQAO9R1LqLjV1GemmL8jByBx9/4Dj7AoiCpTwvqJRHHjJBJJOAABkk+4AlfamB1PJuOLXZAcHNOQ4HkQvMMr4ZBJE4teORXuqqZKp7Xzbpc1obkNDeA5cvwQUVMpqB88O+JYmvccRxudh0nHHD+9Q1KgrHQiPEcbnxnLHuBy3jnvxz70EVERAREQEREBERAREQfoH1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MJ1Gk9Fg8MKSiCN1Gk9Fg8MIpKICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIC+Pc1jC57g1rRkknAAX1YxtOlpYNn2oJbhTPqqRlHIZYGSmMyNxxAcAce/BQZKJGFocHtIIyDnmF9BBGQQQuZbjabJqjXmzOgrqR8NkqbAHCmdUuyxoZI5oMgwTggceGVdrLS0uj9skunNHV009jq7VLNW0hnMzKaQNeQc9h4M58fP8Acg6EBBGQQR7F9XNGy7Xt90vsko6i3aUnudooHyurK11S2INzISdxuCXAAjLsYHHuK2bqPanFTUunY9NWqa83i/QiopKMPEe7GRkue45xjj/5Tx4INlItW2napUdHqOi1DYJLXqCzUL691EZw9k8bW5y2QDHcOR59vHFln20XmLT1FqV2iqhumZC1s1Waxpc0l26d1uMkA8ASACe5BuxFrPUG0qvdqR1i0Rp5+oK6GnZU1LzUNgjha8AtG8ebiCDj29vHGRbOtZQazs01S2kloa6kndS1lHKcuglbzGe0e3CDKSQOZA96+rnPbxpy509Rbb/ebzNVvlvkVPR0cfmwU0B3yOHa87rcu+HFbS2saoqrHZ6e22JvS6kvEnVLfEObXH70p7g0HOe/HZlBnIcCeBB9y+rRGwywN0ttS1nZmzvqDTUlJvyvOS97mBz3fFzit7oCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAsV2p0lRX7OdRUlDBJUVM1FIyOKNpc57iOAAHMrKkQc5jQE9+1Ps2pNQWOsltEFhbDW7zHsbFI1jyGvc3Bad7d4ZW4LHoXT2k7bcGaatMVLLPC5rnNLnyP4HA3nEnGezKyxW199tMdz+rn3OibX7wb1YzNEmSMgbuc5IIPxQan0PYrrS/RtuFoqbdVxXR9JWsbSPiIlLnF+6N3nk5GFYaax3/Skmz3VsVjrrg232oW+voYYz1iHId5wZzz55/DsyuhKeeKpgZNTyMlheN5j2OBa4d4IVRBz7U22+62vur9WPsNwtlGLBPbaGlqYi2oqHuaeO5z5k/iMZ4q53ywXaX6MMFnittW+6imgaaNsRMoImaSN3nwAyt3qM2upHQxytqYTFK/omPDxhz8kboPacgjHsQc33fSU1g1dNc73p7UV0tdyoqYsdZpJGywSsia1zJGtI7QefLs7VtHYjYxa7Ncaz6gqbGa+o6QQVVU+eZ7QOD3733XHJ4LYnTxdY6DpWdPu7/R7w3t3OM47s9qqINW/SCtFxvGn7BFaqKorJIrzBNI2CMvLGBr8uOOQGRxUjWeze5X3W0epbVqqe0VUVMKaNrKRs243JJLS53DOewLZSINEbO9Fart22K+1txvVwkpYxCZKySjDGXMbmN3OcDd9meS3uiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLW12tF0l1JdXQQ3F7ZbrSVUMYEfVXtYyAOe8nzsgsdwB5tHA9uyUQaaknr6GW3UV0nr/rh01tELWVuNyPpGCVr4w/LiSJCTunII4+acXrWFHqao1JPLbIatkAO5G6KR26+MwOBP8AjQ1p6Q4x0ZPAHe7tkljS4OLQXDkccQvSDW8tmu1JXU7Ay7VNo3aaSpjjrHmR8nRztfhxeHY3uhJAIHb3r02zXBugbJSS0Na6eCvbNPBHMBMI+me4+eHDJ3T2HitjIg1TWw3mgphU3B1dBZ2yAPjkrN2UQGpdusLy/wC9ulv7Wd3zc54LHKq6Tiy3J7qq5kVEVQLQ1lxxI1/WZRk/aZky3ogMb/3SBxPHfDmhzSHAEHmCvnRs83zG+b93hy9yDVTLLqmatkFVNcMPqm9P0b3MY+Prcbstf0x5RB33WM4Eg8cLaFG/fgH2UsQYSwNk5kNJAPM8DjI7cHiq6ICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiILRWGrhvkcsFJNPDJD0RexzA2N29zcHOBx7gVjdNFrNrKITzPe8T5nPRwgbmWZHBx837+COPs5YztFNTN0xrpif8AcIbYeqfMwxmx01/impn3KqmlaSGysf0eADCCT5ozkSZHPl+Khil1THTROFXPJKWtEjD0PDMZL93hzDgAM8OPHgsyRPjzveo/B8GNa3P5YNNT6wd0L4aqWMb5BY5kL3BufNLuIHL72CfYCsteKr6ziMZxSdGek3scXZ4bvbnnns5KYixfNN9doj7M0xdPvM/cWOa2t9RcaWiZTU76gRzl8jWCMkDo3gHEhDTxIWRrxJLHE3ele1je9xwtKXmlotDa9IvXplh8kuoLfRZlil3KdjJMxubIH4jZmIc3El4eM4/aBz3ZBEy4tZbA54dIB/K3HG6eHHA55zyxwxnKl0tbS1YJpamGYDgejeHfopC3tk3HiGtcXT7yIiKJKIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAijVNdS03+PnjYe4nj+CtFVqmjiOImSy+0DA/NbRWZ8MTaI8sgRWu3XqnrWBzA9mTjiOAPwV0WJiY8kTsREWGUO8V8VstlRWTnEcLd4/u/Nc/bR7zU65u1i0vQ1EtHR3GWWWumiOJDBE0Etz2Bxdju4fBbk2ntc/RNwa0OJcYxgc/vtWhLE19NtNtIlZuYtdSRxzzkYpccRruhy2mInX0Xl+x3TdE1sun6y72StYOFRR1jw4n+kDnPwwrFqfaBr/ZTJQCqvNJqa3VLnNYKqn6OZu6ASC5p7jz48lsS4XToweK19rimt+qbf1K6b+414kjfG7DmO5ZB+K6E8auSvyx3crHy70vHVPZkek/pP6auIjj1BQ1VqmP3ns+2jHxGHfktxaa1npzU0QfYrzRVvDJZHKN8e9vMfELhy7bLpWEutNyimb2MnbuH8RkH8lX2c7O6yfUb479Tz09O2I9HLDOGu6Qkbpa4H3qtHBzzaK9Pn8OrXPjvG6y78Rc4W2l2g6Pd01g1DNeqKLi63Xb7TfaDghsw4g8CByC3lojUtLq3TdLd6Jj4hKC2SGTg+GRpw+N3tBBChy4L4p1aEsd19REULIiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKBc7tS24fbuJeRkMbz/uU55DWlx4AcSuK9S7Wr/XbQKitppnNtMFVuCnaBh8YdjicZyRy7uC2rEe7E79nVU2qZZB/JabA73Zcf3D81bay41s7cyzyBp4bo80fkrXbLgH0jZ5nEu3SGgD7zs47FJqZC/cJ4ZZnHtyVYrWI9lebTPujSO5qg8r3IVHeeCkaShXi6VNrpGzUjy13SgEd4wf4BbT0jcHXXTdBWSfflj873gkH9FqS9U7KqlAeXAh4xuuI7CtobPouh0hb4wSQ1ruJ5/fcoMybEyJERQJmP68GdLVg9rP7YXPlbJ0O021H/7XP/7jF0JrvI0tWEcxu/2gucb28jaHaCcgm1zc+f8AjGKWn7UGXvE/6XK+15Ad5yw+armnmLIQXvwTgHirlf5zh3FYqyMSAzSVJgzJ0bC0ZJd+4LrcezjXokur5Y3faNe3s84EKfQXchw85Y0+suEExMheXvD4suGd7I3Xe9e5KkvmaDTiCVv393gD8Oxd7j2jw1pM1lubS9+mwWMkLQ9u67dOMjuIHBZlscl6HVGtbfHwp+npq1rRyDpYsP8AxMefitR6Oc5z2lbP2Mv6TaBrfjndhoG/7si43rXRGojzMu5x5m9N/RuJERefTCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiChXkiiqCOYjd+i46k2WVdHq8yvmjltpm6xFGAd53HIa7hjA7cHj7M8Oxa7/qVR/q3fotZzRvk3GBjTG6Egvzxa7hj96lxxE+UeS0x4aUp9r3U9SwWympYnWiKUQPqXEl5OcF47MZ7O0dy3VHVNqYIXt4ZjOR3HePBctW/Rt8o9SPttdTSR0Uc4dLL+zK1rgQGntJwPd244rozTpcaPeJ3gAG73YTzJHxKlpMz5RXiI8Lo8qhIVUcVQkKkRota5raZznuDWhwyScAcCto6KGNMUI9jv7RWqbnC6ooJYoyN8uGN7lkZK2xo3/s3R+539oqHN4TYl6REVdOsetBnTlUPaz+0FzXqZ5/wh2ouxn6tnBx7JGhdK6z/7OVXvZ/aC5k1WSNfWkkObm3TnBGDxkaeIUtf2osn9Lbf5PvKxW7MrnxgRzeeHdE84Ix+0D7O0dyyW4Usb4y+oaNxzcl/SYc0EkAgduN05H/ysMdRyvq3wYHSNcWnj2g4XW49XHyT3T4onz1zpo5WTYdI+GLe5O3uf71Oijle+uhc0bu4x+ccScsHP8VZ2W+Rsxje3DgcFZpZKCodI8zMO9K0NO8McAQRj8F0626I20x167aheNNxMoqR9RP5scTC9x9gWZfR+kdNq7Wkr/vSMo3n4iUrXupKxvSQ2imdndcHVBHf2M/efgthfR9bu6s1iP9DQ/pKvI8znfqeZ0VntWJ/L2tODPH9M+LaO9rR+O7eCIiOUIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIKNb/wBTn/1bv0WspWy7x6J43T2HsWX3HVtkZcp7K+vibcjG7ERyMnHLPLKxJzlNhmJ3pFnrNdbWivs0VbIH1Ti4ju7ff2KYxjIYmxxgNa0YACqvcqD3KdA8vcqD3ZX2RyoucssKNdM2Gl3nO3QZY2k5xwLlk1LtL0vpy10FFcLgDVEEujhaXlgLj97HL3c1rPaPI9mmiYnYd1iPjnHY4rQdTNKbvPvFznF+OPEqnyrzWOy9w8Vbz83h+hdurqa5UMNZQzNmppm77JG8nBRNR363actr6+71LaemacZIyXHuAHMqxbIrVUWbZ5ZqWs3hUGIyva7m3fJdj4AhYv8ASTsdVdNCCrow5xt8vTSMHawjBPw4H3ZUM2t0dXulrSk5eiZ7bXmt1zp/Uek6+otVwjlEO4ZI3Dde0bw5tPZ7VoHVNVHVa4tEsT99v1fO3Oc8pWhaus89RHd42Qvc3fy1wBxkYzg/gsxY2SK/WgS/fNHUE/F7CpePebxqUXLxRjmelc6uujaGsqKfpzGcxkPLe3OHcOLc5OOHM8VCs8Ujq8zSZJeTvHvzzVwjoX1U+ACclZ5prSrnhrnMXYrmriju5NeLbLKyW2ztqLjFKWHow4ZOOzKvWvbvBZKGKmoGRmud5jXcPMGOLsdpU3UVay0UzoLaGmoxgzYyGf1e8+1awdA6erc+Que9xyXOOSSuB6r61MR0Y5eq9K9EiusmWPsvVmtkb6Bk5GZt7ec9xOXZ/XtPxWytgzd3WWsh/oaH9JVhdkp3tiDMnc7lddn2sLVpLaDqKnurpWuro6NsRY0EDAkyTx5ecFxfTLf5Jvb6O963Ezxq46/WP7dFIvMb2yRtew5a4ZB7wvS9A8YIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLzI4MY5zjhrRklelje0K7ss2lK+oc7D3RujZ7yCsTOo2zWNzpx3rq+yz6/qa6J7g41BIOeON5dGU8vSQMceeOK5Ius5qLu6TtdLn811Xb35pyO4rbhxqJbc627QlvcqD3L09ymWugfUS78lPK+LccWYaQHu7BnsGf0VyZ0oa3K1PcqLiqlTFJBM+KZpbI04IPYqJKzDVbNSQMqbYI5Rlpni/VYbsu0G2/7W6x08e9a7dI2eTeHB5ABa34nn7MrLNUV1PQ0MBrHFkUszfObzbj9r8SFn2za7adtdD0cdSzrNa8yvqP2JD2DPMEDHAgdvYqee1Lz077wv4Ivjr1a7TDZw5LxPFHPDJFMxr4ntLXNcMhwPMFfY3tkY18bg5rhkEHIK9HgtWHIWrdAf9GNrNPBEwm21DnyQE9jSxxDfhy+CoX+mA13aYYxw6jNy/rMW8dreodOChpWzytluLJ92nMYzu8w4k/zcZHDt+K1QaXrO1i0wnDsW+Y8O0F0ZB/ArbDNa9o87b5K3yTEzHbwzTR2mhJuyyNw0cSSsovFRHSUpgphusxgkc3K6xxtoaFsTMA4y5Yteg+TeIOQoOVmmdxDtencSu4tZhF8f0rnFWKip96o5dqvd0aWudlQLcR1gD2rzufHNpd/9ssss9F5gOFqjXsJbtPrCP8nTwu/IreFljDom47lqDaAwDafdm449TgI/Aq1xadFZn+FHmZPiWrX+f6l1Bs5r/rLRVpqCcu6EMd728P3LJFqf6PN3bVaXnoHu+0p5C5o/on+/9VthdrHO6Q8tnjWS0CIi3RCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLRn0j70YYqegY/AawvcPaf7gFvMrkHb9ehX6jrCx/mtcWtwewcB+ijyTqE2CN2208yQvuLM8cyjl711lbyRAT3lcp6chNVqCii3d4ySgYA5nK6ti+ziawdgU/F90PL9lV7lsRkzI6SJkWAwMAGO7C1q45Vzhv0sNPFEYw4sGCSeY7FNkrNvCvjtFZ7oF2a9lyqRKcuLy7PeDxCgucvdTO+eeSWQ+c85KokqWPCKfLCdrE3RWOGSRjnxB+7vN5sPEj4cCtS018q6VzHUk7w1rt7GeH/PErcOqblSy11TZ64xtjbuua9wOC7iDk9g49y0/erLWW3Ukop6V3VnEPbuYe0sP7Qx2c+K5mTotab0l1sfxKUimSHSn0ZNZVd+hu1trckUwZLG4nlnII/RZNt51nJpOwUsVPvCave9gcOwNAyPiSPzWA/RvnpqW/VEEDAzpoeztOc5/JbC2/WCK9aHdNIwF9DM2Zp7QD5p/Ufgt43pFMR1OVJr71meCru0z3ObgBvsAwAFsfQV2bddpVprpIuggjtc4G/z3GOj4laqtNDJXa2hp6mLNLG4l5DfNaN07uT2ZOPis01LUmw3h/QfZyG0TwtHLG9JED+WUw44md+6XJmmNRPjyvet9qEtZcpY6OQspmuIYAeftKsdBr6rZIPtXY7clanlne6Qkk5yvTKhzTzVrUR2ZjmWb8hvtPe4d3LYqnHDsDv4K0UlcYLn0UoLXB2CDwWr7bd5IJGkOIws0dWfWtC2riP8sphl2OcjBz+IVLlcGMlZvjjvHs6/F9Ui8fDy/aW+9MvElOwjuWk9rNS6k2sVbm4w6lha7P8AVK2ps5rhV26F4OcgLTG2+fpdpd16P/IRQMdjv6PP71SwU7TCLlZJ6omPq2LsEvBo9VQwueBHUAxEd+eX54XTq4X0DdnUl1pZg/D2uBB7iCu3rZVNrrdTVUf3Zo2vHxCuYZ7ac3lV+bqSkRFMqiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgsur7s2z2KpqScSFpbH/WwuE9cV8lZeKh5OQXFdY7b5pRTQxtcRGInOA9pP8AcuQL7vGteXHJzyVe87vpcx16ce/qyHZBRxz6zts04G5FLn47p3f97C6E3uC5f0xXSUFxjkY9zHBwxunHaumY370bT7Fb4viVLmeYVXOVJxQuVN7lbU3wleSV8yvLissNabVaGSKWO4tcAyR3Rlw5h2CeP4Fa5dU1jJRJHK8lowCDyC3ZrWal6nDSVzfMnPSB3PGMj961JFSMo9SSMa7+RyHMYOCCO33LmZa0i09EuvivktSOuG8/oyUovFZUXiqkLaqlHRFn+cyODvz/AEWf7dNbW/TGnTb6qPp6m5Me1kQdjDRzcfiQB/csC2P18Vp1hRUdKzDaxu49reQ4E5/EKl9JG0MuOrqGolkduwUoZuju3nH8VmJ7I5jdmp47hLXR00cIbTwCQPLW8AXY5nvPHtTaHVx117o307+kAo3xveOTnN6MH9MfBWWlf9Y6mpLYwGOB7nDA4HAaT+5X/VNtZTXa100TQGihmOP/ABsW3Fp8/XLPKyfJ8OGt5mEOKpEK61lOWyO4KA+PCvWqpVsohxBWQaYuj6WsjO9wyrCWKtSZZKCFikzW22027OgNJX636YoJ56yUNpsGSGNvFzs/stHsPD8Fp6qr5tQXPUd2qR9tNO2QjOQ0HOB8AAPgshez6y0hKQMy0n2g793k4fofgsJtUu624sz95zP0Kh5PHpipNq+6fDyb5rxFvZNtnSQFkgOA12Quy9iN+F10pFTyOzNTjHE/slcdQwu6JuT7fauhPo11JFwnhLzh0Z4Fc7HOrL+avVjdDoiK25wiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiINS7eJ2xUUIzhxYfwyVyTe2nrjnAHmuoPpAVAbPCw/5sD9VzJei0yZCqWn55Xoj/ABwspcWTRuB47w/VdSUj8xY7lyzIftWf1h+q6eoncx7Fe4viXP5U7mE0kYXgnvTK8OcraoFy8kr5lfCVlhiG0xoFmiqHRukLJBH5p4tBBOfyWnZw+qkzTSOLge/iFv8AvtKyttjopBlvSNP5OWkLjbW0mqKiNrnNb0oHmnGRgKhyMcRbrh0eNlm1eifZ0d9FyydJp+e73Fu/WQzup4d4fcbutJP+8R+KmfSHtnU6L6+6VrIS1sMm8eT/ANnh255fBXf6PM7X6cuUOXb7KkOORgBpYAP7JUP6T9rnuuhaOGnJ3mVrX47D5j+H5rT/AKs7+dzJp/q82om3JkrmGAuw1g+8SCDz5DisyuTWV16s0zXec+gqmlh54EjMH45/Ja8t8DqGuZA0CWpkOGs93E5WwLLDUO1VaxWOzK631BxyDRvswAOwLOCLdcT7NuRanRqY7sVvNAWSuw1Y/PTkE8FtS+Wvec4hqw+ttxa48F0/LnQxF0JC9QxHfHBXiWiIPJU46Q744KOYbbZdoZgle6nl4xTMMbx3gjB/Va2EUlLeaukfkPZLuPHtbkLauiqYtqozjtWHauoxS7SrxGBwLxN/52B36lacqd49N+NGsj3FjdAI5LbmwaqNLqulGfNkJYfiMLT0coLsHgVnmzS4GjvdPIP2XA5+K4/iduxHzRp2Si8xuD42uHJwBC9K85oiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIOefpEvd9cMYThvRtOSudbrkuO6OA9i6g+kNay+WlrQ0Fro9zPtBP7iuarpCA5wB4FVbxq0rtZ6qQxiVxEsef57f1XT9GeJ9y5frB0dTEP6Y/VdP0J8wlXeL4lQ5XmEwngqRK+lypuOFbVHoleXOXkleSVlh9kG9TP8A67f0ctXOtr7htCqIGtLwZ2ndA453RwWxbpMYKHfD3tJlaPNPPg5ZhsV0ex1fU6krGbxkf9hvjiTy3vhhVuRG4hb40xG5lsrRNgh09ZI6eONrZ5MSTkdr8cvhyUfaPY57/pWopKPBqWuEsbScbxHZ+BPxWTooUm++3EFLanU+0KnFVCYpGvkDmOaQQdx2eBWW7g/wi2toHD6tn/8AcYtr7ZtF082NT0rQyopsdYZ/nGnzQ73jI+C07aHtOv7S8jd6ShqYx7SHRn9CpMMaj7tM1uqd/wAMlusLRw6N8ji0uIY3JDRxJPsCsFbaWyN3mDIIyCs0q6R8rw+JzWvLHRneGRuuGD8eK89Ra2JrAMhoAVuJVmsqmznJ81UI7Od8eatly21rv2VTbbGg/dWzCx6XpY2zlrSC5vMLAtoUWNp1acY36eJ3+4B+5blpIZmimjlZA2Kla5kbo24c8OOfOPatM7S5gzaXORxPV424/wDDn96q8md45WOP/wAkMek82U8MDKyXSM/Q3Fh+8O3sWOSOBcTj3hXnTORWswDxIGR2LlupHl3BpqbrGn7dKc5dTsJz37oVyVn0cwx6WtbXDB6uw8fcrwrkeFC3mRERZYEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREGHbVKOKr0yRI0FzZBunu4FcpajoGxyvAaOZ5LqjahViG1wQk/fcXn2AD+9cv6hlNVc3xRt4uceOORVfL3ldwdqtbX2mw4dGOOc5W/NI3aG72KmqYXtLywCVoPFj+0FayqLOGMcZMFxGVY4WTUdQeqzywOP7UTy0/ks4M/w2nI4/xHQRcvDitDG4Xdr3b12rwAOXWH/xXr63uY+7c64n/wDIf/FWf1lfoqfo7fVvQlM5WotNR6jvtwhpaOtuL5XuwGtmfk/muqdnuziCyW4Pvkr7lXytG+J3mRjPYAeZ9q2ryot4hrfiTSNzLDbLp1l7ayOWRoe52Wx8yfat1WihjtlspqKAfZwRhg9uO1faG20VACKKkp6cHn0UYbn8FLWL36itOkREWjdDu9DFc7ZU0U4zHOwsPsz2rnTaZo+ssRobrYw2e5WqYymlzgyxObuvaPeAPwXS6i1tBSV7Q2tpYKho5CVgdj8VtW2uzWa7crwbVtMFgFbPVUVQOD4ZqZ+8w9xwCFKp9qWiXPPWLvMxuOBZSSOOfiAt46z2eW2+20x0LRbqxgzFJB5jc9zgOz2rl/WGn9RaZuclNcJaxpHFpMri147wc8Ql+TNPMN6caL+JZv8A4Ttn5/8ArtWP/wBB/wDFU59p2hgwdBfJXuzxD6ORox8MrU8lwqs4NXUZ/wBY7+KjT1lWQcVtTn/Wu/itP1jaeI2xLtQ0kyMmK4vnf+zHHTyFzj3DLQMrR2pL1LedUVVzkYY3SvyI85LGgBrWn2gAZ9uVKllq6iJzX1lSW9rTK7B/NQYaNvSDdHBaZOR1xptjwdE7ToZuk3c81nWiKYTV8G8BuhwJ71htNbXvkDos8FlekazqtdGwjGDhV47rcdnZWk6ltVYaVzceY3o8Dsxw/TCu615smunT09RRudxAErBn4H9y2GrVZ3Clkr02mBERbNBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEVo1NdG2u2SSBwEz/ADI/f3/DmsTOmYjc6hq7a7eWuqZQ1wLIgYxx545/nlaChqN+umkefOcSWnuKy3aLeemqHRMdkA961rNV4eXNOHKtM7na/ERWIhfrncmyx73AOAwR7VjNTUB8gc3HBW24XB/WN8Eh3b3FKR4qJQTvNJ545FR9Gu7PXvsls6SolLQCS5ZtofQlwv1dFTU8JcXcSccGjvJ7AvWjdOuuFdBE1ji57g1oA5k8l11ozTlPpuzx00TWmcjMsna492e4KSlOqWmS/RG1r2eaCt+j6MGNrZrg8YknI5f0W9w/VZmiKzEREahStabTuRERZYEREBERAVm1Tpy3amtj6K5whzT9yQfejPeCryixMb7SzEzE7hyzrjY5crK6Seij69ScxJC0lzf6zez38QtRXK2z00p+zeAP5wX6BrBNebOLbqdj54QykryDmRrMtkP9Id/t/VQWw671WaZ99ruIi5zd5vJeIXbnErYOsNHVFkuE9HVRhksZwTjgfb7lr6vj6u88d4ju5KJNMa7sgtFW2GF3IvdwavpqBFc43x8A3u7VilLWSMlLs+dyz2BT46sEjjl3etorpib7dGbM751Sop6kOyGEFwHa08CF0PFI2WNskbg5jgHAjtBXF2gbyYZ2RudhdObN782rpTb5nfaRjeiyfvM7vh+ilx29kOau46oZwiIplYREQEREBERAREQEREBERAREQEREBERBoLyqtF+qNQeDD81PKq0X6o1B4MPzVxaiMu0vKq0X6o1B4MPzU8qrRfqjUHgw/NXFqIO0vKq0X6o1B4MPzU8qrRfqjUHgw/NXFqIO0vKq0X6o1B4MPzU8qrRfqjUHgw/NXFqIO0vKq0X6o1B4MPzU8qrRfqjUHgw/NXFqIO0vKq0X6o1B4MPzU8qrRfqjUHgw/NXFqIO0vKq0X6o1B4MPzU8qrRfqjUHgw/NXFqIO0vKq0X6o1B4MPzU8qrRfqjUHgw/NXFqIO0vKq0X6o1B4MPzU8qrRfqjUHgw/NXFqIO0vKq0X6o1B4MPzVTl+lLoeXHS2S+vxy3oIT/xFxiiDsV/0ldnbzl+mbq495o6c/wDEVPyj9m3/AHVuX+xU3zFx8iDsA/SN2aHnpS4/7DTfMX1v0j9mzfu6VuQ91DTfMXHyJodkQ/Sa2fwvDodO3iNw5FtLACP/AFFJ8qrRfqjUHgw/NXFyIO0vKq0X6o1B4MPzU8qrRfqjUHgw/NXFqIO0vKq0X6o1B4MPzU8qrRfqjUHgw/NXFqIO0vKq0X6o1B4MPzU8qrRfqjUHgw/NXFqIO0vKq0X6o1B4MPzU8qrRfqjUHgw/NXFqIO0vKq0X6o1B4MPzU8qrRfqjUHgw/NXFqIO0vKq0X6o1B4MPzV88qrRfqjUHgw/NXFyIOyp/pO6BqHb1Rp+8yu5ZfTQOP5yKM76R+zZ33tK3I++ip/mLj5EHYHlG7NP+6dx/2Gm//tPKN2ajlpS4/wCw03zFx+iDsNv0ktnDDlml7o0+yipx/wARSI/pQaDicHRWG9scORbTQAj/ANRcaIg7S8qrRfqjUHgw/NTyqtF+qNQeDD81cWog7S8qrRfqjUHgw/NTyqtF+qNQeDD81cWog7S8qrRfqjUHgw/NTyqtF+qNQeDD81cWog7S8qrRfqjUHgw/NTyqtF+qNQeDD81cWog7S8qrRfqjUHgw/NTyqtF+qNQeDD81cWog7S8qrRfqjUHgw/NTyqtF+qNQeDD81cWog7S8qrRfqjUHgw/NTyqtF+qNQeDD81cWog7S8qrRfqjUHgw/NTyqtF+qNQeDD81cWog7S8qrRfqjUHgw/NTyqtF+qNQeDD81cWog7S8qrRfqjUHgw/NRcWogIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiLItD6eptS3eairL1QWaOOnknFRWu3WOLRwYPaf3HnyQY6i2jpbZG+9aKotT12qbHZaCrlfDH9YSGPL2uIxnGMndJVG8bH71a9S6etjq231VFfpWxUVzpZDJTvJI5nGe0H9M8UGtEV01RZ5dPajudnqJWSzUFQ+nfIzO64tcQSM9nBWtAREQERfWtLnBrQS4nAA5lB8RbPuexjUNo0BW6ovE1JRdVbHI+3vcTUBr3BrS4Dg3Oc4JzwKw/Q2lrhrLU1JZbU1vTzkl0j/ALkTBxc9x7AB/DtQWBFmO0/QtToC90ttq66lrjU0rKtk1NncLHOcBz/q5+KvOiNlUmptHP1JU6ks9ltzKo0hdcHlg3wAefLjn8kGtUWd7Qtmlz0Zb6G6OrbfdrLWuLILhb5ekiLhnzSccDwPfyPcsEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFuD6L9vo7ltAuENxpKerhbaah4ZPG2RocCzBwRz9q0+st2aa2qtBX6e6UNLBVSzUslKWTEgAPIJPDt81BuO16et2o/oz6XpbrqGhsMMd0mkbUVbSWvdvSjcGCOPEn4KvbtQaeo7tst0Hpm6fXTbZd21VTcBGWML3Od5rM9nnu9nAcTxWlrjrirrtm1r0a+kgbSUFW6rZUAnfc52/wI5Y88/grRpG+S6a1NbL1TxMmmoZ2zsjkJDXFpzg4QdM6f1TTah236g0FX6es7rDV1FXHIer5mdI3ecZXSHiSSD7sjGMLEnV0GybZRp+52G126rvV7qqjpq2tgE25HG8tEbe7Ix+fw1tYto1bZ9qNRreKhppKyaeec07i7owZQ4EZ58N5XXS+1h1vsMti1Hp63aisvWXVVPT1Tix1O9xJO64A8Mk8Mdp48UYbr09p6w3baJoLUhslDTjUNmqaisoBC0w9KxjTvtYRgZ3/AMgeeViOjtR020DR2vbHctP2aloLVbJay3dVpwx9OWZ3fO5k8Bk8zxzzWFN22Xoa+o9S/V9C2OhpHUVHbmAtggicMYGOOfb7B2ABYrorW9VpSLUMdLSQTi80MlDKZCR0bX83Nx2+9B0TS26PROltKUWn6jQNIyroIqy5O1BOGT1heMkDIPmcwD8OzjonbZQ2K07SKx2jqqjmtcojqYupytkjieR5zWkZHBwJx2AhXWx7XIorBbLZqrSdp1I61M6OhqaolskTByY7gd5o4cOHJYJrDUVXqrUNXeLgyCOeoI+ygZuRxtAwGtHcAEZbW0bX1dz2BbUq241M1VVzVNI6SaZ5c5x6RvEkq+aU0Fqiy7Gm1GkbTJXX/VUY6eqjkY3qlERkMBc4ec/OTjs9oC0/Yta1Vo0JqDS8VLBJTXl8T5ZnE78fRuBG72ccdqscN6usMTIoblWxxsG61jZ3ANHcBlBuv6U2m7tSVWmbrUUbmW+K001vfMXNIE46RxZjOc4HPl7VN0HZKHUH0Z6iiud8pLHT/Xpf1uqBLMhjcN5jic/ktUbRtfXHXVVb5a+NsDKOkjpRFHI4tfub3nkE/eO9zVNmt6puzOTRgpIOpvruvdYyek3sAbuOWOCDdFouWlbXTaF2d2a6RaldJf4q2tqeh+wAJxuAOyDnI7xwOeeFcbS+26q2zXvTldYrVHp/TLqu4Q0VPTBpqJWEN88/tAlxO7jHADkub9KXqXTmpbZeaeJk01BUMqGRvJDXFpzg47FkFv2jXe2bSqrWduZDDXVM8k0kBBdE5rz5zCM5Lfz4AoNp6Z1HFte03rO26isdoppLbbpLhb6qjpxE6mLOTM9o5fAH2Y52W19Q7XxUaeudq0vpa1abbdRu3CekJc+Zva0cButOTw48Ccc1qhAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFXoYRU1tPASWiWRrCR2ZOFQVWmmdT1MU7AC+N4eAeWQcoM7u+gGsjrJbdPNTx0dRPDL9ZARhzI8ZlYR94cRkYyMjnlY3c9M19ut5q53U7gzoxNFHIHSQdI0uZvjsyB2ZxyODwXyfUtwqK+61c7myy3GOSKQPLiGNe8PIZk8OI4c1JrNW1FZQyU89BQF0zWComDZA+csjLI3O8/ALc580AEgFwKC8W/RNPV6Wpbj01SJ56Cprd5pjcxpifI0M3M75z0Y84Agb2TwBVvuGgb5QW2qrJ4otylaDPG1+XxuJaNwjHF3nZ4ZHB3HgQqVFrCejt1DTx26gdU0VPLTU9a7peljZI57ncN/cJ+0dglp/JXi27RJje4rldKaJ8sQkkeI2uf1uVzCz7QPeQ1pySdwAZ7ORAW2fQV4hndTvdRmrBP8nEwLywSdE54H80PBB7eBOMDK8T6IuUJe99Rb+qxCXpqoT5ihdG5jHtccZyHSRjgDnfGM8V8o9bXGlhhxBSSVkTDE2tka8zdEZDIWHzt0guLuON7BIzheabWVZFRz0c1JRVNHUSzyzQStfuyGV0TiCWuBADoGEYIPPJIOEEDVlnFhvs1uEom6KOJxeCCCXxtecEcCMuxkc1Z1dtQ3uS+VktXU0lLFUSFmXQNc3DWxtYGgFxAGGg8s57ccFaUBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREFbq7uq9Pkbu/uY7c4ypD7TXMLw6meCxu+Rw5cf4Hh7D3L5TVboqSSHo43tJ3gXA5acYyMFXF+pblI6culBMrNx3DmPOz/aPsVimPHMbtv7IL3vE6rpbqq11tJG59RA5jWnBJI4ccfrwVR9muDDh1K/OcdnPOP1XyrudTUiXpS09IC12G44F+/+qqtvNWJpJd5m9JvbwLeBDnBxH4hOnFv3/wDDeXXspfU1wwf5K/h7Rx93f8OahdE/oTKGnowd0u7Ae5XeO/18bndG9rAWhm60YAA5fh/85VrbO9tM+FpAY8guwOJxyGe5YyVxxrp2zjnJO+rSirjZrVNdppY4HBpjZvnLHO4ZA5NBParcpluq3Urpd1kcjZG7jmvBIIyD2e0BaYoibRFvCS++mdEltqmve0RF4aHO3mnILQSCR7PNP4Ki+mmYZQ6NwMWN8fzfeshsdxnuF1p4aro3Bz3Pc7cALsbz90+zJPD2+5WE1cxdUP3vPn++7HE5OT+KkvjpFYtG+6Ot7zaYlGREVdMIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP/2Q=="
          alt="image"
          class="border-8 border-gray-500 rounded-3xl"
        />
      </div>
      <div class="flex items-center h-full w-full mt-10">
        <div class="w-full max-w-screen">
          <div class="rounded-xl overflow-hidden border border-gray-300">
            <table class="w-full">
              <thead class="bg-gray-200">
                <tr class="text-center">
                  <th colspan="2" class="py-2 px-4">PageSpeed Summary</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white">
                  <td class="py-2 px-4 flex items-center border-gray-300">
                    <img src="http://serpwizz.main/assets/images/tool.svg" alt="svg" class="mr-3" />
                    Consider Fixing
                  </td>
                  <td class="py-2 px-4 border border-gray-300">3</td>
                </tr>
                <tr class="bg-white">
                  <td class="py-2 px-4 flex items-center border border-gray-300">
                    <img
                      width="14px"
                      height="14px"
                      src="http://serpwizz.main/assets/images/icrlewarning.svg"
                      alt="svg"
                      class="mr-3"
                    />

                    Should Fix
                  </td>
                  <td class="py-2 px-4 border border-gray-300">14</td>
                </tr>
                <tr class="bg-white">
                  <td class="py-2 px-4 border flex items-center border-gray-300">
                    <img
                      width="14px"
                      height="14px"
                      src="http://serpwizz.main/assets/images/circleright.svg"
                      alt="svg"
                      class="mr-3"
                    />
                    Passed
                  </td>
                  <td class="py-2 px-4 border border-gray-300">12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="rounded-lg bg-custom_gray p-4 py-5 mt-3">
      <div class="flex justify-between">
        <div class="flex items-center gap-3">
          <img src="http://serpwizz.main/assets/images/icrlewarning.svg" alt="svg" />
          <div class="page-title">Should Fix</div>
        </div>
      </div>
      <div>
        <div>
          <div class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3">
            <div class="label-text flex items-center">
              <div class="label-text">First Contentful Paint</div>
              <div class="text-red-500 ml-2">[1.2&nbsp;s ]</div>
            </div>
            <div class="label-text mt-3">
              First Contentful Paint marks the time at which the first text or image is painted.
              <a href="https://web.dev/first-contentful-paint/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3">
            <div class="label-text flex items-center">
              <div class="label-text">Speed Index</div>
              <div class="text-red-500 ml-2">[1.6&nbsp;s ]</div>
            </div>
            <div class="label-text mt-3">
              Speed Index shows how quickly the contents of a page are visibly populated.
              <a href="https://web.dev/speed-index/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Largest Contentful Paint</div>
              <div class="text-red-500 ml-2">[2.9&nbsp;s ]</div>
            </div>
            <div class="label-text mt-3">
              Largest Contentful Paint marks the time at which the largest text or image is painted.
              <a
                href="https://web.dev/lighthouse-largest-contentful-paint/"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Time to Interactive</div>
              <div class="text-red-500 ml-2">[2.2&nbsp;s ]</div>
            </div>
            <div class="label-text mt-3">
              Time to interactive is the amount of time it takes for the page to become fully
              interactive.
              <a href="https://web.dev/interactive/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Max Potential First Input Delay</div>
              <div class="text-red-500 ml-2">[80&nbsp;ms ]</div>
            </div>
            <div class="label-text mt-3">
              The maximum potential First Input Delay that your users could experience is the
              duration of the longest task.
              <a
                href="https://web.dev/lighthouse-max-potential-fid/"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Efficiently encode images</div>
              <div class="text-red-500 ml-2">[Potential savings of 132&nbsp;KiB ]</div>
            </div>
            <div class="label-text mt-3">
              Optimized images load faster and consume less cellular data.
              <a href="https://web.dev/uses-optimized-images/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Preload key requests</div>
              <div class="text-red-500 ml-2">[ ]</div>
            </div>
            <div class="label-text mt-3">
              Consider using `<link rel="preload" />` to prioritize fetching resources that are
              currently requested later in page load.
              <a href="https://web.dev/uses-rel-preload/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Minimizes main-thread work</div>
              <div class="text-red-500 ml-2">[1.1&nbsp;s ]</div>
            </div>
            <div class="label-text mt-3">
              Consider reducing the time spent parsing, compiling and executing JS. You may find
              delivering smaller JS payloads helps with this.
              <a
                href="https://web.dev/mainthread-work-breakdown/"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Ensure text remains visible during webfont load</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Leverage the font-display CSS feature to ensure text is user-visible while webfonts
              are loading.
              <a href="https://web.dev/font-display/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Serve static assets with an efficient cache policy</div>
              <div class="text-red-500 ml-2">[38 resources found ]</div>
            </div>
            <div class="label-text mt-3">
              A long cache lifetime can speed up repeat visits to your page.
              <a href="https://web.dev/uses-long-cache-ttl/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Reduce unused CSS</div>
              <div class="text-red-500 ml-2">[Potential savings of 89&nbsp;KiB ]</div>
            </div>
            <div class="label-text mt-3">
              Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content
              to decrease bytes consumed by network activity.
              <a href="https://web.dev/unused-css-rules/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Reduce unused JavaScript</div>
              <div class="text-red-500 ml-2">[Potential savings of 165&nbsp;KiB ]</div>
            </div>
            <div class="label-text mt-3">
              Reduce unused JavaScript and defer loading scripts until they are required to decrease
              bytes consumed by network activity.
              <a href="https://web.dev/unused-javascript/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Minimize third-party usage</div>
              <div class="text-red-500 ml-2">[ ]</div>
            </div>
            <div class="label-text mt-3">
              Third-party code can significantly impact load performance. Limit the number of
              redundant third-party providers and try to load third-party code after your page has
              primarily finished loading.
              <a
                href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Defer offscreen images</div>
              <div class="text-red-500 ml-2">[Potential savings of 1,338&nbsp;KiB ]</div>
            </div>
            <div class="label-text mt-3">
              Consider lazy-loading offscreen and hidden images after all critical resources have
              finished loading to lower time to interactive.
              <a href="https://web.dev/offscreen-images/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-3">
          <button class="btn border-primary w-40 hover:border-primary text-primary">
            <span> Read More </span> <img src="http://serpwizz.main/assets/images/up-arrow.svg" />
          </button>
        </div>
      </div>
    </div>
    <div class="rounded-lg bg-custom_gray p-4 py-5 mt-3">
      <div class="flex justify-between">
        <div class="flex items-center gap-3">
          <img src="http://serpwizz.main/assets/images/tool.svg" alt="svg" />
          <div class="page-title">Consider Fixing</div>
        </div>
      </div>
      <div>
        <div>
          <div class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3">
            <div class="label-text flex items-center">
              <div class="label-text">First Meaningful Paint</div>
              <div class="text-red-500 ml-2">[1.6&nbsp;s ]</div>
            </div>
            <div class="label-text mt-3">
              First Meaningful Paint measures when the primary content of a page is visible.
              <a href="https://web.dev/first-meaningful-paint/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3">
            <div class="label-text flex items-center">
              <div class="label-text">Avoid enormous network payloads</div>
              <div class="text-red-500 ml-2">[Total size was 3,442&nbsp;KiB ]</div>
            </div>
            <div class="label-text mt-3">
              Large network payloads cost users real money and are highly correlated with long load
              times.
              <a href="https://web.dev/total-byte-weight/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Eliminate render-blocking resources</div>
              <div class="text-red-500 ml-2">[Potential savings of 690&nbsp;ms ]</div>
            </div>
            <div class="label-text mt-3">
              Resources are blocking the first paint of your page. Consider delivering critical
              JS/CSS inline and deferring all non-critical JS/styles.
              <a
                href="https://web.dev/render-blocking-resources/"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-3">
          <button class="btn border-primary w-40 hover:border-primary text-primary">
            <span> Read More </span> <img src="http://serpwizz.main/assets/images/up-arrow.svg" />
          </button>
        </div>
      </div>
    </div>
    <div class="rounded-lg bg-custom_gray p-4 py-5 mt-3">
      <div class="flex justify-between">
        <div class="flex items-center gap-3">
          <img src="http://serpwizz.main/assets/images/circleright.svg" alt="svg" />
          <div class="page-title">Passed</div>
        </div>
      </div>
      <div>
        <div>
          <div class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3">
            <div class="label-text flex items-center">
              <div class="label-text">Initial server response time was short</div>
              <div class="text-red-500 ml-2">[Root document took 40&nbsp;ms ]</div>
            </div>
            <div class="label-text mt-3">
              Keep the server response time for the main document short because all other requests
              depend on it.
              <a href="https://web.dev/time-to-first-byte/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3">
            <div class="label-text flex items-center">
              <div class="label-text">Total Blocking Time</div>
              <div class="text-red-500 ml-2">[20&nbsp;ms ]</div>
            </div>
            <div class="label-text mt-3">
              Sum of all time periods between FCP and Time to Interactive, when task length exceeded
              50ms, expressed in milliseconds.
              <a
                href="https://web.dev/lighthouse-total-blocking-time/"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Cumulative Layout Shift</div>
              <div class="text-red-500 ml-2">[0.008 ]</div>
            </div>
            <div class="label-text mt-3">
              Cumulative Layout Shift measures the movement of visible elements within the viewport.
              <a href="https://web.dev/cls/" target="_blank" style="color: blue">Learn more</a>.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Minify CSS</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Minifying CSS files can reduce network payload sizes.
              <a href="https://web.dev/unminified-css/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Minify JavaScript</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Minifying JavaScript files can reduce payload sizes and script parse time.
              <a href="https://web.dev/unminified-javascript/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Enable text compression</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Text-based resources should be served with compression to minimize total network
              bytes.
              <a href="gzip, deflate or brotli" target="_blank" style="color: blue">Learn more</a
              >(https://web.dev/uses-text-compression/).
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Preconnect to required origins</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Consider adding `preconnect` or `dns-prefetch` resource hints to establish early
              connections to important third-party origins.
              <a href="https://web.dev/uses-rel-preconnect/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Use video formats for animated content</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM
              videos for animations and PNG/WebP for static images instead of GIF to save network
              bytes.
              <a
                href="https://web.dev/efficient-animated-content/"
                target="_blank"
                style="color: blue"
                >Learn more</a
              >
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Avoids `document.write()`</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              For users on slow connections, external scripts dynamically injected via
              `document.write` can delay page load by tens of seconds.
              <a href="https://web.dev/no-document-write/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Avoid multiple page redirects</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Redirects introduce additional delays before the page can be loaded.
              <a href="https://web.dev/redirects/" target="_blank" style="color: blue">Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">Properly size images</div>
              <!---->
            </div>
            <div class="label-text mt-3">
              Serve images that are appropriately-sized to save cellular data and improve load time.
              <a href="https://web.dev/uses-responsive-images/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div>
          <div
            class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-3 mt-3"
            style="display: none"
          >
            <div class="label-text flex items-center">
              <div class="label-text">JavaScript execution time</div>
              <div class="text-red-500 ml-2">[0.3&nbsp;s ]</div>
            </div>
            <div class="label-text mt-3">
              Consider reducing the time spent parsing, compiling, and executing JS. You may find
              delivering smaller JS payloads helps with this.
              <a href="https://web.dev/bootup-time/" target="_blank" style="color: blue"
                >Learn more</a
              >.
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-3">
          <button class="btn border-primary w-40 hover:border-primary text-primary">
            <span> Read More </span> <img src="http://serpwizz.main/assets/images/up-arrow.svg" />
          </button>
        </div>
      </div>
    </div>
    <div class="rounded-lg bg-custom_gray p-4 py-5 mt-3">
      <div class="flex justify-between">
        <div class="flex items-center gap-3"><div class="page-title">Page Speed Info</div></div>
      </div>
      <div class="label-text flex items-center">
        Google likes your speed - meaning your users will, as well 😊.
      </div>
      <!---->
      <!---->
      <div class="grid grid-cols-3 gap-6 justify-between">
        <div class="col-span-1 card-body bg-white rounded-2xl">
          <div class="meter flex flex-col items-center">
            <div>
              <svg
                class="speedometer"
                width="300px"
                height="200px"
                style="width: 300px; height: 200px"
              >
                <g class="arc" transform="translate(150, 150)">
                  <path
                    class="speedo-segment"
                    fill="#ffc107"
                    d="M-130,-1.592040838891559e-14A130,130,0,0,1,7.960204194457796e-15,-130L6.429395695523604e-15,-105A105,105,0,0,0,-105,-1.2858791391047208e-14Z"
                  ></path>
                  <path
                    class="speedo-segment"
                    fill="#fd7e14"
                    d="M7.960204194457796e-15,-130A130,130,0,0,1,130,0L105,0A105,105,0,0,0,6.429395695523604e-15,-105Z"
                  ></path>
                </g>
                <g class="label" transform="translate(150, 150)">
                  <text
                    transform="rotate(-90) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    0
                  </text>
                  <text
                    transform="rotate(0) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    10
                  </text>
                  <text
                    transform="rotate(90) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    20
                  </text>
                </g>
                <g transform="translate(150, 150)">
                  <text
                    class="current-value"
                    text-anchor="middle"
                    y="23"
                    style="font-size: 16px; font-weight: bold; fill: rgb(102, 102, 102)"
                  >
                    1.2s
                  </text>
                </g>
                <g class="pointer" transform="translate(150, 150)" style="fill: steelblue">
                  <path
                    d="M5,0C3.333333333333333,-67.5,1.6666666666666667,-135,0,-135C-1.6666666666666667,-135,-3.333333333333333,0,-5,0C-3.333333333333333,0,-1.6666666666666667,5,0,5C1.6666666666666667,5,3.333333333333333,2.5,5,0"
                    transform="rotate(-79.19999694824219)"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="page-title flex justify-center items-center">Server Response</div>
          </div>
        </div>
        <div class="col-span-1 card-body bg-white rounded-2xl">
          <div class="meter flex flex-col items-center">
            <div>
              <svg
                class="speedometer"
                width="300px"
                height="200px"
                style="width: 300px; height: 200px"
              >
                <g class="arc" transform="translate(150, 150)">
                  <path
                    class="speedo-segment"
                    fill="#ffc107"
                    d="M-130,-1.592040838891559e-14A130,130,0,0,1,-91.92388155425117,-91.92388155425118L-74.24621202458748,-74.24621202458749A105,105,0,0,0,-105,-1.2858791391047208e-14Z"
                  ></path>
                  <path
                    class="speedo-segment"
                    fill="#d7a40cd4"
                    d="M-91.92388155425117,-91.92388155425118A130,130,0,0,1,7.960204194457796e-15,-130L6.429395695523604e-15,-105A105,105,0,0,0,-74.24621202458748,-74.24621202458749Z"
                  ></path>
                  <path
                    class="speedo-segment"
                    fill="#d7a40c"
                    d="M7.960204194457796e-15,-130A130,130,0,0,1,91.92388155425118,-91.92388155425117L74.24621202458749,-74.24621202458748A105,105,0,0,0,6.429395695523604e-15,-105Z"
                  ></path>
                  <path
                    class="speedo-segment"
                    fill="#fd7e14"
                    d="M91.92388155425118,-91.92388155425117A130,130,0,0,1,130,0L105,0A105,105,0,0,0,74.24621202458749,-74.24621202458748Z"
                  ></path>
                </g>
                <g class="label" transform="translate(150, 150)">
                  <text
                    transform="rotate(-90) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    0
                  </text>
                  <text
                    transform="rotate(-45) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    10
                  </text>
                  <text
                    transform="rotate(0) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    20
                  </text>
                  <text
                    transform="rotate(45) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    30
                  </text>
                  <text
                    transform="rotate(90) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    40
                  </text>
                </g>
                <g transform="translate(150, 150)">
                  <text
                    class="current-value"
                    text-anchor="middle"
                    y="23"
                    style="font-size: 16px; font-weight: bold; fill: rgb(102, 102, 102)"
                  >
                    2.2s
                  </text>
                </g>
                <g class="pointer" transform="translate(150, 150)" style="fill: steelblue">
                  <path
                    d="M5,0C3.333333333333333,-67.5,1.6666666666666667,-135,0,-135C-1.6666666666666667,-135,-3.333333333333333,0,-5,0C-3.333333333333333,0,-1.6666666666666667,5,0,5C1.6666666666666667,5,3.333333333333333,2.5,5,0"
                    transform="rotate(-80.0999984741211)"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="page-title flex justify-center items-center">All Page Content Loaded</div>
          </div>
        </div>
        <div class="col-span-1 card-body bg-white rounded-2xl">
          <div class="meter flex flex-col items-center">
            <div>
              <svg
                class="speedometer"
                width="300px"
                height="200px"
                style="width: 300px; height: 200px"
              >
                <g class="arc" transform="translate(150, 150)">
                  <path
                    class="speedo-segment"
                    fill="#ffc107"
                    d="M-130,-1.592040838891559e-14A130,130,0,0,1,-91.92388155425117,-91.92388155425118L-74.24621202458748,-74.24621202458749A105,105,0,0,0,-105,-1.2858791391047208e-14Z"
                  ></path>
                  <path
                    class="speedo-segment"
                    fill="#d7a40cd4"
                    d="M-91.92388155425117,-91.92388155425118A130,130,0,0,1,7.960204194457796e-15,-130L6.429395695523604e-15,-105A105,105,0,0,0,-74.24621202458748,-74.24621202458749Z"
                  ></path>
                  <path
                    class="speedo-segment"
                    fill="#d7a40c"
                    d="M7.960204194457796e-15,-130A130,130,0,0,1,91.92388155425118,-91.92388155425117L74.24621202458749,-74.24621202458748A105,105,0,0,0,6.429395695523604e-15,-105Z"
                  ></path>
                  <path
                    class="speedo-segment"
                    fill="#fd7e14"
                    d="M91.92388155425118,-91.92388155425117A130,130,0,0,1,130,0L105,0A105,105,0,0,0,74.24621202458749,-74.24621202458748Z"
                  ></path>
                </g>
                <g class="label" transform="translate(150, 150)">
                  <text
                    transform="rotate(-90) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    0
                  </text>
                  <text
                    transform="rotate(-45) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    10
                  </text>
                  <text
                    transform="rotate(0) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    20
                  </text>
                  <text
                    transform="rotate(45) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    30
                  </text>
                  <text
                    transform="rotate(90) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    40
                  </text>
                </g>
                <g transform="translate(150, 150)">
                  <text
                    class="current-value"
                    text-anchor="middle"
                    y="23"
                    style="font-size: 16px; font-weight: bold; fill: rgb(102, 102, 102)"
                  >
                    0.3s
                  </text>
                </g>
                <g class="pointer" transform="translate(150, 150)" style="fill: steelblue">
                  <path
                    d="M5,0C3.333333333333333,-67.5,1.6666666666666667,-135,0,-135C-1.6666666666666667,-135,-3.333333333333333,0,-5,0C-3.333333333333333,0,-1.6666666666666667,5,0,5C1.6666666666666667,5,3.333333333333333,2.5,5,0"
                    transform="rotate(-88.6500015258789)"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="page-title flex justify-center items-center">All Page Scripts Complete</div>
          </div>
        </div>
      </div>
    </div>
    <div class="rounded-lg bg-custom_gray p-4 py-5 mt-3">
      <div class="flex justify-between">
        <div class="flex items-center gap-3"><div class="page-title">Page Size Info</div></div>
      </div>
      <div class="label-text flex items-center">
        Great stuff! Your webpage is just the right size to guarantee optimal user experience 😊.
      </div>
      <!---->
      <!---->
      <div class="grid grid-cols-2 gap-6 justify-between mt-3">
        <div class="col-span-1 card-body bg-white rounded-2xl">
          <div class="meter flex flex-col items-center">
            <div>
              <svg
                class="speedometer"
                width="300px"
                height="200px"
                style="width: 300px; height: 200px"
              >
                <g class="arc" transform="translate(150, 150)">
                  <path
                    class="speedo-segment"
                    fill="#ffc107"
                    d="M-130,-1.592040838891559e-14A130,130,0,0,1,-91.92388155425117,-91.92388155425118L-74.24621202458748,-74.24621202458749A105,105,0,0,0,-105,-1.2858791391047208e-14Z"
                  ></path>
                  <path
                    class="speedo-segment"
                    fill="#d7a40cd4"
                    d="M-91.92388155425117,-91.92388155425118A130,130,0,0,1,7.960204194457796e-15,-130L6.429395695523604e-15,-105A105,105,0,0,0,-74.24621202458748,-74.24621202458749Z"
                  ></path>
                  <path
                    class="speedo-segment"
                    fill="#d7a40c"
                    d="M7.960204194457796e-15,-130A130,130,0,0,1,91.92388155425118,-91.92388155425117L74.24621202458749,-74.24621202458748A105,105,0,0,0,6.429395695523604e-15,-105Z"
                  ></path>
                  <path
                    class="speedo-segment"
                    fill="#fd7e14"
                    d="M91.92388155425118,-91.92388155425117A130,130,0,0,1,130,0L105,0A105,105,0,0,0,74.24621202458749,-74.24621202458748Z"
                  ></path>
                </g>
                <g class="label" transform="translate(150, 150)">
                  <text
                    transform="rotate(-90) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    0
                  </text>
                  <text
                    transform="rotate(-45) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    10
                  </text>
                  <text
                    transform="rotate(0) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    20
                  </text>
                  <text
                    transform="rotate(45) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    30
                  </text>
                  <text
                    transform="rotate(90) translate(0, -140)"
                    class="segment-value"
                    style="
                      text-anchor: middle;
                      font-size: 14px;
                      font-weight: bold;
                      fill: rgb(102, 102, 102);
                    "
                  >
                    40
                  </text>
                </g>
                <g transform="translate(150, 150)">
                  <text
                    class="current-value"
                    text-anchor="middle"
                    y="23"
                    style="font-size: 16px; font-weight: bold; fill: rgb(102, 102, 102)"
                  >
                    3.52MB
                  </text>
                </g>
                <g class="pointer" transform="translate(150, 150)" style="fill: steelblue">
                  <path
                    d="M5,0C3.333333333333333,-67.5,1.6666666666666667,-135,0,-135C-1.6666666666666667,-135,-3.333333333333333,0,-5,0C-3.333333333333333,0,-1.6666666666666667,5,0,5C1.6666666666666667,5,3.333333333333333,2.5,5,0"
                    transform="rotate(-74.16000366210938) scale(0.9999999999999999,0.9999999999999999)"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="page-title flex justify-center items-center">Total Page Size</div>
          </div>
        </div>
        <div class="col-span-1 card-body bg-white rounded-2xl">
          <div class="flex items-center justify-center">
            <div class="cdc-container">
              <div
                class="cdc"
                style="width: 200px; padding-bottom: 200px; background-color: rgb(255, 193, 7)"
              >
                <div class="cdc-sections" style="transform: rotate(0deg)">
                  <div class="cdc-section cdc-section-right" style="transform: rotate(0deg)">
                    <div
                      title="HTML (1,379.42 Kib)"
                      class="cdc-filler"
                      style="background-color: limegreen; transform: rotate(-108deg)"
                    ></div>
                  </div>
                  <div class="cdc-section cdc-section-right" style="transform: rotate(72deg)">
                    <div
                      title="image (1,618.02 Kib)"
                      class="cdc-filler"
                      style="background-color: gold; transform: rotate(-108deg)"
                    ></div>
                  </div>
                  <div class="cdc-section cdc-section-right" style="transform: rotate(144deg)">
                    <div
                      title="script (328.03 Kib)"
                      class="cdc-filler"
                      style="background-color: rgb(0, 85, 164); transform: rotate(-144deg)"
                    ></div>
                  </div>
                  <div class="cdc-section cdc-section-left" style="transform: rotate(0deg)">
                    <div
                      title="script (328.03 Kib)"
                      class="cdc-filler"
                      style="background-color: rgb(0, 85, 164); transform: rotate(216deg)"
                    ></div>
                  </div>
                  <div class="cdc-section cdc-section-left" style="transform: rotate(36deg)">
                    <div
                      title="stylesheet (109.92 Kib)"
                      class="cdc-filler"
                      style="background-color: tomato; transform: rotate(252deg)"
                    ></div>
                  </div>
                  <div class="cdc-section cdc-section-left" style="transform: rotate(108deg)">
                    <div
                      title="All others (1,355.93 Kib)"
                      class="cdc-filler"
                      style="background-color: firebrick; transform: rotate(252deg)"
                    ></div>
                  </div>
                </div>
                <div
                  class="cdc-overlay"
                  style="
                    height: 75%;
                    width: 75%;
                    top: calc(12.5%);
                    left: calc(12.5%);
                    background-color: white;
                  "
                >
                  <div class="cdc-text" style="font-size: 16px"><h2>3.52 MB</h2></div>
                </div>
              </div>
              <!---->
            </div>
          </div>
          <div class="page-title flex justify-center items-center">Page Size Breakdown</div>
        </div>
      </div>
    </div>
    <div class="rounded-lg bg-custom_gray p-4 py-5 mt-3">
      <div class="flex justify-between">
        <div class="flex items-center gap-3">
          <div class="page-title">Number of Resources</div>
        </div>
      </div>
      <div class="label-textmt-3">
        This is the total number of files that need to be retrieved from web servers in order for
        your page to load. Generally, the more files that need retrieving, the slower your load time
        will be. Removing unnecessary files and consolidating others (such as styles and scripts)
        can help improve this 🛠️.
      </div>
      <div class="rounded-xl overflow-hidden border border-gray-300 mt-3">
        <table class="w-full text-sm text-left border border-gray-300">
          <tbody class="text-primary">
            <tr class="text-center" style="background-color: #f2f3f8; color: #212529">
              <th>Resource Type</th>
              <th>Number of Resources</th>
              <th>Transfer Size</th>
            </tr>
            <tr class="text-center">
              <th>Total</th>
              <th>61</th>
              <th>3,441.95 Kib</th>
            </tr>
            <tr class="text-center">
              <th>Image</th>
              <th>32</th>
              <th>1,618.02 Kib</th>
            </tr>
            <tr class="text-center">
              <th>Font</th>
              <th>8</th>
              <th>1,362.45 Kib</th>
            </tr>
            <tr class="text-center">
              <th>Script</th>
              <th>9</th>
              <th>328.03 Kib</th>
            </tr>
            <tr class="text-center">
              <th>Stylesheet</th>
              <th>6</th>
              <th>109.92 Kib</th>
            </tr>
            <tr class="text-center">
              <th>Document</th>
              <th>1</th>
              <th>16.97 Kib</th>
            </tr>
            <tr class="text-center">
              <th>Other</th>
              <th>4</th>
              <th>5.23 Kib</th>
            </tr>
            <tr class="text-center">
              <th>Media</th>
              <th>1</th>
              <th>1.34 Kib</th>
            </tr>
            <tr class="text-center">
              <th>Third-party</th>
              <th>10</th>
              <th>1,349.36 Kib</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
