import react from '../../assets/iconLang/react.svg'
import bootstrap from '../../assets/iconLang/bootstrap.svg'
import html from '../../assets/iconLang/html.svg';
import css from '../../assets/iconLang/css.svg';
import git from '../../assets/iconLang/git.svg';
import visualCode from '../../assets/iconLang/visual-studio-code.svg';
import js from '../../assets/iconLang/js.svg';

const languages = [
    {
        icon: html,
        name: 'HTML',
        level: '70'
    },
    {
        icon: css,
        name: 'CSS',
        level: '70'
    },
    {
        icon: js,
        name: 'JS/ES6',
        level: '65'
    },
    {
        icon: bootstrap,
        name: 'Bootstrap',
        level: '65'
    },
    {
        icon: react,
        name: 'ReactJS / React-Native',
        level: '60'
    },

]

const tools = [
    {
        icon: visualCode,
        name: 'Visual Studio Code',
        level: '85'
    },
    {
        icon: git,
        name: 'git',
        level: '45'
    },


]

export { tools, languages }