import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState(data_projects)
    const [category, setCategory] = useState([]);
    const [data, setData] = useState([]);
    const [active, setActive] = useState('All')
    const API_URL = 'https://mern-stack-admin.herokuapp.com/api';

    useEffect(() => {
        function getCategory() {
            return axios.get(`${API_URL}/category`)
                .then(res => {
                    console.log(res.data)
                    setCategory(res.data);
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
                    console.log(res.data)
                    setData(res.data);
                })
                .catch(err => {
                    console.log(err)
                });
        }
        getProject()
    }, [])



    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
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
                <div className={active === 'All' && 'projects__navbar-active'} onClick={() => { setProjects(data_projects); setActive("All"); console.log(active) }}>All</div>
                <div className={active === 'react.js' && 'projects__navbar-active'} onClick={() => handleFilterCategory('react.js')}>React</div>
                <div className={active === 'mongoDB' && 'projects__navbar-active'} onClick={() => handleFilterCategory('mongoDB')}>MongoDB</div>
                <div className={active === 'node.js' && 'projects__navbar-active'} onClick={() => handleFilterCategory('node.js')}>Node</div>
                <div className={active === 'vanilla' && 'projects__navbar-active'} onClick={() => handleFilterCategory('vanilla')}>Vanilla</div>
            </div>

            <div className="row">
                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
            </div>
        </motion.div>

    );
};

export default Projects;