import React from 'react';

const RepoItem = ({repo}) => {
    //const SPACE = ' ';
    return(
            <div className="row">
                <div className="col-md-12">
                    <h4><a href={repo.html_url} >{repo.name} : </a>{repo.description}</h4>
                </div>
            </div>
    );
}


export default RepoItem;
