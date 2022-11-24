/*
    This function should take an array of integers, and return one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
*/

/*function isSortedAndHow(nums){
    let asc = 0
    let des = 0
    for (i=0; i<nums.length-1; i++){
      if (nums[i] > nums[i+1]){asc+=1}
      else if (nums[i] < nums[i+1]){des+=1}
      else {asc+=1; des+=1}
    }
  
   if (asc>0 && des===0 ){return "yes, descending"}
   else if (asc===0 && des>0){return "yes, ascending"}
   else{return "no"}
   }*/

   function isSortedAndHow(nums){
    let asc = true
    let des = true
    for (i=0; i<nums.length-1; i++){
      if (nums[i] > nums[i+1]){asc=false}
      else if (nums[i] < nums[i+1]){des=false}
      else {asc=false; des=false}
    }
  
   if (asc){return "yes, ascending"}
   else if (des){return "yes, descending"}
   else{return "no"}
   }

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.isSortedAndHow = isSortedAndHow