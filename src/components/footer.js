import React from "react"

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-500 py-6">
      <div className="flex flex-col lg:flex-row justify-between px-24">
        <ul className="flex flex-col lg:flex-row">
          <li className="mx-2 text-center lg:text-left">About</li>
          <li className="mx-2 text-center lg:text-left">Careers</li>
          <li className="mx-2 text-center lg:text-left">Privacy Policy</li>
          <li className="mx-2 text-center lg:text-left">Terms Of Service</li>
          <li className="mx-2 text-center lg:text-left">Contact</li>
        </ul>
        <p className="text-center lg:text-left pt-6 lg:pt-0">
          &copy; {new Date().getFullYear()} Navi Savi, All Rights Reserved{" "}
        </p>
      </div>
    </div>
  )
}

export default Footer
