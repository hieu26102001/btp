import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Menu2 } from '../elements/menu'
import { Menulist } from '../elements/menulist'
import { useRecoilState, useRecoilValue } from 'recoil'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Example() {
const [menuli , setMenu] = useRecoilState(Menulist)
const [hover, serHover] = useState()
 

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
                  {/*Menu list*/}
                    <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start"> 
                      <div className="flex-shrink-0 flex items-center justify-between pr-2">
                        <img
                          className="block lg:hidden h-8 w-auto "
                          src="http://localhost:3000/Home.png"
                          alt="Workflow"
                        />
                        <img
                          className="hidden lg:block h-8 w-auto"
                          src="http://localhost:3000/Home.png"
                          alt="Workflow"
                        />
                      </div>
                      <div className="hidden lg:block  ">
                      <ul className="flex space-x-4 text-sm">
                        {Object.keys(Menu2).map((k) =>{return (
                          <li className='font-sans relative ' onMouseEnter={() => {return(
                            setMenu(Menu2[k].list),
                            serHover(Menu2[k].id)
                          )} } onMouseLeave={() => { return(serHover(0))}} >
                            <a href={Menu2[k].link} className=" block px-1 relative">
                            {Menu2[k].title}
                             </a>
                          {menuli != undefined && hover == Menu2[k].id 
                          ?<ul className="absolute bg-red-500 text-white w-40  ">{menuli.map(item => {
                            return(
                              <li className=" hover:bg-red-800 ">
                                <a className=" relative " href={item.link}>{item.items}</a>
                              </li>
                            )})} </ul>
                            :null}
                          </li>
                        )})}
                      </ul>
                    </div>
                    </div>
                    </div>
                  </div>
    {/* Mobile menu list*/}
          <Disclosure.Panel className="lg:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1">
            <ul className="bg-red-700">
              {Object.keys(Menu2).map((k) => (
                  <li className="border-white border-2">
                    <Disclosure.Button
                    className = "text-white px-2" >
                      <a href={Menu2[k].link} className=" block px-1 relative">
                      {Menu2[k].title}
                        </a>
                    </Disclosure.Button>
                  </li>
                ))} 
                </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}