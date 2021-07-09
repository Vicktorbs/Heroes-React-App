import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { PrivateRoute } from "../../routes/PrivateRoute"

describe('Tests on component <PrivateRoute />', () => {
    
    const props = {
        location: {
            pathname: '/dc'
        }
    }
    // Simulacion del localStorage con jest
    Storage.prototype.setItem = jest.fn();

    test('should show the component if the user is authenticated and save data in localStorage', () => {
        // Como probar un Router. el mount permite construir estructuras anidadas el shallow solo al componente en cuestion
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={ true }
                    component={ () => <span>Ready!</span>}
                    { ...props }
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastLocation', '/dc')
    })

    test('should block the component if it is not authenticated', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={ false }
                    component={ () => <span>Ready!</span>}
                    { ...props }
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBeFalsy();
    })
        
})
