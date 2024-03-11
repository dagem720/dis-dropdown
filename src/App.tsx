import React from "react";
import "./App.css";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import classNames from "classnames";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const App: React.FC = () => {
return (
<div className="">
<Menu as="div" className="relative ">
{({ open }) => (
<>
<div>
<Menu.Button
className={classNames(
open ? "rounded-b-none" : "",
"flex  justify-between p-0 h-12 overflow-hidden w-48 border-0 place-items-center   rounded-t-md bg-[#FF5C00]  text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
)}
>
<div
className={classNames(
open ? "border-b border-b-[#FFFFFF]" : "border-b ",
"h-full  flex place-items-center justify-center flex-1"
)}
>
<img src="/Vector (3).svg" alt="" />
</div>
<div className="bg-[#EAEEF7] h-full text-[#464F61] flex place-items-center justify-center w-8">
<ChevronDownIcon
// open ? "transform rotate-180" : "transform rotate-0"

className={classNames(
open ? "transform rotate-180" : "transform rotate-0",
"text-[#464F61] w-5 h-5"
)}
aria-hidden="true"
/>
</div>
</Menu.Button>
</div>
<Transition
as={Fragment}
enter="transition ease-out duration-100"
enterFrom="transform opacity-0 scale-95"
enterTo="transform opacity-100 scale-100"
leave="transition ease-in duration-75"
leaveFrom="transform opacity-100 scale-100"
leaveTo="transform opacity-0 scale-95"
>
<Menu.Items className="absolute right-0  w-[83.5%] left-0 origin-top-right divide-y divide-gray-200 rounded-b-md bg-[#FF5C00] shadow-lg focus:outline-none">
<div className="py-1">
<Menu.Item>
<a href="#" className="flex justify-center px-4 py-6 text-sm ">
<img src="/Vector.svg" alt="" />
</a>
</Menu.Item>
<Menu.Item>
<a href="#" className="flex justify-center px-4 py-6 text-sm">
<img src="/Vector-1.svg" alt="" />
</a>
</Menu.Item>
<Menu.Item>
<a href="#" className="flex justify-center px-4 py-6 text-sm">
<img src="/Vector-2.svg" alt="" />
</a>
</Menu.Item>
<Menu.Item>
<a href="#" className="flex justify-center px-4 py-6 text-sm">
<img src="/CALL_OF_DUTY.svg" alt="" />
</a>
</Menu.Item>

<Menu.Item>
<a href="#" className="flex justify-center px-4 py-6 text-sm">
<img src="/Vector-3.svg" alt="" />
</a>
</Menu.Item>
</div>
</Menu.Items>
</Transition>
</>
)}
</Menu>
</div>
);
};

export default App;
