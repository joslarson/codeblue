// Save this script as `options.js`

// Saves options to localStorage.
function save_options() {
  var select;

  // select = document.getElementById("auto");
  // var auto = select.children[select.selectedIndex].value;
  // localStorage["auto"] = auto;

  // var username = document.getElementById("username").value;
  // localStorage["username"] = username;

  // var password = document.getElementById("password").value;
  // localStorage["password"] = password;

  // select = document.getElementById("start");
  // var start = select.children[select.selectedIndex].value;
  // localStorage["start"] = start;

  // select = document.getElementById("end");
  // var end = select.children[select.selectedIndex].value;
  // localStorage["end"] = end;

  var delay = document.getElementById("delay").value;
  localStorage["delay"] = delay;

  // Update status to let user know options were saved.
  var saveStatus = document.getElementById("saveStatus");
  saveStatus.innerHTML = "Options saved!";
  setTimeout(function() {
    status.innerHTML = "";
  }, 1000);
}

function restore_option(string) {
  var option = localStorage[string];
  if (!option) { return; }
  var input = $("#" + string);
  console.log(input.prop("tagName"));
  if (input.prop("tagName") == "select"){
    for (var i = 0; i < input.children.length; i++) {
      var child = input.children[i];
      if (child.value == option) {
        child.selected = "true";
      }
    }
  } else {
    input.val(option);
  }
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  // restore_option("auto");
  // restore_option("username");
  // restore_option("password");
  // restore_option("start");
  // restore_option("end");
  restore_option("delay");
  if(localStorage["status"] == "on"){
      $("#status").text("On");
  } else {
      $("#status").text("Off");
      localStorage["status"] = "off";
    }
}

document.addEventListener('DOMContentLoaded', restore_options);

$(function() {
  // $("#auto, #username, #password, #start, #end, #delay").change(function(){
  //   save_options();
  // });

  $("#delay").keyup(function(){
      save_options();
  });

  $("#status").click(function(){
    if($(this).text() == "Off"){
      $(this).text("On");
      localStorage["status"] = "on";
    } else {
      $(this).text("Off");
      localStorage["status"] = "off";
    }
  });
});