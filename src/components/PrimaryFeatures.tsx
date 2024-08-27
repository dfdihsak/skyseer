'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ExclamationTriangleIcon, SunIcon, MagnifyingGlassIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/20/solid'

import spectralImage from '@/images/screenshots/spectralgraph.png'

const features = [
  {
    name: 'Global demand',
    description: 'for rare battery EV metals is expected to increase more than 40-fold by 2040',
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: 'Overmining',
    description: 'in known areas has caused ecological destruction. The commonly mined areas cannot keep pace with global appetite for these minerals',
    icon: ExclamationTriangleIcon,
  },
]

export function PrimaryFeatures() {
  return (
    <section
      id="methodology"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Methodology</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Spectral Signatures</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Skyseer leverages each mineral's unique light reflectance attributes, which are picked up by multispectral satellites 
                </p>

                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>



                <p className=" mt-10 space-y-8 text-sm text-gray-500 italic">
Image source: Jing, et al. 2014
</p>

              </div>
            </div>
            <div className="sm:px-6 lg:px-0">
              <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -inset-y-px w-full origin-bottom-left bg-indigo-100 opacity-20" // Removed ring-1 and ring-inset
                />
                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  <Image
                    alt="Product screenshot"
                    src={spectralImage} // Using the imported image as the src
                    width={2432}
                    height={1442}
                    className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800" // Removed ring-1 and ring-white/10
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 sm:rounded-3xl" // Removed ring-1, ring-inset, and ring-black/10
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}