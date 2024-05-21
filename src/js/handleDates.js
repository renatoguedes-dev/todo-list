import { addDays, format, isDate, isEqual, isValid, isWithinInterval, parse, parseISO, startOfToday } from "date-fns"


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

export function formatTaskDate(taskDate) {
    // Convert the taskDate string to a Date object
    const date = parseISO(taskDate);
    
    // Format the Date object to the desired format "dd-MM-yyyy"
    const formattedDate = format(date, 'dd-MM-yyyy');
    
    return formattedDate;
}

export function dateFormatToTasks(dateString) {
    // Function to parse a date string in "dd-MM-yyyy" format to a Date object
    const inputFormat = 'dd-MM-yyyy';
    const parsedDate = parse(dateString, inputFormat, new Date());

    if (!isValid(parsedDate)) {
        throw new Error('Invalid date string');
    }

    // Define the desired output format
    const outputFormat = 'yyyy-MM-dd';

    // Format the Date object to a string in the desired output format
    const formattedDate = format(parsedDate, outputFormat);

    return formattedDate;
}
