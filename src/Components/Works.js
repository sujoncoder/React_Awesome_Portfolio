import React from 'react'
import first from '../asset/project/first.jpg'
import second from '../asset/project/second.jpg'
import third from '../asset/project/third.jpg'
import four from '../asset/project/four.jpg'
import five from '../asset/project/five.jpg'
import six from '../asset/project/six.jpg'
import { BiLinkExternal,BiShow } from 'react-icons/bi';

const Works = () => {
  return (
    <section name='work' className='w-full z-10 h-full md:px-12 px-8 py-10 bg-[#0a192f]'>
        {/* tittle section */}
        <div className='max-w-[800px] mx-auto pb-6 flex-col space-y-2'>
            <h1 className='text-3xl font-bold border-b-4 text-slate-300 border-orange-500 inline'>work</h1>
            <p className='text-gray-200 text-lg'>// Check out some of my recent project.</p>
          </div>

        <main className='max-w-[800px] h-full mx-auto grid sm:grid-cols-1  w-full md:grid-cols-2 lg:grid-cols-3 gap-4'>

          {/* create image section */}
          <div style={{ backgroundImage: `url(${first})` }} className='w-full  h-[160px] bg-cover bg-center rounded'>
          
          {/* create hover section */}
          <div className='opacity-0 duration-300 bg-gradient-to-r from-purple-500 to-pink-500 w-full cursor-pointer h-full rounded flex justify-center items-center space-x-6 hover:opacity-100'>

              <div>
              <BiShow className='bg-slate-200 p-2 rounded hover:bg-yellow-300 text-blue-800 hover:scale-110 duration-300' size={50}/>
              </div>

             <div>
             <BiLinkExternal className='bg-slate-200 p-2 rounded hover:bg-yellow-300 text-blue-800 hover:scale-110 duration-300' size={50}/>
             </div>
          </div>

          </div>
          {/* --------------- */}

          {/* create image section */}
          <div style={{ backgroundImage: `url(${second})` }} className='w-full h-[160px] bg-cover bg-center rounded'>
          
          {/* create hover section */}
          <div className='opacity-0 duration-300 bg-gradient-to-r from-purple-500 to-pink-500 w-full cursor-pointer h-full rounded flex justify-center items-center space-x-6 hover:opacity-100'>

              <div>
              <BiShow className='bg-slate-200 p-2 rounded hover:bg-yellow-300 text-blue-800 hover:scale-110 duration-300' size={50}/>
              </div>

             <div>
             <BiLinkExternal className='bg-slate-200 p-2 rounded hover:bg-yellow-300 text-blue-800 hover:scale-110 duration-300' size={50}/>
             </div>
          </div>

          </div>
          {/* --------------- */}

          {/* create image section */}
          <div style={{ backgroundImage: `url(${third})` }} className='w-full h-[160px] bg-cover bg-center rounded'>
          
          {/* create hover section */}
          <div className='opacity-0 duration-300 bg-gradient-to-r from-purple-500 to-pink-500 w-full cursor-pointer h-full rounded flex justify-center items-center space-x-6 hover:opacity-100'>

              <div>
              <BiShow className='bg-slate-200 p-2 rounded hover:bg-yellow-300 text-blue-800 hover:scale-110 duration-300' size={50}/>
              </div>

             <div>
             <BiLinkExternal className='bg-slate-200 p-2 rounded hover:bg-yellow-300 text-blue-800 hover:scale-110 duration-300' size={50}/>
             </div>
          </div>

          </div>
          {/* --------------- */}

          {/* create image section */}
          <div style={{ backgroundImage: `url(${four})` }} className='w-full h-[160px] bg-cover bg-center rounded'>
          
          {/* create hover section */}
          <div className='opacity-0 duration-300 bg-gradient-to-r from-purple-500 to-pink-500 w-full cursor-pointer h-full rounded flex justify-center items-center space-x-6 hover:opacity-100'>

              <div>
              <BiShow className='bg-slate-200 p-2 rounded hover:bg-yellow-300 text-blue-800 hover:scale-110 duration-300' size={50}/>
              </div>

             <div>
             <BiLinkExternal className='bg-slate-200 p-2 rounded hover:bg-yellow-300 text-blue-800 hover:scale-110 duration-300' size={50}/>
             </div>
          </div>

          </div>
          {/* --------------- */}

          {/* create image section */}
          <div style={{ backgroundImage: `url(${five})` }} className='w-full h-[160px] bg-cover bg-center rounded'>
          
          {/* create hover section */}
          <div className='opacity-0 duration-300 bg-gradient-to-r from-purple-500 to-pink-500 w-full cursor-pointer h-full rounded flex justify-center items-center space-x-6 hover:opacity-100'>

              <div>
              <BiShow className='bg-slate-200 p-2 rounded hover:bg-yellow-300 text-blue-800 hover:scale-110 duration-300' size={50}/>
              </div>

             <div>
             <BiLinkExternal className='bg-slate-200 p-2 rounded hover:bg-yellow-300 text-blue-800 hover:scale-110 duration-300' size={50}/>
             </div>
          </div>

          </div>
          {/* --------------- */}

          {/* create image section */}
          <div style={{ backgroundImage: `url(${six})` }} className='w-full h-[160px] bg-cover bg-center rounded'>
          
          {/* create hover section */}
          <div className='opacity-0 duration-300 bg-gradient-to-r from-purple-500 to-pink-500 w-full cursor-pointer h-full rounded flex justify-center items-center space-x-6 hover:opacity-100'>

              <div>
              <BiShow className='bg-slate-200 p-2 rounded hover:bg-yellow-300 text-blue-800 hover:scale-110 duration-300' size={50}/>
              </div>

             <div>
             <BiLinkExternal className='bg-slate-200 p-2 rounded hover:bg-yellow-300 text-blue-800 hover:scale-110 duration-300' size={50}/>
             </div>
          </div>

          </div>
          {/* --------------- */}
        </main>
    </section>
  )
}

export default Works