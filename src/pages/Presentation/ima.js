import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { storage } from './sections/fire';
import { ref, listAll, getDownloadURL, getMetadata } from 'firebase/storage';
import { Grid, Container } from '@mui/material';
import MKBox from 'components/MKBox';
import MKBadge from 'components/MKBadge';
import { Link } from 'react-router-dom';
import ExampleCard from './components/ExampleCard';

const imagesListRef = ref(storage, 'images/');

function ImageGallery({ val }) {
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { items } = await listAll(imagesListRef);

        const data = await Promise.all(
          items.map(async (item) => {
            const url = await getDownloadURL(item);
            const metadata = await getMetadata(item);
            const title = metadata.customMetadata.selectedItem;
            const name = metadata.customMetadata.name;
            const count = metadata.customMetadata.count;
            const des = metadata.customMetadata.des;
            const route = "/sections/page-sections/TA1";
            if (val === 1 && title === "PhD Scholar") {
              return { url, name, count, des, route };
            } else if (val === 2 && title === "Part Time PhD Scholar") {
              return { url, name, count, des, route };
            } else if (val === 3 && title === "Executive Scholar") {
              return { url, name, count, des, route };
            } else {
              // console.log(title);
              // Handle other conditions if needed
              return null;
            }
          })
        );

        setImageData(data.filter((item) => item !== null));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [val]); // Include val in the dependency array

  if (loading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or component
  }

  if (error) {
    return <p>Error: {error}</p>; // You can replace this with an error component
  }

  const renderData = imageData.map(({ name, url, des, count, route }, index) => (
    <Grid container spacing={0} sx={{ mb: 0 }} key={index}>
      <Grid item xs={2} lg={12}>
        <Grid container spacing={3}>
          <Grid item xs={1} md={3} sx={{ mb: 2 }} key={name}>
            <Link to={route} pageTitle={name}>
              <ExampleCard image={url} name={name} count={count} des={des} pro="your-pro" />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={4} py={6}>
      <Container>
        <Grid
          container
          item
          xs={1}
          lg={9}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: 'center', my: 6, mx: 'auto', px: 0.75 }}
        >
          <MKBadge variant="contained" color="info" container sx={{ mb: 2 }} />
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

// Add PropTypes to validate props
ImageGallery.propTypes = {
  val: PropTypes.number.isRequired,
};

export default ImageGallery;
