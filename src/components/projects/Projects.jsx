// import React from 'react'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import image from '../../assets/image.png'
// import image2 from '../../assets/image2.png'
// import image3 from '../../assets/image3.png'
// import image4 from '../../assets/image4.png'

// export default function Projects() {
//     const listProjects = [
//         {id:1, image:image, title:'Project 1', description:'Photo description for project'},
//         {id:2, image:image2, title:'Project 2', description:'Photo description for project'},
//         {id:3, image:image3, title:'Project 3', description:'Photo description for project'},
//         {id:4, image:image4, title:'Project 4', description:'Photo description for project'},
//     ];
//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow:3,
//         slidesToScroll: 1,
//         arrows: true,
//         responsive: [
//             {
//                 breakpoint: 780,
//                 settings:{
//                     slidesToShow: 1,
//                 }
//             }
//         ]
//     };
//   return (
//     <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
//         <div className='container px-5 py-24 mx-auto'>
//             <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
//             <Slider {...settings}>
//                 {
//                     listProjects.map((project)=>{
//                         return(
//                         <div key={project.id} className='p-4'>
//                             <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
//                                 <img src={project.image} alt={project.title} className='w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center' />
//                                 <div className='p-6'>
//                                     <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{project.title}</h2>
//                                     <p className='leading-relaxed mb-3'>{project.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                         )
                       
//                     })
//                 }
//             </Slider>
//         </div>
//     </section>
//   )
// }












import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// import image from '../../assets/image.png'
// import image2 from '../../assets/image2.png'
// import image3 from '../../assets/image3.png'
// import image4 from '../../assets/image4.png'

// Img Affiche infos
import image from '../../assets/img-mofa/Affiche_infos/affiche_bus.jpeg'
import image2 from '../../assets/img-mofa/Affiche_infos/affiche miss.jpeg'
import image3 from '../../assets/img-mofa/Affiche_infos/affiche_ucade.jpeg'
import image4 from '../../assets/img-mofa/Affiche_infos/affichejoueur.jpeg'
import image5 from '../../assets/img-mofa/Affiche_infos/project1.jpeg'
import image6 from '../../assets/img-mofa/Affiche_infos/project6.jpeg'
import image7 from '../../assets/img-mofa/Affiche_infos/project8.jpeg'
import image8 from '../../assets/img-mofa/Affiche_infos/project9.jpeg'
import image9 from '../../assets/img-mofa/Affiche_infos/project10.jpeg'
import image10 from '../../assets/img-mofa/Affiche_infos/project11.jpeg'
import image11 from '../../assets/img-mofa/Affiche_infos/project13.jpeg'
import image12 from '../../assets/img-mofa/Affiche_infos/project15.jpeg'
import image13 from '../../assets/img-mofa/Affiche_infos/project17.jpeg'
import image14 from '../../assets/img-mofa/Affiche_infos/project19.jpeg'

// Img CV Design
import image15 from '../../assets/img-mofa/CV/cv1.jpeg'
import image16 from '../../assets/img-mofa/CV/cv2.jpeg'
import image17 from '../../assets/img-mofa/CV/cv3.jpeg'

// Img flyers
import image18 from '../../assets/img-mofa/Flyers/affiche_scholle.jpeg'
import image19 from '../../assets/img-mofa/Flyers/project2.jpeg'
import image20 from '../../assets/img-mofa/Flyers/project3.jpeg'
import image21 from '../../assets/img-mofa/Flyers/project4.jpeg'
import image22 from '../../assets/img-mofa/Flyers/project5.jpeg'
import image23 from '../../assets/img-mofa/Flyers/project12.jpeg'
import image24 from '../../assets/img-mofa/Flyers/project16.jpeg'
import image25 from '../../assets/img-mofa/Flyers/project18.jpeg'

