export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
};

export const isEmpty = (obj) => {
    for (let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
};