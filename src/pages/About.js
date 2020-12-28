import React from 'react';
import styled from 'styled-components';
const About = () => {
    return (
        <>
            <AboutContainer id='about'>
                <Head>About Us</Head>
                <Container>
                    <Paragraph>
                        It all started when a group of friends sharing a common concern came together and hit upon the idea of a blood donation drive in their residential area.
                        A list of donors was maintained after the drive, and donors were identified and sent to hospitals to meet specific requirements.
                        <br /> <br />
                        Welcome to <Span>Life Savers, Ranchi</Span>, where we believe that :
                        All life in the universe is precious.
                        Everyone should get an opportunity to rise to his/her potential.
                        Everyone has a role to play in making this universe a better place.
                        Nothing is impossible.
                        If the ends are just, and the efforts are earnest, the means will follow.
                    </Paragraph>
                </Container>
            </AboutContainer>

            <JoinContainer id='join'>
                <Head>Join Us</Head>
                <Container>
                    <Paragraph>
                        The major strength of <Span>Life Savers, Ranchi</Span> is the people who work with us in various capacities. They create a healthy working environment, and make it possible for us to execute the various ambitious projects undertaken by us. The varied exposure, skills and experience of the different persons working with us has enabled <Span>Life Savers, Ranchi</Span> to have various views expressed, followed by debates, and ultimately a decision which is accepted by everybody as the best in the circumstances.
                    <br /><br />
                    The people working in the field have established an identity for <Span>Life Savers, Ranchi</Span> as being a warm, receptive, concerned and action-oriented organization.
                    <br /><br />
                        <Span>Life Savers, Ranchi</Span> has on its part added value to every member of the organization by giving them exposure, freedom and guidance from the senior members.
                    <br /><br />
                    Volunteers play a major role in the achievement of our objectives. As a volunteer you can add value to our organization by providing us with your expertise in your area of specialization. On our part we will try and add value to you by giving you the right exposure and the support of our organization.
                    </Paragraph>
                </Container>
            </JoinContainer>

            <SupportContainer id='support'>
                <Head>Support Us</Head>
                <Container>
                    <Paragraph>
                        Any organization wanting to make a difference will have to work out a plan for sustaining itself. Funds will be required for the activities undertaken by the organization, which are of a routine nature as well as those which are for specific projects. These activities get carried out from an office with equipments and fulltime staff, which involve expenses of a fixed nature.
                <br /><br />
                        <Span>Life Savers, Ranchi</Span> like any other organization, will survive only if it has the financial backing to cover its current operations, save for emergencies and plan for expansion. We need to carry our activities to other states in India.
                <br /><br />
                We look forward to your support.
                </Paragraph>
                </Container>
            </SupportContainer>

            <ContactContainer id='contact'>
                <Head>Contact Us</Head>
                <Container>
                    <Paragraph>
                        <Span>Atul Gera - </Span> +91-9835127273 <br />
                        <Span>Vishal H Shah - </Span> +91-9471503579
                    </Paragraph>
                </Container>
            </ContactContainer>
            <Container>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdl1BiJ6qxfZ66bze3n9ezOgGhZBUF--sHaRTCNYQayxDTzfg/viewform?embedded=true" width="100%" height='1000px' frameborder="0" marginheight="0" marginwidth="0"></iframe>
            </Container>
        </>
    )
}

export default About


const AboutContainer = styled.div`
    padding: 80px 50px 20px 50px;
    min-height:70vh;

    @media screen and (max-width:500px)
    {
        padding:80px 20px 20px 20px;
    }
`

const Head = styled.h1`
    text-align:center;
    font-size:64px;
    color:maroon;
`

const Container = styled.div`
    display:flex;
    justify-content:center;
`

const Paragraph = styled.p`
    max-width:600px;
    text-align:justify;
    font-size:18px;
    font-family: 'Open Sans', sans-serif;
`

const Span = styled.span`
    font-weight:600;
`
const ContactContainer = styled.div`
    padding: 80px 50px 20px 50px;

    @media screen and (max-width:500px)
    {
        padding:80px 20px 20px 20px;
    }
`

const JoinContainer = styled.div`
    padding: 80px 50px 20px 50px;

    @media screen and (max-width:500px)
    {
        padding:80px 20px 20px 20px;
    }
`

const SupportContainer = styled.div`
    padding: 80px 50px 20px 50px;

    @media screen and (max-width:500px)
    {
        padding:80px 20px 20px 20px;
    }
`
