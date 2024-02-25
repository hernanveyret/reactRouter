let num = -8;

const suma = []
for ( let i = 1; i <=10; i++ ){
    num = num + 2
  if(num === i ){
    console.log("se interrumpio");
    break
  }else {
      suma.push(num)
  }
  console.log(suma)
}

let conteo = 1;
   const arr = []
   do{
      conteo++
      num = num + 2
      if ( num === conteo) {
         console.log( "Se interrumpió la ejecución")
         break;
      }
      arr.push(num);

   }while(conteo < 10){
      console.log(arr)
   }