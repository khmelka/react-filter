import React, { Component } from 'react'
import Filter from './Filter'

export default class FilterContainer extends Component {
    
    state = {
        resorts: [],
        filteredResorts: [],
    }

    componentWillMount() {
        fetch("https://blooming-everglades-24576.herokuapp.com/resorts")
        .then(res => res.json())
        .then(resorts => {
            this.setState({
                resorts
            })
        })
    }

    

    filtered = event => {
        let updated = this.state.resorts
        updated = updated.filter(resort => {
            return (
                resort.resortname.toLowerCase().search(event.target.value.toLowerCase()) !== -1
            )
        })
        console.log('filter', updated)
        this.setState ({
            filteredResorts: updated
        })
    }


    render() {
       return (
            <div>
                <div className="form-group">
                    <input type="text" style={{margin: '2rem'}}  onChange = {this.filtered} />
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>

                {this.state.resorts.map(resort => {
                    return (
                                <div style={{margin: '0.5rem'}}>
                                    {resort.resortname}
                                </div>
                            ) 
                })}
            </div>
    )

        
    }
}







