import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div>
        <Link href="/"
           className="navbar-brand">
            <img src="portafolio.png" alt="Logo" width="40" height="32"></img>
            Home
        </Link>
         <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > 
          <span className="navbar-toggler-icon"></span>
        </button> 
        
 
        </div>
        <div>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ">
           
            <li className="nav-item ">
              <Link href="/github"
                 className="nav-link ">
                  <i className="bi bi-github"></i>
                Github
               
              </Link>
              
            </li>
          </ul>
          <ul className="navbar-nav ">
           
           <li className="nav-item ">
             <Link href="/skills"
                className="nav-link ">
                 <i className="bi bi-github"></i>
               Skills
              
             </Link>
             
           </li>
         </ul>
        </div>
      </div>
      </div>
    </nav>
    
  );
};

export default Navbar;