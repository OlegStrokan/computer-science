const React = require("react");

class Provider extends React.Component {
    getChildContext() {
        return {
            store: this.props.store
        }
    }
    render() {
        return this.props.children
    }
}
