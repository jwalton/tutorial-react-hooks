import { BaseStore } from './BaseStore';

export interface Language {
    hello: string;
}

const LANGUAGES = {
    en: {
        hello: 'Hello World!',
    },
    fr: {
        hello: 'Bonjour Monde!',
    },
};

class LocaleStore extends BaseStore {
    currentLanguage = 'en';

    /**
     * Get the application state
     * @return {object} application state
     */
    getTranslations(): Language {
        return LANGUAGES[this.currentLanguage];
    }

    getLanguages() {
        return ['en', 'fr'];
    }

    getLanguage({ localeCode }) {
        return LANGUAGES[localeCode];
    }

    setLanguage(language: string) {
        this.currentLanguage = language;
        this.emitChange();
    }
}

export default new LocaleStore();
