export default $log => {
    return {
        isAuthenticated: false,
        setLogin: function (value = false) {
            this.isAuthenticated = value;
        },
        isLoggedIn() {
            return !!this.isAuthenticated;
        }
    };
};