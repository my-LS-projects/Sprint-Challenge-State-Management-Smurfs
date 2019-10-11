import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs, postSmurfs } from '../actions'

// components 
import Smurf from './Smurf'

const SmurfList = props => {
    useEffect(() => {
        console.log('use effect triggered')
        props.fetchSmurfs()
    }, [])

    if (props.isFetching) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            {props.error && <p>{props.error}</p>}
            {props.smurfs.map( smurf => 
                <Smurf 
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                />
                )}
            
        </>
    )
}


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfList)