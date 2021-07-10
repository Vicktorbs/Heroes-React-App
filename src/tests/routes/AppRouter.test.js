import React from 'react';
import { mount } from "enzyme"
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routes/AppRouter';

describe('Test on router <AppRouter />', () => {
    
    const contexValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    test('should show login if it is not authenticated', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contexValue }>
                <AppRouter />
            </AuthContext.Provider>
        );
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show DC component if it is authenticated', () => {
        const contexValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Víctor'
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={ contexValue }>
                <AppRouter />
            </AuthContext.Provider>
        );
        
        expect(wrapper.find('.navbar').exists()).toBeTruthy();
    })
    
})
