import React from 'react'
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
const BloodKnowledge = () => {
    return (
        <>
            <MainContainer id='landing'>
                <HeadingContainer>
                    <Heading>Thallasaemia Major</Heading>
                </HeadingContainer>
                <NavigationContainer>
                    <ButtonElement to='/thallasaemia-major#thal-facts'>Thal Facts</ButtonElement>
                    <ButtonElement to='/thallasaemia-major#diagnosis'>Diagnosis</ButtonElement>
                    <ButtonElement to='/thallasaemia-major#transfusion-therapy'>Transfusion therapy</ButtonElement>
                    <ButtonElement to='/thallasaemia-major#chelation-therapy'>Chelation therapy</ButtonElement>
                    <ButtonElement to='/thallasaemia-major#cure'>Cure</ButtonElement>
                </NavigationContainer>
                <ContentContainer>
                    <Paragraph>
                        Thalassaemia Major is an autosomal, recessive, single gene blood disorder, which affects more than 100,000 children in India.  Detection of Thalassaemia Major normally occurs when the children are between 3 and 6 months of age.  The disorder is characterized by the inability to produce appropriate haemoglobin.  As a result, delivery of oxygen cannot be effected to the different tissues and cells of the body.  The children are dependent on lifelong blood transfusions.
                        <br /><br />
                        Repeated blood transfusions result in an undesirable build up of iron, which can prove fatal.  The children are required to take either injections or medicines daily to dispose off the excess iron (iron chelation).  They are also required to be monitored periodically for other complications.
                        <br /><br />
                        Day Care Centers play a very important role in monitoring the children.  Registering the children with Day Care Centers can ensure comprehensive and holistic treatment.
                        <br /><br />
                        Blood Transfusion, iron chelation, and managing of complications take care of the conventional treatment of children living with Thalassaemia Major.  This of course is a lifelong treatment.  The only permanent cure available today is a Stem Cell Transplant, for which an HLA matched donor is required.
                    </Paragraph>
                    <ContentContainer>

                        <Heading id='thal-facts'>Thal Facts</Heading>
                        <Paragraph>
                            Thalassaemia Major has existed in the world for hundreds of years. Dr. Thomas Cooley and Dr. Pearl Lee recognized it as a clinical entity only in 1925. Dr. Cooley and Dr. Lee described five cases of Thalassaemia Major, giving details of the condition, its causes and its effects. Being the first to detect the disorder as a form of anaemia, it came to be called as Cooley’s Anaemia.
                            <br /><br />
                            It was found that this condition existed in large numbers in the areas bordering the Mediterranean Sea - a belt starting from Italy to Greece to Cyprus to Turkey - and then into Iraq, Iran, Pakistan and India. ‘Thalas’ means ‘the sea’ in Greek and therefore ‘Thalassaemia’ meant ‘anaemia found near the sea’.
                            <br /><br />
                            Thalassaemia is the term that is widely used all over the world. But to give the historical perspective of its detection and geographical perspective of its prevalence, it is also referred sometimes as ‘Cooley’s Anaemia’ or ‘Mediterranean Anaemia’.
                        </Paragraph>
                        <Subheading>...is a blood disorder</Subheading>
                        <Paragraph>
                            Blood is made up of the following components:
                            <br /><br />
                            Red Blood Cells<br />
                            Red Blood Cells (RBCs) give the red colour to blood. RBCs have a substance called haemoglobin, which plays the role of carrying the oxygen that we breathe in, to the various tissues of the body.
                            <br /><br />
                            White Blood Cells<br />
                            White Blood Cells are the defense mechanism of the body. Whenever the body is subjected to attacks from outside, WBCs swing into action and protect the body. They identify, destroy and remove any foreign material that has entered the body.
                            <br /><br />
                            Platelets<br />
                            Platelets are cells, which play the role of helping in clotting of blood. Whenever there is an injury platelets play a very important part in arresting the loss of blood by enabling the process of clotting.
                            <br /><br />
                            Plasma<br />
                            Plasma is the fluid part of Blood. It enables blood to flow, and plays the role of a carrier. It carries the RBCs, WBCs and Platelets. It also plays the role of carrying nutrients to the various parts of the body, and takes out the waste matter.
                            <br /><br />
                            Thalassaemia Major is a disorder, which affects the Red Blood Cells in the Blood. The RBCs are full of haemoglobin, which carry the oxygen that we breathe, to the various tissues of the body. Haemoglobin is made up of ‘haem’ (iron component) and ‘globin’ (protein component). Two Alpha and two Beta chains form globin.
                            <br /><br />
                            In the case of Thalassaemia Major, there is a reduction in the number of Beta Chains. This leads to improper globin synthesis, and lack of haemoglobin, leading to premature destruction of the RBCs. The child will not be able to carry oxygen to the various tissues of the body. This will prove fatal to the child unless it is monitored and treated properly.
                        </Paragraph>
                        <Subheading>...is a genetic disorder</Subheading>
                        <Paragraph>
                            Every physical characteristic and function of the human body is controlled by a pair of genes. Genes are present in every cell of our body. You have two of every kind of gene, one passed on by your mother, the other passed on by your father. One of these two genes tends to dominate and the other is recessive. The characteristic/function acquired by a person depends on which parent’s gene dominates. There could be some characteristic where the mother’s gene dominates, whereas in other characteristics the father’s gene may. Among many other pairs of genes, you have two genes that control how haemoglobin is made in each of your red blood cells.
                            <br /><br />
                            ‘Normal’ people are normal because they have two normal genes for haemoglobin. In other words, both parents have passed on normal genes for haemoglobin.<br /><br />
                            Persons with Thalassaemia Minor (also called ‘carriers’) have one normal gene and one altered gene for haemoglobin. They are healthy because the normal gene becomes the dominant gene. One of the parents has passed on the altered gene. Therefore, atleast one parent is definitely a Thalassaemia Minor.<br /><br />
                            People with Thalassaemia Major have two altered genes for haemoglobin. This means that both parents have passed on the altered gene. Therefore both parents have to be ‘carriers’.<br /><br />
                            If both partners in a marriage are Thalassaemia Minor, there are the following possibilities:
                            <br /><br />
                            <Span>1. </Span>Both mother and father pass on the normal gene – child is ‘normal’.<br />
                            <Span>2. </Span>Mother passes on the normal gene and father passes on the altered gene – child is a ‘carrier’.<br />
                            <Span>3. </Span>Mother passes on the altered gene and father passes on the normal gene – child is a ‘carrier’.<br />
                            <Span>4. </Span>Both mother and father pass on the altered gene – child is Thalassaemia major (serious problem).<br /><br />
                            Thus a Thalassaemia Major child is born only if both the mother and the father are Thalassaemia Minor.<br />
                        </Paragraph>
                        <Subheading>causes of altered gene</Subheading>
                        <Paragraph>
                            Researchers have been able to identify the pair of altered genes, which cause a reduction in Beta Chains, leading to Thalassaemia Major. These genes are located on chromosome No. 11. Though it is difficult to pin-point the causes, it is clear that the genes underwent a mutation gradually over a few generations.
                            <br /><br />
                            When one looks at the regions of the world that have a high incidence of Thalassaemia, one can see that these are the same areas that have had a problem of malaria. It is therefore being hypothesized that due to successive generations being subjected to malaria, the gene has undergone a mutation due to successive generations being subjected to malaria. This hypothesis has gained ground also because of the fact that people carrying the altered gene are known to have a lesser risk against malaria.
                            <br /><br />
                            In short, many successive generations of the population being subjected to malaria has resulted in a genetic mutation. The ‘altered’ gene now gives improper instruction leading to a reduction in ‘beta’ chains resulting in improper synthesis of ‘globin’. The consequent lack of haemoglobin results in premature destruction of Red Blood Cells, leading to inability to deliver oxygen to the various tissues of the body.
                        </Paragraph>
                        <Heading id='diagnosis'>Diagnosis</Heading>
                        <Subheading>Detection of Thallasaemia Major</Subheading>
                        <Paragraph>
                            Thalassaemia Major children remain normal till the first  4 to 6 months of life. They start looking pale between the ages of 6 months to 18 months. In a typical situation, when this happens, they are taken to the doctor by the parents. The Doctor after advising a Blood Test, notices a drop in the haemoglobin count.
                            <br /><br />
                            In the normal course ‘foetal haemoglobin’ is produced during the foetal stage, which enables delivery of oxygen to the various tissues and cells of the body. This foetal hemoglobin starts to deplete after birth and simultaneously ‘adult haemoglobin’ is produced. The foetal haemoglobin depletes completely between 4 to 6 months of age, at which stage ‘adult haemoglobin’ takes over the role of delivery of oxygen.
                            <br /><br />
                            In the case of Thalassaemia Major children ‘adult haemoglobin’ does not get produced. Therefore, after depletion of foetal haemoglobin, delivery of oxygen does not take place. As a result, children begin to look pale, and are low on energy.
                            <br /><br />
                            Blood tests carried out on High Performance Liquid Chromatography (HPLC) machine can detect Thalassaemia Major. This can also be established by DNA tests. A further confirmation can be carried out by checking and establishing that both the parents are Thalassaemia Minor.
                        </Paragraph>
                        <Subheading>If not treated</Subheading>
                        <Paragraph>
                            Red Blood Cells are produced in the bone marrow. Unfortunately, in the case of a Thalassaemia Major, the RBCs that are produced die prematurely. The bone marrow realizes that there are no RBCs, and starts producing more RBCs, all of which die prematurely again. This cycle continues even more furiously, resulting in a bone marrow, which is hyperactive.
                            <br /><br />
                            The Spleen plays the role of removing the dead blood cells. The continuous stream of dead RBCs activates the Spleen on a continuous basis. The Spleen, as a result, becomes hyperactive resulting in its enlargement. In this situation, the children will need an increased level of transfusion.
                            <br /><br />
                            The children do not grow well, look very pale and become irritable and lethargic. Gradually they show various other signs and symptoms like enlargement of spleen, liver; and prominence of bones particularly the skull bones, causing ‘frontal bossing’ (prominence of anterior bone of the skull, ‘parietal bossing’ (prominence of lateral bone of the skull) and ‘occipital bossing’ (prominence of bones on the back of the skull). There may also be prominence of bones of the cheeks and of the upper jaw, leading to protrusion and malocclusion of the teeth. Children with Thalassaemia major, if left untreated, succumb to the disease by the 3rd to 4th year of life.
                        </Paragraph>
                        <Subheading>Conventional treatment</Subheading>
                        <Paragraph>
                            The conventional treatment for Thalassaemia Major does not change the genetic status of the patient. The treatment is aimed at managing the disorder, and ensuring normalcy and happiness in the life of the patient. The conventional treatment comprises of: blood transfusion & iron chelation.
                        </Paragraph>
                        <Heading id='transfusion-therapy'>Transfusion Therapy</Heading>
                        <Subheading>
                            Why should blood be transfused?
                        </Subheading>
                        <Paragraph>
                            Children living with Thalassaemia Major due to premature destruction of Red Blood Cells (RBCs) are not able to deliver oxygen to the different tissues and cells of the body. This very obviously will have fatal consequences. Blood transfusions, which will ensure that the children receive RBCs, therefore form the mainstay of treatment of Thalassaemia Major.
                        </Paragraph>
                        <Subheading>What should be transfused?</Subheading>
                        <Paragraph>
                            Since the children need RBCs, ideally Whole Blood should not be given. The children need to be transfused with RBCs, also called as ‘Packed Cells’, after cross-matching. The Packed Cells if saline-washed will minimize transfusion reactions. In summary, ideally saline-washed Packed Cells should be transfused. For further precaution depletion of leukocytes can be done by using either bedside filters or pre-storage filtration.
                        </Paragraph>
                        <Subheading>How much & how often to transfuse?</Subheading>
                        <Paragraph>
                            The quantity of Packed Cells to be transfused will depend upon the weight of the patient, Hb level of the patient, desired Hb level after transfusion and Haematocrit of the Packed Cells being transfused. As a Thumb Rule, the dosage is usually 10-15 ml/kg of patient’s body weight. In the case of anaemic patients (Hb less than 5 gm/dl) and patients with cardiac problems, the dosage of Packed Cells does not exceed 5 ml/kg of patient’ body weight.<br /><br />
                            Transfusion therapy should commence immediately after confirmation of the diagnosis of Thalassaemia Major. In most cases, the first transfusion is given when the Hb level drops below 7 gm/dl. Thereafter it is necessary to decide on a transfusion regimen. In recent times, there is a school of thought which talks about maintaining a very high Hb level. A super-transfusion regimen advocates a pre-transfusion Hb 11gm/dl with a mean Hb of about 14gm/dl. A hyper-transfusion regimen aims at at pre-transfusion Hb  10gm/dl with a mean of about 12gm/dl. A moderate transfusion regimen tries to maintain the pre-transfusion Hb in the range of 9-10 gm/dl. Most Centres in India adopt the moderate transfusion regimen, which they believe leads to better control of iron overloading. Having decided on the transfusion regimen, the frequency of transfusions can be decided by monitoring the pre-transfusion Hb. The time taken for the Hb level to drop down to the desired pre-transfusion level should be figured. The frequency will vary from patient to patient, and will increase with the age/weight of the child.
                        </Paragraph>
                        <Subheading>Complications of transfusion</Subheading>
                        <Paragraph>
                            Apart from the problem of iron overload, complication of repeated blood transfusions include non-haemolytic febrile reactions, alloimmunization and transfusion transmitted infections like HIV, Hepatitis B, Hepatitis C and Malaria.
                            <br /><br />
                            Non-haemolytic transfusion reaction and alloimmunization can be prevented by leucoreduction at the prestorage stage (when the components are separated). However, most countries are not able to meet the huge costs of prestorage leucoreduction. The option of using bedside filters is available to the patient.
                        </Paragraph>
                        <Heading id='chelation-therapy'>Chelation Therapy</Heading>
                        <Subheading>
                            What is iron overload
                        </Subheading>
                        <Paragraph>
                            Packed Cells that are transfused to the patient contain Haemoglobin, which contain iron. Repeated blood transfusion result in more and more iron being deposited in the blood stream. Beyond a point this iron becomes undesirable, and gets deposited in the heart, pancreas, liver, spleen, pituitary glands, thyroid and parathyroid glands. This could lead to cardiac problems, diabetes, cirrhosis of the liver, growth retardation, delayed puberty, bacterial infections, osteoporosis etc. The life expectancy of a Thalassaemia Major child depends on the ability to control the iron overload.
                        </Paragraph>
                        <Subheading>
                            How is iron overload monitored
                        </Subheading>
                        <Paragraph>
                            The most common method of monitoring iron overload is by checking the Serum Ferritin level, which is measured in terms of nanograms per milliliter (ng/ml). A Serum Ferritin level of above 1000 ng/ml signifies iron overload, which is when iron chelation therapy is started. However the monitoring by Serum Ferritin levels has certain limitation with respect to its interpretation. But easy accessibility and lower costs makes this method the most common choice. Comparing the Serum Ferritin levels of a patient from one period to another gives a good indication of the changes in the iron overload.
                            <br /><br />
                            The best method for measuring iron levels is Liver Biopsy. Apart from being very costly, it is not preferred due to its invasive nature, which could cause internal bleeding.
                            <br /><br />
                            The other methods of monitoring iron overload are SQUID (Superconducting Quantum Interference Device) and MRI (Magnetic Resonance Imaging).
                        </Paragraph>
                        <Subheading>Iron chelation</Subheading>
                        <Paragraph>
                            The process of removal of iron from the blood stream is called as ‘Iron Chelation’. This is started when the child is approximately 2 years old after checking the Serum Ferritin levels. The aim of iron chelation is to keep the Serum Ferritin levels in the range 1000 to 1500 ng/ml. The different drugs that are available for iron chelation are:
                            <br /><br />
                            <Span>Desferrioxamine (DFO)</Span><br />
                            Desferrioxamine is a compound which binds with iron and disposes it off mainly through the stool and partly through urine. It cannot be administered orally, and is given subcutaneously by a slow infusion pump. The daily dose of 30-50 mg/kg of patient’s body weight is given daily over a period of 8 to 10 hours. DFO contributes significantly in controlling iron overload in the heart, liver and endocrine glands. DFO is better known as ‘Desferal’, the brand name under which is made available by Novartis. Desferal is time tested and therefore considered more dependable by those who can afford it. However, due to the slow, subcutaneous infusion compliance to the therapy is a problem.
                            <br /><br />
                            <Span>Deferiprone</Span><br />
                            Deferiprone is the first oral drug to be developed for iron chelation. It is better known as Kelfer - the brand name under which it is made available by CIPLA in India. The recommended dose is 50 to 100 mg/kg of patient’s body weight. Kelfer has been known to work better with iron overload in the heart. However some children show symptoms of nausea, vomiting, abdominal pains, diarrhoea and joint pains. Patients using this therapy must get blood tests and physical examination of joints done regularly.
                            <br /><br />
                            <Span>ICL 670</Span><br />
                            ICL 670 is the latest oral chelator to be developed. It is known to be twice as efficacious as Desferal. Initially introduced by NOVARTIS in Europe as ‘Exjade’ and later in India as ‘Asunra’, the drug is now also made available by CIPLA as ‘Desirox’. The excretion of iron is mainly through faecal matter. The maximum dose recommended is 30 mg/kg of patient’s body weight.
                            <br /><br />
                            Initially Desferal seemed to be the only option available. The compliance problem and the prohibitive cost seemed to be the hurdle in its use. Kelfer was increasingly used in India due to ease of administering and low cost. However after studies indicated that Kelfer worked better than Desferal with respect to removal of cardiac iron overload, doctors started suggesting a combination therapy of Desferal and Kelfer. With reports of successful trials many patients would like to watch its efficacy on Indian patients before switching over to Asunra or Desirox. It is believed that over time, ICL 670 (either Asunra or Desirox) will become the preferred iron chelator.
                        </Paragraph>
                        <Heading id='cure'>Cure</Heading>
                        <Subheading>Stem cell transplant</Subheading>
                        <Paragraph>
                            Thalassaemia Major is caused by genetic mutations resulting in the reduced or non-production of Beta Chains. As a result globin synthesis does not take place resulting in premature destruction of Red Blood Cells.
                            Production of R.B.C.s takes place in the Bone Marrow. Unfortunately, the Bone Marrow of a Thalassaemia Major child produces R.B.C’s, which die prematurely. The permanent cure, therefore would involve the ability to produce RBCs.
                            <br /><br />
                            Stem Cells are the parent bone marrow cells of the human body. They have the ability to become different types of blood cells like RBCs, WBCs and Platelets. They are typically found in three places:
                            <br /><br />
                            Bone Marrow<br />
                            The Blood Stream<br />
                            Cord Blood<br /><br />
                            Transplant of stem cells from a donor to a Thalassaemia Major patient can offer a permanent cure. This transplant will be possible if the HLA (Human Leucocyte Antigen) type of the donor matches that of the recepient. One option is to search for an ‘HLA-matched’ donor from within the family. But in more than 70% of the cases this may not yield a match. It is therefore necessary to look at unrelated donors too. This will be facilitated if a registry is prepared of willing donors, whose HLA typing has been done. The chances of finding a matching donor will be higher if the donor belongs to the same ethnic group. Unfortunately patients in India have to depend on American and European Stem Cell registries, as India does not yet have a functional registry.
                            <br /><br />Stem Cells Trasplantation can be effected by:<br /><br />

                            <Span>Bone Marrow Transplant</Span><br />
                            Bone Marrow is the spongy substance which is found inside the hollow bones of the body, and contains stem cells. The Bone Marrow donor will have to undergo a procedure in sterile conditions in a hospital. Under general anaesthesia, the bone marrow is aspirated from the back of the hip bone of the donor in the procedure which may atke up to 2 hours. The donor’s marrow is replenished within 6 weeks.
                            <br /><br />
                            <Span>Peripheral Blood Stem Cell Transplant</Span><br />
                            In this procedure the donor is given injections of a growth factor for four to five consecutive days. This facilitates mobilization of stem cells from the bone marrow into the blood stream. The donor is then required to go through a process of ‘Apheresis’, which will draw blood through a vein, pass the blood through the Apheresis Machine for separation of Stem Cells, and return the remaining components to the donor. This cycle is repeated, and the entire procedure will take between 3 to 4 hours. If enough stem cells are not collected during this procedure a repetition will be required.
                            <br /><br />
                            <Span>Cord Blood Transplant</Span><br />
                            Cord Blood is placental blood which is collected during child birth. This cord blood, which is very rich in stem cells, is collected and stored for future use. Therefore there is no question of looking for a donor. The risk of Graft Versus Host Disease (GVHD), which exists in other Stem Cells Transplants, is much lesser in the case of Cord Blood.
                            <br /><br />
                            Apart from the hurdle of finding a matching donor, Stem Cell Transplant also has to contend with a huge financial cost as well as careful and extended post-operative care. These hurdles put the option of stem cell transplant outside the reach of most Indian patients.
                        </Paragraph>
                        <Subheading>Stem cell registry</Subheading>
                        <Paragraph>
                            HLA-matched Stem Cells can offer a cure to thalassaemia major patients. Leukemia patients also can look forward to Stem Cells Transplant as a life saving procedure. However, it is important that the HLA factors of the patient and the donor are found to match. Relatives and close friends of patients in India today form the core registry from which to identify HLA-matched donors. This is because there exists no registry of Stem cell Donors in India. Less than 30% of the patients may find a donors from this pool. The European and American registries offer only a very, very slim chance of finding an HLA-matched donor. It is easier to find a match from a pool consisting of people from the same ethnic group.
                            <br /><br />
                            The Bone Marrow Registry of India (BMRI) has been established with the objective of preparing and maintaining a centralized and confidential HLA typed database of potential voluntary donors of Indian ethnic background. The BMRI will be networked with other registries, thereby providing access to donors all over the world.
                            <br /><br />
                            You could get in touch with Think Foundation if you desire to be a Stem Cell Donor, or if you would like to have an awareness session on Stem Cell Transplant in your institution.
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