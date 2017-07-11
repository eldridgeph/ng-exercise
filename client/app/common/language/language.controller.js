import SessionService from '../session/session.service';

export default class LanguageController {

    constructor($translate) {
        this.translation = $translate;
        this.language = SessionService.language || 'en';
        this.languages = [
            {key: 'en'},
            {key: 'de'},
        ];
    }

    setLanguage(value) {
        this.language = value;
        SessionService.language = this.language;
        this.translation.use(this.language);
    }

    getLanguage() {
        if (SessionService.language && this.language != SessionService.language) {
            this.language = SessionService.language;
        }
        if (!this.language) {
            this.language = 'en';
        }

        return this.language;
    }
}