import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { ADD_MOVIES } from '../actions';

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('Updated');
      this.forceUpdate();
    });
    //Make API call
    //Dispatch action
    store.dispatch(addMovies(data));
  }

  render() {
    const { list } = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie={ movie } key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
