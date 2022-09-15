import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import fakeData from '../fakeData/datafake.json'
import kisspng from '../img/kiss.png'

function HomeDetail() {

    const params = useParams()
    const [data, setData] = useState()

    function getAcc() {
        const show = fakeData.filter((item) => {
            return item.id == params.id
        })
        setData(show[0])
    }

    useEffect(() => {
        getAcc()
    }, [])

    return (
        <div style={{backgroundColor: "whitesmoke", margin: "0 350px"}}>
            <div style={{backgroundColor: "grey", height: "100%", width: "100%", display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img src={data?.image} alt="img" style={{ objectFit: "cover", height: "200px", width: "200px", borderRadius: "50%", border: "10px solid magenta"}} />
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h2 style={{color: "white" }}>@{data?.username}</h2>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div style={{display: "flex", alignItems: "center", flexDirection: "column", marginRight: "70px"}}>
                        <h4>{data?.follower}</h4>
                        <h4>Followers</h4>
                    </div>
                    <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                        <h4>{data?.following}</h4>
                        <h4>Following</h4>
                    </div>
                </div>
            </div>
            <button style={{ alignItems: "center", margin: "50px 100px 150px 300px", padding: "10px" }}>
                <Link to={'/'} style={{textDecoration: "none"}}>
                    <img style={{width: "40px"}} src={kisspng} alt="img" />
                </Link>
            </button>
        </div>
    )
}

export default HomeDetail