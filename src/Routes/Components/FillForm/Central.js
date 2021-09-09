import React, { useEffect, useState } from 'react';
import '../../css/FillForm.css';
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';

function Central() {
  const [step, setStep] = useState(1);

  const [edu, setEdu] = useState([
    {
      id: undefined,
      component: undefined,
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      city: '',
    },
  ]);

  const [exp, setExp] = useState([
    {
      id: undefined,
      component: undefined,
      jobTitle: '',
      employer: '',
      dateStart: '',
      dateEnd: '',
      place: '',
    },
  ]);

  const [values, setValues] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      photo: undefined /* photo is an Object! */,
      profession: '',
      email: '',
      phone: '',
    },
    education: [
      {
        id: 0,
        component: undefined,
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        city: '',
      },
    ],
    workExperience: [
      {
        id: 0,
        component: undefined,
        jobTitle: '',
        employer: '',
        dateStart: '',
        dateEnd: '',
        place: '',
      }
    ],
    others: [
      {
        hobby: '',
      },
    ],
  });

  const steps = [
    {
      id: 1,
      text: 'Personal Details',
    },
    {
      id: 2,
      text: 'Education',
    },
    {
      id: 3,
      text: 'Work Experience',
    },
    {
      id: 4,
      text: 'Others',
    },
  ];

  const { personalInfo, education, workExperience } = values;

  const nextStep = (e) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep((prev) => prev - 1);
  };

  const addEduSection = (id, value) => {
    setEdu((prev) => [...prev, { id, component: value }]);
  };
  const addExpSection = (id, value) => {
    setExp((prev) => [...prev, { id, component: value }]);
  };

  const handleChange = (input, value, sectionId) => {
    switch (step) {
      case 1:
        let newPersonal = {
          ...values,
          personalInfo: { ...personalInfo, [input]: value },
        };
        setValues(newPersonal);
        break;
      case 2:
        return;
      case 3:
        return;
      case 4:
        return;

      default:
        break;
    }
  };

  const handleEduChange = (input, value) => {
    setEdu((prev) => [...prev, { [input]: value }]);
  };
  console.log(edu);

  const handleExpChange = (input, value) => {
    setExp((prev) => [...prev, { [input]: value }]);
  };
  console.log(exp);
  // ------------------------------------------------

  const displaySteps = () =>
    steps.map((el) => (
      <div className='fillForm-grouped' key={el.id}>
        <div className='fillForm-num_txt_group'>
          <div className='fillForm-step-round'>{el.id}</div>
          <p>{el.text}</p>
        </div>
        {el.id !== 4 && <hr className='fillForm-horizontal-line' />}
      </div>
    ));

  const displayCard = () => {
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            handleChange={handleChange}
            personalInfo={personalInfo}
          />
        );

      case 2:
        return (
          <Education
            addEduSection={addEduSection}
            handleChange={handleChange}
            education={education}
            edu={edu}
            handleEduChange={handleEduChange}
          />
        );

      case 3:
        return (
          <Experience
            addExpSection={addExpSection}
            handleChange={handleChange}
            workExperience={workExperience}
            exp={exp}
            handleExpChange={handleExpChange}
          />
        );

      default:
        return (
          <PersonalDetails
            handleChange={handleChange}
            personalInfo={personalInfo}
          />
        );
    }
  };

  return (
    <div className='fillForm-container'>
      <div className='fillForm-header'>
        <h1>Let's start with the first step</h1>
        <h4>
          Please fill the boxes below in order to personalize your CV template
          and have a personal experience choosing one of our resumes. We respect
          your personal information and we will not share your data with any
          third party sites.{' '}
        </h4>
      </div>
      <div className='fillForm-steps-container'>{displaySteps()}</div>

      {/* <PersonalDetails />
      <hr className='fillForm-hr-centarl' />
      <Education /> */}
      {displayCard()}
      <button onClick={(e) => prevStep(e)} className='fillFormSwitchBtn'>Prev setp</button>
      <button onClick={(e) => nextStep(e)} className='fillFormSwitchBtn'>Next step</button>
    </div>
  );
}

export default Central;
