import React from 'react'
import Head from 'next/head'
import { superlanguage } from '../../src/language/all'

console.log(superlanguage)

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
            <tr>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='pb-2 pr-2 border-b border-gray-200'>
                  ISO 639-3
                </div>
              </th>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='pb-2 pr-2 border-b border-gray-200'>
                  ISO 639-2/639-5
                </div>
              </th>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='pb-2 pr-2 border-b border-gray-200'>
                  ISO 639-1
                </div>
              </th>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='pb-2 pr-2 border-b border-gray-200'>
                  Language Name
                </div>
              </th>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='pb-2 pr-2 border-b border-gray-200'>
                  Scope
                </div>
              </th>
              <th className='sticky top-0 z-20 p-0 text-sm font-semibold text-gray-600 bg-white'>
                <div className='pb-2 pl-2 border-b border-gray-200'>
                  Type
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {superlanguage.map((lang) => {
              const {
                iso6391 = 'n/a',
                iso6392 = 'n/a',
                iso6393 = 'n/a',
                type = 'n/a',
                name = 'n/a',
                scope = 'n/a',
              } = lang ?? {}
              return (
                <tr key={String(name)}>
                  <td
                    translate='no'
                    className='w-1/6 py-2 pr-2 overflow-auto font-mono text-xs text-purple-600 whitespace-nowrap'
                  >
                    {String(iso6393)}
                  </td>
                  <td
                    translate='no'
                    className='w-1/6 py-2 pr-2 overflow-auto font-mono text-xs text-purple-600 whitespace-nowrap'
                  >
                    {String(iso6392)}
                  </td>
                  <td
                    translate='no'
                    className='w-1/6 py-2 pr-2 overflow-auto font-mono text-xs text-purple-600 whitespace-nowrap'
                  >
                    {String(iso6391)}
                  </td>
                  <td
                    translate='no'
                    className='w-1/6 py-2 pr-2 overflow-auto font-mono text-xs text-blue-600 whitespace-nowrap'
                  >
                    {String(name)}
                  </td>
                  <td
                    translate='no'
                    className='w-1/6 py-2 pr-2 overflow-auto font-mono text-xs text-blue-600 whitespace-nowrap'
                  >
                    {String(scope)}
                  </td>
                  <td
                    translate='no'
                    className='w-1/6 py-2 pl-2 overflow-auto font-mono text-xs text-blue-600 whitespace-pre'
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
