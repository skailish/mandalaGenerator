<?php 
    //creamos el form para el envio 
// comprovamos si se envió la imagen
if (isset($_POST['imagen'])) { 

   // mostrar la imagen
   echo '<img src="'.$_POST['imagen'].'" border="1">';

   // funcion para gusrfdar la imagen base64 en el servidor
   // el nombre debe tener la extension
   function uploadImgBase64 ($base64, $name){
       // decodificamos el base64
       $datosBase64 = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $base64));
       // definimos la ruta donde se guardara en el server
       $path= $_SERVER['DOCUMENT_ROOT'].'/firmas/'.$name;
       // guardamos la imagen en el server
       if(!file_put_contents($path, $datosBase64)){
           // retorno si falla
           return false;
       }
       else{
           // retorno si todo fue bien
           return true;
       }
   }

   // llamamos a la funcion uploadImgBase64( img_base64, nombre_fina.png) 
   uploadImgBase64($_POST['imagen'], 'mi_imagen_'.date('d_m_Y_H_i_s').'.png' );
}
?>