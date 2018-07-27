import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import Navigation from '../components/Navigation';
import Content from '../components/Content';
import {sideAction} from '../actions/sideAction';
import '../css/main.css';
import 'bootstrap/dist/css/bootstrap.css';

class Main extends Component {
    render() {
        return (
            <div className='mainWrap'>
                <div className='mainSidebar'>
                    <Navigation sideExpand={this.props.sideAction}/>
                </div>
                <div className='mainContent'>
                    <Content sideStatus={this.props.status}/> 
                </div>                
            </div>
        );
    }
}

const mapStateToProps = ({sideReducer : {status}}) => {
    return {status}
};

const mapDispatchToProps = (dispatch) => {
    return {
        sideAction: (data) => {dispatch(sideAction(data))}
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));