// index

$(document).ready(function () {
   $('.sidebar-items.active').each(function () {
      // Find the img element within this active sidebar item
      var img = $(this).find('img');

      // Get the current src attribute
      var src = img.attr('src');

      // Split the src by '/'
      var srcParts = src.split('/');

      // Construct the new src with 'blue' inserted after the first segment
      var newsrc = srcParts[0] + '/blue' + srcParts.slice(1).join('/');

      // Update the src attribute of the img element
      img.attr('src', newsrc);
   });

})

$(document).ready(function () {
   $('#drop > a').click(function (e) {
      e.preventDefault();

      $('#drop2').slideToggle(function () {
         // Toggle the rotation of the arrow
         var rotation = $('.rotate-ar').css('transform') === 'none' ? 'rotate(90deg)' : 'none';
         $('.rotate-ar').css('transform', rotation);
      });
   });

   $(document).click(function (e) {
      if (!$(e.target).closest('#drop').length) {
         $('#drop2').slideUp();
         // Reset the rotation when dropdown is closed
         $('.rotate-ar').css('transform', 'none');
      }
   });
   if ($('.drop-links').hasClass('active')) {
      // Remove 'display: none' from the parent element
      $('.drop-links.active').parent().css('display', '');
   }
});



// top-bar-section start
$(document).ready(function () {
   $('#notificationDropdown').click(function () {
      $('.notificationDrop').fadeToggle();
   })
})

// profile-section
$(document).ready(function () {
   $('#profileDrop').click(function () {
      $('.profiledropdown').fadeToggle(function () {
         $('.profile-name > p').css('color', function () {
            return $(this).css('color') === 'rgb(24, 20, 243)' ? '' : '#1814F3';
         });
         $('.profile-name > .fa-chevron-down').toggleClass('tr-icon');
      });
   });
});
// profile-section

$(document).ready(function () {
   $('.chart-drop-down-parent').click(function () {
      $(this).children('.chart-drop-down-cild').fadeToggle();
      $(this).find('i.fa-chevron-down').toggleClass('icon-rotate');
   });
});


// chart-drop-down-parent   .chart-drop-down-cild


$(document).ready(function () {

   $('.progress-bar-animated').animate({
      width: 25 + '%',
   }, {
      duration: 1000,
      step: function (now, fx) {
         $(fx).attr('aria-valuenow', now.toFixed(0));
      }
   });
});



function updateProgress() {
   // Select all progress items
   const progressItems = document.querySelectorAll('.progress-item');

   progressItems.forEach(item => {
      const progressLeftFill = item.querySelector('.progress-left .progress-fill');
      const progressRightFill = item.querySelector('.progress-right .progress-fill');
      const progressText = item.querySelector('.progress-text');

      // Extract the percentage from the text content
      const percentage = parseInt(progressText.textContent.replace('%', ''), 10);

      // Ensure the percentage is within the range of 0-100
      const clampedPercentage = Math.max(0, Math.min(100, percentage));

      // Calculate the rotation based on the percentage
      const rotation = (clampedPercentage / 100) * 360;

      // Set the animation based on the percentage
      if (clampedPercentage <= 50) {
         // For 0-50%, only the right half fills
         progressRightFill.style.transform = `rotate(${rotation}deg)`;
         progressLeftFill.style.transform = `rotate(0deg)`;
      } else {
         // For 51-100%, right half is fully filled, and left half fills according to the remaining percentage
         progressRightFill.style.transform = `rotate(180deg)`;
         progressLeftFill.style.transform = `rotate(${rotation - 180}deg)`;
      }
   });
}
// Trigger animation on page load
document.addEventListener('DOMContentLoaded', updateProgress);


// index


// accounting page

$(document).ready(function () {
   $('#submit-btn').click(function () {
      $('#submit-section').fadeOut(200, function () {
         $('#upload-section').fadeIn(300);
      });
   });
   $('#back-btn').click(function () {
      $('#upload-section').hide()
      $('#submit-section').fadeIn(100);
   });
});

