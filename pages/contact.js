import { motion } from 'framer-motion'
import styles from '../styles/Contact.module.css'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const { name, email, message } = formData

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // send email to create@siteppl.com using form data
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Contact Us</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          className={styles.input}
          onChange={handleChange}
          required
        />
        <label className={styles.label} htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          className={styles.input}
          onChange={handleChange}
          required
        />
        <label className={styles.label} htmlFor="message">Message:</label>
        <textarea
          name="message"
          value={message}
          className={styles.textarea}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    </motion.div>
  )
}

export default Contact
