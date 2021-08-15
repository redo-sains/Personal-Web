import {NavButton} from './headerStyle/ButtonStyle'

const  Nav_button = (props) =>{
    return(
        <li className="list-unstyled d-flex justify-content-center align-items-center h-100 w-100">
            <NavButton className="text-capitalize m-0 d-flex align-items-center" to={props.link} onClick={props.funct}>
                {props.value}
           </NavButton>            
        </li>
    )
}

Nav_button.defaultProps = {
    value: '0'
}

export default Nav_button;