import React, { useState } from 'react';
import '../../css/FillForm.css';
import Form from './Form.js';

const Education = ({
  addEduSection,
  edu,
  handleEduChange,
  handleChange,
  education,
}) => {
  const [sectionToProcess, setSectionToProcess] = useState();
  console.log('Edu from DUCATION:', edu);
  const displayEducationForms = edu.map((el, i) => (
    <div className='fillForm-fullwidth-form' key={i}>
      {el.component}
      {/* {<i className='fas fa-minus' 
        id='fillForm-minus-icon' 
      />} */}
    </div>
  ));

  let sectionID = Math.floor(Math.random() * 1000);
  const handleClick = () => {
    addEduSection(
      sectionID,
      <Form
        section={sectionToProcess}
        edu={edu}
        handleEduChange={handleEduChange}
      />,
    );
  };

  const findDataToChange = (id) => {
    let index = edu.find((el) => {
      console.log(el);
      return el.id === id;
    });
    // console.log(id);
    setSectionToProcess(index);
  };
  return (
    <div className='fillForm-education-container'>
      <h3>Education</h3>
      {displayEducationForms}
      <div className='fillForm-add-container'>
        <i className='fas fa-plus' id='fillForm-plus-icon' />
        <button className='fill-form-add-btn' onClick={handleClick}>
          Add Education
        </button>
      </div>
    </div>
  );
};

export default Education;
