function superbowlWin(record) {
let win = record.find((r)=>r.result === 'W') 
/*if (win) {
    return win.year; 
    }
else {
    return undefined; 
}
*/
return !!win ? win.year : undefined; 
}
