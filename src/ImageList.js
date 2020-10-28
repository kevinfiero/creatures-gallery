import React, { Component } from 'react'
import ImageItem from './ImageItem.js';


export default class ImageList extends Component {

    render() {
        const filteredCreatures = this.props.creatures.filter((creature) => {
            if(this.props.filter === 'Show All') return true;
            if (this.props.filter === creature.keyword) return true;
            return false
            });
        return (
            <div  className='center'>
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
