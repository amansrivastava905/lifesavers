import React from 'react'
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import bloodFact from '../images/blood-fact.jpg'
const BloodKnowledge = () => {
    return (
        <>
            <MainContainer id='landing'>
                <HeadingContainer>
                    <Heading>Blood Donation</Heading>
                </HeadingContainer>
                <NavigationContainer>
                    <ButtonElement to='/blood-donation#blood-facts'>Blood Facts</ButtonElement>
                    <ButtonElement to='/blood-donation#blood-donation'>Blood Donation</ButtonElement>
                    <ButtonElement to='/blood-donation#drive-elements'>Blood Drive Elements</ButtonElement>
                    <ButtonElement>FAQ</ButtonElement>
                </NavigationContainer>
                <ContentContainer>
                    <Paragraph>
                        Most patients believe that it is their responsibility to organize donors to meet this need.  In other words, the search for blood begins after the need has arisen.  This naturally would put a lot of pressure on the patient.
                        This also compromises on the safety of blood.  It is an established fact that a voluntary blood donor is the safest source of blood as compared to a donor who responds to the need of a specific individual.
                        Ideally the blood units should be present in the Blood Bank before the patient is admitted.  Voluntary blood donation drives at venues convenient to donors can easily ensure that this objective is met.  This is reassuring to the patient, easy for the donor, and, more importantly, ensures availability of safe blood.
                    </Paragraph>
                    <ContentContainer>

                        <Heading id='blood-facts'>Blood Facts</Heading>
                        <Subheading>History of blood donation</Subheading>
                        <Paragraph>
                            <Span>1657:</Span> Dr. Christopher Wren performed experiments of injecting various fluids into the veins of animals.
                        <br />
                            <Span>1665:</Span> First documented demonstration of blood transfusion between two dogs by Richard Lower.
                        <br />
                            <Span>1667:</Span> First attempt at direct human donor to patient blood transfusion by Jean Baptiste Denis in France. The result was disastrous.
                        <br />
                            <Span>1901:</Span> Dr Karl Landsteiner made the landmark discovery of blood groups. He categorized the blood groups as types A, B and O. This provided an answer as to why some transfusions worked and others failed.
                        <br />
                            <Span>1914:</Span>Development of Sodium Citrate as anticoagulants for preservation of blood.
                        <br />
                            <Span>1916:</Span> Development of Citrate Glucose that allowed blood to be stored in containers for later transfusion.
                        <br />
                            <Span>1916:</Span> Establishment of blood depots for storing blood to provide relief wounded soldiers during World War 1.
                        <br />
                            <Span>1930:</Span> First blood transfusion carried out successfully from human cadaver to human recipient in Moscow.
                        <br />
                            <Span>1930:</Span> establishment of first fully functional blood bank at Leningrad, Russia.
                        <br />
                            <Span>1940:</Span> Rhesus factor discovered in blood by Dr. Karl Landsteiner and Dr. Alexander Weiner. The ABO system and the Rh system together form the basis of blood transfusion activity.
                        <br />
                            <Span>1940:</Span>Development of preservation of Blood Plasma after separation from whole blood.
                        <br />
                            <Span>1950:</Span>Introduction of plastic bags to replace breakable glass bottles.
                        </Paragraph>
                        <Subheading>Why is blood required</Subheading>
                        <Paragraph>
                            Modern medical science is based on the availability of human blood. Blood is required by:
                        <br /> <br />
                        Patients of genetic disorders like Thalassaemia, Haemophilia and Sickle Cell Anaemia.
                        Patients undergoing major surgeries.
                        Cancer patients.
                        Victims of major accidents or injuries.
                        Burn victims.
                        Women in childbirth.<br />
                        Thalassaemia Major is a serious genetic, blood disorder, which affects more than 1 lakh children in India. These children need blood transfusions regularly throughout their lives for their survival.
                        <br /><br />Blood is not manufactured in any factory. Artificial/synthetic blood is still in the research stage. Animal blood cannot be transfused to human beings.
                        <br /><br />
                        Blood, is made in only one factory – the human body. Therefore, the only source of human blood is voluntary blood donation by another human being.
                        </Paragraph>
                        <Subheading>Who can donate blood</Subheading>
                        <Paragraph>
                            You can donate blood if you:
                        <br /><br />
                        are between the age of 18 and 60 years.
                        weigh more than 45 kgs.
                        have a haemoglobin count of more than 12.5 gms per decilitre.
                        have normal blood pressure, pulse rate, heart and liver condition.
                        have not suffered from any major ailment in the recent past.
                        have completed 3 months since your last donation.
                        <br /><br />
                        Before donation you are required to fill up a Questionnaire. This is followed by an "on-the-spot" check for your weight, haemoglobin and blood pressure. You are found to be eligible to donate blood only on fulfilling the conditions of the questionnaire and the tests.
                        <br /><br />
                            <Span>Will one become weak on donating blood?</Span><br />
                        The human body has around 4 – 5 litres of blood. Atleast 15 to 20 ml of blood per kg of body weight is a buffer stock in the human body. This blood is more than what is required for normal circulation in the body.

                        The total blood collected during blood donations is 350/450 ml. - a very small fraction of the buffer stock of blood in the body. And, even this donated blood is regenerated by the body on its own in a short time. The donor is fit to resume normal duties after an hour of donation.

                        The blood that is donated is of very little consequence to the donor, but is a matter of life and death for a suffering fellow human being.
                        <br /><br />
                            <Span>Is it painful to donate blood?</Span><br />
                        After the initial prick of the needle, all you feel is a gentle pressure, but no pain. The entire process of donation takes less than 10 minutes. Any discomfort or problem during or after donating is very uncommon.
                        <br /><br />
                            <Span>Is it safe to donate blood?</Span><br />
                        Yes. You will be eligible to donate blood only if you are fit and well. The needle and blood bag used to collect blood come in a sterile pack that cannot be reused. The process is therefore absolutely safe.
                        <br /><br /><Span>What should one do after donating blood?</Span><br />
                        Lie down for five minutes on the same cot after blood donation.
                        Keep you hand folded and limp so that the flow of blood is stopped.
                        Wait for the plaster to be fixed on the blood donation spot.
                        Consume the biscuit and coffee served to you.
                        Do not indulge in any rigorous physical activity for an hour after donation.
                        Consume lot of fluids after donation on the day you have donated blood.
                        </Paragraph>
                        <Subheading>Components of blood</Subheading>
                        <Paragraph>
                            <Span>Red Blood Cells</Span> <br />
                        Red Blood Cells (RBCs) give the red colour to blood. RBCs have a substance called haemoglobin, which plays the role of carrying the oxygen that we breathe in, to the various tissues of the body. RBCs form almost 45 % of the total blood volume. In most cases, when a person needs blood transfusion, he/she needs RBCs.

                        RBCs when separated out from donated Blood are called Packed Cells. In the normal conditions existing in Blood Banks, the life of RBCs is 35 days.
                        <br /><br />
                            <span>White Blood Cells</span><br />
                        White Blood Cells are the defence mechanism of the body. Whenever the body is subjected to attack from outside, WBCs swing into action and protect the body. They identify, destroy and remove any foreign material that has entered the body. WBCs form less than 1 % of the total blood volume.

                        Outside the body, when separated from donated blood, WBCs, in most cases, are of very little use. On the contrary they can be harmful to the receiver. Presence of WBCs increases the risk of adverse transfusion reaction and infection.
                        <br /><br />
                            <Span>Platelets</Span><br />
                        Platelets are cells, which play the role of helping in clotting of blood. Reduction in the Platelet count can lead to bleeding.

                        Outside the body, when separated out from donated blood, Platelets have a life of 5 days.
                        <br /><br />
                            <span>Plasma</span><br />
                        Plasma is the fluid part of Blood. It enables blood to flow, and plays the role of a carrier. It carries the RBCs, WBCs and Platelets. It also plays the role of carrying nutrients to the various parts of the body, and takes out the waste matter.

                        When separated from donated Blood, Plasma in frozen condition, called Fresh Frozen Plasma (FFP) has a life of upto 1 year.
                        </Paragraph>
                        <Subheading>Who can give blood to whom</Subheading>
                        <Paragraph>
                            <Image src={bloodFact} />
                            <br /><br />
                            <Span>Universal Donor</Span><br />

                            In the event of an emergency when it is not possible to cross-match, O Rh. Negative blood may be given to the patient. O Rh. Negative is also termed as Universal Donor.

                            In layman’s terms, O Rh Negative can be termed as that blood which has no Antigen – neither ‘A’ nor ‘B’ nor ‘Rh’. In other words, this blood group has nothing which is foreign to the recipient.
                            <br /><br />
                            <Span>Universal Recepient</Span><br />

                            Similarly, AB Rh Positive is termed as a Universal Recepient. He/she can receive blood from anybody.

                            In layman’s terms, AB Rh Positive can be termed as that blood which has all the Antigens – ‘A’, ‘B’ and ‘Rh’. Therefore there is nothing foreign for the persons having this blood group. They can receive blood from anybody.
                            Theoretically, Rh Negative can be given to Rh positive of the same A,B,O, group.
                        </Paragraph>
                        <Heading id='blood-donation'>Blood Donation</Heading>
                        <Subheading>Types of blood donation</Subheading>
                        <Paragraph>
                            <Span>Voluntary Blood Donation:</Span><br />
                            When a person donates blood without expecting anything in return, and without expecting it to be given to any specific person, he/she is called a Voluntary Blood Donor. In most cases such voluntary donors are repeat donors. Statistics show that this is the safest form of donation. Voluntary Blood Donation can be done by donating blood during Blood Donation Drives or by going to a Blood Bank and donating blood without any expectations. This form of Blood Donation ensures that Blood is already present in the Blood Banks and does not wait for a specific emergency.
                            <br /><br />
                            <Span>Directed Blood Donation:</Span><br />

                            When a person donates blood for a specific patient and expects the donated blood to be given to that specific patient only, he/she is called a Directed Blood Donor. This form of blood donation is crisis-driven and therefore is not encouraged. The donor is donating blood under duress and at the request of a known person, and therefore may not disclose his true medical history. Blood collected in this manner has a higher chance of being unsafe.
                            <br /><br />
                            <Span>Replacement Blood Donation:</Span><br />

                            When a person donates blood to replace the blood that has already been transfused to a patient, he/she is called a Replacement Blood Donor. This, unfortunately, is used by Hospitals and Blood Banks as a method of ensuring availability of blood. The onus of organizing blood is put on the patient, who may resort to bringing in a commercial donor or bring a friend or relative under duress. In any case, this donation is effectively a commercial donation, because this is done to get a refund on the deposit that the blood bank charges the patient for the blood issued.
                            <br /><br />
                            <Span>Autologous Blood Donation:</Span><br />

                            Strictly speaking this cannot be called a donation. This is a case of blood being donated for oneself. It is possible for an individual to donate blood, store it and have it used for himself/herself. Of course this is possible for a planned operation, and provided the patient is healthy enough to donate blood. Since one’s own blood is being transfused, there is hardly any risk of transmitting any virus or of any adverse transfusion reaction. All the same, the routine tests and cross-matching formalities are carried out even in this situation. Autologous blood donation becomes even more relevant in cases of rare blood groups, where finding a donor may prove difficult.
                            <br /><br />
                            It is a known fact that the blood collected from a voluntary, repeat donor is the safest. Therefore society should aim for 100 % voluntary blood donation.
                        </Paragraph>
                        <Subheading>Voulantry blood donation drives</Subheading>
                        <Paragraph>
                            Blood donation is perceived by most people as an act of donating blood for a friend or relative who is in a hospital. Most people believe that by donating blood in a hospital, one can ensure that the donated blood will go to the right person. This perception owes its origins to the practices followed by doctors and hospitals.
                            <br /><br />
                            Hospitals have propagated this practice to ensure availability of blood. They believe that voluntary blood donors are rare. They also know that the patient has very little choice but to get donors to come to the hospital. The patient is almost made to believe that the surgery or treatment will not take place unless the donors are organized by the patient. The onus of organizing blood has been shifted by the hospital on to the patient, who is made to feel guilty for not organizing blood.
                            <br /><br />
                            This practice is inhuman towards the suffering patient. It is the most inefficient way of collecting blood. It does not recognize the selflessness of the donor. And, most importantly, it compromises on the safety of blood. Therefore, contrary to the perception created by the hospital, bringing a donor to a hospital for a specific patient increases the risk of unsafe blood.
                            <br /><br />
                            Voluntary blood donors exist. It is necessary for Blood Banks to go to where the donors are. If information is given to the donor about blood donation, and if blood donation is made convenient, donors will come and donate blood voluntarily. It is important to identify places where voluntary blood donation drives can be held.
                            <br /><br />
                            The segments where blood donation drives can be held are:

                            Colleges,
                            Offices,
                            Factories,
                            Residential areas,
                            Religious Institutions/Congregations,
                            Railway stations (with airconditioned structures), <br /><br />
                            It is our experience that large number of donors turn up for blood donation drives. An effort has to be made to dispel apprehensions that people have by organizing lectures, providing posters etc.
                        </Paragraph>
                        <Heading id='drive-elements'>Blood drive elements</Heading>
                        <Subheading>elements of blood drive</Subheading>
                        <Paragraph>
                            Organising a blood donation drive is very easy. Like in any other activity, it is the inertia that needs to be overcome. Having done this, one can see that the following aspects need to be paid attention to:
                            <br /><br />
                            <Span>Formation of Core Group</Span><br />
                            Constitution of an organizing committee helps in converting the activity from a one-man activity to an organized one. Responsibilities can be shared and accountabilities fixed.
                            <br /><br />
                            <Span>Timing of the Drive</Span><br />
                            It is desirable for an organisation to organize 2 blood donation drives in a year.
                            <br /><br />
                            <Span>Choice of the Blood Bank</Span><br />
                            Think Foundation can be entrusted with this responsibility of bringing the blood bank which is most in need. Needless to say, the chosen blood bank will be one that is approved by the authorities. You could choose the Blood Bank of your choice after keeping in mind that the expected number of donors is in line with the requirement of the blood bank. See the Section on ‘Choosing the Blood Bank’.
                            <br /><br />
                            <Span>Duration of the Drive</Span><br />
                            Convenience to the donor is the most important criterion here. Think Foundation can help in planning the duration.
                            <br /><br />
                            <Span>Motivating Potential Donors</Span><br />
                            This is easily the most important aspect of organizing a drive. While we all agree that blood donation is purely voluntary, one cannot just sit back after making an announcement about the drive. Some people have misconceptions and apprehensions about blood donation, which have to be dispelled. Others need to be given a reminder about the Drive. Remember that every additional donor means an additional life saved.
                            See the Section on ‘Motivating Potential Donors’ in the pages that follow.
                            <br /><br />
                            <Span>Physical arrangements</Span><br />
                            See the Section on ‘Physical arrangements’ in the pages that follow.
                        </Paragraph>
                        <Subheading>Choosing the venue</Subheading>
                        <Paragraph>
                            The venue of the Drive could be a classroom in a school, a community hall, a residential society office room, the stilt area in a building, conference room in an office, canteen in an office, any three rooms in an office etc.
                            <br /> <br />
                            The following factors should help in deciding the venue:
                            <br /><br />
                            <Span>Proximity to the potential donors</Span><br />
                            This is a very important factor. Donors who are fence sitters may end up not donating blood, and justify their action on the grounds of distance of the venue.<br />
                            <br /><Span>Physical dimensions of the venue</Span><br />
                            The venue should be large enough to provide for the size of the Blood Donation Drive. The size of the Blood Donation Drive will determine the area required for filling up of forms and registration, the area required for the number of beds and the area required for refreshments and post donation activity.<br />
                            <br /><Span>Availability of facilities</Span><br />
                            The venue should have the following facilities:<br />
                            a. Lighting.<br />
                            b. Ventilation.<br />
                            c. Fans/Coolers.<br />
                            d. Drinking Water.<br />
                            e. Tables and chairs.<br /><br />
                            Please note that Pandals should be discouraged.
                            It is preferred to have the venue on the ground floor.
                        </Paragraph>
                    </ContentContainer>
                    <Subheading>Motivating potential donors</Subheading>
                    <Paragraph>
                        The most important task of any Organizer is to communicate effectively to all potential Blood Donors, and get them to donate blood during the camp. This requires personal attention, and an effort to get as many people as possible to be part of the organizing team.
                        <br /><br />
                        The various means of communicating with potential donors are listed below. You could try some or all of them, depending on applicability to your situation.
                        <br /><br />
                        <Span>Leaflets</Span><br />
                        This is particularly applicable to drives being organized at residential areas. The leaflets should contain information about why, when and where the Blood donation drive is being held. Ideally, the leaflet should be distributed 3 to 4 days before the day of the Drive.
                        <br /><br />
                        <Span>Press Release</Span><br />
                        This is a very easy way of communicating to a large audience. This not only serves the purpose of communicating to potential donors, but also provides motivation to the members of the organizing committee. A simple press release issued to the “Chief Reporter’ of the various newspapers is all it takes. The Press release may be faxed to the relevant newspapers 3-4 days before the Day of the Drive.
                        <br /><br />
                        <Span>Scroll on television</Span><br />
                        The local cable channels may be requested to a carry a scroll announcing the Blood Donation Drive. The cable channels may be requested to carry the scroll for 2 to 3 days leading to the drive and on the day of the Drive.
                        <br /><br />
                        <Span>Posters</Span><br />
                        Standard Posters are available with the Blood Banks, who can be asked to send the same to the organizers. These can be displayed at strategic places for a week before the Drive.
                        <br /><br />
                        <Span>Banners</Span><br />
                        Banners announcing the drive may be put up at prominent places. The banners could be put up a week before the Drive.
                        <br /><br />
                        <Span>Lectures</Span><br />
                        Lectures are one of the most effective ways of communicating and convincing potential donors to come and donate blood. A personal appeal is very important, and has the advantage of having the undivided attention of the target segment. The difficult part is to get the people to attend the lecture. Places of worship, clubs and other places where people normally congregate are ideal venues for having lectures.
                        <br /><br />
                        <Span>Person to person</Span><br />
                        By far the most effective and laborious method is to go door-to-door in a residential area and person-to-person in an office area. A large number of committed volunteers are required for this purpose. A key person known to the target audience should accompany the team going door to door.
                        <br /><br />
                        <Span>Screen-saver/Desktop</Span><br />
                        All computers in the office can carry a Screen-saver carrying the message of blood donation, on the day of the Drive and a day prior. Ideally this screen saver should be a simple message from the Chief Executive.
                        <br /><br />
                        <Span>Public-address system</Span><br />
                        Public address system, if available, could be used on the day of the Drive at intervals of 3 hours to announce the Drive. This could also be done by broadcasts through e-mail.
                        <br /><br />
                        <Span>Heads of Depts.</Span><br />
                        Heads of departments should be asked to talk to employees in their department.
                        <br /><br />
                        <Span>Core Group</Span><br />
                        A Core Group should be appointed and assigned responsibility for making the Drive a success. The main role to be played by the Core Group is to reach out to as many people as possible on a ‘one-to-one’ basis. Word of mouth is most important, particularly on the day of the Drive.
                        <br /><br />
                        <Span>Targets to volunteers</Span><br />
                        The members of the managing committee should fix targets for themselves. Each managing committee member or departmental head in an office should be asked for his commitment of blood donors.
                        <br /><br />
                        <Span>Circular to employees</Span><br />
                        For drives in office areas, Circulars may be sent to all the employees giving them information about the Blood Donation Drive. This will substitute Leaflets, which we suggested should be given to residential areas.
                    </Paragraph>
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