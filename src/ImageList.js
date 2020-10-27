import React, { Component } from 'react'
import creatures from './data.js';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        return (
            <body>
                {creatures.map(element =>{
                    return <ImageItem 
                    url = {element.url} 
                    title = {element.title}
                    description = {element.description} 
                    keyword = {element.keyword} 
                    horns = {element.horns}/>
                })}

            </body>
        )
    }
}
