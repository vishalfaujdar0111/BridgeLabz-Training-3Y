// Q5. Boolean Logic Access System

// Security condition variables.
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    // Access is secure only when all four conditions are true.
    const isSecure =
        isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // OR (||) checks whether at least one security condition has failed.
    const isUnsafe =
        !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;

    if (isSecure && !isUnsafe) {
        console.log("Secure: Access conditions are satisfied.");
    } else {
        console.log("Unsafe: One or more security conditions are not satisfied.");
    }
}

// Test 1: All conditions are true.
console.log("Test 1:");
checkSecurity();

// Test 2: Window is open.
console.log("Test 2:");
isWindowClosed = false;
checkSecurity();

// Test 3: Restore the window and turn the alarm off.
console.log("Test 3:");
isWindowClosed = true;
isAlarmOn = false;
checkSecurity();
