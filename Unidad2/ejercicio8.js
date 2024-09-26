function esBisisesto(anyo){
    let esBisiest=0
    if(((anyo%4)===0 && anyo&100!==0) || (anyo%400)===0){
        esBisiest=1
        return esBisiest
    }
    return esBisiest
}