// Img Logo
import image26 from '../../assets/img-mofa/Logo/affiche_riz.jpeg'
import image27 from '../../assets/img-mofa/Logo/logo_1.jpeg'
import image28 from '../../assets/img-mofa/Logo/logo_2.jpeg'
import image29 from '../../assets/img-mofa/Logo/logo_3.jpeg'
import image30 from '../../assets/img-mofa/Logo/logo_4.jpeg'
import image31 from '../../assets/img-mofa/Logo/Logo.jpeg'
import image32 from '../../assets/img-mofa/Logo/logo5.jpeg'
import image33 from '../../assets/img-mofa/Logo/Logo6.jpeg'
import image34 from '../../assets/img-mofa/Logo/logo7.jpeg'
import image35 from '../../assets/img-mofa/Logo/asri.jpeg'
import image36 from '../../assets/img-mofa/Logo/logo9.jpeg'
import image37 from '../../assets/img-mofa/Logo/logo10.jpeg'
import image38 from '../../assets/img-mofa/Logo/logo11.jpeg'
import image39 from '../../assets/img-mofa/Logo/logo12.jpeg'
import image40 from '../../assets/img-mofa/Logo/logo13.jpeg'
import image41 from '../../assets/img-mofa/Logo/logofc.jpeg'
import image42 from '../../assets/img-mofa/Logo/mokup.jpeg'
import image43 from '../../assets/img-mofa/Logo/mokuplogo.jpeg'
import image44 from '../../assets/img-mofa/Logo/mokuplogo13.jpeg'
import image45 from '../../assets/img-mofa/Logo/mokuplogo13-2.jpeg'
import image46 from '../../assets/img-mofa/Logo/mokuplogo13-3.jpeg'




