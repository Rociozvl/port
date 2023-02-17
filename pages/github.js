import Layout from "../components/Layout";


const Github = ({ user,statusCode }) => {
  if(statusCode){
    return <Error />
  }
    return (
        <Layout>
            <div className="row">
                <div className="col-md-4 offset-md4 mx-auto">
                    <div className="card card-body text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt="" />
                        <a href={user.blog} target="_blank" className="btn btn-outline-secondary my-2">
                           LinkedIn</a>
                            <a href={user.html_url} target="_blank" className="btn btn-outline-secondary">
                                Go to Github
                            </a>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {

    const res = await fetch("https://api.github.com/users/Rociozvl")
    const data = await res.json()

    const statusCode = res.status > 200 ? res.status :false;

    return {
        props: {
            user: data,
            statusCode
        }
    }
}
export default Github;