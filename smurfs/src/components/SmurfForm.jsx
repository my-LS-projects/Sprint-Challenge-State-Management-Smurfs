import React from 'react'

const SmurfForm = () => {
    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form onClick=''>
            <label htmlFor='name'>
                <input type='text' placeholder='Name'>
                </input>
            </label>
            <label htmlFor='age'>
                <input type='text' placeholder='Age'>
                </input>
            </label>
            <label htmlFor='height'>
                <input type='text' placeholder='Height'>
                </input>
            </label>
            <button type='submit'>Create Smurf</button>
        </form>
    )
}

export default SmurfForm