import React from 'react';
import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { Navbar } from "../../../components/ui/Navbar";
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../types/types';

describe('Tests on <Navbar /> component', () => {
    
    // Mock para testear el uso del history
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contexValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Víctor'
        }
    }
    
    const wrapper = mount(
        <AuthContext.Provider value={ contexValue } >
            <MemoryRouter>
                <Router history={ historyMock } >
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    // Limpieza del mock
    afterEach(() => {
        jest.clearAllMocks();
    })

    test('should show itself correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Víctor');
    })

    test('should call logout and use history', () => {
        wrapper.find('button').prop('onClick')();

        expect(contexValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });
        expect(historyMock.replace).toHaveBeenCalledWith('/login')
    })
        
})
