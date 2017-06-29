var time_line = {}
time_line.color = document.querySelector(".time-line-color");
time_line.chapter = document.querySelectorAll(".chapter");
time_line.chapter_title = document.querySelectorAll(".chapter-title");
time_line.set_default_color = "#444444";
time_line.set_color = "#ff6d00";


//***************************************************************************
//***************************************************************************
//***************************************************************************

// Time line

for(var i = 0; i < time_line.chapter.length; i++)
{
  time_line.chapter[i].addEventListener("mouseover", function()
  {
    var i = parseInt(this.getAttribute("data-key")) - 1;
    time_line.chapter_title[i].classList.remove("hide");
  });

  time_line.chapter[i].addEventListener("mouseout", function()
  {
    var i = parseInt(this.getAttribute("data-key")) - 1;
    time_line.chapter_title[i].classList.add("hide");
  });

  time_line.chapter[i].addEventListener("click", function()
  {
    var temp = parseInt(this.getAttribute("data-key"));
    time_line.color.style.transform = "scaleX(" + 0.147*temp + ")";

    for(var i = 0; i < time_line.chapter.length; i++)
    {
      time_line.chapter_title[i].classList.remove("active");
      time_line.chapter[i].classList.remove("border");
      if(i > temp -1 ) time_line.chapter[i].style.background = time_line.set_default_color;
      else time_line.chapter[i].style.background = time_line.set_color;
    }
    time_line.chapter[temp-1].style.background = time_line.set_color;
    time_line.chapter_title[temp-1].classList.add("active");
    time_line.chapter[temp-1].classList.add("border");
    gotoSlide(temp);
  });
}

temp
