import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GlobalStyles} from "./styles/GlobalStyles.tsx";
import {ThemeProvider} from "./styles/ThemeContext.tsx";

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
            <GlobalStyles/>
            <App/>
    </ThemeProvider>,
)
