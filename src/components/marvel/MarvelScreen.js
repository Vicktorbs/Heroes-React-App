import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelScreen = () => {
    return (
        <div>
            <h3>Marvel!</h3>
            <HeroesList publisher="Marvel Comics" />
        </div>
    )
}
