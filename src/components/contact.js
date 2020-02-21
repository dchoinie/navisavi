import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="py-24">
      <div className="flex flex-col justify-center mb-6">
        <h2 className="text-center text-5xl teal lowercase">Howdy</h2>
        <h4 className="text-center text-gray-700">
          Let Us Know If You Have Any Questions
        </h4>
      </div>
      <div
        className="flex justify-center w-full"
        // style={{ border: "1px solid red" }}
      >
        <form
          action=""
          name="howdy"
          method="POST"
          data-netlify="true"
          className="flex flex-col w-1/3"
          //   style={{ border: "1px solid red" }}
        >
          <input
            type="text"
            name="full_name"
            placeholder="Name"
            className="p-1 text-lg text-gray-700 mb-1 border-gray-3sides rounded-tl rounded-bl"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-1 text-lg text-gray-700 my-1 border-gray-3sides rounded-tl rounded-bl"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="p-1 text-lg text-gray-700 my-1 border-gray-3sides rounded-tl rounded-bl"
          />
          <textarea
            name="message"
            cols="30"
            rows="5"
            className="text-gray-700 text-lg p-1 my-1 border-gray-3sides rounded-tl rounded-bl"
            placeholder="Message"
          ></textarea>
          <div className="flex">
            <button
              type="submit"
              className="contact-submit text-xl fredoka cursor-pointer rounded-tl rounded-bl lowercase w-full"
              style={{
                padding: "0.25rem 0.5rem",
              }}
              //   style={{ border: "1px solid blue" }}
            >
              Send
            </button>
          </div>
        </form>
        <div
          className="flex flex-col w-1/3 teal-background p-6 rounded-tr rounded-br"
          //   style={{ border: "1px solid red" }}
        >
          <h3 className="text-2xl text-white lowercase">Contact Info</h3>
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
              <FaLinkedin className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
