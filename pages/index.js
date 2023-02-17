import Link from "next/link";
import Layout from "../components/Layout";
import { projects } from "../profile"



const index = () => (
   <Layout>
      {/**Header card */}
      <header className="row ">
         <div className="col-md-10 mx-auto ">
            <div className="card card-doby bg-dark text-light">
               <div className="row">
                  <div className="col-md-4 ">
                     <img src="CELESTE.png" alt="" className="img-fluid rounded  " />
                  </div>
                  <div className="col-md-8 mx-auto" >
                     <div >
                        <h1>Celeste Zavala</h1>
                        <h3>FullStack Web Developer</h3>
                    
                        
                        <a className=" btn btn-primary" href="./cvTrainee.pdf" download>Download CV</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
      {/**second section */}
  
      <div className=" py-4">
         <h3>Sobre mi_</h3>
         <p className="fst-italic">
            
         Soy estudiante de Programación Fullstack, con una constante motivación por aprender y mejorar mis habilidades en el desarrollo de Aplicaciones Web. Me encanta la idea de poder compartir proyectos, 
         hacer que otras personas me conozcan y espero poder hacerlo a través de mi portafolio.</p>

    </div>
      <div className="row">
         <div className="col-md-12 py-2">
            <div className="card card-body">
               <div className="row">
                  <div className="col-md-12 ">
                     <h3 className="text-center">Portfolio</h3>
                     </div>
                     {
                        projects.map(({name,description,image,url} ,i) => (
                           <div className="col-md-3 p-2 rounded" key={i}>
                              <div className="card h-100 " >
                                 <div className="overflow">
                                 <img src={`/${image}`} alt="" className="card-img-top" ></img>
                                 </div>
                                 <div className="card-body bg-light ">
                                    <h5>{name}</h5>
                                    <p>{description} </p>
                                    <a className=" btn btn-primary" href={url} >Know more</a>
                                    
                                   
                                 </div>
                              </div>
                           </div>
                        ))
                     }
                  
               </div>
               <div className="text-center nt-4">
                  <Link href="https://github.com/Rociozvl?tab=repositories">
                     <h1 className="btn btn-outline-light">More projects</h1>
                  </Link>
               </div>
            </div>
         </div>
      </div>
     


   </Layout>
)

export default index;