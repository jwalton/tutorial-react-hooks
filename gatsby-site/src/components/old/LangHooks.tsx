// import React, { useState, useEffect } from 'react';
// import LanguagePicker from '../LanguagePicker';
// import LocaleStore from '../../stores/LocaleStore';

// export interface LangHooksProps {}

// function useTranslations() {
//     const [translations, setTranslations] = useState(LocaleStore.getTranslations());

//     useEffect(() => {
//         const onLanguageChange = () => setTranslations(LocaleStore.getTranslations());
//         LocaleStore.addChangeListener(onLanguageChange);
//         return () => LocaleStore.removeChangeListener(onLanguageChange);
//     }, [setTranslations]);

//     return translations;
// }

// const LangHooks: React.FC<LangHooksProps> = (props) => {

//     const translations = useTranslations();

//     return (
//         <div>
//             <LanguagePicker />
//             <div>{translations.hello}</div>
//         </div>
//     );
// };

// export default LangHooks;
