import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState(data_projects)
    const [loading, setloading] = useState(true)
    const [category, setCategory] = useState([]);
    const [data, setData] = useState([]);
    const [active, setActive] = useState('All')
    const API_URL = 'https://mern-stack-admin.herokuapp.com/api';

    useEffect(() => {
        function getCategory() {
            return axios.get(`${API_URL}/category`)
                .then(res => {
                    // console.log(res.data)

                    setCategory(res.data);
                    setloading(false)
                })
                .catch(err => {
                    console.log(err)
                });
        }
        getCategory()
    }, [])

    useEffect(() => {
        function getProject() {
            return axios.get(`${API_URL}/projects`)
                .then(res => {
                    // console.log(res.data)
                    setData(res.data);
                })
                .catch(err => {
                    console.log(err)
                });
        }
        getProject()
    }, [])



    const handleFilterCategory = (name = 'All') => {
        //const new_array = data_projects.filter(project => project.category.includes(name))

        if (loading && !data?.project) {
            return <></>
        } else {
            if (name === 'All') {
                return data.project.map((project, idx) => <ProjectCard key={project.name} project={project} />)
            } else {

                return data.project.filter(i => i.category.map(category => category.nameCategory).includes(name)).map((project, idx) => <ProjectCard key={project.name} project={project} />)
            }
        }

        //setProjects(new_array)
        //setActive(name)

    }
    const handleOnclickFilterCategory = name => {

        setActive(name)
    }

    const project_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

    return (
        <motion.div className="container projects"
            variants={project_variants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >

            <div className="projects__navbar">
                <div className={active === 'All' && 'projects__navbar-active'} onClick={() => { setData(data); setActive("All"); }}>All</div>
                {
                    category.map(cate =>
                        <div className={active === cate.nameCategory && 'projects__navbar-active'} onClick={() => handleOnclickFilterCategory(cate.nameCategory)}>{cate.nameCategory}</div>)
                }


            </div>

            <div className="row">

                {!loading && data.project && handleFilterCategory(active)}
            </div>
        </motion.div>

    );
};

export default Projects;