import {ContactCard, CardLogo, CardText, BoxLogo} from './'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Card = (props) => {
    return (
        <ContactCard>            
            <CardLogo className="d-flex justify-content-center align-items-center">
                <BoxLogo className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon className="w-100 h-100" style={{ color:"black"}}icon={props.icon}/>
                    {props.altIcon}
                </BoxLogo>
            </CardLogo>            
            <CardText className="text-center w-100">{props.text}</CardText>
        </ContactCard>
    )
}

export default Card
