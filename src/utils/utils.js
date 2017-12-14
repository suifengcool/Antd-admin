/**
 * 深度copy
 * @param obj
 */
export const deepCopy = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}