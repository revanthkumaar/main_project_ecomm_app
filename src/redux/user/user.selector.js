import { createSelector } from 'reselect';

const selectCart = state => state.cart;

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser,SelectCart],
    (user,cart) => 
)