/*  */
import fetch from '../util/fetch'

export function getCommodityList(data) {
    return fetch({
        url: '/getCommodityList?name=' + data.name + '&type=' + data.type,
        method: 'post',
        // data
    })
}

export function updateType(data){ // 上架/下架
    return fetch({
        url:'/updateCommodityType',
        method: 'post',
        //data
    })
}

export function deleteCommodity(data){ // 上架/下架
    return fetch({
        url:'/deleteCommodity',
        method: 'post',
        //data
    })
}

export function addNewCommodity(data){
    return fetch({
        url:'/addNewCommodity',
        method: 'post',
        //data
    })
}