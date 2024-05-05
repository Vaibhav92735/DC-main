import React, { useState } from 'react';
import PropTypes from "prop-types";
import { ref, uploadBytesResumable } from 'firebase/storage';
import storage from './sections/fire2';

function Form() {
  const [name, setName] = useState('');
  const [type, setType] = useState('Lab Students');
  const [link, setLink] = useState('');

  const handleUpload = async () => {
    try {
      if (!name || !isValidURL(link)) {
        throw new Error('Please fill in all fields with valid data');
      }

      const storageRef = ref(storage, `Courses/${name}`);
      const metadata = {
        customMetadata: {
          name,
          type,
          link
        },
      };

      await uploadBytesResumable(storageRef, new Blob(), metadata);

      // Reset form fields
      setName('');
      setType('Current Course');
      setLink('');
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };

  // Function to validate URL
  const isValidURL = (url) => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
  };

  return (
    <div className='form-container'>
      <label>Course Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Course Type:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Current Course">Current Course</option>
        <option value="Undergraduate Course">Undergraduate Course</option>
        <option value="Postgraduate Course">Postgraduate Course</option>
      </select>
      <label>Link:</label>
      <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      <button onClick={handleUpload}>Submit</button>
    </div>
  );
}

Form.propTypes = {
  val: PropTypes.number.isRequired,
};

export default Form;
