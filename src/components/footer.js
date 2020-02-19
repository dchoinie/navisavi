import React from "react"

const Footer = () => {
  return (
    <div className="bg-black text-gray-500 flex justify-center py-4">
      &copy; {new Date().getFullYear()} Navi Savi, All Rights Reserved
    </div>
  )
}

export default Footer
