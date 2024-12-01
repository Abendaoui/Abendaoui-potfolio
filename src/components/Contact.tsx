import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react'
import emailjs from 'emailjs-com'
export default function Contact() {
  const formRef = useRef(null) // Ref for the form element
  const [isSending, setIsSending] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true) // Set sending state to show a loading indicator

    emailjs
      .sendForm(
        'service_ttc8xha', // Replace with your service ID
        'template_yrtct8f', // Replace with your template ID
        formRef.current,
        'CeVT4glokmFoqEtdc' // Replace with your user ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setIsSending(false) // Reset sending state after successful submission
        alert('Message sent successfully!') // Show a success message to the user
        formRef.current.reset()
      })
      .catch((err) => {
        console.error(err)
        setIsSending(false) // Reset sending state after an error
      })
  }
  return (
    <section id='contact' className='py-20 bg-gray-50 dark:bg-gray-800'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto'
        >
          <h2 className='text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white'>
            Get in Touch
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div>
              <h3 className='text-xl font-semibold mb-6 text-gray-900 dark:text-white'>
                Contact Information
              </h3>
              <div className='space-y-4'>
                <div className='flex items-center gap-4 text-gray-600 dark:text-gray-300'>
                  <Mail className='w-5 h-5 text-indigo-600 dark:text-indigo-400' />
                  <span>bendaouiadil@gmail.com</span>
                </div>
                <div className='flex items-center gap-4 text-gray-600 dark:text-gray-300'>
                  <Linkedin className='w-5 h-5 text-indigo-600 dark:text-indigo-400' />
                  <span title=''>Adil Bendaoui</span>
                </div>
                <div className='flex items-center gap-4 text-gray-600 dark:text-gray-300'>
                  <Phone className='w-5 h-5 text-indigo-600 dark:text-indigo-400' />
                  <span>+212 641296176</span>
                </div>
                <div className='flex items-center gap-4 text-gray-600 dark:text-gray-300'>
                  <MapPin className='w-5 h-5 text-indigo-600 dark:text-indigo-400' />
                  <span>Tamesna Rabat, Morocco</span>
                </div>
              </div>
            </div>

            <div>
              <form ref={formRef} className='space-y-4' onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='user_name'
                    className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='user_email'
                    className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500'
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={4}
                    name='message'
                    className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors'
                >
                  {isSending ? 'Sending' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
