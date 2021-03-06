import React from 'react';
import './../assets/css/Style.css';
import strings from '../util/strings';
import dislikeIcon from '../assets/images/dislike.jpg';
import likeIcon from '../assets/images/like.png';
import { insertFavoritePlace, removeFavoritePlace } from "./../util/storage/users";

class ListPlaces extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      places: props.places
    };

    this.likePlace = this.likePlace.bind(this);
    this.dislikePlace = this.dislikePlace.bind(this);
    this.refreshState = this.refreshState.bind(this);
  }

  componentDidUpdate() {
    if (this.state.places !== this.props.places) {
      this.setState({
        places: this.props.places
      });
    }
  }

  likePlace(p) {
    p.isLiked = true;
    insertFavoritePlace(p);
    this.refreshState(p);
  }

  dislikePlace(p) {
    p.isLiked = false;
    removeFavoritePlace(p);
    this.refreshState(p);
  }

  refreshState(p) {
    var { places } = this.state;

    for (var i = 0; i < places.length; i++) {
      if (places[i].name === p.name) {
        places[i].isLiked = p.isLiked;
      }
    }

    this.setState({
      places: places
    });
  }

  render() {
    const { places } = this.state;

    return (
      <div className="places-content">
        {
          places.map((p, key) =>
            <div key={key} className="place-card">
              <div className="place-info">
                {
                  !p.isLiked ? <img className="like-icon" alt="icon" src={dislikeIcon} onClick={() => { this.likePlace(p) }} /> :
                    <img className="like-icon" alt="icon" src={likeIcon} onClick={() => { this.dislikePlace(p) }} />
                }
                <h3 className="place-name label" title={p.name}>{p.name}</h3>
                <div className="place-vicinity" title={p.vicinity}>
                  <span>{strings.address}</span>
                  {p.vicinity}
                </div>
                {
                  p.rating ? <div className="place-rating label" title={p.rating}>
                    <span>{strings.popular_rating}</span>
                    {p.rating}
                  </div> : null
                }
                <div className="place-type label" title={p.tags}>{p.tags}</div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default ListPlaces;
