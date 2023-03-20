import {  private_url } from "../axios";
const state = {
    jobs:[]
};
const getters = {
    getAddedJobs: state => {
        return state.jobs
    },
};
const mutations = {
    
    SET_JOBS:(state, payload) => {
        state.jobs = payload
    },
};
const actions = {
   
    get_jobs: ({commit}, payload) => {
        console.log('response')
        return private_url
            .get('',payload)
            .then((response) => {
                console.log(response)
                commit("SET_JOBS", response.data.data);
                return response;
            })
            .catch((error) => error);
    },
    
    
};
export default {
    state,
    getters,
    mutations,
    actions,
};