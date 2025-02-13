
import { createRoot } from 'react-dom/client'
import App  from './04/App04.tsx'

const div = document.getElementById('root');
const root = createRoot(div!);
root.render(<App />)

