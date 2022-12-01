'use client';

import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';
import MobileNavigationButton from '../components/MobileNavigationButton';
import MobileNavigation from '../components/MobileNavigation';
import useNavigation from '../hooks/useNavigation';

export default function Navigation() {
  const { navigation, isCurrentPathname } = useNavigation();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <MobileNavigationButton open={open} />
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Decathlon_Logo.svg"
                    alt="Decathlon"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Decathlon_Logo.svg"
                    alt="Decathlon"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          isCurrentPathname(item.href)
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={
                          isCurrentPathname(item.href) ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <MobileNavigation />
        </>
      )}
    </Disclosure>
  );
}