$(document).ready(function () {
   function handleFiles(files, method) {
      console.log(`Files selected via ${method}:`);
      for (let i = 0; i < files.length; i++) {
         console.log(`File ${i + 1}: ${files[i].name}, Size: ${files[i].size} bytes, Type: ${files[i].type}`);
      }
      $('#file-name').text(files[0].name);
      $('#file-name-detail').text(files[0].name);
      $('#file-size').text((files[0].size / 1024 / 1024).toFixed(2) + ' MB');
      $('#uploaded-on').text(new Date().toLocaleDateString());

      // Hide the upload wrapper and show the upload data
      $('.file-upload-wrapper').hide();
      $('#upload-data').fadeIn();
   }

   $('#browse-files-btn').click(function () {
      $('#fileInput').click();
   });

   $('#fileInput').change(function () {
      handleFiles(this.files, 'browse button');
   });

   $('.file-upload-wrapper').on('dragover', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).addClass('dragging');
   });

   $('.file-upload-wrapper').on('dragleave', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).removeClass('dragging');
   });

   $('.file-upload-wrapper').on('drop', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).removeClass('dragging');
      var files = e.originalEvent.dataTransfer.files;
      handleFiles(files, 'drag-and-drop');
   });

   $('#second-upload-btn').click(function () {
      $('#upload-data').fadeOut(function () {
         $('#upload-document').fadeIn(function () {
            $('#custom-progress-bar').animate({
               width: '100%'
            }, 2000, function () {
               // When progress bar reaches 100%
               $('#custom-progress-text').text('100%');
               $('#file-upload-progress').fadeOut(function () {
                  $('#success-message').fadeIn();
               });
            });
         });
      });
   });

   $('#verify-btn').click(function () {
      $('#upload-document').fadeOut(function () {
         $('#verify-document').fadeIn();
         $('.scan-overlay').fadeIn(7000);

      });
   });

   $('#finul-submit-document').click(function () {
      $('#verify-document').fadeOut(function () {
         $('#finul-success').fadeIn();
      });
   });

   // Consolidated close button event handler
   $('#close-upload-data, #close-verify-document').click(function () {
      $('#upload-data, #upload-document, #verify-document, #final-success').hide()
      $('.file-upload-wrapper').show();

   });

   $('.go-to-home').click(function () {
      $('#upload-section').hide();
      $('#submit-section').show();
   });
});



// accounting page



// sales page

$(document).ready(function () {
   $('#invoice-btn').on('click', function () {
      $('#invoice-section').fadeOut(function () {
         $('#invoice-generate').fadeIn();
      });
   });
   $('#estimate-btn').on('click', function () {
      $('#istimate-section').fadeOut(function () {
         $('#estimate-generate').fadeIn();
      });
   });
   $('#back-invoice').on('click', function () {
      $('#invoice-generate').fadeOut(function () {
         $('#invoice-section').fadeIn();
      });
   });

   $('#back-estimate').on('click', function () {
      $('#estimate-generate').fadeOut(function () {
         $('#istimate-section').fadeIn();
      });
   });
});


$(document).ready(function () {
   $('#paymentSwitch').change(function () {
      if (this.checked) {
         $('#billing-name').fadeIn();
         $('#billing-address').fadeIn();
      }
      else {
         $('#billing-name').fadeOut();
         $('#billing-address').fadeOut();
      }
   });
});


// custom select box

$(document).ready(function() {
   const $optionMenu = $(".select-menu"),
         $selectBtn = $optionMenu.find(".select-btn"),
         $options = $optionMenu.find(".option"),
         $sBtnText = $optionMenu.find(".sBtn-text");
 
   $selectBtn.on("click", function() {
     $optionMenu.toggleClass("active");
   });
 
   $options.on("click", function() {
     let selectedOption = $(this).find(".option-text").text();
     $sBtnText.text(selectedOption);
 
     $optionMenu.removeClass("active");
   });
 });
 
