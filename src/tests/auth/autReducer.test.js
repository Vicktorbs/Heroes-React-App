import { authReducer } from "../../auth/autReducer"
import { types } from "../../types/types";

const user = {
    name: 'Víctor',
    logged: true
}

describe('Tests on authReducer', () => {
    
    test('should return the default value', () => {
        const state = authReducer(user, {});
        expect(state).toEqual(user);
    })

    test('should authenticate and set the user name', () => {
        const action = {
            type: types.login, 
            payload: {
                name: 'Brenda'
            }
        }
        const { name, logged } = authReducer({}, action);
        
        expect(name).toBe(action.payload.name);
        expect(logged).toBeTruthy();
    })
        
    test('should delete the user name and set logged equal to false', () => {
        const action = {
            type: types.logout,
        }
        const { logged } = authReducer(user, action);

        expect(logged).toBeFalsy();
    })
    
})
