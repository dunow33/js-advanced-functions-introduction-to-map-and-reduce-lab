function mapToNegativize(sourceArray){
    let negArray = [];

    for(let i of sourceArray)
        negArray.push(i * -1);

    return negArray;
}

function mapToNoChange(sourceArray){
    return sourceArray;
}

function mapToDouble(sourceArray){
    let dubArray = [];

    for(let i of sourceArray)
        dubArray.push(i * 2);

    return dubArray;
}

function mapToSquare(sourceArray){
    let sqArray = [];

    for(let i of sourceArray)
        sqArray.push(i ** 2);

    return sqArray;
}

function reduceToTotal(sourceArray, startingPoint = 0){
    let total = startingPoint;

    for(let i of sourceArray)
        total += i;

    return total;
}

function reduceToAllTrue(sourceArray){
    for(let i of sourceArray)
        if(!i)
            return false;
    return true;
}

function reduceToAnyTrue(sourceArray){
    for(let i of sourceArray)
        if(i)
            return true;
    return false;
}