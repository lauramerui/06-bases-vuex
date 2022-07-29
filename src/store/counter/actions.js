import getRandomInt from '@/helpers/getRandomInt'

export const incrementRandomInt = async( {commit} ) => {
    commit('setLoading',true)

    const randomInt = await getRandomInt()

    //se llama al nombre de la mutación que se quiere
    commit('incrementBy',randomInt)

    commit('setLoading',false)
}