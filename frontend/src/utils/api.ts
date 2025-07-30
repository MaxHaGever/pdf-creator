// frontend/src/utils/api.ts
import axios from 'axios';

// Add TypeScript declaration for Vite env variables
interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  // add more env variables if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:6000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
