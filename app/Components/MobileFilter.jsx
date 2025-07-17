'use client';

import { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function MobileFilter({ component }) {
  const [show, setShow] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setShow(prev => !prev)}
        className="bg-teal-600 text-white px-4 py-2 rounded w-full"
      >
        {show ? 'Hide Filters' : 'Show Filters'}
      </button>


      <Transition
        show={show}
        enter="transition-all duration-300 ease-out"
        enterFrom="opacity-0 max-h-0"
        enterTo="opacity-100 max-h-[1000px]"
        leave="transition-all duration-200 ease-in"
        leaveFrom="opacity-100 max-h-[1000px]"
        leaveTo="opacity-0 max-h-0"
      >
        <div className="overflow-hidden mt-2">{component}</div>
      </Transition>

    </div>
  );
}
