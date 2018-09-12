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
                    link: "https://plus.google.com/",
                    imgClassName: "fab fa-google-plus-g fa-lg",
                },
                {
                    link: "https://facebook.com/",
                    imgClassName: "fab fa-facebook-f fa-lg",
                },
                {
                    link: "https://twitter.com/",
                    imgClassName: "fab fa-twitter fa-lg",
                },
                {
                    link: "https://www.linkedin.com/",
                    imgClassName: "fab fa-linkedin-in fa-lg",
                },
                {
                    link: "https://www.instagram.com/",
                    imgClassName: "fab fa-instagram fa-lg",
                },
            ],
            ContentofFooterContent:
            [
                {
                    name: "home",
                    Url: "/Home",
                },
                {
                    name: "products",
                    Url: "/Features",
                },
                {
                    name: "trainers",
                    Url: "/Features",
                },
                {
                    name: "blog",
                    Url: "/Features",
                },
                {
                    name: "faqs",
                    Url: "/Features",
                },
                {
                    name: "contact",
                    Url: "/Contact",
                },
            ],
        }
    }
    render()
    {
        const Content = this.state.HeaderofFooterContent.map(obj => {return(<HeaderContent href={obj.link} ImgId="my-ImgId" img={obj.imgClassName} />)})
        const FooterContent = this.state.ContentofFooterContent.map(obj =>{return(<Link className="my-FooterContent" to={obj.Url}>{obj.name}</Link>)})
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