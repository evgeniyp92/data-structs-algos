// Talking about time and space complexity in algorithms

/*
* Simply put, time complexity is a way to measure how much the workload increases with a bigger input
* String reverse, for instance, is linear time (O(n)) -- each additional character is an additional loop
*
* Something like the steps algorithm though is a nested for loop, so it would be O(n^2), since we had to do 4 things
*  for 2 deep, 9 things for 3 deep, etc. Also referred to as quadratic runtime
*
* Generally these are the buckets of time complexities to think about
*
* O(1) aka constant time - no matter the input it always takes the same amount of time
* O(log(n)) aka logarithmic time - doubling the elements does not double the amount of work (assume searches are all
*  log(n)
* O(n) aka linear time - iterating through all elements in a collection of data. for loops spanning the entire set
*  are almost always linear
* O(n*log(n)) aka quasilinear time - each element increases the load by 1 + a little bit, sorts are usually n*log(n)
* O(n^2) aka quadratic time - every element in a collection has to be compared with every other element aka the
*  handshake problem (everyone needs to shake hands with everyone)
* O(2^n) aka exponential time - processing power necessary doubles with every single element added to the collection
*
* Tips on identifying runtime complexity
* Simple for loop through a single collection - O(n)
* For loop thru half a collection - O(n) still - no constants in runtime
* For loop over two different collections - O(n+m)
* Nested for loops iterating over the same collection - O(n^2)
* Two nested for loops iterating over different collections - O(n*m)
* Sorting - O(n*log(n))
* Searching a sorted array - O(log(n))
*
* Space complexity is a thing too
* Basically, how much more memory is required by doubling the problem set
* The general rules around runtime complexity also apply to space complexity
*/

