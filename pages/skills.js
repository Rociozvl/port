import { skills } from "../profile"
import Layout from "../components/Layout";

const Skills = ()=> {
   return(
      <Layout>
<div className="row py-4">
<div className="col-md-6 mx-auto">
   <div className="card bg-dark">
      <div className="card-body">
         <h3>Skills</h3>

         {
            skills.map(({ skill, percentage }, i) =>
            (
               <div className="py-1" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                     <div className="progress-bar"
                        role="progressbar"
                        style={{ width: `${percentage}%` }}></div>
                  </div>

               </div>
            ))
         }
      </div>
   </div>
</div>

</div>
</Layout>
)
}

export default Skills;