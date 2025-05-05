$(document).ready(function () {
    const $backdrop = $("#menuBackdrop");
    const $drop_animate = $(".drop-animate").hide();
  
    $("#profileToggle").on("click", function (e) {
      e.stopPropagation();
      const isVisible = $drop_animate.first().is(":visible");
      if (isVisible) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  
    function openMenu() {
      $drop_animate.each(function (index) {
        const $item = $(this);
        setTimeout(() => {
          $item
            .show()
            .removeClass("animate__fadeOutDown")
            .addClass("animate__animated animate__fadeInUp")
            .css("animation-delay", `${index * 0.1}s`);
        }, index * 100);
      });
      $backdrop.fadeIn();
    }
  
    function closeMenu() {
        $drop_animate.each(function (index) {
          const $item = $(this);
          setTimeout(() => {
            $item
              .removeClass("animate__fadeInUp")
              .addClass("animate__animated animate__fadeOutDown");
      
            // Wait for animation to finish before hiding
            setTimeout(() => {
              $item.hide().removeClass("animate__animated animate__fadeOutDown");
            }, 500); // Match animation duration
          }, index * 100); // Match delay as used in open
        });
      
        $backdrop.fadeOut();
      }
      
  
    $(document).on("click", function (e) {
      if (!$(e.target).closest(".dropdown-menu, #profileToggle").length) {
        if ($drop_animate.first().is(":visible")) {
          closeMenu();
        }
      }
    });
  });
  