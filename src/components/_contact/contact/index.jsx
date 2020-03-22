import React from 'react';
import styles from './style.module.css';

import Title from '../../title';

const {
  center,
  contact,
  form,
  formControl,
  submit,
} = styles;

const Contact = () => (
  <div className={contact}>
    <Title
      title="contact"
      subtitle="us"
    />
    <div className={center}>
      <form className={form}>
        <div>
          <input
            className={formControl}
            id="name"
            name="name"
            placeholder="Raka Pratama"
            type="text"
          />
        </div>
        <div>
          <input
            className={formControl}
            id="email"
            name="email"
            placeholder="prauliyatama@example.com"
            type="email"
          />
        </div>
        <div>
          <textarea
            className={formControl}
            id="message"
            name="message"
            placeholder="Email me for further info"
            rows="10"
          />
        </div>
        <div>
          <input
            className={ submit }
            type="submit"
            value="submit here"
          />
        </div>
      </form>
    </div>
  </div>
);

export default Contact;
