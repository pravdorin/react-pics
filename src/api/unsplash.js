import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID ahG5iGUHuZDwXvILiNGpxYNpU1mAfN_PV2V7EgT4-WQ'
	}
});