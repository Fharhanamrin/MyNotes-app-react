// src/App.jsx
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'

function LandingPage() {
    const { t, i18n } = useTranslation()
    const [count, setCount] = useState(0)
    const [userName, setUserName] = useState('User')

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div className="App">
            {/* Language Switcher */}
            <div className="language-switcher">
                <button
                    onClick={() => changeLanguage('en')}
                    className={i18n.language === 'en' ? 'active' : ''}
                >
                    🇺🇸 English
                </button>
                <button
                    onClick={() => changeLanguage('id')}
                    className={i18n.language === 'id' ? 'active' : ''}
                >
                    🇮🇩 Indonesia
                </button>
            </div>

            {/* Navigation */}
            <nav>
                <ul>
                    <li><a href="#">{t('navigation.home')}</a></li>
                    <li><a href="#">{t('navigation.about')}</a></li>
                    <li><a href="#">{t('navigation.contact')}</a></li>
                    <li><a href="#">{t('navigation.profile')}</a></li>
                </ul>
            </nav>

            {/* Main Content */}
            <main>
                <h1>{t('welcome')}</h1>
                <p>{t('hello', { name: userName })}</p>
                <p>{t('description')}</p>

                {/* Counter Example */}
                <div className="counter">
                    <h2>{t('counter.title')}</h2>
                    <p>{t('counter.count', { count })}</p>
                    <div className="counter-buttons">
                        <button onClick={() => setCount(count + 1)}>
                            {t('counter.increment')}
                        </button>
                        <button onClick={() => setCount(count - 1)}>
                            {t('counter.decrement')}
                        </button>
                    </div>
                </div>

                {/* Form Example */}
                <div className="form-example">
                    <h2>{t('form.name')}</h2>
                    <input
                        type="text"
                        placeholder={t('form.name')}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder={t('form.email')}
                    />
                    <div className="form-buttons">
                        <button className="submit">{t('form.submit')}</button>
                        <button className="cancel">{t('form.cancel')}</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default LandingPage;