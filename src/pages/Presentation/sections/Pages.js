import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import DesignBlocks1 from "./DB";
import DesignBlocks12 from "./DB2";
import DesignBlocksp from "./DBpro";
// import DesignBlocksData from "./data/designBlocksData";
// import DesignBlocks from "./DesignBlocks";
import { Divider } from "@mui/material";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
import { ref, getDownloadURL, getMetadata, list } from 'firebase/storage';
import storage from './fire2';
// import ImageGal from "./lab";

function PresentationPages() {
  const [labStudentsData, setLabStudentsData] = useState([]);
  const [internsData2022, setInternsData2022] = useState([]);
  const [internsData2023, setInternsData2023] = useState([]);
  const [otherTitlesData, setOtherTitlesData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storageRef = ref(storage, 'LabAlumni');
        const listResult = await list(storageRef);

        const groupedData = await Promise.all(listResult.items.map(async (itemRef) => {
          const downloadURL = await getDownloadURL(itemRef);
          const metadata = await getMetadata(itemRef);
          return { downloadURL, metadata };
        })).then(data => data.reduce((acc, current) => {
          if (current.metadata.customMetadata.type === 'Lab Students') {
            return { ...acc, labStudents: [...acc.labStudents, current] };
          } else if (current.metadata.customMetadata.type === 'Intern') {
            if (current.metadata.customMetadata.year === '2023') {
              return { ...acc, interns2022: [...acc.interns2022, current] };
            } else if (current.metadata.customMetadata.year === '2024') {
              return { ...acc, interns2023: [...acc.interns2023, current] };
            }

          }
          else {
            // For other types, group by title
            const title = current.metadata.customMetadata.title;
            return { ...acc, [title]: [...(acc[title] || []), current] };
          }
          return acc;
        }, { labStudents: [], interns2022: [], interns2023: [] }));

        setLabStudentsData(groupedData.labStudents);
        setInternsData2022(groupedData.interns2022);
        setInternsData2023(groupedData.interns2023);
        const filteredOtherTitles = Object.keys(groupedData)
          .filter(title => !['labStudents', 'interns2022', 'interns2023'].includes(title))
          .reduce((acc, title) => {
            acc[title] = groupedData[title];
            return acc;
          }, {});

        setOtherTitlesData(filteredOtherTitles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <div style={{ backgroundColor: '#F8F8F8' ,marginTop:"150px" }}>
    <MKBox component="section" py={10} style={{ backgroundColor: '#F8F8F8' ,marginBottom :"50px"}}>
      <Container >
        <Grid
          container
          item
          xs={12}
          lg={13}
          justifyContent="left"
          sx={{ mx: "auto", textAlign: "left" }}
        >
       
          <MKTypography variant="h2" >Lab Alumni</MKTypography>
          {/* <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679,477+ web developers
          </MKTypography> */}
          {/* <MKTypography variant="body1" color="text" mb={2}>
            Many Fortune 500 companies, startups, universities and governmental institutions love
            Creative Tim&apos;s products.
          </MKTypography> */}
        </Grid>
        
        <Grid container spacing={3} sx={{ mt: -1 }}>
          <Grid item xs={12} md={6} lg={4}>
          
            <DefaultReviewCard
              name="Lab Students"
             
              review=<div><MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}><ul>
                <li style={{  fontSize: "18px" }}>Priyal Jain</li>
                <li style={{  fontSize: "18px" }}>Nayanita Saha</li>
                {labStudentsData.map((student, index) => (
                  <li key={index} style={{  fontSize: "18px" }}><a href={student.metadata.customMetadata.url} style={{color :"blue"}}>{student.metadata.customMetadata.name}</a></li>
                ))}
               
              </ul></MKTypography></div>
            />
            <DefaultReviewCard
                  review=
                  <div>
                    {Object.keys(otherTitlesData).map(title => (
                      <div key={title}>
                        <MKTypography variant="h5" fontWeight="bold" mb={1}>
                          {title}
                        </MKTypography>
                        <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                          <ul>
                            {otherTitlesData[title].map((student, index) => (
                              <li key={index} style={{  fontSize: "18px" }}><a href={student.metadata.customMetadata.url} style={{color :"blue"}}>
                                {student.metadata.customMetadata.name}</a></li>
                            ))}
                          </ul>
                        </MKTypography>
                      </div>
                    ))}
                  </div>
                  rating={5}
                />
          </Grid>
          
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
            
              name=<div>Undergraduate</div>
              date="1 week ago"
              review=<div><MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={1}>
              <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Prakriti app development
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{  fontSize: "18px" }}>Abhishek Raghav</li>
              <li style={{  fontSize: "18px" }}>Abhinav Kashyap</li>
<li style={{  fontSize: "18px" }}>Hriday Kondru</li>
<li style={{  fontSize: "18px" }}>Akriti Gupta</li>
<li style={{  fontSize: "18px" }}>Khushi Parikh</li>
<li style={{  fontSize: "18px" }}>Mohammad Zaid Shamshad</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Web development for sensing as service middleware
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{  fontSize: "18px" }}>Naman Goyal</li>
              <li style={{  fontSize: "18px" }}>Aakash Maheshwari</li>
