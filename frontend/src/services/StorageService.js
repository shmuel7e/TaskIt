const saveToStorage=(key, value)=> {
    let str = JSON.stringify(value);
    localStorage.setItem(key, str);
}

const loadFromStorage=(key, defaultValue)=> {
    let str = localStorage.getItem(key);
    return str ? JSON.parse(str) : defaultValue
}


export default {saveToStorage,loadFromStorage}