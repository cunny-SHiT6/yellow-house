import { Component, createSignal } from "solid-js";

const [shit, setShit] = createSignal(false);

const Tpcr: Component = () => {
  return (
    <div>
      {!shit() && (
        <button
          class="fixed top-0 left-0 w-full h-full bg-gray-800/[0.9]"
          onclick={() => setShit(true)}
        >
          <a
            class="fixed inset-[20%] bg-white border-white rounded-xl"
            href="https://www.youtube.com/watch?v=xSgp6KyhbB8"
          >
            <img
              src="/assets/xiao.png"
              class="object-cover h-full w-full rounded-xl p-1"
              alt="popup ทรงพระเจริญ"
            ></img>
          </a>
        </button>
      )}
    </div>
  );
};

export default Tpcr;
