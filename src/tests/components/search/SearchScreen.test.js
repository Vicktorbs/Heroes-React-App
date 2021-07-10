import React from 'react';
import { mount } from "enzyme"
import { SearchScreen } from '../../../components/search/SearchScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Test on <SearchScreen /> component', () => {
    
    test('should shouw itselft correctly', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero')
    })
    
    test('should show batman and the input with value of the queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        )

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show an error if the heroe cannot be found', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        )

        expect(wrapper.find('.alert-danger').text().trim()).toBe('There is no a hero with the name "batman123"');
        expect(wrapper).toMatchSnapshot();
    })

    test('should call history push', () => {
        const history = {
            push: jest.fn()
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route path="/search" component={ () => <SearchScreen history={ history } /> } />
            </MemoryRouter>
        )
        wrapper.find('input').simulate('change', {
            target: {
                name: 'search',
                value: 'batman'
            }
        })
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        })

        expect(history.push).toHaveBeenCalledWith(`?q=batman`)
    })
    
})
