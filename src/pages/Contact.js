import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>İletişim</h2>
      <form>
        <label>
          Adınız:
          <input type="text" name="name" />
        </label>
        <label>
          E-posta:
          <input type="email" name="email" />
        </label>
        <label>
          Mesaj:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default Contact;
