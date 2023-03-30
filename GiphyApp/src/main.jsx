import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'

import GiphyApp from './GiphyApp'

import {theme} from './consts/theme'
import {GlobalStyle} from './styled/globalStyle'

import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <GiphyApp />
    </ThemeProvider>
)
