export const state = () => ({
  age: '',
  gender: '',
  height: '',
  weight: '',
  bmi: '',
  tdee: '',
  kcalFlg: false,
  macro: '',
  activity: '',
  protein: '',
  carbohydrate: '',
  fat: '',
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
  unkounko5(state, payload5) {
    state.activity = payload5
  },
  bmicalc(state) {
    state.bmi = (state.weight / Math.pow(state.height / 100, 2)).toFixed(1)
  },
  tdeecalc(state) {
    if (state.gender === 'male') {
      state.tdee = (
        88.362 +
        13.397 * state.weight +
        4.799 * state.height -
        5.677 * state.age
      ).toFixed(0)
      state.kcalFlg = true
    } else if (state.gender === 'female') {
      state.tdee = (
        447.593 +
        9.247 * state.weight +
        3.098 * state.height -
        4.33 * state.age
      ).toFixed(0)
      state.kcalFlg = true
    }
  },
  macrocalc(state) {
    if (state.gender === 'male') {
      state.kcalFlg = true
      if (state.activity === 'Sedentary') {
        state.macro = Math.round(
          (10 * state.weight + 6.25 * state.height - 5 * state.age + 5) * 1.2
        )
      } else if (state.activity === 'Light Activity') {
        state.macro = Math.round(
          (10 * state.weight + 6.25 * state.height - 5 * state.age + 5) * 1.375
        )
      } else if (state.activity === 'Moderate Activity') {
        state.macro = Math.round(
          (10 * state.weight + 6.25 * state.height - 5 * state.age + 5) * 1.55
        )
      } else if (state.activity === 'Active') {
        state.macro = Math.round(
          (10 * state.weight + 6.25 * state.height - 5 * state.age + 5) * 1.725
        )
      }
      state.protein = Math.round(state.weight * 2)
      state.fat = Math.round((state.macro * 0.25) / 9)
      state.carbohydrate = Math.round(
        (state.macro - state.protein * 4 - state.fat * 9) / 4
      )
    }
    if (state.gender === 'female') {
      state.kcalFlg = true
      if (state.activity === 'Sedentary') {
        state.macro = Math.round(
          (10 * state.weight + 6.25 * state.height - 5 * state.age - 161) * 1.2
        )
      } else if (state.activity === 'Light Activity') {
        state.macro = Math.round(
          (10 * state.weight + 6.25 * state.height - 5 * state.age - 161) *
            1.375
        )
      } else if (state.activity === 'Moderate Activity') {
        state.macro = Math.round(
          (10 * state.weight + 6.25 * state.height - 5 * state.age - 161) * 1.55
        )
      } else if (state.activity === 'Active') {
        state.macro = Math.round(
          (10 * state.weight + 6.25 * state.height - 5 * state.age - 161) *
            1.725
        )
      }
      state.protein = Math.round(state.weight * 2)
      state.fat = Math.round((state.macro * 0.25) / 9)
      state.carbohydrate = Math.round(
        (state.macro - state.protein * 4 - state.fat * 9) / 4
      )
    }
  },
}
export const actions = {}
export const getters = {}
