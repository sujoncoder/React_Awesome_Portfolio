import React from 'react'

const Contact = () => {
  return (
    <section name='contact' className='bg-[#0a192f] w-full flex-col justify-center items-center px-8 h-screen pt-8'>
        <main className='max-w-[500px] mx-auto flex-col justify-center items-center'>
            {/* tittle section */}
            <div className='space-y-2'>
                <h1 className='text-4xl font-bold text-gray-300 border-b-4 border-pink-700 inline'>Contact</h1>

                <p className='text-lg text-gray-300'>// Submit the form below or shoot me an email.</p>
            </div><br />

            {/* tittle section */}
            <div className='flex flex-col space-y-2'>

                <input className='rounded py-1 px-2' type="text" placeholder='Write your name' />

                <input className='rounded py-1 px-2' type="email" placeholder='Write your email' />

                <textarea className='rounded p-2' name="Message" placeholder='Write your message' id="" cols="20" rows="10"></textarea>

                <button className='text-gray-300 font-semibold mt-6 w-40 rounded py-1 bg-slate-800 hover:bg-slate-900 mx-auto border'>Let,s Collaborate</button>
            </div>
        </main>
    </section>
  )
}

export default Contact