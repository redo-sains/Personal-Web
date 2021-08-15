import { Title, Text, Home, HomeButton, SpanButton } from './Body.Style'
import {Link} from "react-router-dom";


const Body = () =>{
    return(
        <div>
            <Home className="img">
                <Title className="text-uppercase text-center">my website design</Title>
                <Text className="text-center">Welcome to my website design where this website created with <br/>ReactJs Library, FontAwesomeIcon, and Bootstrap 5.</Text>
                <HomeButton className="text-uppercase text-white" disabled>
                    <SpanButton>
                        <Link className="text-white"to="/skills" style={{textDecoration: "none"}}>My Skill</Link>
                    </SpanButton>
                </HomeButton>
                
            </Home>
        </div>
    )
}

export default Body;