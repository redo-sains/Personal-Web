import { AboutBox,AboutTitle,AboutText, AboutContainer, AboutContent } from "./About.Style"


const AboutPages = () =>{
    return(
        <div className="vh-100 bg-primary d-flex justify-content-center align-items-center">
            <AboutBox className="d-flex align-items-center flex-column">
                <AboutContainer>                
                    <AboutTitle className="text-uppercase text-center" style={{fontFamily: 'cursive'}}>About Me</AboutTitle>
                    <AboutContent className="w-100 d-flex">
                        <div style={{width:'40%', border: '1px solid red'}}>

                        </div>
                        <AboutText>
                            My name is Redo, I am 19 years old, I am a front-end-web-development from Palangkaraya, Indonesia, graduated from high school 1 Kuala Pembuang. I'm looking for remote beginner job because I want to get experience working in front-end-web-development, with almost 2 years experience having knowledge about various programming languages ​​like html5, php, javascript, css3, etc having a lot of knowledge about framework and libraries like reactJs with styled-component and React-router, Sass, ​​etc. I don't really care about salary or anything like that because I want to gain experience and I believe I can still improve becoming better programmer.
                        </AboutText>
                    </AboutContent>
                </AboutContainer>
            </AboutBox>
        </div>
    )
}

export default AboutPages;




