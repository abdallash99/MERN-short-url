import React from 'react'

const Alert = ({ msg, type }) => {
    return (
        <div className="container">
            <div className={`alert alert-${type} my-4`}>
                {msg}
            </div>
        </div>

    )
}

export default Alert
