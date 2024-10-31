import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ProjectPage from "./features/projects/pages";
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <ProjectPage/>
    </App>
  </StrictMode>,
)
