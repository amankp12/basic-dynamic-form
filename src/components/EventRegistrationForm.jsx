import React from 'react';
import useFormValidation from '../hooks/useFormValidation';

const initialFormState = {
  name: '',
  email: '',
  age: '',
  attendingWithGuest: 'No',
  guestName: '',
};

const validate = (values) => {
  const errors = {};

  if (!values.name) errors.name = 'Name is required';
  if (!values.email) errors.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email is invalid';
  if (!values.age) errors.age = 'Age is required';
  else if (isNaN(values.age) || values.age <= 0) errors.age = 'Age must be a number greater than 0';
  if (values.attendingWithGuest === 'Yes' && !values.guestName) errors.guestName = 'Guest Name is required';

  return errors;
};

const EventRegistrationForm = () => {
  const { values, errors, handleChange, handleSubmit } = useFormValidation(initialFormState, validate);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={values.name} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={values.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" value={values.age} onChange={handleChange} />
        {errors.age && <span>{errors.age}</span>}
      </div>
      <div>
        <label>Are you attending with a guest?</label>
        <select name="attendingWithGuest" value={values.attendingWithGuest} onChange={handleChange}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
      {values.attendingWithGuest === 'Yes' && (
        <div>
          <label>Guest Name:</label>
          <input type="text" name="guestName" value={values.guestName} onChange={handleChange} />
          {errors.guestName && <span>{errors.guestName}</span>}
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventRegistrationForm;
