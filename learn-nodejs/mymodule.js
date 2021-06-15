var count = 0;

const incC = () => ++count;
const decC = () => --count;
const getC = () => console.log(count);

module.exports = {
    incC,
    decC,
    getC
};


