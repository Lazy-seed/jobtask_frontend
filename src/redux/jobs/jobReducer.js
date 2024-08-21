const initialState = {
    jobs: [],
    appliedJobs: [],
    error: null,
  };
  
  export const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_JOBS_SUCCESS':
        return { ...state, jobs: action.payload };
      case 'APPLY_JOB_SUCCESS':
        return { ...state, appliedJobs: [...state.appliedJobs, action.payload] };
      case 'FETCH_JOBS_FAILURE':
      case 'APPLY_JOB_FAILURE':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  