import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-3">
            {
                heroes.map(hero => (
                    <HeroCard key={ hero.id } { ...hero } />
                ))
            }
        </div>
    )
}
