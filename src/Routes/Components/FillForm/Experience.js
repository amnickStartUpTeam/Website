import React, { useState } from 'react';
import '../../css/FillForm.css';
import FormExp from './FormExp';

const Experience = ({
  addExpSection,
  exp,
  handleExpChange,
 }) => {
  const [sectionToProcess, setSectionToProcess] = useState();
  console.log('Exprience from Work Experience:', exp);

  const displayExperienceForms = exp.map((el, i) => (
    <div className='fillForm-fullwidth-form' key={i}>
      {el.component}
    </div>
  ));

  let sectionID = Math.floor(Math.random() * 1000);
  const handleClick = () => {
    addExpSection(
      sectionID,
      <FormExp
        section={sectionToProcess}
        exp={exp}
        handleExpChange={handleExpChange}
      />
    );
  };

  const findDataToChange = (id) => {
    let index = exp.find((el) => {
      console.log(el);
      return el.id === id;
    });
    setSectionToProcess(index);
  };

  return (
    <div className='fillForm-education-container'>
      <h3>Work Experience</h3>
      {displayExperienceForms}
      <div className='fillForm-add-container'>
        <i className='fas fa-plus' id='fillForm-plus-icon' />
        <button className='fill-form-add-btn' onClick={handleClick}>
          Add Experience
        </button>
      </div>
    </div>
  );
};

export default Experience;
