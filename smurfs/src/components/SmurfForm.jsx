import React, { useState } from 'react'

import { connect } from 'react-redux'
import { postSmurfs } from '../actions'

const SmurfForm = props => {

    const [ name, setName ] = useState('')
    const [ age, setAge ] = useState('')
    const [ height, setHeight ] = useState('')

 
    const handleNameChange = e => {
        console.log('NAME CHANGES: ', e.target.value)
        setName(e.target.value)
    }

    const handleAgeChange = e => {
        console.log('AGE CHANGES: ', e.target.value)
        setAge(e.target.value)
    }

    const handleHeightChange = e => {
        console.log('HEIGHT CHANGES: ', e.target.value)
        setHeight(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault()
        const newSmurf = {
            name: name,
            age: age,
            height: height,
            id: Date.now()
        }
        props.postSmurfs(newSmurf)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
                <input type='text' placeholder='Name' onChange={handleNameChange}>
                </input>
            </label>
            <label htmlFor='age'>
                <input type='text' placeholder='Age' onChange={handleAgeChange}>
                </input>
            </label>
            <label htmlFor='height'>
                <input type='text' placeholder='Height' onChange={handleHeightChange}>
                </input>
            </label>
            <button type='submit'>Create Smurf</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { postSmurfs }
)(SmurfForm)