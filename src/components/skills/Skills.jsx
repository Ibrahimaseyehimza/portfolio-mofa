import React from 'react'
import javascript from '../../assets/javascript.png'
import html from '../../assets/html.png'
import php from '../../assets/php.png'
import webdesign from '../../assets/web-design.png'
import laravel from '../../assets/laravel.png'
import react from '../../assets/react.png'
import photoshop from '../../assets/Photoshop1.jpg'
import illustrator from '../../assets/illustratror.jpg'
import figma from '../../assets/figma.jpg'
import photographe from '../../assets/photographe.jpg'
import indesign from '../../assets/indesign.jpeg'
import canva from '../../assets/canva.jpeg'


export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
            <div 
            data-aos='fade-up' 
            data-aos-delay='200' 
            className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400'>
                {/* <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white '>Skills</h1> */}
                <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white '>Compétences</h1> <br />
                <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perferendis ut,
                     rerum nulla labore ipsum aliquid magnam maxime esse.
                     Sequi eveniet quos rerum vel itaque sunt dolores expedita delectus iusto!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsam ex facere et, at explicabo 
                     corporis harum officia sint aspernatur, 
                     optio eos commodi ipsa tempora tenetur quae perferendis, iste nisi. */}
                     Adobe Photoshop, 
                     Retouche photo professionnels
                     Création d'affiches publiciaires
                     Design pour réseaux sociaux
                     Création de flyers et posters
                     Logo et identité visuelle
                     Baniéres web
                     Mockup et visuels marketing
                </p>
            </div>
            <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
            <nav className='flex flex-wrap list-none -mb-1'>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={photoshop} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={illustrator} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={figma} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={indesign} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={canva} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                {/* <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={webdesign} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li> */}
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={photographe} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                {/* <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={react} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li> */}
            </nav>
            </div>
        </div>
    </section>
  )
}
