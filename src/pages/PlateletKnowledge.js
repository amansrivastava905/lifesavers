import React from 'react'
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
const BloodKnowledge = () => {
    return (
        <>
            <MainContainer id='landing'>
                <HeadingContainer>
                    <Heading>Platelet Donation</Heading>
                </HeadingContainer>
                <NavigationContainer>
                    <ButtonElement to='/platelet-donation#platelet-facts'>Platelets Facts</ButtonElement>
                    <ButtonElement to='/platelet-donation#random-donor-platelet'>Random Donor Platelet</ButtonElement>
                    <ButtonElement to='/platelet-donation#single-donor-platelet'>Single Donor Platelet</ButtonElement>
                    <ButtonElement to='/platelet-donation#need-platelet'>Need Platelets</ButtonElement>
                </NavigationContainer>
                <ContentContainer>
                    <Paragraph>
                        The blood that is collected during a routine blood donation drive is called 'Whole Blood'.  Ideally after collection ‘whole blood’ should be centrifuged and split into its components.  By doing so one is able to ensure that a single unit of ‘whole blood’ can benefit many persons.
                        <br /><br />
                        Platelets, the component responsible for clotting of blood, have a life of only 5 days after collection.  Therefore, more intensive planning is required to ensure that Platelets are made available to those in need
                        <br /><br />
                        The layperson is not aware that Platelets can be made available in the form of Random Donor Platelets (RDPs) or Single Donor Platelets. The Platelets that are normally available with blood banks are in the form of Random Donor Platelets. These are obtained after separation of components from blood that is collected in routine blood donation drives.
                    </Paragraph>
                    <ContentContainer>

                        <Heading id='platelet-facts'>Platelets Facts</Heading>
                        <Paragraph>
                            Blood is made up of the following components:
                            Red Blood Cells,
                            White Blood Cells,
                            Platelets,
                            Plasma, <br /> <br />
                            Platelets play the important role of formation of a clot whenever there is a rupture of a blood vessel. The clot seals the blood vessel and prevents any further loss of life-saving blood.
                        </Paragraph>
                        <Subheading>Who Require Platelets</Subheading>
                        <Paragraph>
                            The normal Platelet Count in a human being is 1,50,000 to 4,00,000 per cubic millimeter. When the Platelet Count in the blood goes down drastically, there will be a tendency to bleed. In such an event, a person may require transfusion of Platelets.
                            <br /><br />
                            Platelet Counts can go down in the case of persons:
                            <br /><br />
                            <Span>1. </Span>who have undergone bone marrow transplant.<br />
                            <Span>2. </Span>who have undergone organ transplants.<br />
                            <Span>3. </Span>who have undergone chemotherapy.<br />
                            <Span>4. </Span>who have undergone heart surgeries.<br />
                            <Span>5. </Span>who are suffering from malaria, dengue, leptospirosis.<br />
                            <Span>6. </Span>who are suffering from bleeding disorders.<br />
                        </Paragraph>
                        <Subheading>How are platelets obtained</Subheading>
                        <Paragraph>
                            Platelets are obtained by two methods:
                            <br /><br />
                            From Whole Blood that is collected during blood donation
                            When a person donates blood, the blood that is collected is called ‘Whole Blood’. This blood is taken to the Blood Bank and separated into its components. One of the components that is obtained is Platelets.
                            By collecting only Platelets by ‘Aphaeresis'.
                            <br /> <br />
                            By collecting only Platelets from a person through a process called ‘Apheresis’. The remaining components are sent back to the donor’s body.
                        </Paragraph>
                        <Heading id='random-donor-platelet'>Random Donor Platelet</Heading>
                        <Paragraph>
                            The quantity of Platelets that is obtained from Whole Blood is very little. This in most cases is not enough to meet the requirement of one patient. It becomes necessary to collect blood from many donors and consolidate the Platelets obtained from each donor. Therefore, Platelets obtained from Whole Blood in routine blood donations are called Random Donor Platelets (RDPs). They are also called as "Pooled Platelets".
                            <br /><br />
                            All Blood Banks in Mumbai do not have the facility of component separation. These Blood Banks collect 'Whole Blood' during blood drives, and these are collected in ‘single’ blood bags. There is no chance of Random Donor Platelets being available with such blood banks.
                            <br /><br />
                            Blood Banks that are attached to Hospitals primarily try and cater to the in-house requirements. Therefore the Blood Bank staff after making a careful assessment of the in-house requirement of Random Donor Platelets, may decide on not making components from all the units collected during a blood drive.
                            <br /><br />
                            Since Platelets have a life of only 5 days, making Random Donor Platelets available calls for intensive management, which includes scheduling of large number of smaller drives, and better networking between Blood Banks.
                        </Paragraph>
                        <Heading id='single-donor-platelet'>Single Donor Platelet</Heading>
                        <Subheading>What is single donor platelet</Subheading>
                        <Paragraph>
                            It is possible to obtain only Platelets from a Donor by a process called ‘Apheresis’. Like in routine blood donation, 350 ml. of blood is drawn from the donor. This is sent to a special Blood Bag, which is housed inside the Apheresis Machine. The machine spins, separates the Platelets and sends the remaining blood components back to the donor’s body. This cycle is repeated 6 – 8 times and the whole process will take approx 60 to 90 minutes. Almost 300 ml. of Platelets is obtained in this manner from just one donor. The Platelets so collected are called Single Donor Platelets (SDP).
                        </Paragraph>
                        <Subheading>Advantage of single donor platelet over random donor platelet</Subheading>
                        <Paragraph>
                            Single Donor Platelets are more potent than Random Donor Platelets. 1 unit of Single Donor Platelets is equivalent to 6-8 units of Random Donor Platelets. Single Donor Platelets, being collected by a more efficient system of component separation, have a lesser chance of carrying other components like RBCs. They therefore become available to be transfused to a patient with any blood group. Considering that the life of Platelets is only 5 days, Single Donor Platelets ensure that there is no wastage, as they are collected against specific needs.
                        </Paragraph>
                        <Subheading>Blood donation VS apheresis platelet donation</Subheading>
                        <Paragraph>
                            In Blood Donation, the donor donates 350/450 ml. of whole blood including RBCs, whereas in Platelet Donation the donor donates approx. 300 ml. of only Platelets.
                            <br /><br />
                            There is a temporary drop in the Haemoglobin Count in the case of Blood Donation. The Donor will be told to take it easy for the next 24 hours. In the case of Platelet Donation, the donor loses only Platelets, which are primarily required in the event of a rupture of a blood vessel.
                            <br /><br />
                            Unlike Blood Donation, the Apheresis Donor does not have any restrictions with respect to lifting heavy weights and rigorous physical exercises on the day of donation.
                            <br /><br />
                            A Blood Donor cannot donate blood again for the next 3 months in India, whereas a Platelet Apheresis Donor can donate blood after 3 days in the event of an emergency.
                            <br /><br />
                            The act of blood donation is completed in 3 to 10 minutes, whereas Platelet Apheresis Donation will take between 60 to 90 minutes.
                        </Paragraph>
                        <Subheading>Availability of platelets</Subheading>
                        <Paragraph>
                            Platelets that are available in Blood Banks are Random Donor Platelets. This will depend on the number of routine blood donations and the capability and intention of the Blood Bank for component separation. Single Donor Platelets depend on an Apheresis Donor, who normally comes against a specific need. Single Donor Platelets will not be available off the shelf of a Blood Bank.
                            <br /><br />
                            Platelets have a life of only 5 days. Collecting a lot of Platelets may amount to wasting those which have not been used in 5 days. Blood Banks in India, which are mostly hospital-based, normally make an estimate of the likely off-take of Platelets and carries out separation of Platelets to that extent, during routine Blood Donation Drives. This also ensures saving on the extra cost of triple blood bags used for this purpose, as against single blood bag for ‘Whole Blood’.
                        </Paragraph>
                        <Heading id='need-platelet'>Need Platelets</Heading>
                        <Paragraph>
                            If you need Platelets, you could be either looking for RDP (Random Donor Platelets) or SDP (Single Donor Platelets). Get this clarified from your doctor.
                        </Paragraph>
                        <Subheading>
                            If you need Random Donor Platelet
                        </Subheading>
                        <Paragraph>
                            If you need Random Donor Platelets, these are obtained after component separation from blood that is collected during routine blood donation. This will be available with blood banks. Please look up the list of blood banks and check with them for availability.
                            <br /><br />
                            The other option, which will be suggested by blood banks, is for you to get a donor to donate blood. The blood bank can then separate the platelets and make them available.
                            <br /><br />
                            If you have difficulty in getting Random Donor Platelets, you could call <Span>Life Savers, Ranchi</Span>. We will try and locate the Blood Bank that has the required units.
                        </Paragraph>
                        <Subheading>If you need single donor platelets</Subheading>
                        <Paragraph>
                            It is very unlikely that Single Donor Platelets will be available in any blood bank. Single Donor Platelets are normally collected against the need of a specific patient. You will therefore have to locate a Platelet Donor either by identifying someone yourself or by contacting <Span>Life Savers, Ranchi</Span>.
                            <br /><br />
                            <Span>Life Savers, Ranchi</Span> coordinates the Lifesavers Club, which has Platelet Donors listed under the Club. On receiving a call from you <Span>Life Savers, Ranchi</Span> will get in touch with the Blood Bank/Hospital where the Donor is required, and confirm the need. You also have an option of selecting list of Blood Banks which have the Apheresis Machine required for making Single Donor Platelets. Your choice of Blood Bank where the Lifesavers Club member should be sent, could then be on the basis of convinience or economy.
                            <br /><br />
                            After receiving confirmation about the Blood Bank, <Span>Life Savers, Ranchi</Span> will then look up the list from the Lifesavers Club and make an SDP donor available.
                        </Paragraph>
                    </ContentContainer>
                </ContentContainer>
            </MainContainer>
        </>
    )
}

