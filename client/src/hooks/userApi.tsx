import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001' // Defina a baseURL corretamente aqui
});

export const useApi = () => ({

    signin: async (email: string, password: string) => {
        const response = await api.post('/login', { email, password });
        console.log("Tentativa de login com:", email, password);
        console.log(response)
        return response.data;
    
    },

    logout: async () => {
        const response = await api.post('/logout');
        return response.data
    }
});