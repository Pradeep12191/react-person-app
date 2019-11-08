import React, { Component } from "react";


class AddPerson extends Component {
    state = {
        name: '',
        address: ''
    }

    inputChangeHandler = (state) => {
        return (event) => {
            this.setState({ [state]: event.target.value })
        }
    }

    render() {
        return (
            <div>
                <div>Add Person</div>
                <section>
                    <input value={this.state.name} placeholder="person name" onChange={this.inputChangeHandler('name')} />
                    <input value={this.state.address} placeholder="person address" onChange={this.inputChangeHandler('address')} />
                </section>
            </div>
        )
    }
}

export default AddPerson