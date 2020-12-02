import React from 'react';

import api from '../../assets/icons/api.png'
import data from '../../assets/icons/data.png'
import webdesign from '../../assets/icons/web-design.png'


const skills = [
    {
        icon: webdesign,
        title: "Frontend Development",
        about: "I can build a beautiful using HTML, CSS and React.js"
    },
    {
        icon: data,
        title: "Backend  Development",
        about: "handle database, server, api using and Sql Server, MongoDB",
    },
    {
        icon: api,
        title: "API Development",
        about: ["I can develop robust REST API using", <strong key={1}> asp.net-rest-api </strong>]
    },
    // {
    //     icon: algo,
    //     title: "Competitive Coder",
    //     about: "a daily problem solver in HackerRank and Leetcode"
    // },

]

export default skills;