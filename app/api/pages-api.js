import axios from 'axios';

/**
 * Get pages
 */

export function getPages() {
    return axios.get('http://localhost:3001/pages')
    .then(response => response.data);
}