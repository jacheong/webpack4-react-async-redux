import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const {user} = this.props;

        if (!user) {
            return null;
        }

        return <h2>{user.name}</h2>;
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find( user => user.id === ownProps.userId)
    };
}; 

export default connect(mapStateToProps, { fetchUser: fetchUser })(UserHeader);