export function paging(arr){
    var num =parseInt(arr.length/9);
    return getList.getObjList(arr,num);
}

var getList={
 getObjList:(arr,num)=>{
    var array=[];
    var list=[];
    for (var index = 0; index < arr.length; index++) {
        //console.log(index);
        list.push(arr[index]);
        if(list.length==9||arr.length-1==index){
                    array.push(list);
                    list=[];
                    
        }
            
    }
     return array;
 }
}