
export const isArrayEmpty = (arr)=>{
    if(arr !== null && arr.length != 0 && arr !== undefined){
        return false;
    }
    return true;
}

export const dumpLogs = (msg)=> {
    console.log(msg)
}