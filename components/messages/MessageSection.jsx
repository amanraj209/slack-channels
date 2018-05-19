import React, {Component} from 'react';
import MessageForm from './MessageForm.jsx';
import MessageList from './MessageList.jsx';
import PropTypes from 'prop-types';

class MessageSection extends Component {
    render() {
        const {activeChannel} = this.props;
        let div;
        if (activeChannel !== undefined) {
            div = <div className='bg-dark text-center text-white p-2'>{activeChannel.name}</div>;
        }
        return (
            <div className='messages-container'>
                {div}
                <div className='messages card-body'>
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        )
    }
}

MessageSection.propTypes = {
    messages: PropTypes.array.isRequired,
    addMessage: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default MessageSection;
