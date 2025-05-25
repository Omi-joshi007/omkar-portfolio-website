import Layout from '../components/Layout'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub,FaMedium } from 'react-icons/fa'

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen flex justify-center items-center bg-black px-4">
        <div className="bg-blue-600 text-white p-6 rounded-xl max-w-md w-full shadow-lg">
          <h2 className="text-center text-lg font-semibold mb-6">Contact Details</h2>
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-3" />
            <a href="mailto:joshiomkar869@gmail.com" className="underline">joshiomkar869@gmail.com</a>
          </div>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="mr-3" />
            Christchurch, New Zealand
          </div>
          <div className="flex items-center mb-4">
            <FaLinkedin className="mr-3" />
            <a href="https://www.linkedin.com/in/omkarj2020/" className="underline" target="_blank">LinkedIn</a>
          </div>
          <div className="flex items-center">
            <FaGithub className="mr-3" />
            <a href="https://github.com/Omi-joshi007" className="underline" target="_blank">GitHub</a>
          </div>
          <div className="flex items-center mt-4">
            <FaMedium className="mr-3" />
            <a href="https://medium.com/@joshiomkar869" className="underline" target="_blank" rel="noopener noreferrer">
              Medium
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
