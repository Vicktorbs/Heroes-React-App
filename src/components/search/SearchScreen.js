import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search)
    
    const [formValues, handleInputChange] = useForm({search: q})
    
    const { search } = formValues;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
    // const heroesFiltered = getHeroesByName(search);
    // useEffect(() => {
    //     console.log('search');
    // }, [search])
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ search }`)
    }

    return (
        <div>
            <h2>Search Screen</h2>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            name="search"
                            placeholder="Find your hero"
                            className="form-control"
                            value={ search }
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn m-1 mt-3 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        (q==='')&&
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0)&&
                            <div className="alert alert-danger">
                                There is no a hero with the name "{ q }"
                            </div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
