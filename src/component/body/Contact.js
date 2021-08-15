import React from 'react'
import { ContactBox, ContactCardBox, ContactTitle, ContactBg } from './Contact.style';
import ContactCard from './Contact.style/Card'
import {IndeedLogo} from './Contact.style/indeedLogo'

const Contact = () => {
    return (
        <ContactBg className="d-flex align-items-center justify-content-center">
            <ContactBox className="d-flex align-items-around justify justify-content-center">
                <ContactTitle>Contact Me</ContactTitle>
                <ContactCardBox className="d-flex justify-content-around">
                    <ContactCard text="redoxsains@gmail.com" icon={['fas', 'envelope-square']}/>
                    <ContactCard text="+62812345678" icon={['fas', 'phone-square']}/>
                    <ContactCard text="redoxsains@gmail.com" icon={['fab', 'linkedin']}/>
                    <ContactCard text="redoxsains@gmail.com" altIcon={<IndeedLogo/>}></ContactCard>
                </ContactCardBox>
            </ContactBox>
        </ContactBg>
    )
}

export default Contact;
