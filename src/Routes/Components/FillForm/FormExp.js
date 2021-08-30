import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faIcons } from '@fortawesome/free-solid-svg-icons';
import '../../css/FillForm.css';

const Form = ({ exp, sectionToProcess, handleChange, handleExpChange }) => {
  const [Expanded, setExpanded] = useState(false);
  const { jobTitle, employer, dateStart, dateEnd, place } = exp;
  const labelsInfo = [
    {
      id: 'jobTitle',
      name: 'Job Title',
      type: 'text',
      value: jobTitle,
    },
    {
      id: 'employer',
      name: 'Employer',
      type: 'text',
      value: employer,
    },
    {
      id: 'dateStart',
      name: 'Date Start',
      type: 'text',
      value: dateStart,
    },
    {
      id: 'dateEnd',
      name: 'Date End',
      type: 'text',
      value: dateEnd,
    },
    {
      id: 'place',
      name: 'Place',
      type: 'text',
      value: place,
    },
  ];

  const displayLabels = labelsInfo.map((el) => (
    <form key={el.id} className='fillForm-label-container'>
      <label htmlFor={el.id} className='fillForm-pd-align_labels'>
        {el.name}
      </label>
      <input
        id={el.id}
        type={el.type}
        name={el.id}
        value={el.value}
        onChange={(e) => handleExpChange(el.id, e.target.value)}
      />
    </form>
  ));
  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className={'fillForm-form-container'}>
      <div className='fillFrom-form_header'>
        <p>
          {/* {state.degree === ''
            ? '(Currently Empty)'
            : `${state.degree} at ${state.school}`} */}
        </p>
        <FontAwesomeIcon
          icon={Expanded ? faChevronUp : faChevronDown}
          onClick={handleExpand}
          className='fillFormIconChevron'
        />
      </div>
      <div
        className={
          Expanded
            ? 'fillForm-pd-input-container'
            : 'fillForm-inputsForm-closed'
        }
      >
        {displayLabels}
      </div>
    </div>
  );
};

export default Form;
