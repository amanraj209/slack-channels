import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.user;
        const userName = node.value;
        this.props.addUser(userName);
        node.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className='form-group'>
                    <input className='form-control' type='text' ref='user' placeholder='Edit User'/>
                </div>
            </form>
        )
    }
}

UserForm.propTypes = {
    addUser: PropTypes.func.isRequired
}

export default UserForm;
