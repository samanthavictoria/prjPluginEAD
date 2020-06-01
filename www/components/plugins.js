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

$(document).on("click","#local",function(){
  var onSuccess = function(position) {
//posso tirar algumas coisas e manter apenas o que me interessa para o aplicativo
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n');
    };

 
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

