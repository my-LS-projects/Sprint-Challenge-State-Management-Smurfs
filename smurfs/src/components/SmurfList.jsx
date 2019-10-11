import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions'

// components 
import Smurf from './Smurf'

const SmurfList = props => {
    useEffect(() => {
        console.log('use effect triggered')
        props.fetchSmurfs()
    }, [])

    return (
        <Smurf />
    )
}


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfList)