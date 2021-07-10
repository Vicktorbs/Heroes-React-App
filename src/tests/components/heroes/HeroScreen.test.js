import React from 'react';
import { mount } from "enzyme";
import { HeroScreen } from "../../../components/heroes/HeroScreen";
import { MemoryRouter, Route } from 'react-router-dom';

describe('Test on <HeroScreen /> componet', () => {
    
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }
    
    test('should show the component Redirect if there is no arguments on the URL', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={ history } />
            </MemoryRouter>
        )

        expect(wrapper.find('Redirect').exists()).toBeTruthy();
        // expect(wrapper).toMatchSnapshot();
    })
    
    test('should show a hero if the param exist and it is found', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-wonder']}>
                <Route path="/hero/:heroeId" component={ HeroScreen } />
            </MemoryRouter>
        )

        expect(wrapper.find('.row').exists()).toBeTruthy();
    })
    
    test('should return to the root screen with push', () => {
        
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-wonder']}>
                <Route path="/hero/:heroeId" component={() => <HeroScreen history={ history } /> } />
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledTimes(1);
        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled()
    })
    
    test('should return to the previous scren with goBack', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-wonder']}>
                <Route path="/hero/:heroeId" component={() => <HeroScreen history={ history } /> } />
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();

        expect(history.goBack).toHaveBeenCalledTimes(1);
        expect(history.goBack).toHaveBeenCalled();
        expect(history.push).not.toHaveBeenCalled();
    })
    
    test('should call redirect if hero does not exist', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-wonder']}>
                <Route path="/hero/:heroeId" component={() => <HeroScreen history={ history } /> } />
            </MemoryRouter>
        )

        expect(wrapper.text()).toBe('')
    })
    
})