export default BloodKnowledge

const Image = styled.img`
    width:600px;
    border:2px solid maroon;
    @media screen and (max-width:700px)
    {
        width:500px;
    }

    @media screen and (max-width:600px)
    {
        width:90vw;
    }

`
const MainContainer = styled.div`
    padding-top:20px;
`

const HeadingContainer = styled.div`
    display:flex;
    justify-content:center;
    padding:20px;
`

const Heading = styled.h1`
    font-size:64px;
    color:maroon;
    padding-bottom:20px;
    padding-top:80px;
    text-align:center;
`

const NavigationContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    padding-bottom:50px;
    border-bottom:0.5px dotted maroon;
`

const ButtonElement = styled(Link)`
    text-decoration:none;
    margin:5px;
    padding:5px;
    border-radius:3px;
    color:maroon;
    border:1px solid maroon;
    transition:background-color 0.2s;
    &:hover{
        color:whitesmoke;
        background-color:maroon;
        transition:background-color 0.4s;
    }
`
const ContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Paragraph = styled.p`
    max-width:700px;
    padding:20px;
    font-family: 'Open Sans', sans-serif;
    font-size:18px;
    text-align:justify;
`

const Subheading = styled.h3`
    font-size:24px;
    color:maroon;
    text-align:center;
`

const Span = styled.span`
    font-weight:bold;
    color:black;
`