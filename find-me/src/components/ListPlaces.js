import React from 'react';
import './../assets/css/ListPlaces.css';

class ListPlaces extends React.Component {

  render() {
    const { places } = this.props;

    return (
      <div className="places-content">
        {
          places.map((p, key) =>
            <div key={key} className="place-card">
              <div className="place-info">
                <h3 className="place-name label" title={p.name}>{p.name}</h3>
                <div className="place-rating label" title={p.rating}>{p.rating}</div>
                <div className="place-type label" title={p.types.join()}>{p.types.join()}</div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default ListPlaces;
