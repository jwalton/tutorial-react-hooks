// import React from 'react';
// import LocaleStore, { Language } from '../../stores/LocaleStore';
// import LanguagePicker from '../LanguagePicker';

// export interface LanguageDemoProps {}

// interface State {
//     translations: Language;
// }

// export default class LanguageDemo extends React.Component<LanguageDemoProps, State> {
//     constructor(props) {
//         super(props);

//         this.state = {
//             translations: LocaleStore.getTranslations(),
//         };
//     }

//     onLanguageChange = () => {
//         this.setState({translations: LocaleStore.getTranslations()});
//     }

//     componentDidMount() {
//         LocaleStore.addChangeListener(this.onLanguageChange);
//     }

//     componentWillUnmount() {
//         LocaleStore.removeChangeListener(this.onLanguageChange);
//     }

//     render() {
//         return (
//             <div>
//                 <LanguagePicker />
//                 <div>{this.state.translations.hello}</div>
//             </div>
//         );
//     }
// }
