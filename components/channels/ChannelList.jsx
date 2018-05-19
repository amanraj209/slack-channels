import React, {Component} from 'react';
import Channel from './Channel.jsx';
import PropTypes from 'prop-types';

class ChannelList extends Component {
    render() {
        return (
            <div className='list-group list-group-flush'>
                {this.props.channels.map(channel => {
                    return <Channel channel={channel} key={channel.id} {...this.props}/>
                })}
            </div>
        )
    }
}

ChannelList.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default ChannelList;
