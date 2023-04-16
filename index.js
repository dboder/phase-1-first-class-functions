function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction (){
    return function namedFunction () {
        return 0;
    };
}

function returnsAnAnonymousFunction(){
    return function () {
        return 0;
    };
}
