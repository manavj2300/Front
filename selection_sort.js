// let arr = ['b', 'B','c','C', 'A','a'];
// let min;
// let temp = 0;


// function small(fis, sec) {
//     fis = fis.charCodeAt();
//     sec = sec.charCodeAt();

//     if (fis > 91) {
//         a1 = fis - 97;
//     }
//     else {
//         a1 = fis - 65;
//     }
//     if (sec > 91) {
//         b1 = sec - 97;
//     }
//     else {
//         b1 = sec - 65;
//     }
    
//     if(a1==b1 && sec < fis){
//         return true;
//     }
//     else if(a1 < b1){
//         return true;
//     }
//     return false;
    
// }


// for (i = 0; i < arr.length; i++) {
//     min = i;
//     for (j = i + 1; j < arr.length; j++) {
//         if (small(arr[j], arr[min])) {
//             min = j;
//         }
//     }
//     temp = arr[min];
//     arr[min] = arr[i];
//     arr[i] = temp;
// }
// console.log(arr);


let array = ["a", "z", "B", "b", "Z","C","A"];
let temp;
let min;
let array_new;
let new_min;

for (let i = 0; i < array.length; i++)
{
  min = i;
  for (let j = 0; j < array.length; j++)
  {
      
    if(array[j].charCodeAt(0)>91 && array[min].charCodeAt(0)>91)
    {
     
        array_new = array[j].charCodeAt(0)-97;
        new_min = array[min].charCodeAt(0)-97;
      
        array_as =  array[j].charCodeAt(0);
        min_as = array[min].charCodeAt(0);
       
    }
    else if(array[j].charCodeAt(0)<91 && array[min].charCodeAt(0)<91)
    {
      
        array_new = array[j].charCodeAt(0)-65;
        new_min = array[min].charCodeAt(0)-65;

        array_as =  array[j].charCodeAt(0);
        min_as = array[min].charCodeAt(0);
    }
    else if(array[j].charCodeAt(0)>91 && array[min].charCodeAt(0)<91)
    {
     

        array_new = array[j].charCodeAt(0)-97;
        new_min = array[min].charCodeAt(0)-65;


        array_as =  array[j].charCodeAt(0);
        min_as = array[min].charCodeAt(0);
    }
    else if(array[j].charCodeAt(0)<91 && array[min].charCodeAt(0)>91)
    {
     

        array_new = array[j].charCodeAt(0)-65;
        new_min = array[min].charCodeAt(0)-97;


        array_as =  array[j].charCodeAt(0);
        min_as = array[min].charCodeAt(0);
    }
    
    if (array_new > new_min) 
    {
         min = j;
    }
    if (array_new == new_min && array_as < min_as)
    {
        min = j;
    }

   
      temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    
  }
}

console.log(array);


/////////////////////////////////////////////


var array=['a','c','B','b','C']
var small
var big
for(var i=0;i<array.length;i++){
    var min=i
    for(var j=i+1;j<array.length;j++){
            var arr=array[j].charCodeAt(0)
            var arr1=array[min].charCodeAt(0)
            if(arr>91){
                small=arr-97
            }
            else{
                small=arr-65
            }
            if(arr1>91){
                big=arr1-97
            }
            else{
                big=arr1-65
            }
            if(small==big && arr1<arr){
                min=j
            }
            else if(small<big){
                min=j
            }
    }
    var temp=array[i]
    array[i]=array[min]
    array[min]=temp

}
console.log(array)













