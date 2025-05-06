import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const cities = ["București", "Brașov", "Cluj", "Iași", "Timișoara"];
const destinations = ["Roma", "Barcelona", "Paris", "Atena", "Dubai"];
const nights = [1, 3, 5, 7, 10];
const people = ["1 adult", "2 adulți", "2 adulți + 1 copil", "3 adulți"];

function Filter({ label, options, selected, setSelected }) {
  return (
    <div className="w-full">
      <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">{label}</p>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="w-full cursor-pointer rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 dark:text-white">
            {selected}
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-white dark:bg-gray-800 py-1 text-sm shadow ring-1 ring-black/10 focus:outline-none">
            {options.map((item, idx) => (
              <Listbox.Option
                key={idx}
                value={item}
                className={({ active }) =>
                  `cursor-pointer select-none px-4 py-2 ${
                    active ? "bg-blue-100 dark:bg-blue-700" : ""
                  }`
                }
              >
                {item}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}

export default function SearchFilters() {
  const [city, setCity] = useState(cities[0]);
  const [destination, setDestination] = useState(destinations[0]);
  const [numNights, setNumNights] = useState(nights[0]);
  const [persons, setPersons] = useState(people[1]);

  return (
    <div className="grid gap-4 md:grid-cols-4 bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow">
      <Filter label="Plecare din" options={cities} selected={city} setSelected={setCity} />
      <Filter label="Sosire la" options={destinations} selected={destination} setSelected={setDestination} />
      <Filter label="Număr nopți" options={nights} selected={numNights} setSelected={setNumNights} />
      <Filter label="Persoane" options={people} selected={persons} setSelected={setPersons} />

      <div className="md:col-span-4">
        <button className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition font-medium">
          Caută
        </button>
      </div>
    </div>
  );
}
