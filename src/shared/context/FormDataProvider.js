import React, { useState } from 'react';
import FormDataContext from './FormDataContext';

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  console.log(formData);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
export default FormDataProvider;
