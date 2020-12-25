import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <FooterSection>
                <FooterLinksContainer>
                    <FooterLink to='/'>Home</FooterLink>
                    <FooterLink to='/blood-donation'>Blood donation</FooterLink>
                    <FooterLink to='/platelet-donation'>Platelet donation</FooterLink>
                    <FooterLink to='/thallasaemia-major'>Thallasaemia major</FooterLink>
                    <FooterLink to='/thallasaemia-minor'>Thallasaemia minor</FooterLink>
                    <FooterLink to='/about'>About us</FooterLink>
                    <FooterLink to='/support'>Support us</FooterLink>
                    <FooterLink to='/join'>Join us</FooterLink>
                    <FooterLink to='/contact'>Contact us</FooterLink>
                </FooterLinksContainer>
                <SocialLinkContainer>
                    <DevLink href="#"><SocialIcon className='fab fa-facebook' /></DevLink>
                    <DevLink href="#"><SocialIcon className='fab fa-twitter' /></DevLink>
                    <DevLink href="#"><SocialIcon className='fab fa-instagram' /></DevLink>
                </SocialLinkContainer>
                <FooterText>
                    Life Savers, Ranchi | ©2021 <br/>
                    Website developed by <DevLink href='https://amansrivastava905.github.io/'>Aman Srivastava</DevLink>
                </FooterText>
            </FooterSection>
        </>
    )
}

export default Footer;

const FooterText = styled.div`
    padding:20px 0px 50px 0px;
    text-align:center;
    color:rgb(87,87,87);
`
const SocialIcon = styled.i`
    font-size:24px;
    color:maroon;
    padding:5px;
`
const DevLink = styled.a`
    text-decoration:none;
`

const FooterSection = styled.div`
    padding:50px 50px 0px 50px;
    background-color: rgba(255, 173, 173, 0.1);
`

const FooterLinksContainer = styled.div`
    display:grid;
    justify-content:center;
    grid-template-columns:1fr 1fr 1fr;

    @media screen and (max-width:600px)
    {
        grid-template-columns:1fr 1fr;
        padding:50px 20px;
    }
    
    @media screen and (max-width:500px)
    {
        grid-template-columns:1fr;
    }

    
`

const FooterLink = styled(Link)`
    text-decoration:none;
    padding:5px;
    color:maroon;
    text-align:center;
`

const SocialLinkContainer = styled.div`
    display:flex;
    justify-content:center;
    padding-top:50px;
`
