//Problem No-1.

function feetToMile(feet) {
    if (feet < 0) {
        return 'Distance can not be negative';
    } else {
        var mile = feet / 5280;
        return mile;
    }
}


//Problem No-2.

function tinyFriend(friendsName) {    
    for (let i = 0; i < friendsName.length; i++) {
        const element = friendsName[i];
        if (element == " " || element == "") {
            return 'Empty String detected.';
        }
    }    
    if (friendsName.length == 0) {
        return 'Insert your friends name.'
    }
    
    else {
        var tinyFriend = friendsName[0];
        var nameLength = friendsName[0].length;
        for (var i = 0; i < friendsName.length; i++) {
            var currentLength = friendsName[i].length;
            if (currentLength < nameLength) {
                nameLength = currentLength;
                tinyFriend = friendsName[i];            
            }        
        }
        return tinyFriend;
    }
}



//Problem No-3.

function woodCalculator(chair, table, bed) {
    if (chair % 1 != 0 || table % 1 != 0 || bed % 1 != 0 || chair < 0 || table < 0 || bed < 0) {
        return 'Chair / Table / Bed can not be measure in fraction or negative';
    } 
    else {
        var forChair = chair * 1;
        var forTable = table * 3;
        var forBed = bed * 5;
        var totalWood = forChair + forTable + forBed;
        return totalWood;
    }
}


//Problem No-4.

function brickCalculator(floor) {
    if (floor <= 0) {
        return 'We do not count underground floors.';
    }
    else if (floor <= 10) {
        var bricks = 10 * 15 * 1000;
        return bricks;
    }
    else if (floor >= 11 && floor <= 20){
        var feet = (floor - 10) * 12;
        var bricks = (feet * 1000) + (10 * 15 * 1000);
        return bricks;
    }
    else {
        var feet = (floor - 20) * 10;
        var bricks = (feet * 1000) + (10 * 15 * 1000) + (10 * 12 * 1000);
        return bricks;
    }
}