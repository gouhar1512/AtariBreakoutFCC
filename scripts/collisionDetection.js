// DETECTING COLLISION BETWEEN TWO OBJECTS

export function detectCollision(obj1, obj2) {
  // BALL
  let bottomOfObj1 = obj1.position.y + obj1.size;
  let topOfObj1 = obj1.position.y;

  // GAMEOBJECT
  let topOfObj2 = obj2.position.y;
  let leftSideOfObj2 = obj2.position.x;
  let rightSideOfObj2 = leftSideOfObj2 + obj2.width;
  let bottomOfObj2 = obj2.position.y + obj2.height;

  if (
    bottomOfObj1 >= topOfObj2 &&
    topOfObj1 <= bottomOfObj2 &&
    obj1.position.x >= leftSideOfObj2 &&
    obj1.position.x + obj1.size <= rightSideOfObj2
  ) {
    return true;
  }
  return false;
}