export default function Projects() {
  // 🔹 état du filtre
  const [activeCategory, setActiveCategory] = useState('all')

  // 🔹 liste des projets
  const listProjects = [

    // Catégorie Affiche infos
    {
      id: 1,
      image: image,
      title: 'Affiche Caravane Bus',
      description: 'Affiche Caravane Tabaski Thiès Sedhiou',
      category: 'info',
    },
    {
      id: 2,
      image: image2,
      title: 'Affiche Miss EIT',
      description: 'Affiche pour soutenir notre candidate qui représente EIT',
      category: 'info',
    },
    {
      id: 3,
      image: image3,
      title: 'Affiche UCADE',
      description: 'Affiche pour  les étudiants de l\'UCADE qui manifestent leur droit',
      category: 'info',
    },
    {
      id: 4,
      image: image4,
      title: 'Affiche joueur de foot',
      description: 'Affiche d\'un joueur de foot qui représente notre ville',
      category: 'info',
    },
    {
      id: 5,
      image: image5,
      title: 'Flyer Événement',
      description: 'Affiche événementielle pour gamou 2025 de Ronkh',
      category: 'info',
    },
    {
      id: 6,
      image: image6,
      title: 'Affiche Mariage',
      description: 'Affiche du mariage de Mr et Mme Biteye',
      category: 'info',
    },
    {
      id: 7,
      image: image7,
      title: 'Affiche de match',
      description: 'Affiche de match de foot de l\'AS Mboundome contre l\'AS Fass',
      category: 'info',
    },
    {
      id: 8,
      image: image8,
      title: 'matche de poule',
      description: 'Affiche de match de poule du Zone 18',
      category: 'info',
    },
    {
      id: 9,
      image: image9,
      title: 'Octobre Rose',
      description: 'Affiche de sensibilisation pour Octobre Rose avec EIT',
      category: 'info',
    },
    {
      id: 10,
      image: image10,
      title: 'Affiche de remerciement',
      description: 'Affiche de remerciement pour notre coach sportif',
      category: 'info',
    },
    {
      id: 11,
      image: image11,
      title: 'Matche de foot',
      description: 'Affiche du match de foot de l\'AS MANKO contre l\'AS YOON WI',
      category: 'info',
    },
    {
      id: 12,
      image: image12,
      title: 'Affiche Mariage',
      description: 'Affiche du mariage de Mr et Mme NDAW',
      category: 'info',
    },
    {
      id: 13,
      image: image13,
      title: 'Affiche Candidature',
      description: 'Affiche de candidature pour un poste administratif',
      category: 'info',
    },
    {
      id: 14,
      image: image14,
      title: 'Ramadan Kareem',
      description: 'Affiche de voeux pour le Ramadan avec EIT',
      category: 'info',
    },

    // Catégorie CV Design
    {
      id: 15,
      image: image15,
      title: 'CV Mofa Designer',
      description: 'CV moderne et créatif pour Mofa Designer',
      category: 'cv',
    },
    {
      id: 16,
      image: image16,
      title: 'Affiche de poste',
      description: 'Affiche de poste pour representant de Président',
      category: 'cv',
    },
    {
      id: 17,
      image: image17,
      title: 'Cv Ablaye Niang',
      description: 'Cv moderne et créatif pour Ablaye Niang',
      category: 'cv',
    },

    // Catégorie Flyers
    {
      id: 18,
      image: image18,
      title: 'Flyer 2AGP',
      description: 'Affiche de transport de la 2AGP de DAKAR à CASABLANCA',
      category: 'flyer',
    },
    {
      id: 19,
      image: image19,
      title: 'Flyer de Formation',
      description: 'Flyer de formation en Namsou Traiding en ligne et présentielle',
      category: 'flyer',
    },
    {
      id: 20,
      image: image20,
      title: 'Service de NAMSOU',
      description: 'Flyer de service de Namsou Traiding',
      category: 'flyer',
    },
    {
      id: 21,
      image: image21,
      title: 'NAMSOU Link',
      description: '1er édition de NAMSOU Link avec Business English Coatching (BEC)',
      category: 'flyer',
    },
    {
      id: 22,
      image: image22,
      title: 'NAMSOU Link',
      description: 'Concours de national de pétrole et gaz à tous les étudiants',
      category: 'flyer',
    },
    {
      id: 23,
      image: image23,
      title: 'Collecte de dons',
      description: 'Flyer pour la collecte de dons pour les daaras',
      category: 'flyer',
    },
    {
      id: 24,
      image: image24,
      title: 'Seminaire d\'orientation',
      description: 'Flyer  séminaire d\'orientation des nouveaux bacheliers',
      category: 'flyer',
    },
    {
      id: 25,
      image: image25,
      title: 'Jus Keur Baby Maodo',
      description: 'Flyer publicitaire pour le jus Keur Baby Maodo',
      category: 'flyer',
    },

    // Catégorie Logos
    {
      id: 26,
      image: image26,
      title: 'Mbodji Agricole',
      description: 'Logo pour une entreprise agricole Mbodji Agri Com Ronkh',
      category: 'logo',
    },
    {
      id: 27,
      image: image27,
      title: 'Fallou shoes',
      description: 'Logo pour une marque de chaussures Fallou shoes',
      category: 'logo',
    },
    {
      id: 28,
      image: image28,
      title: 'Commerce Immobilier',
      description: 'Logo pour une entreprise immobilière',
      category: 'logo',
    },
    {
      id: 29,
      image: image29,
      title: 'Teranga Malick',
      description: 'Logo pour une entreprise de services Teranga Malick',
      category: 'logo',
    },
    {
      id: 30,
      image: image30,
      title: 'Dahira Ansarudine',
      description: 'Logo pour le Dahira de Dahira Ansarudine de Ronkh',
      category: 'logo',
    },
    {
      id: 31,
      image: image31,
      title: 'SEN-PNA',
      description: 'SEN-PNA Pharmacie nationale d\'approvisionnement',
      category: 'logo',
    },
    {
      id: 32,
      image: image32,
      title: 'BD SHOOT',
      description: 'Logo pour une entreprise photographe BD SHOOT',
      category: 'logo',
    },
    
    {
      id: 33,
      image: image33,
      title: 'DWM',
      description: 'Logo pour Développement Web et Mobile DWM',
      category: 'logo',
    },
    {
      id: 34,
      image: image34,
      title: 'Linguére Shoop',
      description: 'Logo pour une entreprise de services Teranga Malick',
      category: 'logo',
    },
    {
      id: 35,
      image: image35,
      title: 'ASRI',
      description: 'Logo pour Admini',
      category: 'logo pour administration Système et Réseau Informatique',
    },
    {
      id: 36,
      image: image36,
      title: 'EIT',
      description: 'Electronique Informatique de Télécommunication',
      category: 'logo',
    },
    {
      id: 37,
      image: image37,
      title: 'Shediou Kane',
      description: 'Logo pour pour SK TV de Sedhiou Kane',
      category: 'logo',
    },
    {
      id: 38,
      image: image38,
      title: 'NLBL',
      description: 'Logo Pour une entreprise de Nefas Loisirs Beg leen',
      category: 'logo',
    },
    {
      id: 39,
      image: image39,
      title: 'ECOSYS IT',
      description: 'Logo pour une entreprise de services ECOSYS IT',
      category: 'logo',
    },
    {
      id: 40,
      image: image40,
      title: 'Namsou Group',
      description: 'Logo pour une entreprise de services Namsou Group SUARL',
      category: 'logo',
    },
    {
      id: 41,
      image: image41,
      title: 'Darou Salam FC',
      description: 'Logo pour un club de football Darou Salam FC',
      category: 'logo',
    },
    {
      id: 42,
      image: image42,
      title: 'Mockup Asri',
      description: 'Mockup  pour Administration Système et Réseau Informatique',
      category: 'logo',
    },
    {
      id: 43,
      image: image43,
      title: 'Mockup SEN-PNA',
      description: 'Mockup pour la Pharmacie nationale d\'approvisionnement ',
      category: 'logo',
    },
    {
      id: 44,
      image: image44,
      title: 'Namsou Group',
      description: 'Mockup pour Namosu Group SUARL',
      category: 'logo',
    },
    {
      id: 45,
      image: image45,
      title: 'Namsou Group',
      description: 'Logo pour une entreprise de services Namsou Group SUARL',
      category: 'logo',
    },
    {
      id: 46,
      image: image46,
      title: 'Namsou Group',
      description: 'Logo pour une entreprise de services Namsou Group SUARL',
      category: 'logo',
    },
    
    
  ]

  // 🔹 filtrage des projets
  const filteredProjects =
    activeCategory === 'all'
      ? listProjects
      : listProjects.filter(
          project => project.category === activeCategory
        )

  // 🔹 settings du slider
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden flex flex-col text-white body-font"
    >
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Mes Projects
        </h2>

        {/* 🔹 BOUTONS DE FILTRE */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full border transition ${
              activeCategory === 'all'
                ? 'bg-orange-500 text-black'
                : 'border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black'
            }`}
          >
            Tous
          </button>

          <button
            onClick={() => setActiveCategory('flyer')}
            className={`px-5 py-2 rounded-full border transition ${
              activeCategory === 'flyer'
                ? 'bg-orange-500 text-black'
                : 'border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black'
            }`}
          >
            Flyers
          </button>

          <button
            onClick={() => setActiveCategory('logo')}
            className={`px-5 py-2 rounded-full border transition ${
              activeCategory === 'logo'
                ? 'bg-orange-500 text-black'
                : 'border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black'
            }`}
          >
            Logos
          </button>

          <button
            onClick={() => setActiveCategory('cv')}
            className={`px-5 py-2 rounded-full border transition ${
              activeCategory === 'cv'
                ? 'bg-orange-500 text-black'
                : 'border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black'
            }`}
          >
            CV Design
          </button>

          <button
            onClick={() => setActiveCategory('info')}
            className={`px-5 py-2 rounded-full border transition ${
              activeCategory === 'info'
                ? 'bg-orange-500 text-black'
                : 'border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black'
            }`}
          >
            Affiches Info
          </button>
        </div>

        {/* 🔹 SLIDER */}
        {/* <Slider {...settings}>
          {filteredProjects.map(project => (
            <div key={project.id} className="p-4">
              <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider> */}
        <Slider key={activeCategory} {...settings}>
            {filteredProjects.map(project => (
                <div key={project.id} className="p-4">
                <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] rounded-lg overflow-hidden">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                    </h3>
                    <p className="text-gray-300">
                        {project.description}
                    </p>
                    </div>
                </div>
                </div>
            ))}
        </Slider>
      </div>
    </section>
  )
}
