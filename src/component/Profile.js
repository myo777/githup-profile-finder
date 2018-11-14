import React from 'react';

const Profile = ({user}) => {

   // const SPACE = ' ';

    if(!user) {
        return (
            <div className="col-md-8 col-md-offset-2">
                <p>Type the username to show profile...</p>
            </div>
        );
    }
    return (
        <div className="col-md-10 col-md-offset-2">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{user.login}</h3>
                </div>
                <div className="panel-body">

                    <div className="row">
                         <div className="col-sm-5">
                            <img className="img-thumbnail img-rounded img-responsive github-avatar" alt ="user" src={user.avatar_url} />
                        </div>
                        
                        <div className="col-sm-6">
                            
                            <ul className="list-group">
                                <li className="list-group-item"><strong>Fullname: </strong>{user.name}</li>
                                <li className="list-group-item"><strong>Username: </strong>{user.name}</li>
                                <li className="list-group-item"><strong>Location: </strong>{user.location}</li>
                                <li className="list-group-item"><strong>Email: </strong>{user.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
