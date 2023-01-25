{
    /* Importación de bibliotecas base */
}
import React from 'react'
import ReactDOM from 'react-dom/client'

{
    /* Importación de biblioteca react-router-dom */
}
import { BrowserRouter } from 'react-router-dom'

{
    /* Importación de biblioteca react-redux */
}
import { Provider } from 'react-redux'
import store from './reducers'

{
    /* Importación de traducciones */
}
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import common_en from './translations/en/common.json'
import common_es from './translations/es/common.json'

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'es',
    resources: {
        en: {
            common: common_en
        },
        es: {
            common: common_es
        }
    }
})

{
    /* Importación de bibliotecas de diseño */
}
import '@fontsource/noto-sans'
import '@fontsource/noto-serif'
import '@fontsource/noto-mono'

import './main.css'
import 'preline'

import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <I18nextProvider i18n={i18next}>
                <Provider store={store}>
                    <App />
                </Provider>
            </I18nextProvider>
        </BrowserRouter>
    </React.StrictMode>
)
