import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div id='navbar-dropdown-btn'>
        <Menu.Button className="inline-flex justify-center w-full text-gray-700 hover:bg-gray-50 ">
          {props.title}
          <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
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
        <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">

          {props.subMenu.map((item) => (
            
            <Menu.Item 
              key={item.subMenuTitle}
            >
            {({ active }) => (
              
              <NavLink
                
                to={item.to}
                
                // activeClassName="active"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              > {console.log(item)}
                {item.subMenuTitle}
              </NavLink>
            )}
          </Menu.Item>
            ))}

            
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item> */}
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}