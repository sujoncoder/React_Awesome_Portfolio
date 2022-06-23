import React from 'react'
import { SiExpress } from 'react-icons/si';
import html from '../asset/image/html.png'
import css from '../asset/image/css.png'
import javascript from '../asset/image/javascript.png'
import bootstrap from '../asset/image/bootstrap.png'
import tailwind from '../asset/image/tailwind.png'
import react from '../asset/image/react.png'
import material from '../asset/image/material.png'
import firebase from '../asset/image/firebase.png'
import node from '../asset/image/node.png'
import github from '../asset/image/github.png'
import netlify from '../asset/image/netlify.png'
import heroku from '../asset/image/heroku.png'
import express from '../asset/image/express.png'
import figma from '../asset/image/figma.png'
import redux from '../asset/image/redux.png'
import mongodb from '../asset/image/mongodb.png'

const Skills = () => {
  return (
    <section name='skill' className='bg-[#0a192f] h-full z-10 md:h-screen w-full px-8 flex-col justify-center'>

        <div className='py-8 space-y-2 md:px-20'>
            <h1 className='text-3xl font-bold text-slate-300 border-pink-900 inline border-b-4'>Experience</h1>
            <p className='font-medium text-slate-400'>// These are the technologies and tools I've worked with</p>
        </div>

        {/* container section */}
        <main className='max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <img className='w-20 mx-auto' src={html} alt="" />
                <p className='text-center text-white'>HTML</p>
            </div>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <img className='w-20 mx-auto' src={css} alt="" />
                <p className='text-center text-white'>CSS</p>
            </div>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <img className='w-20 mx-auto pb-4' src={bootstrap} alt="" />
                <p className='text-center text-white'>BOOTSTRAP</p>
            </div>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <img className='w-20 mx-auto pb-1' src={javascript} alt="" />
                <p className='text-center text-white'>JAVASCRIPT</p>
            </div>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <img className='w-20 mx-auto pb-2' src={react} alt="" />
                <p className='text-center text-white'>REACT</p>
            </div>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <img className='w-20 mx-auto' src={redux} alt="" />
                <p className='text-center text-white'>REDUX</p>
            </div>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <img className='w-20 mx-auto pb-7' src={tailwind} alt="" />
                <p className='text-center text-white'>TAILWIND CSS</p>
            </div>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <img className='w-20 mx-auto' src={material} alt="" />
                <p className='text-center text-white'>MATERIAL</p>
            </div>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <img className='w-20 mx-auto animate-spin' src={github} alt="" />
                <p className='text-center text-white'>GITHUB</p>
            </div>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <img className='w-20 mx-auto' src={netlify} alt="" />
                <p className='text-center text-white'>NETLIFY</p>
            </div>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <img className='w-20 mx-auto' src={firebase} alt="" />
                <p className='text-center text-white'>FIREBASE</p>
            </div>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <img className='w-20 mx-auto' src={node} alt="" />
                <p className='text-center text-white'>NODE</p>
            </div>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <SiExpress className='mx-auto text-pink-700 font-bold' size={90}/>
                <p className='text-center text-white'>EXPRESS</p>
            </div>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <img className='w-20 mx-auto' src={mongodb} alt="" />
                <p className='text-center text-white'>MONGODB</p>
            </div>

            <div className='rounded hover:scale-105 py-2 bg-slate-800 duration-300'>
                <img className='w-20 mx-auto' src={figma} alt="" />
                <p className='text-center text-white'>FIGMA</p>
            </div>            
        </main>
    </section>
  )
}

export default Skills