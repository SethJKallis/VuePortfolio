import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
    testimonials: null
  },
  getters: {
    testimonials(state){
      return state.testimonials
    },
    projects(state){
      return state.projects
    }
  },
  mutations: {
    setTestimonials(state, testimonials){
      state.testimonials = testimonials
    },
    setProjects(state, projects){
      state.projects = projects
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
    }
  },
  modules: {
  }
})
