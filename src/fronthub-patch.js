const namespace = '__IF_YOU_USE_IT_THE_INCEPTION_TEAM_WILL_PUNISH_YOU__'
const fronthub = (window[namespace] = window[namespace] || {
    libs: {}
})

export function patch(libs){
    libs.forEach(([name, id, version])=> {
        const lib = __webpack_require__(id)
        fronthub.libs[`${name}@${version}`] = [0, Promise.resolve(lib), 'patched']
    })
}
