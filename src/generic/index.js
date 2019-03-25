
export const isUserAlreadyLoggedIn = () => {
    let user  = sessionStorage.getItem('token');
    return user ? true : false;
}