
export const TimeUtils = {

  // time conversions
  msToHr: time => Math.floor(time / 3600000),
  msToMin: time => Math.floor(time / 60000),
  msToSec: time => Math.floor(time / 1000),

  hrToMs: hours => hours * 3600000,
  minToMs: minutes => minutes * 60000,
  secToMs: seconds => seconds * 1000,

  parseTime: function(timeInMs) {
    // return time parts as a time object
    let hours = this.msToHr(timeInMs);
    let minutes = this.msToMin(timeInMs - this.hrToMs(hours));
    let seconds = this.msToSec(timeInMs - this.hrToMs(hours) - this.minToMs(minutes));

    return { hr: hours, min: minutes, sec: seconds };
  },

  formatElapsed: function(timeInMs) {
    let { hr, min, sec } = this.parseTime(timeInMs);
    if(hr > 0) return `${hr}h ${min}m`;
    return `${hr}h ${min}m`;
  }

}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const DateUtils = {
  formatMonthDate: function(timestamp) {
    let date = new Date(timestamp);
    let monthName = monthNames[date.getMonth()].substring(0,3);
    return `${monthName} ${date.getDate()}`;
  }
}