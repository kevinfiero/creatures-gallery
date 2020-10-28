import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <section>
                <h3 className = 'underline'>{this.props.title}</h3>
                <img src={this.props.url}></img>
                <div className = 'flex-row center even'>
                    <div className = 'flex-column center even left'>
                        <div className = 'underline'>Description:</div>
                        <p>{this.props.description}</p>
                    </div>
                    <div className = 'flex-column center even right'>
                        <div className = 'underline'>Keyword:</div>
                        <label>{this.props.keyword}</label>
                        <div className = 'underline'>Horns:</div>
                        <label>{this.props.horns}</label>
                    </div>
                </div>
            </section>
        )
    }
}