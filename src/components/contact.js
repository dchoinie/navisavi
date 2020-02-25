import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaAngleRight,
} from "react-icons/fa"

const Contact = () => {
  return (
    <div className="py-24 px-6 md:mx-0 flex flex-col" id="talk">
      <div className="flex flex-col justify-center pb-12">
        <h2 className="text-center text-5xl teal lowercase">Howdy</h2>
        <h3 className="text-center text-2xl text-gray-700">Talk To Us</h3>
      </div>
      <div className="flex flex-col md:flex-row justify-center self-center md:border md:border-gray-200 md:rounded contact-section-width">
        <form
          action=""
          name="howdy"
          method="POST"
          data-netlify="true"
          className="flex flex-col md:w-1/2 mb-4 md:p-4 md:mb-0"
        >
          <input
            type="text"
            name="full_name"
            placeholder="Name"
            className="p-1 text-lg text-gray-700 mb-1 border border-gray-200 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-1 text-lg text-gray-700 my-1 border border-gray-200 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="p-1 text-lg text-gray-700 my-1 border border-gray-200 rounded"
          />
          <textarea
            name="message"
            cols="30"
            rows="5"
            className="text-gray-700 text-lg p-1 my-1 border border-gray-200 rounded"
            placeholder="Message"
            required
          ></textarea>
          <div className="flex rounded">
            <button
              type="submit"
              className="contact-submit text-xl fredoka cursor-pointer rounded lowercase flex"
              style={{
                padding: "0.25rem 0.5rem",
              }}
            >
              Send <FaAngleRight className="self-center" />
            </button>
          </div>
        </form>
        <div className="flex flex-col md:w-1/2 bg-gray-200 p-6 rounded-tr rounded-br">
          <h3 className="text-2xl lowercase accent">Contact Info</h3>
          <h5 className="text-gray-700">Address</h5>
          <p className="text-gray-600">
            137 W 25th St. 11th floor, New York, NY 10001
          </p>
          <h5 className="text-gray-700">Phone</h5>
          <p className="text-gray-600">1-332-333-2822</p>
          <h5 className="text-gray-700">Email</h5>
          <p className="text-gray-600">contact@navisaviapp.com</p>
          <div className="social-icons flex text-2xl text-gray-700 py-2">
            <a
              href="https://www.facebook.com/navisaviapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="mr-1" />
            </a>
            <a
              href="https://www.instagram.com/navisavi_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="mx-1" />
            </a>
            <a
              href="https://www.linkedin.com/company/navi-savi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mx-1" />
            </a>
            <a
              href="https://twitter.com/navisaviapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
