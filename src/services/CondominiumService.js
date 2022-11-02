import axios from 'axios';
import { API_BASE_URL } from '../shared/Config';

export const getCondominiums = () => {
    return axios({
        url: `${API_BASE_URL}/api/condominiums`,
        method: 'get',
    });
}