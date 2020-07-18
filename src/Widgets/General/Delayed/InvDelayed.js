import React from 'react';
import PropTypes from 'prop-types';

class InvDelayed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden : false};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: true});
        }, this.props.waitBeforeHide);
    }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}

InvDelayed.propTypes = {
  waitBeforeHide: PropTypes.number.isRequired
};

export default InvDelayed;