// custom select box


//sales end


// document page

//  document page

$(document).ready(function () {
   $("#show-submit-document").click(function () {
      $('#folder-section').hide();
      $("#submit-document").fadeIn();
      $("#Fiscal-Year").hide();
      $("#d-back-btn").fadeIn();
   });

   $("#show-fiscal-year").click(function () {
      $('#folder-section').hide();
      $("#submit-document").hide();
      $("#Fiscal-Year").fadeIn();
      $("#d-back-btn").fadeIn();
   });

   $('#d-back-btn').click(function () {
      $("#submit-document").hide();
      $("#Fiscal-Year").hide();
      $('#folder-section').fadeIn();
      $("#d-back-btn").fadeOut();

      // Resetting the nested content visibility
      $('#fiscal-year-document').show();
      $('#sales-month-table').hide();
      $('#Sales').show();
      $('#purchase').show();
      $('#Banking').show();
   });

   $('#Sales').click(function () {
      $('#Sales').hide();
      $('#purchase').hide();
      $('#Banking').hide();
      $('#sales-month-table').fadeIn();
   });
   $('#purchase').click(function () {
      $('#Sales').hide();
      $('#purchase').hide();
      $('#Banking').hide();
      $('#purchase-month-table').fadeIn();
   });

   $('#Banking').click(function () {
      $('#Sales').hide();
      $('#purchase').hide();
      $('#Banking').hide();
      $('#Banking-month-table').fadeIn();
   });
});


$(document).ready(function () {
   // Toggle password visibility
   $('.toggle-password').on('click', function () {
      var passwordInput = $(this).prev('input');
      var type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
      passwordInput.attr('type', type);
      $(this).toggleClass('fa-eye fa-eye-slash');
   });

   // Toggle blur overlay (if used)
   $('.Save-password-btn').on('click', function (e) {
      e.preventDefault();
      $('#blur-overlay').toggleClass('hidden');
   });

   // Handle form submission and show success message
   $('#create-password-btn').on('click', function (event) {
      event.preventDefault(); // Prevent actual form submission

      // Fade out password section and fade in success message
      $('.modal-context').fadeOut(function () {
         $('#password-success').fadeIn();
      });
   });

   // Go back to login or another action
   $('.go-back-login').on('click', function () {
      // Action for going back to login
      alert('Redirect to login page');
   });
});





//  document page
// document page


// reports page
$(document).ready(function () {
   $('.toggle-button').click(function () {
      var $box = $(this).closest('.box'); // Find the closest .box to the clicked button
      var $movementEquity = $box.find('.movement-equity'); // Find the .movement-equity within that .box

      $movementEquity.fadeToggle(500); // Toggle visibility of the specific .movement-equity

      // Toggle between down and up arrow icons and change button text
      var icon = $(this).find('i');
      if (icon.hasClass('fa-angle-down')) {
         $(this).html('Less Reports <i class="fa-solid fa-angle-up"></i>');
      } else {
         icon.removeClass('fa-angle-up').addClass('fa-angle-down');
         $(this).html('More Reports <i class="fa-solid fa-angle-down"></i>');
      }
   });

   $('.box-tb').click(function () {
      $(this).toggleClass('selected');
   });
});

// reposrts page


// apply for lone

function showpopup() {
   $('#lone-content').fadeOut(function () {
      $('#get-otp-lone').fadeIn();
   })
}

// apply for lone




// setting page

