import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import fakeData from '../fakeData/datafake.json'

function Home() {

    const [data, setData] = useState([])

    function getData() {
        setData(fakeData)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>  
            <div>
                {data?.map((item) => {
                    return (
                    <div>
                        <Card image={item.image} username={item.username} followers={item.follower} id={item.id} />
                    </div>
                    
                    )
                })}
            </div>
        </>
    )
}

function Card(props) {
    return (
        <>
            <Link to={`/account/${props.id}`}>
                <div style={{backgroundColor: "black", height: "100px", display: "flex", margin: "20px 350px"}}>
                    <img src={props.image} style={{objectFit: "cover", height: "100px", width: "100px", borderRadius: "50%"}} />
                    <div sytle={{display: "flex", flexDirection: "column"}}>
                        <h3 style={{color: "white"}}>@{props.username}</h3>
                        <h4 style={{color: "white"}}>Followers : {props.followers}</h4>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Home