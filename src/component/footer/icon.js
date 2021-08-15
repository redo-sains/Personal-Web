import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Hover } from './IconHover.Style'


const Icon = (props) =>{
    const icon = ["fab",props.icon];
    return(
        <li className="mx-3" >
            <Hover color={props.HoverColor}>
                <FontAwesomeIcon icon={icon}/>
            </Hover>
        </li>
    )
}

export default Icon;