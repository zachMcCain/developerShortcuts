
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};






var addTwoNumbers = function(l1, l2) {
  // create an array
  let sumArray = [];
  // establish pointers on the first and second lists
  let firstPointer = l1;
  let secondPointer = l2;
  // establish a greater than 10 boolean
  let greater = false;

  // iterate through the first and second lists while next exists
  while (firstPointer && secondPointer) {
    let sum;
    if (greater) {
      // add the values of the next nodes
      sum = firstPointer.value + secondPointer.value + 1;
    } else {
      sum = firstPointer.value + secondPointer.value;
    }
    // if the sum is greater than nine
    if (sum > 9) {
      // set greater to true
      greater = true;
      // subtract 10 from sum
      sum = sum - 10;
      // else
    } else {
      // set greater to false
      greater = false;
    }
    // push sum to sumArray
    sumArray.push(sum);
    // increment the pointers
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }
  // Iterate through the remainder of l1 or l2
  if (firstPointer) {
    while (firstPointer) {
      if (greater) {
        if (firstPointer.value + 1 < 10) {
          greater = false;
          sumArray.push(firstPointer.value + 1)
        } else {
          sumArray.push(firstPointer.value);
        }
      } else {
        sumArray.push(firstPointer.value);
      }
      firstPointer = firstPointer.next;
    }
  }
  let linkedList = [];
  // iterate through the array backwards,
  let j = 0;
  for (var i = sumArray.length - 1; i >= 0; i--) {
    // creating a linked list from the elements
    if (i < sumArray.length - 1) {
      let node = new ListNode(sumArray[i], linkedList[j]) ////// need to grab the element from the linked list that is
    } else {
      let node = new ListNode(sumArray[i])
    }
    linkedList.push(node);
    j--;
  }
  // return the first node in the new list
  return (linkedList[linkedList.length - 1]);
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const testAddTwoNumbers = function() {
  let firstNode = new ListNode(1);
  let secondNode = new ListNode(2, firstNode);
  let thirdNode = new ListNode(3, secondNode);
  console.log('first node: ', firstNode, " second node: ", secondNode, ' third node: ', thirdNode);
  console.log(addTwoNumbers(firstNode, firstNode));
}

testAddTwoNumbers();