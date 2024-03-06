import styled from "styled-components";

const Login=()=>{
    return (
        <>
            <Container>
                <Nav>
                    <a href="/">
                        <img src="../images/login-logo.svg" alt="" />
                    </a>
                    <div>
                    <Join href="#join">
                        Join Now
                    </Join>
                    <SignIn>
                        Sign In
                    </SignIn>
                    </div>
                </Nav>
                <Section>
                    <LoginSection>
                        <WelcomeMsg>
                            Welcome to your professional community
                        </WelcomeMsg>
                        <GoogleLogin>
                            <img src="/images/google.png" alt="" />
                            <p>Continue with Google</p>
                        </GoogleLogin>
                    </LoginSection>
                    <HeroImage>
                        <img src="/images/login-hero.svg" alt="" />
                    </HeroImage>
                </Section>

            </Container>

        </>
    );
}

const Container=styled.div`
   padding: 0;
   /* background-color: #ab3434; */
`;

const Nav=styled.nav`
    margin: auto;
   max-width: 1516px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: nowrap;
   padding: 12px 16px;
   position: relative;
   &>a {
    width: 120px;
    height: 34px;
    @media(max-width:768px){
        padding: 0 5px;
    }
   }
`;


const Join =styled.a`
    text-decoration: none;
    /* height: min-content; */
    font-size:16px;
    padding: 12px 16px;
    color: rgba(0,0,0,0.6);
    /* background-color: bisque; */
    line-height: 2;
    text-align: center;
    margin-right: 12px;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        border-radius: 24px;
        text-decoration: none;
    }
`

const SignIn=styled.a`
    color:#0a66c2;
    box-shadow: inset 0 0 0 1px #0a66c2;
    padding: 15px 24px;
    border-radius: 24px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    &:hover{
        background-color: #70b5f926;
    }
`

const Section=styled.div`
    margin-top: 70px;
    /* background-color: #67202c; */
    padding:20px 0 0 0;
    height: 60vh;
    display: flex;
    justify-content: space-between;
    align-items: start;
    @media(max-width:768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`
const LoginSection=styled.div`
    /* background-color: blanchedalmond; */
    height: 45vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    text-align: center;
    @media(max-width:768px){
        width: 100%;
        justify-content: center;
        gap: 60px;
    }
`
const WelcomeMsg=styled.p`
    font-size: 3.5rem;
    color: #b24020;
    @media(max-width:768px){
        font-size: 24px;
        text-align: center;
    }
`
const GoogleLogin=styled.div`
    height: 40px;
    width: 300px;
    border: 1px solid grey;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:60px;
    cursor: pointer;
    @media(max-width:768px){
        margin-top: 0;
    }

    img{
        height: 25px;
        width: 25px;
        margin: 2px;
        
    }

`
const HeroImage=styled.div`
    img{
        height: 650px;
        width: 650px;
        margin-right: 50px;
        @media(max-width:768px){
            height: 250px;
            width: 250px;
            margin-right: 0;
            margin-top: 30px;
    }
    }
`
export default Login;