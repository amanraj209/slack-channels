import React, {Component} from 'react';
import PropTypes from 'prop-types';

class User extends Component {
    render() {
        return (            
            <a href='#' className={`list-group-item list-group-item-action`}>{this.props.user.name}</a>        
        )
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User;