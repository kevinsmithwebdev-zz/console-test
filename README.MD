A test exploring the seeming async nature of console.log.

Notice that for the sorting of `arr1`, everything behaves as expected.

For `arr2`, the only difference is a callback function for the `sort` function. But this should affect nothing since `sort` is synchronous.

Regardless, the output to the console is working unexpectedly. While the output to the screen works as expected, the output to the console is incorrect. The output *before* the sort is already sorted - the `console.log` both *before* and *after* are sorted. When we comment out the sort line, both are unsorted.

One possible explanation is that the `console.log` statement sends the address to the array and by the time the browser uses it, the data has been sorted.

I am running this on Windows 10 and Chrome 62.0.3202.89.
