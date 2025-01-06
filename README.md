# Expo WebBrowser openBrowserAsync doesn't work on Android

This repository contains a bug report and solution for the Expo WebBrowser openBrowserAsync function not working correctly on Android devices.  The issue is that openBrowserAsync does not reliably return a result, often resulting in an undefined value.

The bug is demonstrated in `bug.js`.  A solution is provided in `bugSolution.js` that addresses the issue by handling potential inconsistencies in the result.

## Bug Description

When using `WebBrowser.openBrowserAsync` on Android, the URL opens correctly in a browser, but the promise often resolves with an undefined result instead of providing information about the browser interaction.

## Solution

The solution involves adding error handling and checking for unexpected results.  The improved implementation provides more robust behavior, ensuring a more reliable outcome even when unexpected scenarios occur.