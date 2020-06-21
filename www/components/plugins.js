$(document).on("click","#alerta",function(){
  //o metodo exige a função, mesmo que vazia (caso tire as coisas ficam desorganizadas), pode se colocar "null" no lugar
  function retorno(){

  }
  navigator.notification.alert("minha mensagem",retorno,"Aviso","aceito");
});

$(document).on("click","#confirm",function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("escolheu a opção A");
    }
    else{
       navigator.notification.alert("escolheu a opção B");
    }
   
  }
  navigator.notification.confirm("escolha A ou B",confirma,"Escolha:",['A','B']);
});

$(document).on("click","#beep",function(){
  navigator.notification.beep(3);
});

$(document).on("click","#vibrar",function(){
  navigator.vibrate(1500);
});

function mostraMapa(lat, long){
 L.mapquest.key = 'lCznJUbBdtKLoGMf5bXFCbarydAfyG2S';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 16
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click","#local",function(){
  var onSuccess = function(position) {
//posso tirar algumas coisas e manter apenas o que me interessa para o aplicativo
        mostraMapa(position.coords.latitude, position.coords.longitude)
    };

 
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

