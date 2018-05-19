import React, {Component} from 'react';
import User from './User.jsx';
import PropTypes from 'prop-types';

class UserList extends Component {
    render() {
        return (
            <div className='list-group list-group-flush'>
                {this.props.users.map(user => {
                    return <User user={user} key={user.id} {...this.props} />
                })}
            </div>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    setUser: PropTypes.func.isRequired,
    activeUser: PropTypes.object.isRequired
}

export default UserList;
