function main(callback1, callback2, string) {
    str1 = callback1(string)
    str2 = callback2(str1)
    return str2
}

function str1(params) {
    params += 'params1'
    return params
}

function str2(params) {
    params += 'params2'
    return params
}

string = '123'

console.log(main(str1, str2, string));