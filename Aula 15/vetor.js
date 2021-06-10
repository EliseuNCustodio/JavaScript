
let num = [5,8,4]
console.log(`O vetor é ${num}`)
num[3]=6
num.push(7)
a1=num.length
console.log(`O vetor tem ${a1} posições agora e é ${num}`)
num.sort()
console.log(`agora virou ${num}`)
num[6]=3
num.sort()
a1=num.length
console.log(`agora virou ${num} com ${a1} numeros`)
for(let pos=0;pos<a1;pos++)
{
    console.log(num[pos])
}
for(let pos in num )
{
    console.log(num[pos])
}
a2=num.indexOf(5)
console.log(`${a2}`)