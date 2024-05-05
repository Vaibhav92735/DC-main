import React, { useState } from 'react';
import PropTypes from "prop-types";
import { ref, uploadBytesResumable } from 'firebase/storage';
import storage from './sections/fire2';
// import Home5 from './Home5'; // Import the Home5 component

function Form() {
  const [name, setName] = useState('');
  const [type, setType] = useState('Lab Students');
  const [year, setYear] = useState('');
  const [institute, setInstitute] = useState('');
  const [project, setProject] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleUpload = async () => {
    try {
      if (!name || (type === 'Intern' && (!year || !institute || !project))) {
        throw new Error('Please fill in all fields');
      }

      const storageRef = ref(storage, `LabAlumni/${name}`);
      const metadata = {
        customMetadata: {
          name,
          type,
          year,
          institute,
          project, 
          title,
          url
        },
      };

      await uploadBytesResumable(storageRef, new Blob(), metadata);

      // Reset form fields
      setName('');
      setType('Lab Students');
      setYear('');
      setInstitute('');
      setProject('');
      setTitle('');
      setUrl('');
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };

  return (
    <div className='form-container'>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Type:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Lab Students">Lab Students</option>
        <option value="Intern">Intern</option>
        <option value="Other">Others</option>
      </select>
      {type === 'Intern' && (
        <>
          <label>Year:</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Select Year</option>
            <option value="2023">2022</option>
            <option value="2024">2023</option>
          </select>
          <label>Institute Name:</label>
          <input type="text" value={institute} onChange={(e) => setInstitute(e.target.value)} />
          <label>Project:</label>
          <input type="text" value={project} onChange={(e) => setProject(e.target.value)} />
        </>
      )}
      {type === 'Other' && (
        <>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </>
      )}
      <label>URL:</label>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={handleUpload}>Submit</button>
    </div>
  );
}

Form.propTypes = {
  val: PropTypes.number.isRequired,
};

export default Form;
