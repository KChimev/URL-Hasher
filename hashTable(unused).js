import HashTable from "./hashtable.js";
const hashTable = new HashTable();


function hasher(){
    var hash="";
    const queryStr="name=Konstantin&entry_id=00110211";
    const urlParameters = new URLSearchParams(queryStr);
    if(urlParameters.has("entry_id")){
        hash=urlParameters.get("entry_id");
        hashTable.setItem("olt001",hash);
        console.log(hashTable.getItem("olt001"));
}
    else{  
      console.log("No entry_id found");
    }
}
hasher();
