import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.handleChange}>Select a Keyword
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
            </div>
        )
    }
}
