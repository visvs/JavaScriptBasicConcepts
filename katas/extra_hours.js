const isLeapYear = (year) =>{
    return ((year % 4 === 0 && year % 100 !== 0 )|| year % 400 === 0)
}

function countHours(year, holidays) {
    const isWorkDay = (day) =>{
        return day >= 1 && day <= 5
    }
    const hours = holidays.reduce((hours, holiday)=>{
        const holidayDate = new Date(`${holiday}/${year}`)

        if(isWorkDay(holidayDate.getDay())) return hours = hours + 2;

        return hours = hours;
    }, 0)


    return hours;
  }

console.log(countHours(2022, ['01/06', '04/01', '12/25']))

