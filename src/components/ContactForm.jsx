import useContactForm from '../hooks/useContactForm';
import styles from "../style";

const ContactForm = () => {
  const { formData, errors, isSubmitting, submitSuccess, updateField, handleSubmit } = useContactForm();

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.boxWidth} mx-auto`}>
        <div className="bg-black-gradient rounded-2xl p-8 shadow-lg box-shadow">
          <h2 className="text-white font-poppins font-semibold text-2xl mb-6">
            Formulario de Contacto
          </h2>

          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-900 bg-opacity-80 border border-green-400 rounded-lg text-green-200">
              ¡Mensaje enviado exitosamente! Te contactaremos pronto.
            </div>
          )}

          {errors.general && (
            <div className="mb-6 p-4 bg-red-900 bg-opacity-80 border border-red-400 rounded-lg text-red-200">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-dimWhite font-poppins font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                value={formData.nombre}
                onChange={(e) => updateField('nombre', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 bg-slate-800 font-poppins text-white transition-all duration-300 focus:outline-none placeholder:text-gray-400 ${
                  errors.nombre 
                    ? 'border-red-400 focus:border-red-500' 
                    : 'border-slate-600 focus:border-blue-500'
                }`}
                placeholder="Ingresa tu nombre completo"
                disabled={isSubmitting}
              />
              {errors.nombre && (
                <p className="mt-2 text-sm text-red-300">{errors.nombre}</p>
              )}
            </div>

            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-dimWhite font-poppins font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 bg-slate-800 font-poppins text-white transition-all duration-300 focus:outline-none placeholder:text-gray-400 ${
                  errors.email 
                    ? 'border-red-400 focus:border-red-500' 
                    : 'border-slate-600 focus:border-blue-500'
                }`}
                placeholder="correo@ejemplo.com"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-300">{errors.email}</p>
              )}
            </div>

            {/* Campo Mensaje */}
            <div>
              <label htmlFor="mensaje" className="block text-dimWhite font-poppins font-medium mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={5}
                value={formData.mensaje}
                onChange={(e) => updateField('mensaje', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 bg-slate-800 font-poppins text-white transition-all duration-300 focus:outline-none resize-none placeholder:text-gray-400 ${
                  errors.mensaje 
                    ? 'border-red-400 focus:border-red-500' 
                    : 'border-slate-600 focus:border-blue-500'
                }`}
                placeholder="Escribe tu mensaje aquí..."
                disabled={isSubmitting}
              />
              {errors.mensaje && (
                <p className="mt-2 text-sm text-red-300">{errors.mensaje}</p>
              )}
            </div>

            {/* Botón Enviar */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-gradient hover:opacity-90 disabled:opacity-50 text-white font-poppins font-medium py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                'Enviar Correo'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 