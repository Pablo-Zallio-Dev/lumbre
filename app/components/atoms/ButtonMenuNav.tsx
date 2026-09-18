import React from 'react'

export default function ButtonMenuNav({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
      return (
            <button className=" flex flex-col justify-end items-end gap-1 p-3" onClick={() => setIsOpen(!isOpen)}>
                  <span className='block w-6 h-px bg-[#1c1917]'></span>
                  <span className='block w-4 h-px bg-[#1c1917]'></span>
                  <span className='block w-6 h-px bg-[#1c1917]'></span>
            </button>
      )
}
