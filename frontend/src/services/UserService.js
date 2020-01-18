import HttpService from './HttpService'

export default {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update
}

function getUsers() {
    return HttpService.get('user')
}

function getById(userId) {
    return HttpService.get(`user/${userId}`)
}
function remove(userId) {
    return HttpService.delete(`user/${userId}`)
}

function update(user) {
    return HttpService.put(`user/${user._id}`, user)
}

async function login(userCred) {
    const user = await HttpService.post('auth/login', userCred)
    return _handleLogin(user)
}
async function signup(userCred) {
    const user = await HttpService.post('auth/signup', userCred)
    return _handleLogin(user)
}
async function logout() {
    await HttpService.post('auth/logout');
    sessionStorage.clear();
}
function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}