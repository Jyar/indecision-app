console.log('utils running');

export const square = (x) => x * x;
export const add = (a,b) => a+b;
const substract = (a,b) => a-b;

// export {substract as default}; 
// export default substract;
export default (a,b) => a - b;

// export {
//     square, add
// };