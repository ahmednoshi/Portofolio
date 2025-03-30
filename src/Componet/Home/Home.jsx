import React from 'react'
// import { url } from './../../../node_modules/tailwindcss/src/util/dataTypes';
import App from './../../App';
import img1 from '../../../src/assets/me.jpg'


export default function Home() {
  return (<>




  {/* <div className='grid md:grid-cols-2 w-[100%] pt-20 bg-black '>




  <div className='lg:order-1 !sm:order2 '>
    <div className='mx-auto w-[60%] text-white h-lvh '>
      <h1 className='font-black text-4xl'>Ahmed <span className='text-blue-600'>Noshy.</span></h1>
      <h2 className='font-black'> UI / UX Designer & Web Developer </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, facilis ex quia porro praesentium deserunt odit ab alias vel ullam rerum consequatur incidunt in, id, neque a possimus quae consectetur.</p>

      <div className='text-4xl mt-6 mb-6 flex justify-start items-center gap-5'>
      <a href="https://github.com/ahmednoshi"><i class="fa-brands fa-github"></i></a>
      <a href=""><i class="fa-brands fa-instagram"></i></a>
      <a href=""><i class="fa-brands fa-linkedin"></i></a>
      <a href=""><i class="fa-brands fa-twitter"></i></a>
      </div>

      <div className='flex justify- items-center gap-5 sm:gap-2'>
      <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">  
       DowanLoad CV
        </a>
      </div>

      


    </div>



    </div>
    

    <div className='lg:order-2 !sm:order-1 '>
    <div className='mx-auto w-[60%] pb-40  '>
       <img src={img} alt="" />
    </div>
    </div>




   







  </div> */}



<div className='pt-14'>
  
<div className="min-h-screen flex items-center justify-center p-8 mb-28" id='Home'>
  
  <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
    
    
    <div className="flex flex-col justify-center items-start gap-6 order-1 ">
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Ahmed Noshy
        <span className="text-blue-600">.</span>
      </h1>
      
      <h2 className="text-2xl md:text-3xl text-[#CCCCCC]">
        UI/UX Designer & Web Developer
      </h2>
      
      <p className="text-[#CCCCCC] text-lg">
       I'm Ahmed Mahmoud, a Frontend Developer with expertise in React.js, Next.js, and Tailwind CSS. I have one year of experience building fast, user-friendly web applications.

      </p>


      <div className="flex flex-col justify-center items-center md:items-start gap-6">
      <div className="flex gap-6">
        <a href="https://github.com/ahmednoshi" className="text-2xl text-white  hover:text-blue-600 transition-all duration-200">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" className="text-2xl text-white  hover:text-blue-600 transition-all duration-200">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-2xl text-white  hover:text-blue-600 transition-all duration-200">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-2xl text-white  hover:text-blue-600 transition-all duration-200">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
      
      <a href="public/CV/noshy.pdf" download="cv.pdf" >
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-all duration-200">
        Download CV
      </button>
      </a>
    </div>




    <div className=''>
    <div className='w-[60%] mx-5 order-2  '>
       <img src={img1} alt="ahmed" className='rounded-3xl' />
    </div>
    </div>

    
   
  </div>
</div>
</div>











  {/* <div className='bg-[url("src/assets/3D.jpg")] w-full h-[100vh] bg-cover bg-center bg-no-repeat bg-fixed'></div> */}


  </>

  )
}
