import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const DcScreen = () => {
    return (
        <div>
            <h3>DC!</h3>
            <HeroesList publisher="DC Comics" />
        </div>
    )
}
