import { useContext } from 'react';
import * as yup from 'yup';
import ContactContext from '../context/ContactContext';

// Esquema de validación con Yup
const validationSchema = yup.object({
  nombre: yup
    .string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede tener más de 50 caracteres'),
  email: yup
    .string()
    .required('El email es obligatorio')
    .email('Ingresa un email válido'),
  mensaje: yup
    .string()
    .required('El mensaje es obligatorio')
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje no puede tener más de 500 caracteres')
});

const useContactForm = () => {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error('useContactForm debe ser usado dentro de ContactProvider');
  }

  const {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    updateField,
    setErrors,
    setIsSubmitting,
    setSubmitSuccess,
    resetForm
  } = context;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validar con Yup
      await validationSchema.validate(formData, { abortEarly: false });

      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Formulario enviado:', formData);
      
      setSubmitSuccess(true);
      resetForm();
      
      // Ocultar mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);

    } catch (error) {
      if (error.name === 'ValidationError') {
        const validationErrors = {};
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        console.error('Error al enviar formulario:', error);
        setErrors({ general: 'Error al enviar el formulario. Intenta nuevamente.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    updateField,
    handleSubmit
  };
};

export default useContactForm; 