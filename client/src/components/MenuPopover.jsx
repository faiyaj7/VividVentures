import { Popover, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "./Logout";
const solutions = [
  {
    name: "Profile",
    href: "/profile",
    icon: <CgProfile />,
  },
  {
    name: "Logout",
    href: "/",
    icon: <IoIosLogOut />,
  },
];

export default function MenuPopover({ user }) {
  return (
    <Popover className="w-1/2">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "text-black" : "text-black/90"}
                 py-[6px] group   
                hover:text-white focus:outline-none `
                }
          >
            <span className="">
              <img
                src={user.picture}
                alt={user.nickname}
                className="rounded-full w-6 h-6"
              />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className="absolute left-[90%] z-10 mt-3 w-[20%] -translate-x-1/2 
            transform px-4 "
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                <div className="w-full relative flexContainer flex-col gap-8 bg-white p-7 !items-start">
                  {solutions.map((item) => {
                    return item.name === "Logout" ? (
                      <LogoutButton item={item} />
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center w-full rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-black sm:h-12 sm:w-12">
                          {item.icon}
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900 tracking-wider">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
