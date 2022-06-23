import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Typed from 'react-typed';


const Home = () => {
  return (
    <section name='home' className='bg-[#0a192f] w-full h-screen'>

      {/* Container */}
      <div className='max-w-[1000px] h-full mx-auto md:px-16 px-8 flex flex-col justify-center'>
        <h3 className='text-pink-400 text-xl'>Hi, my name is</h3>

        <h1 className='font-semibold md:text-5xl text-slate-100 text-4xl'>Sujon Sheikh</h1>

        
        <Typed
              className='font-semibold text-slate-300 md:text-4xl text-3xl'
                strings={['I,m a Frontend Developer']}
                    typeSpeed={60}
                    backSpeed={50}
                    // attr="placeholder"
                    loop >
                    {/* <input type="text"/> */}
                </Typed>

        <p className='text-slate-400 max-w-[600px] py-4'>
        Hello I'm Sujon Sheikh. A passionate web developer. I develop web applications. My core skill is based on javascript, and I love to do most of things using javascript. I love to learning new technology and explore more.
        </p>

        <div className='flex items-center space-x-2 text-white w-32  pl-3 bg-blue-800 rounded py-2 group '>
          <button className=''>View Work</button>
          <BsArrowRight className='group-hover:rotate-90 ease-in-out duration-300 animate-pulse' size={20}/>
        </div>
        
      </div>

    </section>
  )
}

export default Home