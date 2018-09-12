import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js'
import '@fortawesome/fontawesome-free/css/all.css'
import './footer.css'
import {Link} from 'react-router-dom'

function HeaderContent(props)
{
    return(
        <a className="my-size-icon" href={props.href}><i id={props.ImgId} className={props.img}></i></a>
    )
}

class Footer extends Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            HeaderofFooterContent:
            [
                {
                    key: 1,
                    link: "https://plus.google.com/",
                    imgClassName: "fab fa-google-plus-g fa-lg",
                },
                {
                    key: 2,
                    link: "https://facebook.com/",
                    imgClassName: "fab fa-facebook-f fa-lg",
                },
                {
                    key: 3,
                    link: "https://twitter.com/",
                    imgClassName: "fab fa-twitter fa-lg",
                },
                {
                    key: 4,
                    link: "https://www.linkedin.com/",
                    imgClassName: "fab fa-linkedin-in fa-lg",
                },
                {
                    key: 5,
                    link: "https://www.instagram.com/",
                    imgClassName: "fab fa-instagram fa-lg",
                },
            ],
            ContentofFooterContent:
            [
                {
                    key: 1,
                    name: "home",
                    Url: "/Home",
                },
                {
                    key: 2,
                    name: "products",
                    Url: "/Features",
                },
                {
                    key: 3,
                    name: "trainers",
                    Url: "/Features",
                },
                {
                    key: 4,
                    name: "blog",
                    Url: "/Features",
                },
                {
                    key: 5,
                    name: "faqs",
                    Url: "/Features",
                },
                {
                    key: 6,
                    name: "contact",
                    Url: "/Contact",
                },
            ],
        }
    }
    render()
    {
        const Content = this.state.HeaderofFooterContent.map(obj => {return(<HeaderContent key={obj.key} href={obj.link} ImgId="my-ImgId" img={obj.imgClassName} />)})
        const FooterContent = this.state.ContentofFooterContent.map(obj =>{return(<Link key={obj.key} className="my-FooterContent" to={obj.Url}>{obj.name}</Link>)})
        return(
            <div id="my-HeaderContent" className="container mt-4 py-5">
                <Header HeaderId="my-HeaderId" header="FOLLOW US" ContentId="my-ContentId" content={Content}/>
                {FooterContent}
                <p className="pt-4">Coppyright &copy; 2016 Inner Power</p>
            </div>
        )
    }
}

export default Footer