$(".btn-add").click(function () {
  let el =
    '<div class="anotacao-single"> <textarea placeholder="Sua nova anotação"></textarea> </div>';
  $(".container-anotacoes").append(el);

  let textArea = $(".anotacao-single").last().find("textarea");

  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();

  let finalTime = hh + "h" + ":" + mm + "min";
  textArea.html("Nova anotação ás: " + finalTime);
});
