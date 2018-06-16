
var num3:number;
// typescript 에서 데이터 타입을 선언하는 방법 
// num3 = '123'; error
num3 = 3;


var n:number = 3;
var f:number = 3.2;
var s:string ='abc';
var b:boolean = true;

function test():number{
    return 1;
}

function test1():void{
    return null;
}
// 변수에 대입 불가능

var t2:any = test1(); 
// 자바스크립트에 변환할때 동적으로 배당해주기때문에 오류가 안남 -> 실제로 불가능 - > undefined

var n1:number = 3;
var n2:number = 2;
var result:number = 0;
result = n1 + n2;
console.log(n1 + " + "  + n2 + " = "  + result);
result = n1 - n2;
console.log(n1 + " - "  + n2 + " = "  + result);
result = n1 / n2;
console.log(n1 + " / "  + n2 + " = "  + result);
result = n1 * n2;
console.log(n1 + " * "  + n2 + " = "  + result);


n1++;
console.log('n1++ = ' + n1);

n1--;
console.log('n1-- = ' + n1);

n1-=1;
console.log('n1-=1 = ' + n1);

n1 = 3;
console.log(n1++); //3
//4
console.log(n1);


if(1=='1'){
    console.log('1과 \'1\' 은 같습니다.'); // 이게나옴
}else{
    console.log('1과 \'1\' 은 다릅니다.');
}


if(1==='1'){     //데이터 타입과 value 둘다 동시에 확인하는거
    console.log('1과 \'1\' 은 같습니다.');
}else{
    console.log('1과 \'1\' 은 다릅니다.');  // 이게나옴
}

var age:number = 20;
console.log('age==20 ' + (age==20));
console.log('age!=20 ' + (age!=20));
console.log('age>=20 ' + (age>=20));
console.log('age<=20 ' + (age<=20));
console.log('age>20 ' + (age>20));
console.log('age<20 ' + (age<20));

var age1 = 10;
console.log(age ==20 || age1 == 20);  // 첫번째값이 tru 면 첫번째만 연산함
console.log(age ==20 && age1 == 20);

// 시작과 끝이 정확할때 for
// while 퍼포먼스 주요  어떤이벤트를 발생시켜야할때

for(var idx =1; idx < 10; idx++){
    if(idx % 2 ==0){
    //    console.log('짝수 =' + idx);
    }
  //  console.log(idx);//9
}
//console.log(idx); //10


var arr =  new Array();
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr[0]);

