function superbowlWin(record) {
     function isWinningYear(year) {
         if (year.result === "W")
         return true
     }
     const winningYearObject = record.find(isWinningYear)
     if (winningYearObject) {
     return winningYearObject.year
     }    
}
