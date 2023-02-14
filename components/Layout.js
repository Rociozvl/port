import { useEffect } from "react";
import Navbar from "./NavBar";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
//children = props
const Layout = ({ children }) => {
    
   const router = useRouter();



   useEffect(()=> {
     const handleRouteChange = url => {
     console.log(url)
     NProgress.start()
    }
//registras las rutas 
     router.events.on("routeChangeStart",handleRouteChange)
     //cuando termine de cargar muestra la animacion 
     router.events.on("routeChangeComplete",()=> NProgress.done())
     return()=>{
        //apaga las rutas
        router.events.off("routeChangeStart",handleRouteChange)
     }
   },[])

   return(
    <>
    
    <Navbar />
    <main className="container py-4">
    {children}
    </main>
    <footer className="bg-dark text-light text-center">
        <div className="container p-4">
            <h4>&copy; Celeste Zavala</h4>
        </div>

    </footer>
</>
   )
   }

export default Layout;