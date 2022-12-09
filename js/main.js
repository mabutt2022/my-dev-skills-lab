$(document).ready(function () {
  // console.log('Hello World')

  let skill = document.getElementById("skill-list");

  // addEventListener('click', function(event) {
  //     console.log(event.target)
  // })

  $("#button").click(function () {
    let textBox = $("#textbox").val();
    $("#skillsadd").append(
      `<p class="skill-list"><button class="skill-button">X</button>${textBox}</p>`
    );
    $("#textbox").val("");
  });

  $("#skillsadd").on("click", "button", function () {
    // console.log(event.target)
    var row = $(this).closest("p");
    row.fadeOut(500, function () {
      row.remove();
    });
  });
});
