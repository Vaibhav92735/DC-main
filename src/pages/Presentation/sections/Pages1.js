import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import DesignBlocks1 from "./DB_2";
import DesignBlocks12 from "./DB2_2";
import DesignBlocksp from "./DBpro2";
import LoginForm from "../logi2";
// import LoginForm2 from "../logi3";
import { useState } from "react";

function PresentationPages() {

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <MKBox component="section" py={1}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={10}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="boost creativity"
            container
            sx={{ mb: 1 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
          Undergrad Research Volunteers and Interns
          </MKTypography>
        
        </Grid>
          
      </Container>
      <Container sx={{ mt: { xs: 1, lg: 10 } }}>
        <Grid container spacing={3}>
          <Grid item xs={2} lg={6} sx={{ mt: 3, px: { xs: 0, lg: 0 }, marginRight: 0 }}>
            
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Prakriti app development
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li>Abhishek Raghav</li>
              <li>Abhinav Kashyap</li>
<li>Hriday Kondru</li>
<li>Akriti Gupta</li>
<li>Khushi Parikh</li>
<li>Mohammad Zaid Shamshad</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Web development for sensing as service middleware
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li>Naman Goyal</li>
              <li>Aakash Maheshwari</li>
<li>Vansh Agarwal</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            IoT device development: bat tracker/wearable/OBU for two-wheeler
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li>Rachit Agnihotri</li>
              <li>Sneha Gupta</li>
<li>Uppala Giridhar</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Multimodal data analysis for HAR
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li>Shubh Goyal</li>
              <li>Sukriti Goyal</li>
<li>Ashish Cherukuri</li>
<li>Kartik Choudhary</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Wargaming UX/UI
           
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li>Rankireddy Sai Mani Akarsh</li>
              <li>Shivam Kumar</li>
            </ul>
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ mt: 3, px: { xs: 0, lg: 18 } }}>
            <MKTypography variant="h5" fontWeight="bold" mb={1}>
            Interns
            </MKTypography>
            <MKTypography variant="h6" fontWeight="bold" mb={1}>
            2023
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li><a href="https://www.linkedin.com/in/martin-kaushal-7689761bb/?originalSubdomain=in" style={{color :"blue"}}>Martin Kaushal </a>(Thapar Institute) - Android Development</li>
              <li><a href="https://www.linkedin.com/in/arihant-tanwar-778520191/?originalSubdomain=in" style={{color :"blue"}}>Arihant Tanwar</a> (Thapar Institute) - Trajectory Prediction</li>
<li><a href="https://www.linkedin.com/in/pratham-garg-781206249/?originalSubdomain=in" style={{color :"blue"}}>Pratham Garg </a> (Thapar Institute) - Object Recognition</li>
<li><a href="https://www.linkedin.com/in/sheral-singla-b97103232/?originalSubdomain=in" style={{color :"blue"}}>Sheral Singla </a>(Thapar Institute) - HAR</li>
<li><a href="https://www.linkedin.com/in/raghav-garg-b3a0361bb/?originalSubdomain=in" style={{color :"blue"}}>Raghav Garg</a> (Thapar Institute) - Communication Protocol</li>
<li>Ravindra (IIIT Vadodara) - Android Development</li>
<li>Tanmay Bajaj (IIT Roorkee) - Sensing as a Service</li>
<li>Swarup Kumar Mondal (Heritage Institute of Technology) - HAR</li>
<li>Azhar Khan (IIT Jodhpur) - Embedded Systems</li>
<li><a href="https://www.linkedin.com/in/raghav-garg-b3a0361bb/?originalSubdomain=in" style={{color :"blue"}}>Kartik Chhipa</a> (IIT Jodhpur) - Sensing as a Service</li>
<li>Ankur Kumar Shukla (IIIT Vadodara) - HAR</li>
<li>Jaysukh (IIT Jodhpur) - Android Development</li>
<li>Naman Labhsetwar (Pune Institute of Computer Technology) - Wifi Sensing and ML</li>
<li>Aditya Deshpande (Pune Institute of Computer Technology) - Wifi Sensing and ML</li>
            </ul>
            </MKTypography>
            <MKTypography variant="h6" fontWeight="bold" mb={1}>
            2022
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            <ul>
              <li><a href="https://www.linkedin.com/in/avijit-das-50960b207/" style={{color :"blue"}}>Avijit Das </a> (IIT Madras), Smartphone Sensory Data Management</li>
              <li><a href="https://www.linkedin.com/in/yaman-saraswat-75979b1b9/" style={{color :"blue"}}>Yaman Saraswat </a> (NIT Agartala), Multi Modal Data Analysis</li>
<li><a href="https://www.linkedin.com/in/saksham-gautam-22b41b203/" style={{color :"blue"}}>Saksham Gautam </a>  (IIIT Prayagraj), IMU Based Sensing</li>
<li><a href="https://www.linkedin.com/in/khushbu-bijawat-27b4a11b3/" style={{color :"blue"}}>Khushbu Bijawat</a> (MBM, Jodhpur), Smartwatch Sensory Data Management</li>
<li><a href="https://www.linkedin.com/in/anushkaagarwal24/" style={{color :"blue"}}>Anushka Agarwal</a> (RV College Of Engineering), Smartwatch Sensory Data Management</li>

            </ul>
            </MKTypography>
            <LoginForm val={5}/>
            <button onClick={toggleForm}>Add Details</button>
          </Grid>
        </Grid>
      
      </Container>
  <DesignBlocks1></DesignBlocks1>
  <DesignBlocks12></DesignBlocks12>
  <DesignBlocksp></DesignBlocksp>
    </MKBox>
  
  );
}
// 2022
// Avijit Das (IIT Madras), Smartphone Sensory Data Management
// Yaman Saraswat (NIT Agartala), Multi Modal Data Analysis
// Saksham Gautam (IIIT Prayagraj), IMU Based Sensing
// Khushbu Bijawat (MBM, Jodhpur), Smartwatch Sensory Data Management
// Anushka Agarwal (RV College Of Engineering), Smartwatch Sensory Data Management

export default PresentationPages;
