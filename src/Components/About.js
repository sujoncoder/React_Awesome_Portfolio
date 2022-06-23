import React from 'react'

const About = () => {
  return (
    <section name='about' className='w-full h-screen px-8 bg-[#0a192f] flex flex-col justify-center items-center'>
        <div className='max-w-[1000px] mx-auto grid md:grid-cols-2 md:gap-6 items-center'>

            <div className=''>
                <div className='md:text-right py-4'>
                <h1 className='text-slate-100 border-b-4 border-pink-500 inline text-3xl font-bold'>About</h1>
                </div>

                <div className='md:text-right max-w-[5000px]'>
                <h1 className='text-slate-200 text-3xl font-semibold'>Hi. I'm Sujon, nice to meet you. Please take a look around.</h1>
                </div> <br />
            </div>

            <div className='max-w-[500px]'>
                <p className='text-slate-400 font-medium text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus tempora aliquid temporibus obcaecati amet cum molestiae ipsa provident animi nam deserunt cumque, maxime hic fugit. Voluptate praesentium est autem provident!</p>
            </div>



        </div>

    </section>
  )
}

export default About