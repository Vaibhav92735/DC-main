import React, { useState, useEffect } from 'react';
// import React from 'react';
import { Link } from 'react-router-dom'; // Remove the unnecessary 'Route' and 'Routes' imports
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import ExampleCard1 from "pages/Presentation/components/ExampleCard/index1";
import pro from './pro';
import RealtimeData from './RealtimeData';


function DesignBlocksp() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating an asynchronous data fetch operation
        // Replace this with your actual data fetching logic
        await new Promise(resolve => setTimeout(resolve, 1000));
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  let val = 2;
  const renderData = pro.map(({ title, items }) => {
    val = val + 1;
    return(
    <Grid container spacing={0} sx={{ mb: 0 }} key={title}>
      <Grid item xs={12} lg={0}>
        <MKBox position="sticky" top="100px" pb={{ xs: 5, lg: 7 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={0}>
        <Grid container spacing={1}>
          {items.map(({ image, name, count, des, route, pro }) => (
            <Grid item xs={12} lg={0} md={17} sx={{ mb: '-2vh' }} key={name} >
              <Link to={route}>
                <ExampleCard1 image={image} name={name} count={count} des={des} pro={pro} />
               
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={60}>
               <RealtimeData val={val} />
             </Grid>
      </Grid>
      
      
  
      <div style={{ textAlign: 'right', marginBottom: '10vh', marginTop: '10px', marginLeft: 'auto' }}>
  <a
    href="http://127.0.0.1:3000/material-kit-react-main/src/pages/Presentation/sections/DC%20Publication/cse.iitkgp.ac.in/resgrp/ubinet/publications/project.html"
    style={{ textDecoration: 'underline',marginBottom:'10vh'}}
  >
    See All Publication
  </a>
</div>





    </Grid>
  )});

  return (
    <MKBox component="section" my={-15} py={6}>
      <Container>
        <Grid
          container
          item
          xs={0}
          lg={9}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge variant="contained" color="info" container sx={{ mb: 2 }} />
        </Grid>
      </Container>
     
      <Container sx={{ mt: 3 }}>{renderData}</Container>
      
    </MKBox>
  );
}

export default DesignBlocksp;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
// import MKTypography from "components/MKTypography";
// import ExampleCard1 from "pages/Presentation/components/ExampleCard/index1";
// import data1 from './data';
// import RealtimeData from './RealtimeData';
// import LoginForm from '../logi';

// function DesignBlocks1() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Simulating an asynchronous data fetch operation
//         // Replace this with your actual data fetching logic
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         setData(data1);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   let val = 0;

//   const renderData = data.map(({ title, items }) => {
//     val = val + 1; // Increment val for every title
//     console.log(title)
//     console.log(val);
//     return (
//       <Grid container spacing={3} key={title}>
//         <Grid item xs={12}>
//           <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 8 }}>
//             <MKTypography variant="h3" fontWeight="bold" mb={1}>
//               {title}
//             </MKTypography>
//           </MKBox>
//         </Grid>
//         <Grid>
//           {items.map(({ image, name, count, des, route, pro }) => (
//             <Grid item xs={4} md={7} key={name}>
//               <Link to={route}>
//                 <ExampleCard1 image={image} name={name} count={count} des={des} pro={pro} />
//               </Link>
//             </Grid>
//           ))}
//         </Grid>
//         {/* Pass val to LoginForm component */}
//         <Grid item xs={60}> {/* Adjust the column size as needed */}
//               <RealtimeData val={val} />
//             </Grid>
//         <Grid item xs={60}>
//           <LoginForm val={val} />
//         </Grid>
//       </Grid>
//     );
//   });

//   return (
//     <MKBox component="section" my={-15} py={6}>
//       <Container>
//         <Grid
//           container
//           item
//           xs={1}
//           lg={9}
//           flexDirection="column"
//           alignItems="center"
//           sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
//         >
//           <MKBadge variant="contained" color="info" container sx={{ mb: 2 }} />
//         </Grid>
//       </Container>

//       <Container sx={{ mt: 6 }}>
//         {renderData}
//         {/* <RealtimeData /> */}
//         <div style={{ textAlign: 'center' }}>
//           <a href="http://127.0.0.1:3001/material-kit-react-main/src/pages/Presentation/sections/DC%20Publication/cse.iitkgp.ac.in/resgrp/ubinet/publications/index.html" style={{ textDecoration: 'underline' }}>
//             See All Publications
//           </a>
//         </div>
//       </Container>
//     </MKBox>
//   );
// }

// export default DesignBlocks1;
