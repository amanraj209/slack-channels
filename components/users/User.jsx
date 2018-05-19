import React, {Component} from 'react';
import PropTypes from 'prop-types';

class User extends Component {
    onClick(e) {
        e.preventDefault();
        const {setUser, user} = this.props;
        setUser(user);
    }

    render() {
        const {user, activeUser} = this.props;
        const active = user === activeUser ? 'active' : '';
        return (            
            <a href='#' className={`list-group-item list-group-item-action ${active}`} onClick={this.onClick.bind(this)}>{user.name}</a>        )
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    setUser: PropTypes.func.isRequired,
    activeUser: PropTypes.object.isRequired
}

export default User;