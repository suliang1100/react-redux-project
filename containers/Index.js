/*
 * Create by suliang on 2018.01.02
 * */
import React from 'react';
import {connect} from 'react-redux';
import Index from '../components/Index';
import {add} from '../actions/index';

const mapStateToProps = (state) => {
    return {
        add:state
    }
};

const mapDispathToProps = (dispath) => {
    return {
        add:dispath(add())
    }
};

export default connect(mapStateToProps,mapDispathToProps)(Index);