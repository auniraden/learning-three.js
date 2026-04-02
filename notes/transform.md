## 4 properties to transform objects:
- position
- scale
- rotation
- quarternion
These properties will be compiled in matrices (to make it how it supposed to look like)

***
position z really depends on the camera, cause it will shows the perspective of an object whether in/out, near/far. so depens on the camera!

position inherit from vector3 means that can use many useful methods including get the lenght of a vector and also the distance from the camera and the object.

e.g: to get the lentgh
- .length
 to get the distance
 - .distanceTo

 ### Axes Helper
 - a threejs class
 - represent the axes (x,y,z) visually

 ***
 ### Rotate object
 - can use property rotation or quaternion
 - updating one will automatically update the other

### Rotation
- from Euler
- imagine putting a stick through the object's center in the axis direction and then rotating that object on the stick.
- PI can help to do half rotation (3.14159) or can use Math.PI
- full rotation 2 * PI

### Quaternion (most 3d software use this instaed of from Euler)
- representation of rotation in a much more mathematical way
- can get same result different formula

### Scale Group
- Can put object inside groups and use position, rotation, (or quaternion) and scale on these groups
