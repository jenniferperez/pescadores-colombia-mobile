function vincularRedesSociales(){
	iniciarPermisos();
}

function iniciarPermisos() {
	//Inicio vinculacion con facebook.
	document.addEventListener("deviceready", vincularFacebook(), true);
	//Añadir vinculacion con las demas redes sociales.
}

function vincularFacebook(){
	$(document).ready(function(){
		try {
			FB.init({
				appId : "653232568031668",	//Codigo aplicación en facebook.
				nativeInterface : CDV.FB,	//Interface para Phonegap/Cordova
				useCachedDialogs : true
			});
		} catch (excep) {
			alert("ERROR GRAVE:\n" + excep);
		}
	});
}

function facebookLogin() {
FB.getLoginStatus(function(response) {
      if (response.status == 'connected') {
        alert('CONECTADO ... :)');

        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;

        alert('userID: ' + uid + ' token acceso: ' + accessToken);

  } else if (response.status == 'not_authorized') {
    alert('unautorized');
  } else {
    alert('sin login');
    FB.login(function(response) {
		if (response.authResponse) {
			location.href= "muro.html";
		} else {

			alert('NO SE PUDO INICIAR SESION.');

		}
	}, {
		scope : 'publish_actions'
	});
  }
 });


}

