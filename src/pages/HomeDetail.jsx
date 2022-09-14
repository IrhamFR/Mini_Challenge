import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import fakeData from '../fakeData/datafake.json'

function HomeDetail() {

    const params = useParams()
    const [data, setData] = useState()

    function getAcc() {
        const show = fakeData.filter((item) => {
            return item.id == params.id
        })
        console.log(show)
        setData(show[0])
    }

    useEffect(() => {
        getAcc()
    }, [])

    return (
        <>  <div style={{backgroundColor: "white", margin: "0 350px"}}>
                <div style={{backgroundColor: "grey", height: "100%", width: "100%", display: "flex", flexDirection: "column"}}>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img src={data?.image} style={{ objectFit: "cover", height: "200px", width: "200px", borderRadius: "50%", border: "10px solid magenta"}} />
                    </div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <h2 style={{color: "white" }}>@{data?.username}</h2>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginRight: "70px"}}>
                            <h2>{data?.follower}</h2>
                            <h3>Followers</h3>
                        </div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                            <h2>{data?.following}</h2>
                            <h3>Following</h3>
                        </div>
                    </div>
                </div>
                <button style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px", padding: "20px" }}>
                    <Link to={'/'} style={{textDecoration: "none"}}>
                        Back
                    </Link>
                </button>
            </div>
        </>
    )
}

export default HomeDetail