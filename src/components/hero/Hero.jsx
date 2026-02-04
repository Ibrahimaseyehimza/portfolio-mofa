import React from 'react'
import Navbar from '../navbar/Navbar'
import hi from '../../assets/hi.png'
import CV from './CV.pdf'
import img from '../../assets/img.png'
import img_himza from '../../assets/Himza.jpg'
import img_mofa from '../../assets/mofa.jpeg'
import { FaGithub, FaLinkedin, FaBehance, FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";


export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
        <div className='md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-orange-600 
        via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255, 165, 0, 0.7)]'
        >
        </div>
        <Navbar /> 
        <section 
        data-aos='fade-up'
        data-aos-delay='250'
        className='text-white body-font z-10'>
            {/* <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'> */}
            <div className='container mx-auto flex gap-6 px-5 py-24 md:flex-row flex-col-reverse items-center'>

                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
                mb-16 md:mb-0 items-center text-center relative'>
                    {/* <img src={hi} data-aos='fade-up' data-aos-delay='400'
                     className='absolute top-[350px] left-44 md:top-[-30px] md:left-[450px] transform
                    -translate-x-1/2 -translate-y-1/2 w-20 h-20'/> */}
                <h1 className='title-font sm:text-4xl text-4xl mb-4 font-bold text-white'>Mofa Designer</h1>
                <p className='mb-8 leading-relaxed'>
                    UI/UX Designer et infographiste polyvalent, spécialisé dans la création d’interfaces
                    intuitives et de visuels percutants. Maîtrise de Photoshop, Illustrator, Figma et
                    InDesign pour allier créativité, ergonomie et sens du détail. Je transforme les
                    idées en expériences visuelles attractives et efficaces
                </p>
                    <div className='flex justify-center'>
                        <a href={CV} download> 
                            <button className='inline-flex text-white bg-orange-500 border-0 py-2 gap-8 px-6 
                            focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                            rounded-full text-lg'>
                                Télecharger CV
                            </button>
                        </a>

                    </div>
                <div className="flex items-center justify-center gap-6 mt-6">
                    {/* Icônes réseaux sociaux */}
                    <div className="flex items-center gap-4">
                        <a
                        href="https://www.tiktok.com/@mouhamed_mofa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center
                        rounded-full border border-orange-400 text-orange-400
                        hover:bg-orange-400 hover:text-black transition"
                        >
                        <FaTiktok size={20} />
                        </a>

                        <a
                        href="https://www.facebook.com/share/19XhQCDmFR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center
                        rounded-full border border-orange-400 text-orange-400
                        hover:bg-orange-400 hover:text-black transition"
                        >
                        <FaFacebookF size={20} />
                        </a>

                        <a
                        href="https://www.linkedin.com/in/mouhamed-fall-3b0a42374"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center
                        rounded-full border border-orange-400 text-orange-400
                        hover:bg-orange-400 hover:text-black transition"
                        >
                        <FaLinkedin size={20} />
                        </a>

                        <a
                        href="https://www.instagram.com/mouhamed_mofa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center
                        rounded-full border border-orange-400 text-orange-400
                        hover:bg-orange-400 hover:text-black transition"
                        >
                        <FaInstagram size={20} />
                        </a>
                    </div>

                </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                   <img src={img_mofa} alt="hero" className='object-cover object-center rounded-full w-80 h-80' />
                </div>
            </div>
        </section>
    </div>
  )
}
