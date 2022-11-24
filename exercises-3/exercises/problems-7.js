/*
    Take every 2nd char from the string, then the other chars that are not every 2nd char, and concat them as new String.
    Do this n times

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "abababab", 1 => "bbbbaaaa"
    "abababab", 2 => "bbaabbaa"
    
*/


function encrypt(text, n) {
    if (n==0 || text == null){return text}
    
    else{
        arr = text.split('')
        for (let i=0; i<n; i++){        
            let arr_left =[]
            let arr_right =[]
            for (let j=0; j<arr.length; j++){
                if (j%2==0){arr_right.push(arr[j])}
                else {arr_left.push(arr[j])}
            }
            arr = arr_left.concat(arr_right)
        }
    }
    return arr.join('')
}

/*
    Now write a function to decrypt the encrypted strings

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "bbbbaaaa", 1 => "abababab"
    "bbaabbaa", 2 => "abababab"
*/

function decrypt(cipherText, n) {
    if (n==0 || cipherText == null){
        return cipherText}
    else{
        arr = cipherText.split('')
        for (let i=0; i<n; i++){
            let arr_left=[]
            let arr_right=[]
            
            if(arr.length%2 ==0){
                arr_left = arr.slice(0, arr.length/2)
                arr_right = arr.slice(arr.length/2, arr.length)
                result = []
                for (let j=0; j<arr_left.length; j++){
                    result.push(arr_right[j])
                    result.push(arr_left[j])
                }
            }
            else {
                arr_left = arr.slice(0, (arr.length-1)/2)
                arr_right = arr.slice((arr.length-1)/2, arr.length)
                result = []
                for (let k=0; k<arr_left.length; k++){
                    result.push(arr_right[k])
                    result.push(arr_left[k])
                }
            
                result.push(arr_right[arr_right.length-1])
            }
            result = result.join('')
            arr = result
        }
        return result
    }
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.encrypt = encrypt
window.solutions.decrypt = decrypt