import { get } from 'axios'
import { dataSucces, dataFail } from './actions'

const API_BASE = 'http://localhost:3000'

const fetchData = async (dispatch) => {
    try {
        const emails = await get(`${ API_BASE }/emails`)

        const { data } = emails

        dispatch(dataSucces(data))
    } catch (err) {
        dispatch(dataFail(err))
    }
}

const loadMoreData = (dispatch) => {
    setInterval(async () => { await fetchData(dispatch) }, 10000)
}
export {
    fetchData,
    loadMoreData,
}
