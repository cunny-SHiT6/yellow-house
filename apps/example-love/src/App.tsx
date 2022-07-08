import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="bg-yellow-200 w-full">
      <img src="/assets/loongtoo1.png" class="w-full" />
      <div
        style="font-family: rakChartHard"
        class="text-center text-9xl pt-5 w-full bg-yellow-900"
      >
        <span class="text-red-500">เ</span>
        <span class="text-white">ว็บ</span>
        <span class="text-blue-500">รัก</span>
        <span class="text-white">ชา</span>
        <span class="text-red-500">ติ</span>
      </div>
      <div
        style="font-family: rakChart-Normal"
        class="text-center text-2xl w-full mt-2"
      >
        เว็บไซต์ที่รวบรวมข้อมูลของประชาชนส่วนใหญ่(คนรักชาติ) ร่วม ๖๖.๖๖๖๖ ล้านคน
        เพื่อแสดงอภินิหารว่าคนน้อยกว่าล้านนั้น ควรเคารพพวกเราและบุคคลที่เราเคารพ
        ไม่ใช่มาเชิญชวนคนส่วนใหญ่ให้มาเชื่อในข้อมูลผิดๆที่ถูกกุขึ้นมา
      </div>
    </div>
  );
};

export default App;
