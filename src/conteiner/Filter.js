import React from 'react'

export default function Filter(props) {
    
    const resortFilter = event => {
        props.resortFilter(event.target.value)
    }

    return (
        <form>
            <input
                type="text"
                // value={props.filteredResorts}
                placeholder="search resort"
                onChange={resortFilter}
            />
        </form>
    )
}
