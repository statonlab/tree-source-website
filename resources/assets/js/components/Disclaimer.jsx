import React, {Component} from 'react'

export default class Disclaimer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }
    }

    close() {
        this.setState({visible: false})
    }

    show() {
        this.setState({visible: true})
    }

    render() {
        return (
            <div className={`notification is-info floating-disclaimer${this.state.visible ? ' is-active' : ''}`}
                 onClick={(e) => e.stopPropagation()}>
                <button className="delete" type="button" onClick={this.close.bind(this)}></button>
                {this.props.children}
            </div>
        )
    }
}