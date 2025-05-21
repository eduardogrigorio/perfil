import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio - em produção, substituir por fetch ou similar
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Vamos Conversar</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="contact-info">
            <h3 className="mb-6">Informações de Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-2xl mr-4">📱</span>
                <span>(71) 98800-3296</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">✉️</span>
                <span>eduardo.grigorio@gmail.com</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">🔗</span>
                <span>linkedin.com/in/eduardo-grigorio</span>
              </li>
            </ul>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitSuccess && (
              <div className="bg-success/20 text-success p-4 rounded mb-6 animate-fade-in">
                Mensagem enviada com sucesso! Entrarei em contato em breve.
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name" className="block mb-2">Nome</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="w-full"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="block mb-2">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                className="w-full"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="block mb-2">Mensagem</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                required 
                className="w-full"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`btn primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
