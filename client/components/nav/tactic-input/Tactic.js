import React, { Component } from 'react'

class Tactic extends Component {
    constructor() {
        super();
        this.state = {
            tactic_id: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
            tactic_id: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        console.log('A tactic_id was submitted: ' + this.state.tactic_id)
    }


    render() {
        return (
            <div id="tacitc-input">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        tactic_id:
                        <input type="text" value={this.state.tactic_id} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default Tactic