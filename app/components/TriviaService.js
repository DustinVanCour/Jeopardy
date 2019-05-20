import Trivia from "../models/Trivia.js";

//PRIVATE
let _api = new axios.create({
  baseURL: 'http://jservice.io/api/random'
})

let _state = {
  trivia: []
}

let _subscribers = {
  trivia: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}



//PUBLIC
export default class TriviaService {
  addSubscriber(propName, fn)
  _subscribers[propName].push(fn)
}
}