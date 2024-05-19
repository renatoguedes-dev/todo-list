import { format, isEqual, parse, startOfToday } from "date-fns"

export function checkToday(date) {
    // Define the format of the input string
    const dateFormat = "dd-MM-yyyy"

    // Parse the string into a Date object
    const parsedDate = parse(date, dateFormat, new Date())

    // Get today's date
    const today = startOfToday()

    // Compare the dates
    const isSameDay = isEqual(parsedDate, today)

    return isSameDay
}

export function dateFormat(date) {
    // Define the desired output format
    const outputFormat = "MMMM d"

    // Format the Date object to the desired output format
    const formattedDate = format(date, outputFormat)

    console.log('Formatted Date:', formattedDate);
}
