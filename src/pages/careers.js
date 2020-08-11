import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/Careers.module.css"

const Careers = () => {
    return (
        <Layout>
            <SEO title="Careers" />
            <div className={styles.container}>
                <div className={styles.titlesContainer}>
                    <div className={styles.title}>Careers</div>
                    <div className={styles.subtitlesContainer}>
                        <div className={styles.subtitle}>
                            Want to join the Navi Savi team!?
                        </div>
                        <div className={styles.subtitle}>
                            Trust me, we’ve never been called boring.
                        </div>
                    </div>
                </div>
                <div className={styles.tableContainer}>
                    <div className={styles.jobRow}>
                        <a
                            href="mailto:contact@navi-savi.com?subject=Business%2FFinance%20%26%20Fundraising%20Internship%20Application"
                            className={styles.jobTitleLink}
                        >
                            Graduate Studies - Business/Finance & Fundraising
                        </a>
                        <div className={styles.subInfoContainer}>Remote | Stipend | Course Credit</div>
                    </div>
                    <div className={styles.jobRow}>
                        <a
                            href="mailto:contact@navi-savi.com?subject=Marketing%2FBranding%2FPress%20Internship%20Application"
                            className={styles.jobTitleLink}
                        >
                            Graduate or Senior Marketing/Branding/Press
                        </a>
                        <div className={styles.subInfoContainer}>Remote | Stipend | Course Credit</div>
                    </div>
                    <div className={styles.jobRow}>
                        <a
                            href="mailto:contact@navi-savi.com?subject=Advertising%2FSocial%20Media%20Management%20Internship%20Application"
                            className={styles.jobTitleLink}
                        >
                            Graduate or Senior Advertising/Social Media Management
                        </a>
                        <div className={styles.subInfoContainer}>Remote | Stipend | Course Credit</div>
                    </div>
                    <div className={styles.jobRow}>
                        <a
                            href="mailto:contact@navi-savi.com?subject=Marketing%2FBranding%2FPress%20Internship%20Application"
                            className={styles.jobTitleLink}
                        >
                            Marketing/Branding/Press
                        </a>
                        <div className={styles.subInfoContainer}>Remote | Stipend | Course Credit</div>
                    </div>
                    <div className={styles.jobRow}>
                        <a
                            href="mailto:contact@navi-savi.com?subject=Advertising%2FSocial%20Media%20Management%20Internship%20Application"
                            className={styles.jobTitleLink}
                        >
                            Advertising/Social Media Management
                        </a>
                        <div className={styles.subInfoContainer}>Remote | Stipend | Course Credit</div>
                    </div>
                    <div className={styles.jobRow}>
                        <a
                            href="mailto:contact@navi-savi.com?subject=Video%20Production%20%26%20Content%20Production%20Intern%20Internship%20Application"
                            className={styles.jobTitleLink}
                        >
                            Video Production & Content Production Intern
                        </a>
                        <div className={styles.subInfoContainer}>Remote | Stipend | Course Credit</div>
                    </div>
                    <div className={styles.jobRow}>
                        <a
                            href="mailto:contact@navi-savi.com?subject=Community%20%26%20Outreach%20Intern%20Internship%20Application"
                            className={styles.jobTitleLink}
                        >
                            Community & Outreach
                        </a>
                        <div className={styles.subInfoContainer}>Remote | Stipend | Course Credit</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Careers
