$(document).ready(function() {
  $('#example').DataTable();
} );

$(document).ready(function() {
  $('#select').click(function() {
    var total=$('input[name="questao[]"]:checked').length;
    setCookie("coototal", total, 30);

    if (total >= 40) {
        $("#qtd").html(total);
        $('#aprovado').modal('show');
        $('#carregando_qst_1').delay(0).show(0);
        $('#carregando_qst_1').delay(4000).fadeOut(500);
        $('#qst_1').delay(0).fadeOut(0);
        $('#qst_1').delay(6200).show(100);
        $('#compartilha_qst_1').delay(6000).fadeIn(400);
        } else {
            $("#resultado").html("teste")
            $("#qtd2").html(total);
            $('#reprovado').modal('show');
            $('#carregando_qst_2').delay(0).show(0);
            $('#carregando_qst_2').delay(4000).fadeOut(500);
            $('#qst_2').delay(0).fadeOut(0);
            $('#qst_2').delay(6200).show(100);
            $('#compartilha_qst_2').delay(6000).fadeIn(400);
        }

  })
});

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  var totais = getCookie("coototal");
  if (user != "") {

    if (totais >= 50) {
    $("#hashtag").html("<div style=\"background: url(50-bg.png) top -64px center no-repeat, #0050ff;color:#fff;margin: 20px 0px;padding: 30px;display:flex;text-align:center;flex-direction: column;align-items: center;min-height: 600px;justify-content: center;\"><img src=\"50.png\" style=\" margin-bottom: 20px;\"><br>Sabemos o quanto estudar para prova da Ordem foi desafiador,<br>mas nós, da Família Ceisc confiamos em você!<p><button class=\"d-sm-block d-md-none btn text-white border-bottom mt-4\" data-toggle=\"modal\" data-target=\"#storiesmodal\"><i class=\"bi bi-instagram mr-2\"></i> POSTAR NOS STORIES</button></p> <div class=\"btn-group-sm p-3 d-none d-md-block\" style=\"width: 100%;\"> <div style=\"display:flex;flex-direction: row;align-items: center;flex-wrap: wrap;justify-content: center;\"> <span class=\"btn-block font-weight-bold\" style=\"font-size: 11px;float: left;margin-bottom: 4px;color: #ffffff94;\">COMPARTILHE</span> <a href=\"https://api.whatsapp.com/send?text=%2350 &lt;3 https://ceisc.com.br/gabarito/oab1fasexxxv\" target=\"_blank\" class=\"btn bmd-btn-fab\" style=\"display: flex;justify-content: center;color: #fff;background: #05bd63;float: left;margin-right: 5px;\"><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"whatsapp\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-whatsapp fa-w-14 fa-2x\" style=\" width: 21px;\"><path fill=\"currentColor\" d=\"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z\" class=\"\"></path></svg></a> <a href=\"https://www.facebook.com/sharer/sharer.php?u=https://ceisc.com.br/gabarito/oab1fasexxxv&amp;src=sdkpreparse\" target=\"_blank\" class=\"btn bmd-btn-fab\" style=\"display: flex;justify-content: center;color: #006dd3;background: #fff;float: left;margin-right: 5px;\"><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"facebook\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-facebook fa-w-16 fa-2x\"><path fill=\"currentColor\" d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\" class=\"\"></path></svg></a> <a href=\"https://twitter.com/intent/tweet?text=#50 @cursoceisc\" target=\"_blank\" class=\"btn bmd-btn-fab\" style=\"display: flex;justify-content: center;color: #ffffff;background: #1da1f2;margin-right: 5px;\"><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"twitter\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-twitter fa-w-16 fa-3x\" style=\" width: 22px;\"><path fill=\"currentColor\" d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\" class=\"\"></path></svg></a> </div> </div></div>")
        }

    if (totais >= 40) {
    $("#checked").html("<div style=\"background: #e2e3e5;color: #464646;margin: 30px 0px;border-radius: 20px;border-top-left-radius: 0px;\"><div class=\"card-body\" style=\"align-items: center;display: flex;flex-direction: row;flex-wrap: wrap;justify-content: flex-start;text-align: left;line-height: 1.5;\"><div><div style=\"font-size:40px;color:#0050ff;font-weight: 600;\"><i class=\"bi bi-clipboard2-check-fill\"></i> " + totais + "</div><b style=\"font-size: 23px;\">" + user + ", agora foi pra valer!</b><p>Da última vez que você marcou o gabarito, acertou <b>" + totais + "</b> questões.<br>Revise o gabarito e compartilhe!</p><hr><p><button class=\"d-sm-block d-md-none btn text-white border-bottom mt-4\" data-toggle=\"modal\" data-target=\"#storiesmodal\" style=\" background: #8032b1; border-radius: 50px;\"><i class=\"bi bi-instagram mr-2\"></i> POSTAR NOS STORIES</button></p> <div class=\"btn-group-sm p-3 d-none d-md-block\" style=\"width: 100%;\"> <div style=\"display:flex;flex-direction: row;align-items: center;flex-wrap: wrap;justify-content: flex-start;\"> <span class=\"btn-block font-weight-bold\" style=\"font-size: 11px;float: left;margin-bottom: 4px;color: #464646;\">COMPARTILHE</span> <a href=\"https://api.whatsapp.com/send?text=Marquei " + totais + " questões no gabarito do Ceisc! Confere também: https://ceisc.com.br/gabarito/oab1fasexxxv\" target=\"_blank\" class=\"btn bmd-btn-fab\" style=\"display: flex;justify-content: center;color: #fff;background: #05bd63;float: left;margin-right: 5px;\"><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"whatsapp\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"svg-inline--fa fa-whatsapp fa-w-14 fa-2x\" style=\" width: 21px;\"><path fill=\"currentColor\" d=\"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z\" class=\"\"></path></svg></a> <a href=\"https://www.facebook.com/sharer/sharer.php?u=https://ceisc.com.br/gabarito/oab1fasexxxv&amp;src=sdkpreparse\" target=\"_blank\" class=\"btn bmd-btn-fab\" style=\"display: flex;justify-content: center;color: #006dd3;background: #fff;float: left;margin-right: 5px;\"><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"facebook\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-facebook fa-w-16 fa-2x\"><path fill=\"currentColor\" d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\" class=\"\"></path></svg></a> <a href=\"https://twitter.com/intent/tweet?text=Marquei " + totais + " questões no gabarito do Ceisc! Confere também: https://ceisc.com.br/gabarito/oab1fasexxxv @cursoceisc\" target=\"_blank\" class=\"btn bmd-btn-fab\" style=\"display: flex;justify-content: center;color: #ffffff;background: #1da1f2;margin-right: 5px;\"><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"twitter\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-twitter fa-w-16 fa-3x\" style=\" width: 22px;\"><path fill=\"currentColor\" d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\" class=\"\"></path></svg></a> </div> </div></div></div></div></div></div>")
        } else {
    $("#checked").html("<div style=\"background: #e2e3e5;color: #464646;margin: 30px 0px;border-radius: 20px;border-top-left-radius: 0px;\"><div class=\"card-body\" style=\"align-items: center;display: flex;flex-direction: row;flex-wrap: wrap;justify-content: flex-start;text-align: left;line-height: 1.5;\"><div><div style=\"font-size:40px;color:#0050ff;font-weight: 600;\"><i class=\"bi bi-clipboard2-check-fill\"></i> " + totais + "</div><b style=\"font-size: 23px;\">" + user + ", que tal revisar o gabarito?</b><p>Percebemos que da última vez que você simulou o resultado, você marcou <b>" + totais + "</b> questões.<br> Lembre-se que alguma das questões podem ser passíveis de anulação.</p><hr><a href=\"#\" class=\"btn btn-sm\" data-toggle=\"modal\" data-target=\"#anulacao\" style=\"background: #0050ff;border-radius:50px;color: #fff;padding: 7px 20px;\">SOBRE QUESTÕES PASSÍVEIS DE ANULAÇÃO</a><a href=\"https://blog.ceisc.com.br/exame-da-ordem/interposicao-de-recursos-oab/\" class=\"btn btn-sm\" target=\"_blank\" style=\"background: #0050ff;border-radius:50px;color: #fff;padding: 7px 20px;\">SOBRE RECURSOS</a></div></div></div>")
        }

  }else{

$("#checked").html("<!--<div class='card box-azul' style='background: #fff; color: #00196f;'><div class='card-body' style='min-height:300px;align-items: center;display: flex;flex-direction: row;flex-wrap: wrap;justify-content: center;'><div style=' padding: 50px 0px;'> <span class='badge' style='background: #fdd701; color: #000; margin-bottom: 30px;'>NOVIDADE</span><h1 style='font-weight: 800; font-size: 33px;'>O Ceisc simplificou<br>o seu gabarito.</h1><center><h2 style=' font-size: 15px; max-width: 450px; margin-top: 22px; margin-bottom: 29px;'>Agora você pode simular seu resultado rapidamente. Clique na opção de exibir todas as questões, ordene pela cor de sua prova ou por número de questão, confira se acertou e marque no checklist.</h2></center> <div class='row' style=' margin-bottom: 25px;'> <div class='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'><img src='check1_1x.png'></div> <div class='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'><img src='check2_1x.png'></div> <div class='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'><img src='check3_1x.png'></div> </div></div></div></div>-->")

  }
}
function checkCookie2() {
  var user=getCookie("username");
  if (user != "") {
    //recolher o nome
  } else {
     user = prompt("Qual seu primeiro nome? Iremos personalizar o gabarito para você.","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
