// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import file translations
import enTranslation from './locales/en/translation.json';
import idTranslation from './locales/id/translation.json';

const resources = {
    en: {
        translation: enTranslation
    },
    id: {
        translation: idTranslation
    }
};

i18n
    .use(LanguageDetector) // Deteksi bahasa otomatis
    .use(initReactI18next) // Pass i18n instance ke react-i18next
    .init({
        resources,
        fallbackLng: 'en', // Bahasa default jika tidak terdeteksi
        debug: false, // Set true untuk debugging

        interpolation: {
            escapeValue: false // React sudah aman dari XSS
        },

        detection: {
            // Urutan deteksi bahasa
            order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
            // Simpan pilihan bahasa ke
            caches: ['localStorage', 'cookie']
        }
    });

export default i18n;