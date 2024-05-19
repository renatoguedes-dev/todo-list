import { addDays, format, isDate, isEqual, isWithinInterval, parse, startOfToday } from "date-fns"


export function checkToday(date) {
    // Define the format of the input string
    const dateFormat = "dd-MM-yyyy";

    // Check if the input date is already a Date object
    let parsedDate;
    if (isDate(date)) {
        parsedDate = date;
    } else {
        // Parse the string into a Date object
        parsedDate = parse(date, dateFormat, new Date());
    }

    // Get today's date
    const today = startOfToday();

    // Compare the dates
    const isSameDay = isEqual(parsedDate, today);

    return isSameDay;
}

export function changeDateFormat(date) {
    // Define the desired output format
    const outputFormat = "MMMM d"

    // Format the Date object to the desired output format
    const formattedDate = format(date, outputFormat)

    console.log('Formatted Date:', formattedDate);
}

export function checkWeek(date) {
    // Define the format of the input string
    const dateFormat = "dd-MM-yyyy";
    
    // Check if the input date is already a Date object
    let parsedDate;
    if (isDate(date)) {
        parsedDate = date;
    } else {
        // Parse the string into a Date object
        parsedDate = parse(date, dateFormat, new Date());
    }

    // Get today's date
    const today = startOfToday();

    // Get the date 7 days from today
    const endOfWeekDate = addDays(today, 7);

    // Check if the parsed date is within the next 7 days
    const isWithinWeek = isWithinInterval(parsedDate, { start: today, end: endOfWeekDate });

    return isWithinWeek;
}
