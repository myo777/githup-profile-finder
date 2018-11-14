import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
//import SearchBar from './component/search_bar';
import Profile from './component/Profile';
import RepoList from './component/repo_list';


const CLIENT_ID = 'c475b9c9f81070db0c69';
const CLIENT_SECRET = 'a0c6856efb56008dab2832436e9b62d69abb928b';
const API_URL = 'https://api.github.com/users';


 

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
         //  term: '',
            user: 'myo777',
            repos: '',
        };

       // this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
       // this.submit = this.submit.bind(this);
        this.getProfile = _.debounce(this.getProfile, 300).bind(this);
    }

    componentDidMount() {
        this.getProfile();
      }

    render () {

       //const userId = this.state.term;
        return(
            <div >
              
               <div className="container">
                    {/* <SearchBar term={this.state.term} submitForm={this.submit} handleChange={this.handleSearchTermChange}/>
                    <br /> */}
                    <Profile user={this.state.user} />
                    <br />
                    <RepoList repos={this.state.repos} />
                </div>
            </div>
        );

    }

    // handleSearchTermChange(event) {

	// 	this.setState({term: event.target.value}, this.getProfile);
	// }

	// submit(event) {
	// 	event.preventDefault();
	// 	this.getProfile(this.state.term);
	// }

	getProfile() {
       // const username = this.state.term;
        const username = this.state.user;
        const profile_url = `${API_URL}/${username}?client_id=${CLIENT_ID}&&client_secret=${CLIENT_SECRET}`;
        const repos_url = `${API_URL}/${username}/repos?client_id=${CLIENT_ID}&&client_secret=${CLIENT_SECRET}`

       

		axios.get(profile_url)
			.then(userResponse => {
                axios.get(repos_url)
                .then(repoResponse => {
                    this.setState({repos: repoResponse.data});
                });
                this.setState({user: userResponse.data});
			})
			.catch(err => {
				console.log(`umm!!!! ${this.state.term}\n` + err);
			});
	}

}
