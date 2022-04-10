let i = 0;
const j = 10 ;
while(i<10) {
    console.log('Number is : ' ,i*j);
    i += 1;
}


for(let i=0 ; i<10 ; i+=1){
    console.log('Number is : ',i*j)
}


let s = "";

for(let i=0 ; i<10 ; i+=1){
    s+="" + i*j;
}

console.log(s);

let a = [];
for(let i=0 ; i<10 ; i+=1)
{
    a[i] = i *j;
}


console.log(a);
console.table(a);

a[1000] = 'a';
console.table(a);

let AvgArrow = function ( a, b) {


}