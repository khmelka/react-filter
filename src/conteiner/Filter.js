import React from 'react'

export default function Filter(props) {
    
    const updateSearchTerm = event => {
        props.updateSearchTerm(event.target.value)
    }

    return (
        <form>
            <input
                type="text"
                value={props.searchTerm}
                placeholder="search resort"
                onChange={updateSearchTerm}
            />
        </form>
    )
}
