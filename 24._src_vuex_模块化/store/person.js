import axios from 'axios'
import { nanoid } from 'nanoid'
import { name } from 'pubsub-js'
export default {
    namespaced: true,
    actions: {
        add_person(context, value) {
            if (value.name == '') {
                alert('请输入姓名')
                return
            }
            context.commit('ADD_PERSON', value)
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            state.personList.unshift(personObj)
        }
    },
    state: {
        personList: [
            { id: '001', name: 'Sakura' },
            { id: '002', name: 'Caslana' },
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}