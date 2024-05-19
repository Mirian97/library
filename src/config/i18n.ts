import en from '@/languages/english.json'
import pt from '@/languages/portuguese.json'
import es from '@/languages/spanish.json'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  en,
  pt,
  es
}

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources
})

export default i18n
