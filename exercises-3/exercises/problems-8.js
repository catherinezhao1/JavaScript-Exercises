/*
    You will be given a sequence of letters.
    When an uppercase and lowercase of the same letter touch, they destroy each other.
    After they have been removed, the process continues until there are no more letters reacting

    For example:
    "xYyZZX" => "xZZX"
    "aBbA" => ""
*/

/* function react(sequence) {
    final_seq = []
    for (let i=0;i<sequence.length;i++){
        if (sequence[i].toLowerCase() == sequence[i+1] || sequence[i].toUpperCase() == sequence[i+1] && sequence[i] !=sequence[i+1]){
            final_seq = final_seq; i = i+1
        }
        else {final_seq.push(sequence[i])}
    }
    return final_seq.join("")
}*/
function react(sequence) {

    for (let j=0; j<sequence.length+1;j++){
        let final_seq = []
        for (let i=0;i<sequence.length;i++){
            if (sequence[i].toLowerCase() !== sequence[i+1] && sequence[i].toLowerCase() !== sequence[i-1] && sequence[i].toUpperCase() !== sequence[i+1] && sequence[i].toUpperCase() !== sequence[i-1]&& sequence[i] !==sequence[i+1] && sequence[i] !==sequence[i-1]){
                final_seq.push(sequence[i])
         }
            else {
                //final_seq = final_seq

            }
        }
        sequence = final_seq
    }
    result =  sequence.join("")
    return result
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.react = react