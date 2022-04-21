### You're given this list of words: "Hello", "World", "Frame". Discuss the steps or code
needed to print out this:
  *********
  * Hello *
  * World *
  * Frame *
  *********

### Add "The" to the list in 3. and print out The Hello World Frame as above.

For this exercise, I divided the task into 2 parts.
The first function is responsible for finding the longest word in the array and returning the length of the word. This way we make sure that all words fit inside our frame, no matter if we add new words to the array.

The second function draws the shape of the frame and inserts the words of the array into it.
