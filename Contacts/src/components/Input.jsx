/* eslint-disable react/prop-types */
import { IoPersonAdd } from 'react-icons/io5';
import { MdOutlinePersonSearch } from 'react-icons/md';
function Input({ onOpen, filterContacts }) {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <div className="relative flex max-w-[30rem] items-center justify-center">
          <MdOutlinePersonSearch className="absolute left-1 ml-1 h-[3rem] w-[3rem] text-blue-500" />
          <input
            onChange={filterContacts}
            type="text"
            className="h-[4rem] w-[25.9rem] rounded-lg border-4 border-blue-500 bg-transparent p-2 pl-[3.1rem] text-3xl font-semibold text-yellow-200"
          />
        </div>
        <IoPersonAdd
          className="h-[4rem] w-[3.5rem] cursor-pointer text-blue-500"
          onClick={() => onOpen(null)}
        />
      </div>
    </>
  );
}

export default Input;
