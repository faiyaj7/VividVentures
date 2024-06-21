import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Search() {
  const [products, setProducts] = useState([""]);
  const [selected, setSelected] = useState(products[0]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchByButton = async () => {
    const response = await axios.get(
      `${process.env.VITE_APP_DOMAIN}/products?keyword=${query}&category=${""}`
    );
    console.log(response.data.products);
    navigate(`/product/${response.data.products[0]._id}`);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        `${
          import.meta.env.VITE_APP_DOMAIN
        }/products?keyword=${query}&category=${""}`
      ); // Replace with your actual API endpoint
      setProducts(response.data.products); // Update the products state with the fetched data
      // console.log(response.data.products);
    };

    fetchProducts();
  }, [query]);
  return (
    <div className="-z-40 w-full">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              placeholder="Search"
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5
               text-gray-900 focus:ring-0 focus:outline-none"
              displayValue={(item) => item.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <IoSearchOutline
                className="absolute right-4 cursor-pointer text-black/85"
                onClick={() => searchByButton}
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {products.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                products.map((item) => (
                  <Combobox.Option
                    key={item._id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <Link
                          key={item.id}
                          to={`/product/${item._id}`}
                          className="flexContainer gap-2"
                        >
                          <img
                            src={item.images[0].url}
                            alt={item.name}
                            className="w-20 rounded-lg"
                          />
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {item.name}
                          </span>
                        </Link>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
