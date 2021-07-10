import React from 'react';
import { mount } from "enzyme"
import { DashboardRoutes } from "../../routes/DashboardRoutes"
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';

describe('Test on Router <DashboardRoutes />', () => {
    
    test('should show itself correctly', () => {
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
                    <DashboardRoutes />

                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Víctor');
    })
    
})
