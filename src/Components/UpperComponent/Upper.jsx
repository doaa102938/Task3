import './Upper.css'
import ProfilImg from "../../assets/avatar-jessica.jpeg"
function Upper() {
    return (
        <div id="Upper">
            <img src={ProfilImg} ></img>
            <p id='UserName'>Jessica Randall </p>
            <p id='Address'>London,United Kingdom</p>
            <p id="Bio">&quot;Front-end developer and avid reader.&quot;</p>
        </div>
    )
}
export default Upper