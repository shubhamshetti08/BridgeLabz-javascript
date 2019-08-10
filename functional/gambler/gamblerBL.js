/**
* @description : taking stakes and goal comparing to random generated numbers
* @param {int}, which has data information
* @return {data}, returning win% and lose%
*/
gambler = (stake, goal) => {
    let win = 0, lose = 0, totalGambles = 0, gamble = 0;
    let winp = 0, lostp = 0;
    do {
        // generating random integers
        let gamble = parseInt(Math.random() * 10);
        //console.log('no.of times gambled = '+gamble);
        totalGambles++;
        if (gamble == 0) {
            // if u win increasing stakes
            stake++;
            //console.log('yeah u have won  '+stake)
            win++;
        }
        else {
            // decreasing stakes
            stake--;
            //console.log('oh!!! no, u have lost  '+stake)
            lose++;
        }
        //come out ur stakes are empty or u reached goal
    } while (!(stake == 0 || stake == goal));
    // calculating %win and %lose
    winp = (win / totalGambles) * 100;
    lostp = (lose / totalGambles) * 100;
    return [winp, lostp];
}
module.exports = { gambler };