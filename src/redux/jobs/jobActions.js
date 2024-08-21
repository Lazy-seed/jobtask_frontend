import axios from 'axios';
import { BASEURL } from '../../jwttoken';

export const fetchJobs = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASEURL}/api/jobs`);
    dispatch({ type: 'FETCH_JOBS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_JOBS_FAILURE', payload: error.message });
  }
};

export const applyForJob = (jobId) => async (dispatch, getState) => {
  const { auth: { user, token } } = getState();
  try {
    await axios.post(`${BASEURL}/api/jobs/apply/${jobId}`, { userId: user._id }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: 'APPLY_JOB_SUCCESS', payload: jobId });
  } catch (error) {
    dispatch({ type: 'APPLY_JOB_FAILURE', payload: error.message });
  }
};
