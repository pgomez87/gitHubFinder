import React from 'react'
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url} } ) => {
        //Destructure (We destructure all the state attributes, so there is no need to use "this.state.xxx" in the JSX.)
        return (
            <div className="card text-center">
                <img 
                src={avatar_url} 
                alt="" 
                className="round-img" 
                style={{width: '60px'}} />

                <h3>{login}</h3>

                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
            </div>
        );
    
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem
