import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Careers = () => {
  return (
    <Layout>
      <SEO title="Careers" />
      <div className="flex flex-col justify-center text-center py-24">
        <h2 className="text-5xl teal pb-12 lowercase">Careers</h2>
        <h4 className="text-gray-700 text-2xl">
          Want to join the Navi Savi team!?
        </h4>
        <p className="text-gray-600">
          Trust me, we’ve never been called boring.
        </p>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="text-center mx-auto mb-24">
          <thead className="fredoka">
            <tr className="text-xl">
              <th className="px-2 lowercase teal">Job Title</th>
              <th className="px-2 lowercase teal">Location</th>
              <th className="px-2 lowercase teal">Compensation</th>
              <th className="px-2 lowercase teal">College Credit?</th>
              <th className="px-2 lowercase teal">Apply</th>
            </tr>
          </thead>
          <tbody className="text-xl text-gray-700">
            <tr className="border-b border-gray-600">
              <td className="py-2 px-2">Marketing &amp; Social Media Intern</td>
              <td className="py-2 px-2">New York, NY</td>
              <td className="py-2 px-2">Stipend</td>
              <td className="py-2 px-2">Yes</td>
              <td className="py-2 px-2">
                <a
                  href="mailto:contact@navisaviapp.com?subject=Marketing%20And%20Social%20Media%20Intern%20Application"
                  className="apply-btn"
                >
                  Apply
                </a>
              </td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className="py-2 px-2">Community Intern</td>
              <td className="py-2 px-2">New York, NY</td>
              <td className="py-2 px-2">Stipend</td>
              <td className="py-2 px-2">Yes</td>
              <td className="py-2 px-2">
                <a
                  href="mailto:contact@navisaviapp.com?subject=Community%20Intern%20Application"
                  className="apply-btn"
                >
                  Apply
                </a>
              </td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className="py-2 px-2">Video Content Intern</td>
              <td className="py-2 px-2">New York, NY</td>
              <td className="py-2 px-2">Stipend</td>
              <td className="py-2 px-2">Yes</td>
              <td className="py-2 px-2">
                <a
                  href="mailto:contact@navisaviapp.com?subject=Video%20Content%20Intern%20Application"
                  className="apply-btn"
                >
                  Apply
                </a>
              </td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className="py-2 px-2">Community &amp; Content Ambassadors</td>
              <td className="py-2 px-2">Remote (Major Cities, World-wide)</td>
              <td className="py-2 px-2">Paid</td>
              <td className="py-2 px-2">No</td>
              <td className="py-2 px-2">
                <a
                  href="mailto:contact@navisaviapp.com?subject=Community%20And%20Content%20Ambassador%20Application"
                  className="apply-btn"
                >
                  Apply
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default Careers
