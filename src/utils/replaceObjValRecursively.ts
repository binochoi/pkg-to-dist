
export function replaceObjValRecursively(obj: any, searchValue: any, replaceValue: any): any {
    if (typeof obj === 'string') {
        // 문자열에서 searchValue를 찾아 replaceValue로 교체
        return obj.replace(new RegExp(searchValue, 'g'), replaceValue);
    } else if (Array.isArray(obj)) {
        // 배열의 각 항목에 대해 재귀적으로 호출
        return obj.map((item: any) => replaceObjValRecursively(item, searchValue, replaceValue));
    } else if (typeof obj === 'object' && obj !== null) {
        // 객체의 각 키에 대해 재귀적으로 호출
        const result: any = {};
        for (const [key, value] of Object.entries(obj)) {
            result[key] = replaceObjValRecursively(value, searchValue, replaceValue);
        }
        return result;
    }
    // 문자열, 배열, 객체가 아닌 경우는 그대로 반환
    return obj;
}