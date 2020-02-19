import React from "react"

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-500 py-12">
      <div className="flex justify-around">
        <div className="flex flex-col">
          <ul className="footer-lists">
            <li className="text-gray-200">Company</li>
            <li className="my-1">About</li>
            <li className="my-1">Contact</li>
            <li className="my-1">Careers</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="footer-lists">
            <li className="text-gray-200">Programs</li>
            <li className="my-1">?</li>
            <li className="my-1">?</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="footer-lists">
            <li className="text-gray-200">Support</li>
            <li className="my-1">Help Center</li>
            <li className="my-1">Safety Center</li>
            <li className="my-1">Community Guidelines</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="footer-lists">
            <li className="text-gray-200">Legal</li>
            <li className="my-1">Cookies Policy</li>
            <li className="my-1">Privacy Policy For Younger Users</li>
            <li className="my-1">Intellectual Property Policy</li>
            <li className="my-1">Privacy Policy</li>
            <li className="my-1">Terms Of Service</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <small>
          &copy; {new Date().getFullYear()} Navi Savi, All Rights Reserved
        </small>
      </div>
    </div>
  )
}

export default Footer
