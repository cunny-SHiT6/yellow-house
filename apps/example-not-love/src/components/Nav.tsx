import type { Component } from "solid-js";
import { mergeProps } from "solid-js";

const Link: Component = (props) => {
  return (
    <>
      <li>
        <a
          href={props.href}
          class="block py-2 pr-4 pl-3 text-gray-600 rounded md:bg-transparent dark:text-blue-300 md:p-0"
          aria-current="page"
        >
          {props.children}
        </a>
      </li>
    </>
  );
};

const Nav: Component = () => {
  return (
    <>
      <nav class="bg-gray-300 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              เว็ปชังชาติ
            </span>
          </a>
          <div class="hidden w-full md:block md:w-auto">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <Link href="/">Home</Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
