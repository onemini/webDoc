import { get } from "http"

function lightCopy(target) {
    if (!(target instanceof Object)) throw Error("传入的值必须为数组或者是对象")
    if (target instanceof Array) {
        const newArr = []
        target.forEach(key => newArr(key))
        return newArr
    } else {
        const newObj = {}
        Object.keys(target).forEach(key => newObj[key] = target[key])
        return newObj
    } 
}
const newArr = lightCopy([1,2,3])
console.log(newArr)// [1, 2, 3]
const newObj = lightCopy({name: "Little Boy"})
console.log(newObj)// {name: "Little Boy"}

// 深拷贝
// 判断是否是引用值
function isReferenceValue(target) {
    return target instanceof Object
}
// 获取每项克隆后的值
function getCopyValue(target) {
    return isReferenceValue(target) ? deepCopy(target) : target
}
//深度拷贝
function deepCopy(target) {
    if (!isReferenceValue(target)) throw Error("传入的值必须为数组或者是对象")
    if (target instanceof Array) {
        const newArr = []
        const targetLen = target.length
        for(let i = 0; i < targetLen; i++){
            newArr.push(getCopyValue(target[i]))
        }
        return newArr
    } else {
        const newObj = {}
        for (const key in target) {
            newObj[key] = getCopyValue(target[key])
        }
        return newObj
    }
}

const arr = [{
    hobby: [{
        name: "Little  Boy"
    }]
}]

const newObj = deepCopy(arr)
newObj[0].hobby[0].name = "Hello Little Boy"
console.log(arr) // "Little  Boy"















