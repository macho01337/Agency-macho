import React , { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''


  })
  const [error,setError] = useState('')
  const[poruka,setPoruka] = useState('')
   


  const handleChangeName = (e) => {
    setFormData({
      ...formData,
      name: e.target.value
    });
  };

  const handleChangeEmail = (e) => {
    setFormData({
      ...formData,
      email: e.target.value
    });
  };

  const handleChangePoruka = (e) => {
    setPoruka(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    // Provera svakog polja
    if (formData.name === '') {
      alert('Molimo popunite polje Ime.');
      return;
    }
    if (formData.email === '') {
      alert('Molimo popunite polje Email.');
      return;
    }
    if (poruka === '') {
      alert('Molimo popunite polje Poruka.');
      return;
    }

    // Ako su sva polja popunjena
    alert(`Poslali ste upit: Vas odgovor ce biti pregledan u najkracem roku. `);
    // opcionalno resetovanje
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setPoruka('');
  };

  
  
    return (
    <div className="contact-page">
      <h1>Kontaktirajte nas</h1>
      <form className="contact-form"onSubmit={handleSubmit}>
        <input
        type="text"
        name="name"
        placeholder="Vase ime"
        value={formData.name}
        onChange={handleChangeName}
        />
        <input
        type="email"
        name="email"
        placeholder="Vas email"
        value={formData.email}
        onChange={handleChangeEmail}
        />
        <textarea
        name="message"
        placeholder="Vasa poruka"
        value={poruka}
        onChange={handleChangePoruka}
        />
        <button className="submit-btn" type="submit">Posalji poruku</button>
      </form>
    </div>
  )
}

export default ContactPage
