import template from './language.html';

export const LanguageComponent = {
    template,
    controller: class LanguageComponent {

        constructor($translate, sessionService) {
            this.translation = $translate;
            this.sessionService = sessionService;
            this.language = this.sessionService.language || 'en';
            this.languages = [
                {key: 'en'},
                {key: 'de'},
            ];
        }

        setLanguage(value) {
            this.language = value;
            this.sessionService.language = this.language;
            this.translation.use(this.language);
        }

        getLanguage() {
            if (this.sessionService.language && this.language != this.sessionService.language) {
                this.language = this.sessionService.language;
            }
            if (!this.language) {
                this.language = 'en';
            }
            return this.language;
        }
    }
};

