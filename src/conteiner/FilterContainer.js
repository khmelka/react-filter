import React, { Component } from 'react'
import Filter from './Filter'
import Allresorts from './Allresorts'

export default class FilterContainer extends Component {
    
   state = {
       resorts: [],
       filteredResorts: []
   }

    componentDidMount(){
        fetch("https://blooming-everglades-24576.herokuapp.com/resorts")
        .then(resp => resp.json())
        .then(resorts => {
            this.setState({resorts})
        })
    }

    resortFilter = filteredResorts => {
        this.setState({ filteredResorts })
      }
    
      filtered = () => {
        return this.state.resorts.filter(resort => {
          return (
           resort.resortname.toLowerCase().includes(this.state.filteredResorts)
          )
        })
      }

    render() {
        return (
            <div>
                <Filter filteredResorts = {this.state.filteredResorts} 
                resortFilter = {this.resortFilter} />
            
        
                <Allresorts filtered = {this.filtered()} />
            </div>

        )
    }
}







