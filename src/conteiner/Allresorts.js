import React from 'react'

export default function Allresorts({filtered}) {
    const allresorts = filtered.map(resort => {
        return (
            <div key={resort.id}>
                {resort.resortname}
            </div>
        )
    })
    return (
        <div>
            {allresorts}
        </div>
    )
}

