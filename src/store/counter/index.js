// import getRandomInt from '@/helpers/getRandomInt'
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterStore = {
    namespaced: true,

    state,
    //las mutaciones son síncronas y cambian directamente el estado
    mutations,
    //las actions son métodos que pueden ser asíncronos
    actions,
    //similar a computed properties
    getters
}

export default counterStore