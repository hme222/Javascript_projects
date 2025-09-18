const sort= (data, sortBy, sortOrder)=> {
    const sortedData= data.toSorted((a,b)=> {
        //sortBy= "name"
        //a[sortBy] -> a["name"]
       // a["name"] is the same as a.name
        return a[sortBy] < b[sortBy] ? -1 : 1
    })

    if(sortOrder==="desc"){
        sortedData.reverse();
    }

    return sortedData
}

module.exports= sort 