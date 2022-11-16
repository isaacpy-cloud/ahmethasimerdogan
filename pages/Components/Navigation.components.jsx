import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import ScriptLogo from '../assets/Logo.png'
import SocialLogo1 from '../assets/twitter.svg'
import SocialLogo2 from '../assets/dribbble.svg'
import SocialLogo3 from '../assets/instagram.svg'
import { motion, useTransform, useScroll } from 'framer-motion'
import { Link } from '@chakra-ui/react'


function Navigation(props) {
    const { scrollYProgress } = useScroll();
    const scrollRef = useRef(null)
    useEffect(() => {
        console.log(scrollYProgress)
    })

    return (
        <motion.div
            className='navigation-bar'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef }}
         >
            <div className="navigation-links">
                <div className='navigation-left-links'>
                <ul>
                    <li><Image
                        className='navigation-logo'
                        src={ScriptLogo}
                        alt="Picture of the author"
                        width={36}
                        height={36}
                    /></li>
                    <li><Link>Team</Link></li>
                    <li>Project</li>
                    <li>Home</li>
                    <li>Social Media</li>
                    <li>Contact</li>
                </ul>
                </div>
                <div className="navigation-right-links">
                    <ul>
                        <li className='text-gray'>Social Media</li>
                        <li>
                        <Image
                        className='navigation-logo'
                        src={SocialLogo1}
                        alt="Twitter Link Logo"
                        width={24}
                        height={24}
                    />
                        </li>
                        <li>
                        <Image
                        className='navigation-logo'
                        src={SocialLogo2}
                        alt="Dribbble Link logo"
                        width={24}
                        height={24}
                    />
                        </li>
                        <li>
                        <Image
                        className='navigation-logo'
                        src={SocialLogo3}
                        alt="Instagram Link Logo"
                        width={24}
                        height={24}
                    />
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default Navigation