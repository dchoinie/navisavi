import React, { useLayoutEffect, useState } from 'react';
import Img from "gatsby-image"
import { FaStar } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/Earn.module.css"

const Earn = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useLayoutEffect(() => {
        const updateWidth = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWidth)
        updateWidth()
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    let dim = ""+windowWidth/2.2+"px"

    return (
        <Layout>
            <SEO title="Earn" />
            <div className={styles.container}>
                <div className={styles.title}>Rewards</div>
                <div className={styles.contentContainer}>
                    <div className={styles.imageContainer}>
                        <div className={styles.image} style={{ width: dim, height: dim }} />
                    </div>
                    <div className={styles.textContainer}>
                            <div className={styles.pointContainer}>
                                <div className="">
                                    <div className={styles.firstLine}>Wanna Be A VIP?</div>
                                    <div className={styles.explanation}>
                                        Navi Savi is looking for travelers, influencers, and well,
                                        anyone with great short videos of their recent travels. Be one
                                        of the first on the app to get discovered, share your
                                        itineraries, and get rewarded for being one of our trusted
                                        travelers trying out Navi Savi.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.pointContainer}>
                                <div className="">
                                    <div className={styles.firstLine}>Rewards</div>
                                    <div className={styles.explanation}>We are looking for content to launch Navi Savi! For every
                                        approved video uploaded before we launch, we help you fund
                                        your next travels! Upload videos, or start shooting new ones
                                        now!
                                    </div>
                                </div>
                            </div>
                            <div className={styles.pointContainer}>
                                <div className="">
                                    <div className={styles.firstLine}>Want Navi Savi In Your City?</div>
                                    <div className={styles.explanation}>
                                        Be a part of our street teams who capture content of your
                                        city, create itineraries of your favorite “hot spots” and
                                        promote Navi Savi to tourists visiting your town.
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Earn
