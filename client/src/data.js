import CovidImg from './Assets/COVID-19.svg'
import LayarTancap from './Assets/layarTancap.svg'
import hactive8 from './Assets/hactive8.png' 
import permata from './Assets/permata.png'
import react from './Assets/react.svg'
import redux from './Assets/redux.svg'
import git from './Assets/git.svg'


export const links = [
    {
        id: 1,
        text: 'Home',
        url: 'home'

    },
    {
        id: 2,
        text: 'Portfolio',
        url: 'portfolio'

    },
    {
        id: 3,
        text: 'About',
        url: 'about'

    },
    {
        id: 4,
        text: 'Contact',
        url: 'contact'

    },
]

export const PorfolioLinks = [
    {
        id:1,
        url: 'https://moviedb-350dd.web.app/',
        title: "Layar Tancap App",
        sourceCodeLink: "https://lnkd.in/g-Pwe77",
        img: LayarTancap,
        overview:[{
            description : 'lorem opsum dfdf;ld dfdsfdsf ojofasdoij sdfopkdsf sdplkdfkpdsfpl sdlpkdlpfk sdpkdspfk pksdfpkpsd fdslpkfdslpkfpoi[dj sdf[mk,lkmjcb m',
            apiLink:'http://localhost/3000'
        }]
    },
    {
        id:2,
        url: 'https://lnkd.in/g9gHVV2',
        title: "Simple Covid 19 App",
        sourceCodeLink: "https://github.com/reyandoneil/covid-19-react",
        img: CovidImg,
        overview:[{
            description : 'lorem opsum dfdf;ld dfdsfdsf ojofasdoij sdfopkdsf sdplkdfkpdsfpl sdlpkdlpfk sdpkdspfk pksdfpkpsd fdslpkfdslpkfpoi[dj sdf[mk,lkmjcb mber',
            apiLink:'https://api.covid19api.com/'
        }]
    }
   
]

export const aboutCards = [
    {
        id:1,
        img: hactive8,
        type: 'Education',
        date: 'Graduate : Oct 2020'
    },
    {
        id:2,
        img: permata,
        type: 'Job Experience',
        date: 'Feb - Agust 2021'
    }
]

export const stackImg = [
    {
        id:1,
        img:react
    },
    {
        id:2,
        img:redux
    },
    {
        id:3,
        img:git
    }
]