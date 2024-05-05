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

function ImageGal({ val }) {
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
            const newField = metadata.customMetadata.newField;
            const image = metadata.customMetadata.image;
            const pro = metadata.customMetadata.pro;
            const route = "/sections/page-sections/TAn";
            console.log(image)
            // Include relevant data in the returned object
            return {
              title,
              name,
              url,
              count,
              des,
              // image,
              pro,
              route,
              newField
            };
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
  }, [val]);

  if (loading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or component
  }

  if (error) {
    return <p>Error: {error}</p>; // You can replace this with an error component
  }

  const renderData = imageData.map(({ title, name, url, count, des, pro, route, newField }, index) => {
    console.log('Title:', title);

    if (title !== 'Others') {
      console.log('Skipping rendering for non-"Others" title');
      return null;
    }

    return (
      <Grid container spacing={0} sx={{ mb: 0 }} key={index}>
        <h1>{newField}</h1>
        <Grid item xs={2} lg={12}>
          <Grid container spacing={3}>
            <Grid item xs={1} md={3} sx={{ mb: 2 }}>
              <Link to={route}>
                <ExampleCard
                  image={url}
                  name={name}
                  count={count}
                  des={des}
                  pro={pro}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  });

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
ImageGal.propTypes = {
  val: PropTypes.number.isRequired,
};

export default ImageGal;
