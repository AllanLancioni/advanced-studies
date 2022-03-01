// Exercise from the book You Don't Know JS Yet (YDKJSY) 
// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apB.md

// scheduleMeeting(..) should take a start time(in 24 - hour format as a string "hh:mm") and a meeting duration(number of minutes).It should return true if the meeting falls entirely within the work day(according to the times specified in dayStart and dayEnd); return false if the meeting violates the work day bounds.


const dayStart = "07:30"
const dayEnd = "17:45"

function scheduleMeeting(startTime, durationMinutes) {

  const [dayStartHour, dayStartMin] = dayStart.split(':').map(piece => +piece)
  const [dayEndHour, dayEndMin] = dayEnd.split(':').map(piece => +piece)
  const [startMeetingHour, startMeetingMin] = startTime.split(':').map(piece => +piece)

  // check if meeting startTime is before dayStart
  if (dayStartHour > startMeetingHour)
    return false
  if (dayStartHour === startMeetingHour && dayStartMin > startMeetingMin)
    return false

  // Convert durationMinutes to endMeeting Hour and Minutes
  const endMeetingHour = startMeetingHour + parseInt(durationMinutes / 60)
  const endMeetingMin = startMeetingMin + parseInt(durationMinutes % 60)

  // check if meeting endMeetingTime is after dayEnd
  if (dayEndHour < endMeetingHour)
    return false
  if (dayEndHour === endMeetingHour && dayEndMin < endMeetingMin)
    return false

  // return true if passed by all of the validation cases
  return true
}

scheduleMeeting("7:00", 15)     // false
scheduleMeeting("07:15", 30)    // false
scheduleMeeting("7:30", 30)     // true
scheduleMeeting("11:30", 60)    // true
scheduleMeeting("17:00", 45)    // true
scheduleMeeting("17:30", 30)    // false
scheduleMeeting("18:00", 15)    // false
scheduleMeeting("17:00", 50)    // false
