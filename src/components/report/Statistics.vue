<template>
  <div class="grid grid-cols-12 gap-5 justify-between">
    <div class="rounded-lg card-compact bg-custom_gray col-span-2">
      <div class="card-body flex-col text-center">
        <div
          role="progressbar"
          class="radial-progress text-[#FFD54F]"
          style="--value: 77; --size: 10rem; --thickness: 1.5rem"
        >
          <span class="font-bold text-xl text-black">77%</span>
        </div>
        <div class="mt-3">Result Percentage</div>
      </div>
    </div>
    <div class="rounded-lg bg-custom_gray col-span-5">
      <div class="card-body">
        <div class="text-lg">Overall</div>
        <div class="flex gap-6 items-center justify-between my-3">
          <div class="flex flex-col w-full">
            <div class="flex justify-between">
              <div>SEO</div>
              <div>60</div>
            </div>
            <div>
              <progress
                max="100"
                class="progress progress-info w-full bg-info bg-opacity-30"
                value="60"
              ></progress>
            </div>
          </div>
          <div class="flex flex-col w-full">
            <div class="flex justify-between">
              <div>Usability</div>
              <div>120</div>
            </div>
            <div>
              <progress
                max="100"
                class="progress progress-info w-full bg-info bg-opacity-30"
                value="120"
              ></progress>
            </div>
          </div>
        </div>
        <div class="flex gap-6 items-center justify-between my-3">
          <div class="flex flex-col w-full">
            <div class="flex justify-between">
              <div>Performance</div>
              <div>60</div>
            </div>
            <div>
              <progress
                max="100"
                class="progress progress-info w-full bg-info bg-opacity-30"
                value="60"
              ></progress>
            </div>
          </div>
          <div class="flex flex-col w-full">
            <div class="flex justify-between">
              <div>Technology</div>
              <div>40</div>
            </div>
            <div>
              <progress
                max="100"
                class="progress progress-info w-full bg-info bg-opacity-30"
                value="40"
              ></progress>
            </div>
          </div>
        </div>
        <div class="flex gap-6 items-center justify-between my-3">
          <div class="flex flex-col w-full">
            <div class="flex justify-between">
              <div>Social</div>
              <div>80</div>
            </div>
            <div>
              <progress
                max="100"
                class="progress progress-info w-full bg-info bg-opacity-30"
                value="80"
              ></progress>
            </div>
          </div>
          <div class="flex flex-col w-full">
            <div class="flex justify-between">
              <div>Analysis</div>
              <div>100</div>
            </div>
            <div>
              <progress
                max="100"
                class="progress progress-info w-full bg-info bg-opacity-30"
                value="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rounded-lg bg-custom_gray col-span-5">
      <div class="card-body">
        <div class="flex gap-5 justify-between w-full">
          <div class="flex flex-col w-full">
            <div>Passed</div>
            <div class="font-bold text-black text-2xl">24</div>
            <div>
              <progress
                max="33.33"
                class="progress progress-success w-full bg-success bg-opacity-30"
                value="24"
              ></progress>
            </div>
          </div>
          <div class="flex flex-col w-full">
            <div>Warnings</div>
            <div class="font-bold text-black text-2xl">3</div>
            <div>
              <progress
                max="33.33"
                class="progress progress-warning w-full bg-warning bg-opacity-30"
                value="3"
              ></progress>
            </div>
          </div>
        </div>
        <div class="flex gap-5 justify-between w-full mt-8">
          <div class="flex flex-col w-full">
            <div>Errors</div>
            <div class="font-bold text-black text-2xl">7</div>
            <div>
              <progress
                max="33.33"
                class="progress progress-error w-full bg-error bg-opacity-30"
                value="7"
              ></progress>
            </div>
          </div>
          <div class="flex flex-col w-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>
