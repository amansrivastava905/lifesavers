import React from 'react'
import styled from 'styled-components'
import '../App.css'
import heroImage from '../images/hero-img.jpg';
import bloodBag from '../images/blood-bag.jpg';
import bloodHand from '../images/blood-hand.jpg';
import plateletBag from '../images/platelet-bag.jpg';
import thalMaj from '../images/thal-major.jpg';
import thalMin from '../images/thal-minor.jpg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <HeroSection>
                <HeroText>
                    <HeroHeading>
                        Bring a life back to power..
                    </HeroHeading>
                    <HeroPara>
                        Donate blood and give life to someone in need.
                    </HeroPara>
                </HeroText>
                <HeroImageContainer>
                    <HeroImage src={heroImage} />
                </HeroImageContainer>
            </HeroSection>

            <ImportantLinkCardContainer>
                <LinkCard to='/blood-donation'>
                    <LinkImage src={bloodHand} />
                    <LinkText>
                        <LinkHead>Blood Donation</LinkHead>
                        <LinkPara>Blood Donation gives a proud feeling of touching someone’s life in such a beautiful way.
                        It is an experience that no words can describe.
                         </LinkPara>
                    </LinkText>
                </LinkCard>
                <LinkCard to='/platelet-donation'>
                    <LinkImage src={plateletBag} />
                    <LinkText>
                        <LinkHead>Platelet Donation</LinkHead>
                        <LinkPara>Platelet Donation may be time consuming.
                        But it is easier on the body than blood donation. And absolutely lifesaving.
                         </LinkPara>
                    </LinkText>
                </LinkCard>
                <LinkCard to='/thallasaemia-major'>
                    <LinkImage src={thalMaj} />
                    <LinkText>
                        <LinkHead>Thallasaemia major</LinkHead>
                        <LinkPara>Thalassaemia Major is a serious, 
                        genetic blood disorder which affects more than 100,000 children in India. Know more about it.
                         </LinkPara>
                    </LinkText>
                </LinkCard>
                <LinkCard to='/thallasaemia-minor'>
                    <LinkImage src={thalMin} />
                    <LinkText>
                        <LinkHead>Thallasaemia minor</LinkHead>
                        <LinkPara>You could be a Thalassaemia Minor even if you are healthy.
                         Every youngster must do a test for Thalassaemia Minor.
                         </LinkPara>
                    </LinkText>
                </LinkCard>
            </ImportantLinkCardContainer>
            <NeedContainer>
                <NeedHead> Important Links</NeedHead>
                <NeedLinkContainer>
                    <NeedLink to='/'>Need Blood</NeedLink>
                    <NeedLink to='/'>Need Platelets</NeedLink>
                    <NeedLink to='/'>Organise blood drive</NeedLink>
                    <NeedLink to='/'>Want to donate blood</NeedLink>
                    <NeedLink to='/'>Want to donate platelet</NeedLink>
                    <NeedLink to='/'>Get tested for Thallasaemia minor</NeedLink>
                    <NeedLink to='/'>Organise Thallasaemia minor screening drive</NeedLink>
                
                </NeedLinkContainer>
            </NeedContainer>
        </>
    )
}

export default LandingPage


// Need container components(it contains some imp links on landing page)
const NeedContainer = styled.div`
    background:url(${bloodBag});
    height:100vh;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:left;
    padding:50px 100px;

    @media screen and (max-width:950px)
    {
        padding:50px 50px;
    }

    @media screen and (max-width:500px)
    {
        padding:50px 10px;
        text-align:center;
    }
    
`

const NeedLinkContainer = styled.div`
    display:flex;
    flex-direction:column;
`

const NeedLink = styled(Link)`
    text-decoration:none;
    padding:10px;
    font-size:24px;
    &:hover{
        text-decoration:underline;
        color:maroon;
    }

    @media screen and (max-width:950px)
    {
        font-size:18px;
    }

    @media screen and (max-width:500px)
    {
        text-align:justify;
        color:rgb(70,70,70);
    }
`

const NeedHead = styled.h2`
    font-size:64px;
    color:maroon;
    padding-bottom:50px;

    @media screen and (max-width:950px)
    {
        font-size:56px;
    }
`


// Important Link Card section
const ImportantLinkCardContainer = styled.div`
    padding:20px 50px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    background-color: rgba(255, 173, 173, 0.1);

    @media screen and (max-width:1200px)
    {
        padding:20px 20px;
    }

`

const LinkCard = styled(Link)`
    max-width:250px;
    margin:20px 10px;
    display:flex;
    justify-content:space-evenly;
    flex-direction:column;
    text-decoration:none;
    align-items:center;
`

const LinkImage = styled.img`
    max-width:250px;
    -webkit-box-shadow: 6px 6px 39px -11px rgba(0,0,0,0.58);
    -moz-box-shadow: 6px 6px 39px -11px rgba(0,0,0,0.58);
    box-shadow: 6px 6px 39px -11px rgba(0,0,0,0.58);
    border-radius:10px;
`

const LinkText = styled.div`
    max-width:250px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    text-align:justify;
`

const LinkHead = styled.span`
    font-size:24px;
    color:maroon;
    padding:5px 0px;
`

const LinkPara = styled.p`
    color:rgb(87,87,87);
`




// hero section components
const HeroSection = styled.div`
    margin-top:80px;
    padding:0px 50px;
    display:flex;
    justify-content:center;
    min-height:90vh;

    @media screen and (max-width:680px)
    {
        flex-direction:column-reverse;
        align-items:center;
        padding:0px 10px;
        margin-top:0px;
        min-height:100vh;
    }
`

const HeroText = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    max-width:500px;
    padding:10px;
    @media screen and (max-width:1030px)
    {
        max-width:450px;
    }

    @media screen and (max-width:680px)
    {
        text-align:center;
        padding: 20px 0px 0px 0px;
        max-width:600px;
    }
`

const HeroHeading = styled.h1`
    font-size:64px;
    color:maroon;
    padding-bottom:20px;
    line-height:64px;

    @media screen and (max-width:1030px)
    {
        font-size:48px;
        padding-bottom:10px;
        line-height:48px;
    }

    @media screen and (max-width:350px)
    {
        font-size:36px;
        line-height:36px;
    }
`

const HeroPara = styled.p`
    color:rgb(87,87,87);
    font-size:24px;

    @media screen and (max-width:1030px)
    {
        font-size:18px;
    }
    @media screen and (max-width:350px)
    {
        font-size:16px;
    }
`

const HeroImageContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;

`

const HeroImage = styled.img`
    width:600px;
    -webkit-box-shadow: 6px 6px 39px -11px rgba(0,0,0,0.58);
    -moz-box-shadow: 6px 6px 39px -11px rgba(0,0,0,0.58);
    box-shadow: 6px 6px 39px -11px rgba(0,0,0,0.58);
    border-radius:30px;

    @media screen and (max-width:1030px)
    {
        width:500px;
    }

    @media screen and (max-width:980px)
    {
        width:400px;
    }

    @media screen and (max-width:730px)
    {
        width:350px;
    }

    @media screen and (max-width:390px)
    {
        width:300px;
    }

    @media screen and (max-width:350px)
    {
        width:250px;
    }

`