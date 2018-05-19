import React, {Component} from 'react';
import UserForm from './UserForm.jsx';
import UserList from './UserList.jsx';
import PropTypes from 'prop-types';

class UserSection extends Component {
    render() {
        return (
            <div className='support card'>
                <div className='bg-dark text-center text-white p-2'>Users</div>
                <div className='users'>
                    <UserList {...this.props} />
                    <UserForm {...this.props} />
                </div>
            </div>
        )
    }
}

UserSection.propTypes = {
    users: PropTypes.array.isRequired,
    setUser: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired,
    activeUser: PropTypes.object.isRequired
}

export default UserSection;
