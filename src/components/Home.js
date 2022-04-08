import * as React from "react"
import '../styles/common.css'
import FindData from '../assets/finddata.jpg'


const Home = (props) => (
    <div className="SvgContainer">
        <div className="imagContiner">
            <img src={FindData} alt={FindData} />
        </div>
    </div>
)

export default Home
