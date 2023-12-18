const root = document.querySelector('#root')
// <!-- <div class="counter">
// <button class="btn btn-inc">+</button>
// <h3 class="number">0</h3>
// <button class="btn btn-dec">-</button>
// <button class="btn btn-clr">C</button>
// </div> -->
function makeElemnet(tag, attr_n, attr_v, counter){
    let  output = document.createElement(tag)
    output.setAttribute(attr_n,attr_v)
    output.textContent = counter
    return output
}
let countNum = 0
function updatCConter(n){
    if(countNum + n < 0){
        return
    }
    countNum += n
    number.textContent = countNum

    const delCounter = () =>{
        console.log ('delete Counter')
    }
}
const counter = makeElemnet('div','class','counter')
const btnInc = makeElemnet('button','class','btn-inc','+')
const number = makeElemnet('h3','class','number','0')
const btnDec = makeElemnet('button','class','btn-dec','-')
const btnClr = makeElemnet('button','class','btn-clr','C')


btnInc.addEventListener('click', () => updatCConter(1))
btnDec.addEventListener('click', () => updatCConter(-1))
btnClr.addEventListener('click', () => updatCConter(-countNum))


counter.append(btnInc,number,btnDec,btnClr)


root.append(counter)



// const btnAdd = document.querySelector('.btn-add')
// btnAdd.addEventListener('click',()=>root.append(counter())) เขียนแบบนี้ก็ได้หรือแบบข้างล่างก็ได้
