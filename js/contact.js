
var sunsetForm = document.getElementById('sunset-form');
var hayesForm = document.getElementById('hayes-form');
var berkeleyForm = document.getElementById('berkeley-form');

//Figure out a way to utilize isopen boolean
//otherwise this object is unneccessary
var openBtns = document.querySelectorAll('.open-btn');
var forms = [{
    sunsetFormBtn: openBtns[0],
    sunsetForm: sunsetForm,
    isOpen: false
  },
  {
    hayesFormBtn: openBtns[1],
    hayesForm: hayesForm,
    isOpen: false
  },
  {
    berkeleyFormBtn: openBtns[2],
    berkeleyForm: berkeleyForm,
    isOpen: false
  }
];

var hostName = document.getElementById('event-name');
var date = document.getElementById('event-date');
var numOfAttendees = document.getElementById('event-size');
var phoneNumber = document.getElementById('event-phone-number');
var otherRequests = document.getElementById('event-requests');

var reservationInfo = {
  location: '',
  hostName: '',
  date: '',
  numOfAttendees: 0,
  phoneNumber: 0,
  otherRequests: ''
};

var mainContainer = document.querySelector('.main-container');
var app = {

  //looks for click events on make reservation buttons
  openForm: function() {
    openBtns.forEach(item => item.addEventListener('click', e => {
      var elementClicked = e.target;
      if (e) {
        mainContainer.style.height = '170vh';
      }
      switch (e.target) {
        case openBtns[0]:
          forms[0].sunsetForm.style.display = 'block';
          //closes all other open forms
          forms[1].hayesForm.style.display = 'none';
          forms[2].berkeleyForm.style.display = 'none';
          break;
        case openBtns[1]:
          forms[1].hayesForm.style.display = 'block';
          //closes all other open forms
          forms[0].sunsetForm.style.display = 'none';
          forms[2].berkeleyForm.style.display = 'none';
          break;
        case openBtns[2]:
          forms[2].berkeleyForm.style.display = 'block';
          //closes all other open forms
          forms[0].sunsetForm.style.display = 'none';
          forms[1].hayesForm.style.display = 'none';
      }
    }));
  },

  storeFormData: function() {
    reservationInfo.hostName = hostName.value;
    reservationInfo.date = date.value;
    reservationInfo.numOfAttendees = numOfAttendees.value;
    reservationInfo.phoneNumber = phoneNumber.value;
    reservationInfo.otherRequests = otherRequests.value;
  },

  submitForms: function(){
    var formSubmitBtns = document.querySelectorAll('.form-submit-btns');
    formSubmitBtns.forEach(item => item.addEventListener('click', e => {
      var elementClicked = e.target;


      if (elementClicked.id === 'sunset-submit-btn') {
        reservationInfo.location = 'inner sunset';
      } else if (elementClicked.id === 'hayes-submit-btn') {
        reservationInfo.location = 'hayes valley';
      } else if (elementClicked.id === 'berkeley-submit.btn') {
        reservationInfo.location = 'berkeley';
      }
      this.storeFormData();
      window.location.href = '../html/contact-submit-complete.html';
      console.log(reservationInfo);
    }));
  }
};

app.submitForms();
app.openForm();
