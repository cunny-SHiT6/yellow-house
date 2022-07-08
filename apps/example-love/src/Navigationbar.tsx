import { Component } from "solid-js";

const Navigationbar: Component = () => {
  return (
    <div class="w-full h-1/16 flex p-2 justify-between bg-yellow-500">
      <div class="w-1/3 flex h-full">
        <img
          class="w-1/3"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"
        />
        <div style="font-family: rakChartHard" class="p-1 text-7xl">
          เรารักชาติ
        </div>
      </div>
      <div class="flex h-full">
        <a
          style="font-family: rakChart-Normal"
          class="align-middle justify-end bg-yellow-400 text-middle rounded-md p-2 text-xl"
          href="https://letmegooglethat.com/?q=%E0%B8%AD%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%97%E0%B8%B3%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%87"
        >
          พื้นที่ปรึกษาสำหรับผู้อยากรักชาติ
        </a>
      </div>
    </div>
  );
};

export default Navigationbar;
