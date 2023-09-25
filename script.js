$(function () {
  // Code to display the current date in the header of the page.
  var today = dayjs();
  $("#currentDay").text(today.format('dddd, MMM D YYYY, h:mm a'));


  // Listener for save button to log input.
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
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  var saveEventText9 = JSON.parse(localStorage.getItem("9AM"));
  $("#9").val("");
  $("#9").val(saveEventText9);
  
  var saveEventText10 = JSON.parse(localStorage.getItem("10AM"));
  $("#10").val("");
  $("#10").val(saveEventText10);
  
  var saveEventText11 = JSON.parse(localStorage.getItem("11AM"));
  $("#11").val("");
  $("#11").val(saveEventText11);
  
  var saveEventText12 = JSON.parse(localStorage.getItem("12PM"));
  $("#12").val("");
  $("#12").val(saveEventText12);
  
  var saveEventText1 = JSON.parse(localStorage.getItem("1PM"));
  $("#13").val("");
  $("#13").val(saveEventText1);

  var saveEventText2 = JSON.parse(localStorage.getItem("2PM"));
  $("#14").val("");
  $("#14").val(saveEventText2);

  var saveEventText3 = JSON.parse(localStorage.getItem("3PM"));
  $("#15").val("");
  $("#15").val(saveEventText3);

  var saveEventText4 = JSON.parse(localStorage.getItem("4PM"));
  $("#16").val("");
  $("#16").val(saveEventText4);

  var saveEventText5 = JSON.parse(localStorage.getItem("5PM"));
  $("#17").val("");
  $("#17").val(saveEventText5);
  
});
