import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/Sidenav.css';

import { Icon } from 'react-icons-kit';
import { ic_home, ic_shopping_basket, ic_date_range } from 'react-icons-kit/md/';
import { arrowResize } from 'react-icons-kit/ionicons/';
import Logo from '../images/logo-glow.png';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNav: '0',
            navs: [
                {
                    navTitle: 'Dashboard',
                    navL: '/dashboard',
                    ic: ic_home
                },
                {
                    navTitle: 'Catalog',
                    navL: '/catalog',
                    ic: ic_shopping_basket
                },
                {
                    navTitle: 'Cart',
                    navL: '/cart',
                    ic: ic_date_range
                }
            ]
        }
        
        this.toggleActNav = this.toggleActNav.bind(this);
    }

    toggleActNav(navIndx) {
        this.setState({
            activeNav: navIndx
        })
    }


    render() {
        const {activeNav, navs} = this.state;
        const {status, sideExpand} = this.props;
        return (
            <navbar className={ status ? 'expanded' : 'sidebar'}>
                <div style={{padding: '10', paddingTop: '20px'}}><img src={Logo} width='70px' alt='Logo' /></div>
                <div style={{marginTop: '50px'}}>
                    {navs.map((item, index) => 
                        <div key={index} className={activeNav === `${index}` ? 'active nav-item' : 'nav-item'} onClick={() => this.toggleActNav(`${index}`)}>
                            <Link to={item.navL}><Icon icon={item.ic} size={24}/><div>{status ? item.navTitle : ''}</div></Link>
                        </div>
                    )}
                </div>
                <div style={{position: 'absolute', bottom: '20px', width: '100%' }}>
                    <div className='nav-item' style={{width: '100%', textAlign: 'center', color: 'white'}} onClick={()=>sideExpand(status)}><Icon icon={arrowResize} size={24}/></div>
                </div>
            </navbar>
        );
    }
}

const mapStateToProps = ({sideReducer : {status}}) => {
    return {status}
};

export default withRouter(connect(mapStateToProps)(Navigation));