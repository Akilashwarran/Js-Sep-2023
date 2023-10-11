let Soul ={
    name:"Blade",
     id :1,
     price:99999999999,
    dimension:{
        length:7,
        breadth:4.5,
        height:5
    },
    category:["electronic","phones","clothes"],

    address:{
        city:"Citedel",
        state:"Soul Society",
        country:"Heaven",
        number:[1,2,4,9],
    reaperinfo:{
        name:"Hirotaka",
        department:"CSE",
        employeeinfo:{
           name2:"Aizen"
        }
    }
    }
    
}
console.log(Soul.address.reaperinfo)
console.log(Soul)
console.log(Soul .dimension.length)
console.log(Soul.category[1])
console.log(Soul.address.number[2])
console.log(Soul.address.reaperinfo.name)

// let names = ["abc","def","ghi"]
// console.log(names)
// let obj = Object.assign({},names)
// console.log(obj)