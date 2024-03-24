import React from 'react'
import { SocialIcon } from "react-social-icons";

function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <SocialIcon
                network="instagram"
                url="https://www.instagram.com/"
                style={{ height: 30, width: 30, margin: 10 }}
            />
            <SocialIcon
                network="twitter"
                url="https://twitter.com/"
                style={{ height: 30, width: 30, margin: 10 }}
            />
            <SocialIcon
                network="google"
                url="https://www.google.com/"
                style={{ height: 30, width: 30, margin: 10 }}
            />
            <SocialIcon
                network="facebook"
                url="https://www.facebook.com/"
                style={{ height: 30, width: 30, margin: 10 }}
            />
        </div>
    )
}

export default Contact