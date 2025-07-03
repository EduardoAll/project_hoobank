import { createContext, useState } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      email: '',
      mensaje: ''
    });
    setErrors({});
    setSubmitSuccess(false);
  };

  const value = {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    updateField,
    setErrors,
    setIsSubmitting,
    setSubmitSuccess,
    resetForm
  };

  return (
    <ContactContext.Provider value={value}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext; 