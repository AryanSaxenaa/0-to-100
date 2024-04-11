// Capture the start time before scheduling the setTimeout
const startTime = Date.now();

// Schedule the setTimeout
setTimeout(() => {
    // Calculate the elapsed time when the function is executed
    const elapsedTime = Date.now() - startTime;
    console.log(`Time elapsed: ${elapsedTime} milliseconds`);
}, 1000); // Delay of 1 second
