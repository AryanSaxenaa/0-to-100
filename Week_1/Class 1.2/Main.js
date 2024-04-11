const allUser=[{
    firstname:"Hakirat",
    gender:"Male"
    },
    {
        firstname: "Aryan",
        gender: "Male"
    },
    {
        firstname: "N",
        gender: "Female"
    },
    {
        firstname: "Ansh",
        gender: "trans"
    }
]
const NofUsers=allUser.length;
for(let i=0;i<NofUsers;i++){
    if(allUser[i]["gender"]=="Female"){
        console.log("Cutie Pie, Beautiful,"+allUser[i]["firstname"]);
    }
}