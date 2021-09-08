export const paste = {
    paste: true
};
export const replace = {
    paste: true,
    replace: true
}
export const shorttimeout = {
    timeout: 15000
};
export const timeout = {
    timeout: 30000
};
export const longTimeout = {
    timeout: 60000
};

export const uniqueId = Date.now().toString();

export function getLabels(culture){
    let path = '../multilanguage/'.concat(culture, '.json');
    let labelsJson = require(path);
    return labelsJson;
}

export function getDay(){
    let today = new Date();
    return today.getDate();
}