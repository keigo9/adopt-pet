export default {
  addPet: ({ commit }, pet) => {
    commit('appendPet', pet)
  }
}
