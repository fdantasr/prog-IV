function remember(number) {
    return function() {
    return number;
    }
    }
    const returnedFunction = remember(5);
    console.log( returnedFunction() );
    // 5

