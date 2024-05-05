import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ExampleCard1 from "pages/Presentation/components/ExampleCard/index1";
import { Grid } from "@mui/material";
// import MKBox from "components/MKBox";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import { storage } from "../fire";


const RealtimeData = ({ val }) => {
  const [imageData, setImageData] = useState([]);
  const imagesListRef = ref(storage, `UserData${val}/`);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { items } = await listAll(imagesListRef);

        const data = await Promise.all(
          items.map(async (item) => {
            const url = await getDownloadURL(item);
            const metadata = await getMetadata(item);

            const name = metadata.customMetadata.name;
            const count = metadata.customMetadata.count;
            const des = metadata.customMetadata.des;
            const route = metadata.customMetadata.route;

            return { url, name, count, des, route };
          })
        );

        setImageData(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        {imageData.map((row, index) => (
          <Grid item xs={4} md={7} sx={{ mb: -5 }} key={index}>
            <Link to={"/sections/elements/PJ3"}>
              <ExampleCard1 image={row.url} name={row.name} count={row.count} />
            </Link>
          </Grid>
        ))}
      </Grid>
      <a href="http://127.0.0.1:3001/material-kit-react-main/src/pages/Presentation/sections/DC%20Publication/cse.iitkgp.ac.in/resgrp/ubinet/publications/index.html" style={{ textDecoration: 'underline' }}>
        See All Publications
      </a>
    </div>
  );
};

RealtimeData.propTypes = {
  val: PropTypes.number.isRequired,
};

export default RealtimeData;
