var client=[
    {
        clientName:"Rajesh",
        clientTotal:10000,
        clientPaid:8000,
        dueDate:"2024-10-12"
},
{
    clientName:"Mahesh",
    clientTotal:15000,
    clientPaid:9000,
    dueDate:"2024-12-20"
},
{
    clientName:"Dinesh",
    clientTotal:20000,
    clientPaid:7000,
    dueDate:"2024-12-07"
}
]

// date1="2024-10-12"
// var CurrentDate=new Date(date1);
// console.log(typeof CurrentDate);

// var dueDate=new Date()

var CurrentDate=new Date("2024-12-10");

var dueClient=client.filter(elem=>{
    var date=new Date(elem.dueDate);
    var remaining=elem.clientTotal-elem.clientPaid;

    if(date<CurrentDate && remaining>0){
        return elem;
    }
})

console.log(dueClient);