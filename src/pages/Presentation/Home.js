// import React, { useState } from "react";
// // import firebase from "firebase/app";
// // import { database } from "./sections/fire.js"
// import PropTypes from "prop-types";
// import "./styling.css";

// const Form = () => {
//   const [user, setUser] = useState({
//     Title: "",
//     Image: null,
//     Author: "",
//     Abstract: "",
//     FundingAgency: "",
//     Date: "",
//   });

//   // useEffect(() => {
//   //   const unsubscribe = auth.onAuthStateChanged((user) => {
//   //     setUser(user);
//   //   });
//   //   return () => {
//   //     unsubscribe();
//   //   };
//   // }, []);

//   const data = (e) => {
//     const { name, value, files } = e.target;

//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const getData = async (e) => {
//     e.preventDefault();
//     const { Title, Image, Author, Abstract, FundingAgency, Date } = user;
  
//     const formData = new FormData();
//     formData.append('Title', Title);
//     formData.append('Image', Image);
//     formData.append('Author', Author);
//     formData.append('Abstract', Abstract);
//     formData.append('FundingAgency', FundingAgency);
//     formData.append('Date', Date);
//     if (user && user.isAdmin){
//     const options = {
//         method: 'POST',
//         body: JSON.stringify({
//           Title,
//           Image,
//           Author,
//           Abstract,
//           FundingAgency,
//           Date,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       };
  
//     try {
//       const res = await fetch(
//         'https://descred-1ead6-default-rtdb.firebaseio.com/UserData.json',
//         options
//       );
  
//       if (res.ok) {
//         console.log('Data saved');
//       } else {
//         console.error('Failed to save data:', await res.text());
//       }
//     } catch (error) {
//       console.error('Error during fetch:', error);
//     }
//   };
// }
  

//   return(
//     <div className="form-container">
//       <form onSubmit={getData} method="POST">
//         <label className="form-label">Title</label>
//         <input
//           type="text"
//           name="Title"
//           className="form-input"
//           onChange={data}
//         />
//         <label className="form-label">Image</label>
//         <input type="file" name="Image" className="form-input" onChange={data} />
//         <label className="form-label"
//         >Author</label>
//         <input type="text" name="Author" className="form-input" onChange={data} />
//         <label className="form-label">Abstract</label>
//         <input type="text" name="Abstract" className="form-input" onChange={data} />
//         <label className="form-label">Funding Agency</label>
//         <input
//           type="text"
//           name="FundingAgency"
//           className="form-input"
//           onChange={data}
//         />
//         <label className="form-label">Date</label>
//         <input type="text" name="Date" className="form-input" onChange={data} />
//         <button type="submit" className="form-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// Form.propTypes = {
//   isVisible: PropTypes.bool.isRequired,
// };

// export default Form;
// import React, { useState } from "react";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "./sections/fire.js";
// import PropTypes from "prop-types";
// import "./styling.css";

// const Form = () => {
//   const [user, setUser] = useState({
//     Title: "",
//     Image: null,
//     Author: "",
//     Abstract: "",
//     FundingAgency: "",
//     Date: "",
//   });

//   const data = (e) => {
//     const { name, value, files } = e.target;

//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const getData = async (e) => {
//     e.preventDefault();
//     const { Title, Image, Author, Abstract, FundingAgency, Date } = user;

//     // Get a reference to the storage service
//     const storageRef = getStorage(storage);

//     // Create a storage reference with a unique name
//     const imageRef = ref(storageRef, `images/${Image.name}`);

//     // Upload the image to Firebase Storage
//     await uploadBytes(imageRef, Image);

//     // Get the download URL of the uploaded image
//     const imageUrl = await getDownloadURL(imageRef);

//     // Now you can use imageUrl to store in your database or perform other actions

//     // Example: Storing data in Firebase Realtime Database
//     const databaseOptions = {
//       method: 'POST',
//       body: JSON.stringify({
//         Title,
//         Image: imageUrl,
//         Author,
//         Abstract,
//         FundingAgency,
//         Date,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     try {
//       const res = await fetch(
//         'https://descred-1ead6-default-rtdb.firebaseio.com/UserData.json',
//         databaseOptions
//       );

//       if (res.ok) {
//         console.log('Data saved');
//       } else {
//         console.error('Failed to save data:', await res.text());
//       }
//     } catch (error) {
//       console.error('Error during fetch:', error);
//     }
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={getData} method="POST">
//         <label className="form-label">Title</label>
//         <input
//           type="text"
//           name="Title"
//           className="form-input"
//           onChange={data}
//         />
//         <label className="form-label">Image</label>
//         <input type="file" name="Image" className="form-input" onChange={data} />
//         <label className="form-label">Author</label>
//         <input type="text" name="Author" className="form-input" onChange={data} />
//         <label className="form-label">Abstract</label>
//         <input type="text" name="Abstract" className="form-input" onChange={data} />
//         <label className="form-label">Funding Agency</label>
//         <input
//           type="text"
//           name="FundingAgency"
//           className="form-input"
//           onChange={data}
//         />
//         <label className="form-label">Date</label>
//         <input type="text" name="Date" className="form-input" onChange={data} />
//         <button type="submit" className="form-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// Form.propTypes = {
//   isVisible: PropTypes.bool.isRequired,
// };

// export default Form;

import React, { useState } from 'react';
import "./st.css"
// import storage from './firebaseConfig';
import storage from './sections/fire2';
import PropTypes from "prop-types";
// import { Database } from 'firebase/database';
// import { database } from './sections/fire';
import { ref, uploadBytesResumable, getDownloadURL, getMetadata } from 'firebase/storage';
// import { Label } from '@mui/icons-material';

function Form({ val }) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [count, setCount] = useState('');
  const [link, setLink] = useState('');
  // const [progress, setProgress] = useState(0);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image || !name || !description || !count || !link) {
      // Validation: Ensure all fields are filled
      console.error('Please fill in all fields');
      return;
    }

    console.log(val);

    const storageRef = ref(storage, `UserData${val}/${image.name}`);
    const metadata = {
      customMetadata: {
        name,
        description,
        count,
        link,
      },
    };

    const uploadTask = uploadBytesResumable(storageRef, image, metadata);

    uploadTask.on(
      'state_changed',
      // (snapshot) => {
        // Progress tracking
        // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        // setProgress(progress);
      // },
      (error) => {
        // Handle error
        console.error(error);
      },
      async () => {
        // Handle successful upload
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log('File available at', downloadURL);

        // Retrieve and log metadata
        const metadata = await getMetadata(storageRef);
        console.log('Metadata:', metadata);

        // Reset form fields and progress
        setName('');
        setDescription('');
        setCount('');
        setLink('');
        setImage(null);
        // setProgress(0);
      }
    );
  };

  // const [fetchedData, setFetchedData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Replace 'UserData' with the actual path to your data in the database
  //       const response = await database.ref('UserData').once('value');
  //       const data = response.val();
        
  //       if (data) {
  //         // Update state with fetched data
  //         setFetchedData(Object.values(data));
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className='form-container'>
      <label>Title:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Image:</label>
      <input type="file" onChange={handleImageChange} />
      <label>Author:</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <label>Abstract:</label>
      <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
      <label>Funding Agency:</label>
      <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      <button onClick={handleUpload}>Submit</button>
    </div>
  );
}

Form.propTypes = {
  val: PropTypes.number.isRequired,
};

export default Form;