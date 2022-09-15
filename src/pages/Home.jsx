import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import Container from "react-bootstrap";
// import { ListGroup, ListGroupItem } from "react-bootstrap";
import fakeData from "../fakeData/datafake.json"

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
            <Link to={`/account/${props.id}`}>
                <div style={{backgroundColor: "black", height: "100px", display: "flex", margin: "20px 350px"}}>
                    <img src={props.image} style={{objectFit: "cover", height: "90px", width: "90px", borderRadius: "50%", margin: "5px"}} />
                    <div sytle={{display: "flex", flexDirection: "column"}}>
                        <h4 style={{color: "white", margin:"20px 0 5px 20px"}}>@{props.username}</h4>
                        <h4 style={{color: "white", margin:"10px 0 10px 20px"}}>Followers : {props.followers}</h4>
                    </div>
                </div>
            </Link>
    )
}

export default Home