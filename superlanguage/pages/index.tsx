import React from 'react'
import Head from 'next/head'
import { superlanguage } from '../../iso639/language/all'

const Index = () => {
  return (
    <div className='container flex-auto min-w-0 px-4 pt-10 pb-24 mx-auto sm:px-6 xl:px-8 lg:pb-16'>
      <Head>
        <title>Superlanguages</title>
      </Head>
      <div>
        <div className='pb-10'>
          <h1 className='inline-block font-mono text-3xl font-extrabold tracking-tight text-gray-900'>
            Superlanguages
          </h1>
        </div>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='border-b'>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='py-2 pr-2 text-center border-gray-200'>
                  #
                </div>
              </th>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='py-2 pr-2 border-gray-200'>
                  639-3
                </div>
              </th>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='py-2 pr-2 border-gray-200'>
                  639-2/5
                </div>
              </th>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='py-2 pr-2 border-gray-200'>
                  639-1
                </div>
              </th>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='py-2 pr-2 border-gray-200'>
                  Language
                </div>
              </th>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='py-2 pr-2 border-gray-200'>
                  Scope
                </div>
              </th>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='py-2 pr-2 border-gray-200'>
                  Type
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {superlanguage.map((lang, index) => {
              const {
                iso6391 = 'n/a',
                iso6392 = 'n/a',
                iso6393 = 'n/a',
                type = 'n/a',
                name = { international: 'n/a' },
                scope = 'n/a',
              } = lang ?? {}
              return (
                <tr key={index + '-tr'}>
                  <td
                    translate='no'
                    className='py-2 pr-2 overflow-auto font-mono text-xs text-center text-purple-600 whitespace-nowrap'
                    key={index + '-index'}
                  >
                    {String(index + 1)}
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 overflow-auto font-mono text-xs text-purple-600 whitespace-nowrap'
                    key={index + '-iso6393'}
                  >
                    {String(iso6393)}
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 overflow-auto font-mono text-xs text-purple-600 whitespace-pre '
                    key={index + '-iso6392'}
                  >
                    {String(iso6392)}
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 overflow-auto font-mono text-xs text-purple-600 whitespace-nowrap'
                    key={index + '-iso6391'}
                  >
                    {String(iso6391)}
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 overflow-auto font-mono text-xs text-blue-600 whitespace-pre max-w-prose'
                    key={index + '-name'}
                  >
                    {String(name.international)}
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 overflow-auto font-mono text-xs text-blue-600 whitespace-nowrap'
                    key={index + '-scope'}
                  >
                    {String(scope)}
                  </td>
                  <td
                    translate='no'
                    className='py-2 pr-2 overflow-auto font-mono text-xs text-blue-600 whitespace-nowrap '
                    key={
                      String(name.international) + '-type'
                    }
                  >
                    {String(type)}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Index
