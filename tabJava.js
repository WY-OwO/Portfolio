function openCity(evt, cityName) {
  // Declare all variables
  var i, tabContent, tablinks;

  // Get all elements with class="tabContent" and hide them
  tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openChar(evt, charName) {
  // Declare all variables
  var i, tabContent2, tablinks2;

  // Get all elements with class="tabContent" and hide them
  tabContent2 = document.getElementsByClassName("tabContent2");
  for (i = 0; i < tabContent2.length; i++) {
    tabContent2[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(charName).style.display = "block";
  evt.currentTarget.className += " active";
}

