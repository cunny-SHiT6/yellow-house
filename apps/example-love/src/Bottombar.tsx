import { Component } from "solid-js";

const Bottombar: Component = () => {
  return (
    <div class="w-full">
      <div class="w-full p-1">
        <div
          style="font-family: rakChartHard"
          class="w-full text-center text-4xl"
        >
          พันธมิตรเว็บรักชาติ
        </div>
        <div class="w-full h-24 flex justify-evenly">
          <a href="https://www.facebook.com/ThaipakdeeParty/">
            <img
              src="/assets/thaipakdee.png"
              class="object-cover h-full w-full rounded-3xl p-1 border-1"
            ></img>
          </a>
          <a href="https://www.tdc.mi.th/">
            <img
              src="/assets/rordor.png"
              class="object-cover h-full w-full rounded-3xl p-1 border-1"
            ></img>
          </a>
          <a href="https://www.royaloffice.th/">
            <img
              src="/assets/royal.png"
              class="object-cover h-full w-full rounded-3xl p-1 border-1"
            ></img>
          </a>
          <a href="https://www.facebook.com/PPRPThailand">
            <img
              src="/assets/sampor.png"
              class="object-cover h-full w-full rounded-3xl p-1 border-1"
            ></img>
          </a>
        </div>
      </div>
      <div class="flex">
        <div class="w-full flex bg-blue-600 p-1 justify-between">
          <div class="flex text-white w-1/2">
            <div style="font-family: rakChart-Bold" class="text-6xl">
              กลุ่มคนรักชาติ
            </div>
            <div style="font-family: rakChart-Italic" class="text-xs">
              เพื่อชาติ
              <br />
              เพื่อพระมหากษัตริย์
              <br />
              เพื่อสิ่งอันเป็นที่เคารพ
            </div>
          </div>
          <div class="flex text-white w-1/2 flex-row-reverse">
            <a href="https:/www.facebook.com/">
              <svg
                class="h-3/4 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                {/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>
            <a href="https:/www.youtube.com/">
              <svg
                class="h-3/4 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                {/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class='h-10'>

      </div>
    </div>
  );
};

export default Bottombar;
