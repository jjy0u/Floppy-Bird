This was a _nology set project to make a JavaScript game of our choice and I went with Flappy Bird for a shot of nostalgia. Building flappy bird was almost as frustrating as playing the game but I got close enough to the original and I'll break down what I'd like to add in the future. 

Planning
--------

Elements of the game:
- Flappy bird: flappy just stays in when x coordinate but jumps by a set amount in the y axis when key/ click mouse click. When nothing is clicked, flappy just falls to his death, face first RIP.
- Pipes: move along the y coordinate until they reach flappy. If flappy touches the pipe, game over. Pipes sizes vary however gap size stays the same until you reach a higher level (?)
- Score: keeps count of how many pipes you pass 
- Score panel: when game over shows the score panel with your score (counts up to your score), best score, and a medal depending on your score. Eg bronze medal if you passed 10. Ok button and share button. Can also access this from start screen
- Pause button: self explanatory
- Start screen: start button and score button. When start is pressed gives a small tap tutorial


Plan:
1. First work with the elements sans animations, so have flappy as a dot and the pipes as rectangles just to prioritise functionality. Start with flappy and getting him moving up when on tap (click or key tap).
2. Have a few set pipes and figure out how to move them towards flappy
3. Figure out how to get the varying pipe sizes (with maintained gap) and for it to go continuously? Also figure out how to set the speed as this may be needed for higher levels
4. Make game end when flappy touches a pipe or hits the floor.
5. Keep a score count where a point is earned every time a pipe is passed
6. Store the highest score and display it as the best score. If score is > best score, best score = score
7. Display the score panel after loss
8. Button to start the game
9.  Button to redirect to start page from game over and a share button
10. Pause button and resume button.
11. Put in animations


Implementation
--------------
Flappy:
For the most part I followed the plan; I started with flappy and the jumping functionn and used a Set Timeout to only animate one jump per click rather than a continutation of movement when a key is clicked once. I then added gravity which is continuous after a key is clicked but stops when certain conditions are met such as Flappy hitting the floor which would send him back to the original position sans gravity. 

Pipes:
For the pipes, I used flex on three elements of a whole pipe which are pipe 1 (the top pipe) and pipe hole and pipe 2(the bottom pipe). I found that changing the flex of one pipe allowed the changing position of th hole so in order to randomise the position of the hole, I randomised the value of flex upon certain conditions. Those conditions were if the game reset, or if the pipe exitted the game. To animate the pipes I used a set interval function that starts when 