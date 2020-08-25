import React, { useState, useContext } from 'react';
import LanguagePicker from '../components/LanguagePicker';
import {
    translationsByLocale,
    Translations,
} from '../components/translationsDemo/translations';

/**
 * Parent
 */
const TranslationsDemo: React.FC<{}> = () => {
    const [currentLocale, setCurrentLocale] = useState('en');
    const translations = translationsByLocale[currentLocale];

    return (
        <div>
            <LanguagePicker
                currentLocale={currentLocale}
                onLocaleChange={setCurrentLocale}
            />

            <SayHello />
        </div>
    );
};

/**
 * Child
 */
const SayHello: React.FC<{}> = () => {
    return <span>{'untranslated'}</span>;
};

export default TranslationsDemo;
