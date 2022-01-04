import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Menu2 } from '../elements/menu'
import { Menulist, Menulistclick, MucMenu } from '../elements/menulist'
import { useRecoilState, useRecoilValue } from 'recoil'
import Link from 'next/link'


function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(' ')
}
export default function Example() {
  const [menuli, setMenu] = useRecoilState(Menulist)
  const [hover, serHover] = useState()
  const [Muc, setMuc] = useRecoilState(MucMenu)
  const [list, setclick] = useRecoilState(Menulistclick)
  
  return (
    <Disclosure as="nav" className="bg-red lg:bg-white sticky top-0 shadow mb-3 z-40">
      {
        ({ open }) => (
          <>
            <div className="container mx-auto">
              <div className="relative flex items-center justify-between h-10">
                <div className="absolute inset-y-0 left-0 flex items-center justify-end lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-items-end p-2 text-gray-400 hover:text-white hover:bg-white  ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/*Menu list*/}
                <div className="flex-1 flex items-center lg:justify-start justify-center sm:items-stretch font-semibold ">
                  <div className="flex-shrink-0 flex items-center justify-center pr-2" >
                    <Link href="/">
                      <div>
                        <img
                          className="block lg:hidden h-8 w-auto "
                          src="https://static-cms-tpo.zadn.vn/v3/web/styles/img/logo-web-white.png"
                          alt="Workflow"
                        />
                        <img
                          className="hidden lg:block h-8 w-auto"
                          src="http://localhost:3000/Home.png"
                          alt="Workflow"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="hidden lg:block  justify-center">
                    <div className="flex space-x-4 text-sm justify-start absolute flex-wrap">
                      {Object.keys(Menu2).map((k) => {
                        return (
                          <div className="w-max"
                            onMouseEnter={() => {
                              return (
                                setMenu(Menu2[k].list),
                                serHover(Menu2[k].id)
                              )
                            }}
                            onMouseLeave={() => { return (serHover(0)) }}
                            onClick={() => { return (setMuc(
                              prev => ({
                                ...prev,
                                id: Menu2[k].id
                              })
                            ),setclick(
                              prev => ({
                                ...prev,
                                list: Menu2[k].list
                              })
                            )) }
                            }>
                            <div className=" py-1.5 relative flex-wrap">
                              <Link href="/Muc" >
                                {Menu2[k].title}
                              </Link>
                            </div>
                            {
                              menuli != undefined && hover == Menu2[k].id
                                ?
                                <div className="absolute  text-primary bg-red z-50">
                                  {
                                    menuli.map(item => {
                                      return (
                                        <div className=" hover:bg-red-800 p-2">
                                          <Link className="relative" href="/Muc">{item.items}</Link>
                                        </div>
                                      )
                                    }
                                    )
                                  }
                                </div>
                                : null
                            }
                          </div>
                        )
                      })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile menu list*/}
            <Disclosure.Panel className="lg:hidden text-primary">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <input type='text'></input>
                <div className="bg-red-700">
                  {
                    Object.keys(Menu2).map((k) => (
                      <div className="border-white border-2">
                        <Disclosure.Button
                          className="text-white px-2"
                          onClick={() => { return (setMuc(Menu2[k].list)) }
                          }>
                          <Link href="/Muc" className=" block px-1 relative">
                            <div onClick={() => { return (setMuc(
                              prev => ({
                                ...prev,
                                id: Menu2[k].id
                              })
                            ),setclick(
                              prev => ({
                                ...prev,
                                list: Menu2[k].list
                              })
                            )) }
                            }>
                            {Menu2[k].title}
                            </div>
                          </Link>
                        </Disclosure.Button>
                      </div>
                    ))
                  }
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
    </Disclosure>
  )
}