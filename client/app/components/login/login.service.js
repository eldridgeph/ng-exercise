export default $log => {
    return {
        isAuthenticated: false,
        setLogin: value => {
            this.isAuthenticated = value;
        }
    };
};