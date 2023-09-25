// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // Code to display the current date in the header of the page.
  var today = dayjs();
  $("#currentDay").text(today.format('dddd, MMM D YYYY, h:mm a'));


  // Listener for save button to log.
  var eventText;
  var eventTime;

  $(".saveBtn").click(function() {
    eventText = $(this).siblings(".description").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    
    
  });

  // Code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
        var currentTime = today.format('HH');
      console.log("Current Time " + currentTime);
    $(".description").each(function () {
      var scheduledTime = parseInt($(this).attr("id"));
      console.log(scheduledTime);

      if (currentTime > scheduledTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (currentTime < scheduledTime) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      } else {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      }
  });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
});
