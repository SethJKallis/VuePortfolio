import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
    testimonials: null,
    education: null,
    work: null
  },

  getters: {
    testimonials(state){
      return state.testimonials
    },
    projects(state){
      return state.projects
    },
    education(state){
      return state.education
    },
    work(state){
      return state.work
    }
  },

  mutations: {
    setTestimonials(state, testimonials){
      state.testimonials = testimonials
    },
    setProjects(state, projects){
      state.projects = projects
    },
    setEducation(state, education){
      state.education = education
    },
    setWork(state, work){
      state.work = work
    }
  },

  actions: {
    fetchTestimonials(content){
      return fetch('https://sethjkallis.github.io/Vue-Portfolio-Data/testimonials.json')
      .then((response) => response.json())
      .then((data) => {
        content.commit("setTestimonials", data.testimonials)
      })
      .catch((err) => {
        console.warn(err)
      })
    },
    fetchProjects(context){
      return fetch('https://sethjkallis.github.io/Vue-Portfolio-Data/projects.json')
      .then((response) => response.json())
      .then((data) => {
        context.commit("setProjects", data.projects)
      })
      .catch((err) => {
        console.warn(err)
      })
    },
    fetchEducation(content){
      return fetch('https://sethjkallis.github.io/Vue-Portfolio-Data/education.json')
      .then((response) => response.json())
      .then((data) => {
        content.commit("setEducation", data.education)
      })
    },
    fetchWork(context){
      return fetch('https://sethjkallis.github.io/Vue-Portfolio-Data/work.json')
      .then((response) => response.json())
      .then((data) => {
        context.commit("setWork", data.work)
      })
    }
  },

  modules: {
  }
})
