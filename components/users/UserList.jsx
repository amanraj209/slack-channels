import React, {Component} from 'react';
import User from './User.jsx';
import PropTypes from 'prop-types';

class UserList extends Component {
    render() {
        return (
            <div className='list-group list-group-flush'>
                {this.props.users.map(user => {
                    return <User user={user} key={user.id} />
                })}
            </div>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;
