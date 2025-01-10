//1.Given an array of objects representing employees, each object containing a name and age property, write a function that sorts the array by the age property in ascending order.
const employees = [ 
    { name: 'John', age: 28 }, 
    { name: 'Anna', age: 22 }, 
    { name: 'Mike', age: 32 },
     ];
employees.sort((a,b)=>{
    return a.age - b.age;
})   
console.log(employees);

//2.You are given an array of numbers. Write a function that groups the numbers into two categories: odd and even, and returns an object where the keys are "odd" and "even", and the values are arrays containing the respective numbers
const nums = [1, 2, 3, 4, 5, 6];
const res = {odd:[],even:[]};
nums.forEach((index)=>{
    if(index%2==0){
        res.even.push(index);
    }
    else{
        res.odd.push(index);
    }
})
console.log(res);

//3.You have an array of objects, each containing an id and name property. Some objects may have the same id value but different name values. Write a function that removes the duplicate objects based on the id property and returns a new array with only unique id values.
const data = [ { id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'C' }, ];
let set = new Set();
let res1 = [];
data.forEach((item)=>{
    if(!set.has(item.id)){
        res1.push(item);
    }
    set.add(item.id);
})
console.log(res1);

//4.Find the most frequent element in an array.
const arr = [1, 2, 2, 3, 3, 3];
let map = new Map();
arr.forEach((item)=>{
    map.set(item,(map.get(item)||0)+1);
})
maxKey = 0;
maxValue = 0;
map.forEach((item,key)=>{
    if(item>maxValue){
        maxValue = item;
        maxKey = key;
    }
})
console.log(maxKey);

//5.Find common elements in two arrays.
const arr1 = [1, 2, 3]; const arr2 = [2, 3, 4];
let res2 = [];
arr2.forEach((item)=>{
    if(arr1.includes(item)){
        res2.push(item);
    }
})
console.log(res2);

//6.Transform array of objects into a key-value map.
const arr3 = [ { id: 1, name: 'A' }, { id: 2, name: 'B' }, ];
let map1 = new Map();
arr3.forEach((index)=>{
    map1.set(index.id,index.name);
})
console.log(map1);

//7.Get array elements that only appear once.
const arr4 = [1, 2, 2, 3, 4, 4, 5];
let map3 = new Map();
arr4.forEach((index)=>{
    map3.set(index,(map3.get(index)||0)+1);
})
let res3 = [];
map3.forEach((item,key)=>{
    if(item==1){
        res3.push(key);
    }
})
console.log(res3);

//8.Convert an object into an array of [key, value] pairs.
const obj = { a: 1, b: 2 };
let arr5 = Object.entries(obj);
let res4 = [];
arr5.forEach((item)=>{
    res4.push(item[0],item[1]);
})
console.log(res4);

//9.Filter keys in an object.
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = {};
Object.keys(obj1).filter((item)=>{
    if(item == "a" || item == "b"){
        obj2[item] = obj1[item];
    }
})
console.log(obj2);

//10.Given three values: an array arr = [1, 2, 3, 5], an array b = [4, 7], and a single number c = 6, merge them together into a single array [1, 2, 3, 4, 5, 6, 7], without using the sort() or concat() methods, and ensuring no duplicates are present.
const arr6 = [1,2,3,5];
const arr7 = [4,7];
const arr8 = 6;
let combined = [arr6,arr7,arr8].flat();
let set1 = new Set();
combined.forEach((item)=>{
    set1.add(item);
})
console.log(set1);