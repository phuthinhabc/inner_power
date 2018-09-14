import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import Zoom from 'react-reveal/Zoom'; 

function Navbaritem(props)
{
    return(<li className={props.className}><Link to={props.Url} className="nav-link">{props.value}</Link></li>)
}

class Navbar extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            navbar:
            [
                {
                    key: 1,
                    name: 'Home',
                    Url: '/Home',
                },
                {
                    key: 2,
                    name: 'Features',
                    Url: '/Features',
                },
                {
                    key: 3,
                    name: 'Contact',
                    Url: '/Contact',
                },
                {
                    key: 4,
                    name: 'Demo',
                    Url: '/Demo',
                },
            ],
        }
    }
    render()
    {
        console.log('render');
        const myActive = this.props.active
        const myNavName = this.state.navbar.map(obj => {
            if (myActive === obj.name)
            {
                return (<Navbaritem key={obj.key} className="nav-item active" value={obj.name} Url={obj.Url} />)
            }
            else
            {
                return (<Navbaritem key={obj.key} className="nav-item" value={obj.name} Url={obj.Url} />)
            }
        })
        return(
            <Zoom>
                <div animateIn="fadeIn" className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/Home">
                            <img src={require('./image/logo.png')} height="30" alt="Logo"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {myNavName}
                            </ul>
                        </div>
                    </nav>
                </div>
            </Zoom>
        )
    }
}
export default Navbar;