import React from 'react';
import { Link } from 'react-router-dom';
const heromImages = require.context('../../assets/heroes', true)

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="col">
            <div className="card">
                <div className="row">
                    <div className="col-md-4">
                        <img src={ heromImages(`./${ id }.jpg`).default } className="card-img-top" alt={ superhero } />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text text-muted">
                                { alter_ego }
                            </p>
                            {
                                (alter_ego !== characters) &&
                                <p className="card-text">{ characters }</p>
                            }
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>
                            <Link to={ `./hero/${ id }` } className="btn btn-primary">
                                More...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