<li style={{  fontSize: "18px" }}>Vansh Agarwal</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            IoT device development: bat tracker/wearable/OBU for two-wheeler
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li style={{  fontSize: "18px" }}>Rachit Agnihotri</li>
              <li style={{  fontSize: "18px" }}>Sneha Gupta</li>
<li style={{  fontSize: "18px" }}>Uppala Giridhar</li>
            </ul>
            </MKTypography>
           </MKTypography></div>
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name=<div>Interns<br />2023</div>
              date="3 weeks ago"
              review=<div>   <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}><ul>
              <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/martin-kaushal-7689761bb/?originalSubdomain=in" style={{color :"blue"}}>Martin Kaushal </a>(Thapar Institute) - Android Development</li>
              <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/arihant-tanwar-778520191/?originalSubdomain=in" style={{color :"blue"}}>Arihant Tanwar</a> (Thapar Institute) - Trajectory Prediction</li>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/pratham-garg-781206249/?originalSubdomain=in" style={{color :"blue"}}>Pratham Garg </a> (Thapar Institute) - Object Recognition</li>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/sheral-singla-b97103232/?originalSubdomain=in" style={{color :"blue"}}>Sheral Singla </a>(Thapar Institute) - HAR</li>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/raghav-garg-b3a0361bb/?originalSubdomain=in" style={{color :"blue"}}>Raghav Garg</a> (Thapar Institute) - Communication Protocol</li>
<li style={{  fontSize: "18px" }}>Ravindra (IIIT Vadodara) - Android Development</li>
              {internsData2023.map((student, index) => (
                  <li key={index} style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/avijit-das-50960b207/" style={{ color: "blue" }}>{student.metadata.customMetadata.name} </a> ({student.metadata.customMetadata.institute}), {student.metadata.customMetadata.project}</li>
                ))}
<MKTypography variant="h5" fontWeight="bold"  mb={1} pr={2}>2022</MKTypography>
<li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/avijit-das-50960b207/" style={{ color: "blue" }}>Avijit Das </a> (IIT Madras), Smartphone Sensory Data Management</li>
  <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/yaman-saraswat-75979b1b9/" style={{ color: "blue", fontSize: "18px" }}>Yaman Saraswat </a> (NIT Agartala), Multi Modal Data Analysis</li>
  <li style={{  fontSize: "18px" }}><a href="https://www.linkedin.com/in/saksham-gautam-22b41b203/" style={{ color: "blue", fontSize: "18px" }}>Saksham Gautam </a>  (IIIT Prayagraj), IMU Based Sensing</li>
                {internsData2022.map((student, index) => (
                  <li key={index} style={{  fontSize: "18px" }}><a href={student.metadata.customMetadata.url} style={{ color: "blue" }}>{student.metadata.customMetadata.name} </a> ({student.metadata.customMetadata.institute}), {student.metadata.customMetadata.project}</li>
                ))}
              </ul> <a href="/sections/attention-catchers/Interns" style={{ fontSize: '18px', float: 'right', color: 'blue' }}>
  See All Details
</a></MKTypography> 
             
 
              
                     
              </div>
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={25} justifyContent="center">
        {/*   <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid> */}
          {/* <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
    <MKBox component="section" py={0.02} style={{ backgroundColor: '#F8F8F8' ,textAlign: 'justify' }}>
  
    
    
    
 
    </MKBox>
    </div>
    <DesignBlocks1></DesignBlocks1>
    <DesignBlocks12></DesignBlocks12>
    <DesignBlocksp></DesignBlocksp>
    </div>
  
  );
}
// 2022
// Avijit Das (IIT Madras), Smartphone Sensory Data Management
// Yaman Saraswat (NIT Agartala), Multi Modal Data Analysis
// Saksham Gautam (IIIT Prayagraj), IMU Based Sensing
// Khushbu Bijawat (MBM, Jodhpur), Smartwatch Sensory Data Management
// Anushka Agarwal (RV College Of Engineering), Smartwatch Sensory Data Management

export default PresentationPages;
