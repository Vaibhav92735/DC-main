// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import ExampleCard1 from "pages/Presentation/components/ExampleCard/index1";
// import { Grid } from "@mui/material";
// // import MKBox from "components/MKBox";
// import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
// import { storage } from "../fire";


// const RealTry = ({ val }) => {
//   const [imageData, setImageData] = useState([]);
//   const imagesListRef = ref(storage, `images/`);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const { items } = await listAll(imagesListRef);

//         const data = await Promise.all(
//           items.map(async (item) => {
//             const url = await getDownloadURL(item);
//             const metadata = await getMetadata(item);

//             const name = metadata.customMetadata.name;
//             const count = metadata.customMetadata.count;
//             const des = metadata.customMetadata.des;
//             const route = metadata.customMetadata.route;
//             const newField = metadata.customMetadata.newField;

//             return { url, name, count, des, route, newField };
//           })
//         );

//         setImageData(data);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div>
//       <Grid container spacing={3}>
//         {imageData.map((row, index) => (
//           <Grid item xs={4} md={7} sx={{ mb: -5 }} key={index}>
//             <Link to={"/sections/elements/PJ3"}>
//               <ExampleCard1 image={row.url} name={row.name} count={row.count} />
//             </Link>
//           </Grid>
//         ))}
//       </Grid>
//       <a href="http://127.0.0.1:3001/material-kit-react-main/src/pages/Presentation/sections/DC%20Publication/cse.iitkgp.ac.in/resgrp/ubinet/publications/index.html" style={{ textDecoration: 'underline' }}>
//         See All Publications
//       </a>
//     </div>
//   );
// };

// RealtimeData.propTypes = {
//   val: PropTypes.number.isRequired,
// };

// export default RealTry;
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ExampleCard1 from "pages/Presentation/components/ExampleCard/index1";
import { Grid } from "@mui/material";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import { storage } from "./fire";

const RealTry = () => {
  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesListRef = ref(storage, `images/`);
        const { items } = await listAll(imagesListRef);

        items.forEach(async (item) => {
          const url = await getDownloadURL(item);
          const metadata = await getMetadata(item);
          const { newField } = metadata.customMetadata;

          setGroupedData(prevData => ({
            ...prevData,
            [newField]: [...(prevData[newField] || []), { url, ...metadata.customMetadata }]
          }));
        });
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {Object.entries(groupedData).map(([field, data], index) => (
        <div key={index}>
          <h2>{field}</h2>
          <Grid container spacing={3}>
            {data.map((item, i) => (
              <Grid item xs={4} md={7} sx={{ mb: -5 }} key={i}>
                <Link to={`/sections/elements/${item.route}`}>
                  <ExampleCard1 image={item.url} name={item.name} count={item.count} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
      <a href="http://127.0.0.1:3001/material-kit-react-main/src/pages/Presentation/sections/DC%20Publication/cse.iitkgp.ac.in/resgrp/ubinet/publications/index.html" style={{ textDecoration: 'underline' }}>
        See All Publications
      </a>
    </div>
  );
};

RealTry.propTypes = {
  val: PropTypes.number.isRequired,
};

export default RealTry;
