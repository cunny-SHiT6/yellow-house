import { Component, createEffect, createSignal } from "solid-js";

const [shitCount, setShitCount] = createSignal(0);

const Consent: Component = () => {
  createEffect(() => {
    if (shitCount() >= 2) {
      location.replace('https://www.youtube.com/watch?v=iik25wqIuFo')
    }
  })

  return (
    <div class="fixed bottom-0 left-0 w-full flex bg-white py-2 px-1">
      <div style="font-family: rakChart-Normal" class="w-2/3">
        การมีอยู่ของเว็บไซต์ถือว่าคุณยอมรับการให้ข้อมูลส่วนตัวทุกประการกับกลุ่มคนรักชาติ
      </div>
      <div class="w-1/3 flex flex-row-reverse">
        <button
          style="font-family: rakChart-Italic"
          class="w-1/2 bg-yellow-300 text-middle rounded-lg text-grey-500 text-xs m-1"
          onClick={() => setShitCount(shitCount() + 1)}
        >
          ไม่ต้องยอมรับแล้ว
        </button>
        {shitCount() >= 1 && (
          <div
            style="font-family: rakChart-Normal"
            class="w-1/2 m-1 text-grey-500 text-right text-xs"
          >
            เราเข้าใจท่านแล้ว ไม่ต้องกดแล้ว
          </div>
        )}
      </div>
    </div>
  );
};

export default Consent;
