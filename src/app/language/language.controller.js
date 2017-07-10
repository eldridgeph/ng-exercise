
import SessionService from '../session/session.service';

export default class LanguageController {

    constructor($translate) {
        this.translation = $translate;
        this.language = 'en';
        this.languages = [
            {key: 'en'},
            {key: 'de'},
        ];
    }

    setLanguage(value) {
        this.language = value;
        this.translation.use(this.language);
    }
}