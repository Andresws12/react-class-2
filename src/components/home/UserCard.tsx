import React from 'react';

interface BannerProps {
  name: string;
  lastName: string;
  description: string;
  age: number;
}

const Banner: React.FC<BannerProps> = ({
  name,
  lastName,
  description,
  age,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            width="960"
            alt="Placeholder"
            title="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                width="96"
                alt="Placeholder"
                title="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{lastName}</p>
          </div>
        </div>

        <div className="content">
          {description}
          <br />
          {age} years
        </div>
      </div>
    </div>
  );
};

export default Banner;
