import React from 'react'

export default (Component, codition) => props => {
    return codition(props)?  null: <Component {...props}/>
}