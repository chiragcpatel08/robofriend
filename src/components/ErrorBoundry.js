import React, { Component } from 'react'

export class ErrorBoundry extends Component {

    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch (error, info) {
        this.setState({hasError : true})
    }

    render() {
        return (
            <div> {
                this.state.error ? <h1>ERROR</h1> : this.props.children
                }               
            </div>
        )
    }
}

export default ErrorBoundry
