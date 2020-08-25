import React, { ChangeEvent } from 'react';
import LocaleStore from '../stores/LocaleStore';

const LanguagePicker: React.FC<{
    currentLocale: string;
    onLocaleChange: (locale: en) => void;
}> = (props) => {
    const onLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onLocaleChange(e.target.value);
    };

    return (
        <select onChange={onLanguageChange} style={{ float: 'right' }} value={props.currentLocale}>
            <option value="en">🇨🇦 - English</option>
            <option value="fr">🇫🇷 - French</option>
        </select>
    );
};

export default LanguagePicker;
