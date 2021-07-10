import React from 'react';
import { mount } from "enzyme";
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';
import { types } from '../../../types/types';

describe('Test on <LoginScreen /> component', () => {
    
    const contexValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }
    
    const wrapper = mount(
        <AuthContext.Provider value={ contexValue }>
            <MemoryRouter>
                <LoginScreen history={ historyMock } />
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('should show itself correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should use dispatch and navigate', () => {
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();
        expect(contexValue.dispatch).toHaveBeenCalledWith({
            type : types.login, 
            payload: {
                name: 'Victor'
            }
        });
        expect(historyMock.replace).toHaveBeenCalled();
        expect(historyMock.replace).toHaveBeenCalledWith('/');

        localStorage.setItem('lastLocation', '/dc');
        handleClick();

        expect(historyMock.replace).toHaveBeenCalledWith('/dc');
    })
    
})
