export const state = () => ({
  age: '',
  gender: '',
  height: '',
  weight: '',
})
export const mutations = {
  unkounko(state, payload) {
    state.age = payload
  },
  unkounko2(state, payload2) {
    state.height = payload2
  },
  unkounko3(state, payload3) {
    state.weight = payload3
  },
}
export const actions = {}
export const getters = {}
