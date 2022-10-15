import {Component} from "react";

const connect = (
    mapStateToProps = () => ({}),
    mapDispatchToProps = () => ({})
) => Component => {
    class Connected extends Component {
        onStoreOrPropsChange(props) {
            const {store} = this.context;
            const stateProps = mapStateToProps(state, props);
            const dispatchProps = mapDispatchToProps(store.dispatch, props);
            this.setState({
                ...stateProps,
                ...dispatchProps
            });
        }

        componentWillMount() {
            const { store } = this.content
            this.onStoreOrPropsChange(this.props);
            this.unsubscribe();
        }
        componentWillReceiveProps(nextProps) {
            this.onStoreOrPropsChange(nextProps);
        }
        componentWillUnmount() {
            this.unsubscribe();
        }
        render () {
            return <Component {...this.props} {...this.props}/>
        }
    }

    return Connected;
}
