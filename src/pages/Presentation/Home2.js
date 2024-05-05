// import React, { useState, useEffect } from "react";
// import { auth } from "./sections/fire.js"
// import PropTypes from "prop-types";
// import "./styling.css";

// const Form = ({ isVisible = false }) => {
//   const [user, setUser] = useState({
//     name: "",
//     Image: null,
//     count: "",
//     des: "",
//     route: "",
//   });

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const data = (e) => {
//     const { name, value, files } = e.target;

//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const getData = async (e) => {
//     e.preventDefault();
//     const { name, image, count, des, route } = user;
  
//     const formData = new FormData();
//     formData.append('Name', name);
//     formData.append('Image', image);
//     formData.append('Count', count);
//     formData.append('Des', des);
//     formData.append('Route', route);
//     // formData.append('Date', Date);
//     if (user && user.isAdmin){
//     const options = {
//         method: 'POST',
//         body: JSON.stringify({
//           name,
//           image,
//           count,
//           des,
//           route,
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
  

//   return isVisible ? (
//     <div className="form-container">
//       <form onSubmit={getData} method="POST">
//         <label className="form-label">Name</label>
//         <input
//           type="text"
//           name="Name"
//           className="form-input"
//           onChange={data}
//         />
//         <label className="form-label">Image</label>
//         <input type="file" name="Image" className="form-input" onChange={data} />
//         <label className="form-label"
//         >Qualifications</label>
//         <input type="text" name="Count" className="form-input" onChange={data} />
//         <label className="form-label">Description</label>
//         <input type="text" name="Des" className="form-input" onChange={data} />
//         <label className="form-label">Route</label>
//         <input
//           type="text"
//           name="Route"
//           className="form-input"
//           onChange={data}
//         />
//         <button type="submit" className="form-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   ) :  null;
// };

// Form.propTypes = {
//   isVisible: PropTypes.bool.isRequired,
// };

// export default Form;
// ImageUpload.js
// ImageUpload.js
import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, getMetadata } from 'firebase/storage';
import DropdownForm from './DropdownForm'; // Import the new component
import storage from './sections/fire2';

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [count, setCount] = useState(0);
  const [link, setLink] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [progress, setProgress] = useState(0);
  const [newField, setNewField] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleDropdownChange = (selectedValue) => {
    setSelectedItem(selectedValue);
  };

  const handleUpload = async () => {
    if (!image || !selectedItem) {
      console.error(selectedItem);
      return;
    }

    const storageRef = ref(storage, `images/${image.name}`);
    const metadata = {
      customMetadata: {
        name,
        description,
        count,
        link,
        selectedItem, // Include the selected item in metadata
        newField,
      },
    };

    const uploadTask = uploadBytesResumable(storageRef, image, metadata);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      (error) => {
        console.error(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log('File available at', downloadURL);

        const metadata = await getMetadata(storageRef);
        console.log('Metadata:', metadata);

        setName('');
        setDescription('');
        setCount(0);
        setLink('');
        setImage(null);
        setSelectedItem('');
        setNewField('');
        setProgress(0);
      }
    );
  };

  return (
    <div className='form-container'>
      <label>Image:</label>
      <input type="file" onChange={handleImageChange} />
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Description:</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <label>Count:</label>
      <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
      <label>Link:</label>
      <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />

      {/* DropdownForm component */}
      <DropdownForm selected={selectedItem} onDropdownChange={handleDropdownChange} />

      {selectedItem === 'Others' && (
        <div>
          <label>New Field:</label>
          <input type="text" value={newField} onChange={(e) => setNewField(e.target.value)} />
        </div>
      )}

      <button onClick={handleUpload}>Upload Image</button>
      {progress > 0 && <progress value={progress} max="100" />}
    </div>
  );
}

export default ImageUpload;
