import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { clickedLike, clickedDislike } from '../redux/thunks/toggleLike';

export class Card extends React.Component {
    render() {
        const { id, title, backgroundImage, date, rating, votes, description } = this.props;
        const movie = this.props.likedMovies.find(movie => {
            return movie === id;
        });
        return (
          <div className="card">
              <div
                className="card__image"
                style={{
                  backgroundImage: `url(${backgroundImage})`
                }}/>

              <div className="card__title">
                  {title}
              </div>

              <div className="card__like">
                  <i className="fa fa-heart-o" />
              </div>

              <div className="card__subtitle">
                  <span>{date}</span>
                  <span>{rating} ({votes} votes)</span>
              </div>

              <div className="card-info">
                <div className="card-info__header">Summary</div>
                <Button
                    text={movie !== id ? 'Like?' : 'You liked this. Dislike?'}
                    click={
                        movie !== id
                        ? () => this.props.onClickedLike(id)
                        : () => this.props.onClickedDislike(id)
                    }
                />
                <div className="card-info__description">{description}</div>
              </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    likedMovies: state.likes.likedMovies,
});
const mapDispatchToProps = (dispatch) => ({
    onClickedLike: (id) => dispatch(clickedLike(id)),
    onClickedDislike: (id) => dispatch(clickedDislike(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Card);