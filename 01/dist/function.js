// ----------------------------------------
//   Optional Parameter
const func = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
func(25, 23);
const func2 = (n, m, l = 20) => {
    return n * m * l;
};
func2(25, 23);
const func3 = (...m) => {
    return m;
};
func3(25, 23, 34, 6, 67, 8, 9);
function lol(n) {
    return 45;
}
const getData = (product) => {
    console.log(product);
};
const productOne = {
    name: "Macbook",
    stock: 46,
    price: 999999,
    photo: "samplephotourl",
    id: "asdnasjdasjkdas",
};
getData(productOne);
// Never Type
const errorHandler = () => {
    throw new Error();
};
export const myAge = "dfsghjkals";
