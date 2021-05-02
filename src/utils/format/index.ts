/**
 * 按位分隔字符串
 * @param num 待分隔的字符串
 * @param len 分隔周期长度（每len位分隔一次。默认值为4）
 */
export function separateNumByLength(num: string|number, len:number = 4): string {
    if(typeof num !== 'string'){
        num = `${num}`
    }
    const reg = new RegExp(`(\\d{${len}})(?=\\d)`, 'g')
    return num.replace(/\s/g,'').replace(reg,"$1 ")
}