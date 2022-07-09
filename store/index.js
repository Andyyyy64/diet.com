export const state = () => ({
  age: '',
  gender: '',
  height: '',
  weight: '',
  bmi: '',
  tdee: '',
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
  unkounko4(state, payload4) {
    state.gender = payload4
  },
  bmicalc(state) {
    state.bmi = (state.weight / Math.pow(state.height / 100, 2)).toFixed(1)
  },
  tdeecalc(state) {
    if (state.gender === 'male') {
      state.tdee =
        (88.362 +
        13.397 * state.weight +
        4.799 * state.height -
        5.677 * state.age).toFixed(0)
    } else if (state.gender === 'female') {
      state.tdee =
        (447.593 + 9.247 * state.weight + 3.098 * state.height - 4.33 * state.age).toFixed(0)
    }
  },
}
export const actions = {}
export const getters = {}
