import React from 'react'
import './App.css';
import Card from '../Components/Card';
import Searchbox from '../Components/Searchbox'
import { usestate } from 'react';
// import Scroll from '../Components/Scroll';

class App extends React.Component {

  constructor(props) {
    super()
    this.state = {
      // searchfield: '',
      user: []
    }
  }


  search = (event) => {
    // this.setState({ searchfield: event.target.value })
    if (event.keyCode === 13) {
      console.log(event.target.value);
      fetch(`https://api.github.com/users/${event.target.value}`)
        .then((response) => response.json())
        .then((json) => { this.setState({ user: json }); })
        .catch((err) => console.log("Error" + err));
    }
  }

  


  render() {
    const user = this.state.user;

    return (
      <React.Fragment>
        <div className="App">
          <h1 className='code'>Github Profiles</h1>
          <Searchbox search={this.search} />
          <Card username={user.login}
            name={user.name}
            avatarurl={user.avatar_url}
            followers={user.followers}
            following={user.following}
            publicRepos={user.public_repos}
            type={user.type}
            email={user.email} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
