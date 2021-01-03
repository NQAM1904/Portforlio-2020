import { motion } from 'framer-motion'
import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import mightycoder from '../assets/mightycoder.svg'
// import resume from '../assets/Nghiem-Quoc-Anh-Minh-resume.pdf'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:nghiemminh1904@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Anh <span>Minh</span> </div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            {/* <a href={resume} download="Nghiem-Quoc-Anh-Minh-resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    Download Resume
                </div>
            </a> */}
            <a href='https://www.topcv.vn/xem-cv/2401e157bd2dd4c68bb9ade417081801'>
                <div className="sidebar__item sidebar__resume">
                    Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.facebook.com/profile.php?id=100030229022139"><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="https://github.com/NQAM1904"><img src={github} alt="github" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__location">
                    <a href="https://goo.gl/maps/9ahTssgrZ57rRgtu9">
                        <img src={pin} alt="location" className="sidebar__icon" />
                        <span>Thu Duc/HCM</span>
                    </a>
                </div>
                <div className="sidebar__item">nghiemminh1904@gmail.com</div>
                <div className="sidebar__item">(+84)339895154</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </motion.div>
    )
}

export default Sidebar;