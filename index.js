/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}

function createEmployeeRecord(array) {
    const [firstName, familyName, title, payPerHour] = array
    return {
                firstName,
                familyName,
                title,
                payPerHour,
                timeInEvents: [],
                timeOutEvents: []
            }
}

function createEmployeeRecords(array) {

    const employeeRecords = []

    array.forEach(employee => {
        employeeRecords.push(createEmployeeRecord(employee))
    });

    return employeeRecords
}

function createTimeInEvent(date) {

    const clockIn = {
        type: "TimeIn",
        hour: parseInt(date.slice(11, 15)),
        date: date.slice(0, 10)
    }

    this.timeInEvents.push(clockIn)
    return this
}

function createTimeOutEvent(date) {

    const clockOut = {
        type: "TimeOut",
        hour: parseInt(date.slice(11, 15)),
        date: date.slice(0, 10)
    }

    this.timeOutEvents.push(clockOut)
    return this
}

function hoursWorkedOnDate(date) {

    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)

    const timeOutHour = parseInt(timeOut.hour) 
    const timeInHour = parseInt(timeIn.hour)

    let hoursWorked = (timeOutHour - timeInHour) / 100

    return hoursWorked
}

function wagesEarnedOnDate(date) {
    
    const hoursToBePaid = hoursWorkedOnDate.call(this, date)
    const wagesEarned = hoursToBePaid * this.payPerHour
    
    return wagesEarned
}

function findEmployeeByFirstName(srcArray, firstNameString) {

    return srcArray.find(emp => emp.firstName === firstNameString)
}

function calculatePayroll(array) {

    let payrollTotal = 0

    array.forEach(emp => {
        payrollTotal += allWagesFor.call(emp)
    })

    return payrollTotal
}
