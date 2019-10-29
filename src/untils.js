
/**
 * 随机生成RGB颜色
 */
export const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 126) + 90;
    let g = Math.floor(Math.random() * 126) + 90;
    let b = Math.floor(Math.random() * 126) + 90;
    return `rgb(${r},${g},${b})`;
}