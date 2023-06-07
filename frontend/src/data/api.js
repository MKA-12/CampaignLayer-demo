import axios from 'axios';

const handleError = (error) => {
  console.error('API Error:', error);
  throw error;
};
const createCRUDService = (resource) => {
  const apiUrl = 'http://localhost:4000/api/' + resource;

  // GET request
  const getAll = async () => {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  };

  const getById = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  };

  // POST request
  const create = async (data) => {
    try {
      const response = await axios.post(apiUrl, data);
      return response;
    } catch (error) {
      handleError(error);
    }
  };

  // PUT request
  const update = async (id, data) => {
    try {
      const response = await axios.put(`${apiUrl}/${id}`, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  };

  // DELETE request
  const remove = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  };

  return {
    getAll,
    getById,
    create,
    update,
    remove,
  };
};

export const campaignService = createCRUDService('campaigns');
export const rewardService = createCRUDService('rewards');