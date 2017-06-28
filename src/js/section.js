(function($){

  $(document).ready(function () {

    $('#fullpage').fullpage({
      //Navigation
      menu: '#menu',
      lockAnchors: false,
      anchors: ['firstPage', 'secondPage'],
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: ['firstSlide', 'secondSlide'],
      showActiveTooltip: false,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',

      //Scrolling
      css3: true,
      scrollingSpeed: 1000,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: true,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: false,
      continuousVertical: false,
      continuousHorizontal: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: '#element1, .element2',
      scrollOverflow: true,
      scrollOverflowReset: false,
      scrollOverflowOptions: null,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 1,
      bigSectionsDestination: null,

      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,

      //Design
      controlArrows: false,
      verticalCentered: true,
      sectionsColor: ['#ccc', '#fff'],
      paddingTop: '1em',
      paddingBottom: '5px',
      fixedElements: '#header, .footer',
      responsiveWidth: 0,
      responsiveHeight: 0,

      //Custom selectors
      sectionSelector: '.section',
      slideSelector: '.slide',

      lazyLoading: true,

      //events
      onLeave: function onLeave(index, nextIndex, direction) { },
      afterLoad: function afterLoad(anchorLink, index) { },
      afterRender: function afterRender() { },
      afterResize: function afterResize() { },
      afterResponsive: function afterResponsive(isResponsive) { },
      afterSlideLoad: function afterSlideLoad(anchorLink, index, slideAnchor, slideIndex) { },
      onSlideLeave: function onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex) { }
    });

    $('#fullpage').on("wheel", function (e) {
      if (e.originalEvent.wheelDelta < 0) //dropdown
      {
        $.fn.fullpage.moveSlideRight();
      }
      else { //up
        $.fn.fullpage.moveSlideLeft();
      }
    })

  });

})(jQuery)
