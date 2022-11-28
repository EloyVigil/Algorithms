class UtilClass {
    totalCount(numArr) {
        // Given an array of numbers,  return the sum of the array

        var sum = 0;
        for (var i = 0; i < numArr.length; i++) {
            sum += numArr[i];
        }
        return sum;
    }

    printMessages(msgArr) {
        // Given an array of String, write a function to print messages 
        for (var i = 0; i < msgArr.length; i++) {
            console.log(msgArr[i])
        }
    }
}

var messagesPerDay = [5, 8, 6]
var messages = ["Please call back!", "Make sure you install jdk", "DO NOT INSTALL VS CODE EXTENSION!"]

var newBot = new UtilClass()

console.log(newBot.totalCount(messagesPerDay));
newBot.printMessages(messages);