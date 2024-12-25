function logEvenNumbers(n) {
    
    if (typeof n !== 'number' || n < 0) {
        console.error("Будь ласка, введіть невід'ємне число.");
        return;
    }

    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

logEvenNumbers(10); 
