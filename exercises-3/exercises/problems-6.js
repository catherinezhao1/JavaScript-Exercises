/*
    Write a function which will reverse the vowels in a string.
    Any characters which are not vowels should remain in their original position,
    i.e. only swap pairs of vowels - but they may not be at matching indexes!

    For example:
    "Tomatoes" => "Temotaos"
*/

//a e i o u 
function IsVowel(char){
    if(char=="a" ||char=="A" ||char=="e"||char=="E"||char=="i"||char=="I"||char=="o"||char=="O"||char=="u"||char=="U")
    {return 1}
}

function reverseVowels(reverseMe) {
    reverseMe = reverseMe.split("")
    let index_list = []
    let vowel_list = ""
    for (let i=0; i<reverseMe.length; i++){
        if (IsVowel(reverseMe[i])==1){
            vowel_list += (reverseMe[i]);
            index_list.push(i) }
            //console.log(vowel_list)
            //console.log(index_list)
    }
    for (j=0; j<vowel_list.length;j++){
        reverseMe[index_list[j]] = vowel_list[vowel_list.length-j-1]
    }
    return reverseMe.join("")
}


// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.reverseVowels = reverseVowels