$(document).ready(function () {
   let currentStep = 0;
   const steps = $('.step');
   const progressSteps = $('.progress-step');
   const progressText = $('#progressText');
   const formData = {};

   function showStep(step) {
      steps.eq(currentStep).fadeOut(400, function () {
         steps.removeClass('active').eq(step).fadeIn(400).addClass('active');
      });
      progressSteps.removeClass('active').slice(0, step + 1).addClass('active');
      progressText.text(`${step + 1} of ${steps.length}`);
   }

   function saveFormData() {
      $('#multiStepForm')
         .find('input, select, textarea')
         .each(function () {
            formData[this.id] = $(this).val();
         });
   }

   function loadFormData() {
      $.each(formData, function (key, value) {
         $(`#${key}`).val(value);
      });
   }

   $('.next-step').click(function () {
      if (currentStep < steps.length - 1) {
         saveFormData();
         const nextStep = currentStep + 1;
         steps.eq(currentStep).fadeOut(400, function () {
            currentStep = nextStep;
            showStep(currentStep);
         });
      }
   });
   progressSteps.click(function () {
      const step = $(this).data('step');
      if (step < currentStep) {
         steps.eq(currentStep).fadeOut(400, function () {
            currentStep = step;
            showStep(currentStep);
         });
      }
   });

   $('#multiStepForm').submit(function (event) {
      event.preventDefault();
      saveFormData();
      console.log(formData);
   });

   loadFormData();
   showStep(currentStep);
});

$(document).ready(function (){
   $('.menu').click(function (){
      $('.sidebar').toggleClass('side-left-on');
   })
   $('.cut-btn').click(
      function(){
         $('.sidebar').toggleClass('side-left-on');
      }
   )
})

$(document).ready(function () {
   $('.custom-select-option').on('click', function () {
      const dropdown = $(this).next('.custom-dropdown');
      $('.custom-dropdown').not(dropdown).hide(); // Hide all other dropdowns
      dropdown.toggle();
   });

   $('.custom-dropdown').on('click', 'div', function () {
      const value = $(this).data('value');
      $(this).parent().prev('.custom-select-option').text(value);
      $(this).parent().hide();
   });

   $(document).on('click', function (e) {
      if (!$(e.target).closest('.custom-select-container').length) {
         $('.custom-dropdown').hide();
      }
   });
});



$(document).ready(function() {
   function toggleValidationStatus(selector) {
       $(selector).click(function() {
           var $current = $(this);
           var dataFor = $current.data('for');
           var $valid = $(`.valid[data-for="${dataFor}"]`);
           var $invalidate = $(`.invalidate[data-for="${dataFor}"]`);
           var $verify = $(`.verify[data-for="${dataFor}"]`);

           if ($current.hasClass('valid')) {
               $valid.hide();
               $invalidate.show();
           } else if ($current.hasClass('invalidate')) {
               $invalidate.hide();
               $verify.show();
           } else if ($current.hasClass('verify')) {
               $verify.hide();
               $valid.show();
           }
       });
   }

   toggleValidationStatus('.valid');
   toggleValidationStatus('.invalidate');
   toggleValidationStatus('.verify');
});

$(document).ready(function() {
   // Toggle dropdown menu visibility on button click
   $('.custom-select-btn').on('click', function(e) {
       e.stopPropagation();
       var $menu = $(this).closest('.custom-select-menu');
       // Close other dropdowns
       $('.custom-select-menu').not($menu).removeClass('active');
       // Toggle the clicked dropdown
       $menu.toggleClass('active');
   });

   // Close all dropdowns if clicked outside
   $(document).on('click', function() {
       $('.custom-select-menu').removeClass('active');
   });

   // Handle option selection
   $('.custom-select-menu .custom-option').on('click', function() {
       var selectedText = $(this).text();
       var $menu = $(this).closest('.custom-select-menu');
       // Update the select button text
       $menu.find('.custom-select-text').text(selectedText);
       // Optionally update a hidden input or similar
       var selectedValue = $(this).data('value');
       $menu.siblings('input[type="hidden"]').val(selectedValue);
       // Close the dropdown menu
       $menu.removeClass('active');
   });
});



// setting page



