import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {

    const { heroeId } = useParams();
    const hero = useMemo(() => getHeroById(heroeId), [heroeId])
    // const hero = getHeroById(heroeId);

    if (!hero) {
        return <Redirect to="/" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () => {
        // history.goBack();
        if (history.length <= 1) {
            history.push();
        } else {
            history.goBack();
        }
    }

    // img background
    // style={{ 
    //     backgroundImage: `url(../assets/heroes/${ heroeId }.jpg)`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: '100vh 100vw'
    // }}
    return (
        <div className="row mt-5">
            <div className="col-5 animate__animated animate__bounce animate__fadeInLeft">
                <img src={ `../assets/heroes/${ heroeId }.jpg` } className="img-thumbnail" alt={ hero } />
            </div>
            <div className="col-7 animate__animated animate__bounce animate__fadeInRight">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{ alter_ego }</li>
                    <li className="list-group-item"><b>Publisher: </b>{ publisher }</li>
                    <li className="list-group-item"><b>Fisrst appearance: </b>{ first_appearance }</li>
                </ul>

                <h5>Characters</h5>
                <p>{ characters }</p>

                <button className="btn btn-outline-primary" onClick={ handleReturn }>
                    Return
                </button>
            </div>
        </div>
    )
}
