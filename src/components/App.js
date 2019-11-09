import React from 'react';
import { connect } from 'react-redux';
import { getMostPopularMovies } from '../redux/thunks/getMostPopularMovies';
import { getAllGenres } from '../redux/thunks/getAllGenres';
import { getAllGenreMovies } from '../redux/thunks/getAllGenreMovies';
import Card from './Card';
import Button from './Button';
import { getImageUrl } from '../config';

class App extends React.Component {
    componentDidMount() {
        this.props.onGetMostPopularMovies();
        this.props.onGetAllGenres();
    }

    render() {
        return (
            <div className="container">
                <header className="genres">
                    {this.props.allGenres.map((genre, i) => (
                        <Button
                            key={i}
                            text={genre.name}
                            styles="genre"
                            click={() => this.props.onGetAllGenreMovies(genre.id)}
                        />
                    ))}
                </header>

                <div className="cards">
                    {
                        this.props.mostPopularMovies.map((card, i) => (
                        <Card
                            key={i}
                            id={card.id}
                            backgroundImage={getImageUrl(card.backdrop_path)}
                            date={card.release_date}
                            rating={card.vote_average}
                            votes={card.vote_count}
                            description={card.overview}
                            title={card.original_title}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    mostPopularMovies: state.cards.mostPopular,
    allGenres: state.genres.allGenres,
});
const mapDispatchToProps = (dispatch) => ({
    onGetMostPopularMovies: () => dispatch(getMostPopularMovies()),
    onGetAllGenres: () => dispatch(getAllGenres()),
    onGetAllGenreMovies: (id) => dispatch(getAllGenreMovies(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
