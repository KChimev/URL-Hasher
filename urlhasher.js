function urlTest(){
    const queryStr=window.location.search;
    const urlParameters = new URLSearchParams(queryStr);
    if(urlParameters.has("entry_id")){
      var hash=urlParameters.get("entry_id");
      for (let i = 0 ;i<string.length ; i++)
        {
          var ch = string.charCodeAt(i);
          hash = ((hash << 5) - hash) + ch;
          hash = hash & hash;
        }
        console.log(hash);
        return hash;
        urlParameters.set("entry_id",hash);
}
    else{  
      console.log("No entry_id found");
    }
}
urlTest();
