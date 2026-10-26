// Q5. Boolean Logic Access System

function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    // Access is secure only when every required condition is true
    const isSecure =
        isAlarmOn &&
        isDoorLocked &&
        isWindowClosed &&
        isOwnerInside;

    console.log(
        `Door Locked: ${isDoorLocked}, Window Closed: ${isWindowClosed}, ` +
        `Alarm On: ${isAlarmOn}, Owner Inside: ${isOwnerInside} -> ` +
        `${isSecure ? "Secure" : "Unsafe"}`
    );
}

// Test multiple outcomes
checkSecurity(true, true, true, true);    // Secure
checkSecurity(true, true, false, true);   // Unsafe
checkSecurity(true, false, true, true);   // Unsafe
checkSecurity(false, true, true, false);  // Unsafe

// Demonstrate ! and || as well
const emergencyOverride = false;
const alarmFailure = false;
const safeWithOverride = (true && true && true && true) || emergencyOverride;
console.log(`Emergency override active: ${!emergencyOverride}`);
console.log(`Additional safety check: ${safeWithOverride && !alarmFailure ? "Secure" : "Unsafe"}`);
