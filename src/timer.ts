// Helper function to create a timer that resolves after the specified duration
const wait = (milliseconds: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
};

// Async function to simulate a timer
export const timer = async (duration: number): Promise<void> => {
    // console.log('Timer started');
    await wait(duration); // Wait for the specified duration
    // console.log('Timer completed after', duration, 'milliseconds');
};

// Usage
const main = async (): Promise<void> => {
    console.log('Start of the program');
    await timer(3000); // Wait for 3 seconds
    console.log('End of the program');
};

