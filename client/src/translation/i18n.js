import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import {TRANSLATION_ENG} from './Eng'
import {TRANSLATION_IDN} from './Idn'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources:{
            idn: {
                translation: TRANSLATION_IDN
            },
            eng: {
                translation: TRANSLATION_ENG
            }
        }
    })

i18n.changeLanguage("eng")