export default class SessionService {
    constructor() {
        this.setLanguage('en');
    }
    setLanguage(value) {
        this.language = value || 'en';
    }
}