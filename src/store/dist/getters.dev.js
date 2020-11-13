"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  animalsCount: function animalsCount(state) {
    return state.cats.length + state.dogs.length;
  },
  getAllCats: function getAllCats(state) {
    return state.cats;
  },
  getAllDogs: function getAllDogs(state) {
    return state.dogs;
  }
};
exports["default"] = _default;