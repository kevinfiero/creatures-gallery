import React, { Component } from 'react'
import ImageItem from './ImageItem.js';


export default class ImageList extends Component {
    state = {
        filter: 'Show All'
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        });
    }
    render() {
        const filteredCreatures = this.props.creatures.filter((creature) => {
            console.log(this.state.filter)
            if(this.state.filter === 'Show All') return true;
            if (this.state.filter === creature.keyword) return true;
            return false
            });
            console.log(filteredCreatures); 
        return (
            <div  className='center'>
                <span>Keyword: </span><select onChange={this.handleChange}>Select a Keyword
                    <option value="Show All">Show All</option>
                    <option value="narwhal">narwhal</option>
                    <option value="rhino">rhino</option>
                    <option value="unicorn">unicorn</option>
                    <option value="unilego">unilego</option>
                    <option value="markhor">markhor</option>
                    <option value="mouflon">mouflon</option>
                    <option value="addax">addax</option>
                    <option value="chameleon">chameleon</option>
                    <option value="lizard">lizard</option>
                    <option value="dragon">dragon</option>
                </select>
                <body>
                    {filteredCreatures.map(creature =>{
                        return <ImageItem 
                        url = {creature.url} 
                        title = {creature.title}
                        description = {creature.description} 
                        keyword = {creature.keyword} 
                        horns = {creature.horns}/>
                    })}
                </body>
            </div>
        )
    }
}
