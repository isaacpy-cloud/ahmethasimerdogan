import React from 'react'
import Navigation from './Navigation.components'
import ScriptLogo from '../assets/Logo.png'
import Thylogo from '../assets/thy-logo.png'
import background from '../assets/BoxBackground.jpg'
import RedirectButtonImage from '../assets/arrow-right2555.svg'
import ReferanceLogo1 from '../assets/referance-logo-1.png'
import ReferanceLogo2 from '../assets/referance-logo-2.png'
import Image from 'next/image'
import { motion, useTransform } from 'framer-motion'
import localFont from '@next/font/local'
const OpenSauceBold = localFont({ src: '../assets/Fonts/OpenSauceOne-Bold.ttf' })
import { useRouter } from 'next/router'



function Main(props) {
    const router = useRouter()
    const dragercontainer = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const MouseOver = (event) => {
        event.target.style.color = "#C90119"
        event.target.style.borderColor = "1px solid #C90119"
        event.target.style.transition = "0.3s ease-in-out"
    }

    const MouseOut = (event) => {
        event.target.style.color = "#111"
        event.target.style.borderColor = "1px solid #C90119"
        event.target.style.transition = "0.3s ease-in-out"
    }



    return (
        <main className='main-content'>
            <Navigation classTips="scale">
            </Navigation>

            <div className="content-container">
                <div className="box-container">
                    <motion.div
                        className='dragercontainer'
                        variants={dragercontainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div

                            className="content-box-1">
                            <Image
                                className='box-logo-1'
                                src={ScriptLogo}
                                alt="Picture of the author"
                                width={64}
                                height={64}
                            />

                            <motion.h2
                                className='content-box-h2'
                            >
                                Hello I am Ahmet. I work for&nbsp;
                                <Image
                                    className='box-logo'
                                    src={Thylogo}
                                    alt="Türk Hava Yolları Logo"
                                    width={34}
                                    height={34}
                                >

                                </Image>
                                <b>Turkish Airlines</b>.
                                I am a <br></br>
                                full time developer and designer.
                            </motion.h2>

                            <motion.p>
                                I am a full time web developer. I have been dealing with design for 1 year. Technologies I currently use are React.js and Node.js. You can follow my social media addresses to learn more.
                            </motion.p>

                            <motion.div
                                onMouseOver={MouseOver}
                                onMouseOut={MouseOut}
                                className='redirect-button'
                            >
                                <a>Redirect to my social media page</a>
                                <Image
                                    alt="safasd"
                                    className='redirect-button-icon'
                                    src={RedirectButtonImage}
                                >

                                </Image>

                            </motion.div>

                        </motion.div>

                        <div className="content-box-2">
                            <motion.div>
                                <motion.h2 className='ios-h2'>
                                    Systems we write or design.
                                </motion.h2>
                                <motion.p className='ios-p'>
                                While we use the Figma program while designing 
our systems, we use many technologies on the 
software side.
                                </motion.p>
                            </motion.div>
                            <motion.div
                                className='ios-Effect'
                            >
                                <ul>
                                    <li className='io-child-1'>Maintenance Service Sites</li>
                                    <li className='io-child-2'>Agency and Advertising Sites</li>
                                    <li className='io-child-3'>E-Commerce Systems</li>
                                    <li className='io-child-4'>Accounting Systems</li>
                                    <li className='io-child-5'>Personal Blogs</li>
                                    <li className='io-child-6'>Promotion Sites</li>
                                    <li className='io-child-7'>Documentation Sites</li>
                                </ul>
                            </motion.div>
                        </div>

                    </motion.div>


                </div>

               <div className="box-container">
                    <div className="panel-design" style={{ backgroundImage: `url(${background.src})` }}>
                        <h2>Advanced admin panel systems</h2>
                        <p>We are coding panels that can make your business life easier and that you can manage 
                        <br></br>from a single place.</p>
                        <button>Get Information</button>
                    </div>
               </div>

               <div className="box-container" style={{paddingBottom:"100px"}}>
                    <div className="referance-box-1">
                        <div className="rb-header">
                            <Image
                            className='rb-logo'
                            src={ReferanceLogo1}
                            alt="Referance Logo"
                            ></Image>
                            <h2>Troloud Reservation <br />
                            Management Systems
                            </h2>
                            
                        </div>
                        <div className="rb-content">
                        <p style={{color:'#111'}} className={OpenSauceBold.className}>                      It is a dashboard application where <b style={{color:"#4148FF"}}>vip transfer</b> companies can track their  🎉   in-house job assignments and field operations.
</p>                            
<button className='rb-button rb-button-light'>Get Information</button>
</div>
                    </div>
                    <div id="Date" className="referance-box-1" style={{background:'#111'}}>
                        <div className="rb-header">
                            <Image
                            className='rb-logo'
                            src={ReferanceLogo2}
                            alt="Referance Logo"
                            ></Image>
                            <h2 style={{color:"#fff"}}>Uicean Design<br></br>
                            and Script Templates
                            </h2>
                        </div>
                        <div className="rb-content" >
                            <p style={{color:'#fff'}} className={OpenSauceBold.className}>                        You can find site designs or sample components on this site. You can also find some <b style={{color:"#E1FF27"}}>javsacript</b> scripts we have written and use them.
</p>
                        <button className='rb-button rb-button-yellow'>Get Information</button>
                        </div>
                    </div>
               </div>
     


            </div>

            <div className="footer">
                Site design / logo © 2022 Ahmet Haşim ERDOĞAN
            </div>

        </main>
    )
}

export default Main