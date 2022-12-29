//GET, POST , PUT Y DELETE

function getMensajes (){
    $.ajax({
        url:"http://130.162.214.38:80/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            
            pintarMensajes(respuesta);
        }
    });
}

function postMensajes(){
    let cajas = {
        messageText:$("#messageText").val(),
        client:{idClient: +$("#select-client").val()},
        machine:{id: +$("#select-cloud").val()}
        
    };
    console.log(cajas);
    $.ajax({
        url:"http://130.162.214.38:80/api/Message/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente el mensaje");
            //window.location.reload();
    
        }
    });
}

function putMensajes(){

}

function deleteMensajes(){
    
}


////////////////////////////////////////////

function pintarMensajes(respuesta){
   
    let myTable="<table>";
    let MENSAJE = "MENSAJE";
    let CLOUD = "CLOUD";
    let CLIENTE = "CLIENTE";
    //let EDAD = "EDAD";
    
    myTable+="<th>"+MENSAJE+"</th>";

    myTable+="<th>"+CLOUD+"</th>";

    myTable+="<th>"+CLIENTE+"</th>";

    
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);


}

function getCloud_Message(){
    $.ajax({
        url:"http://130.162.214.38:80/api/Cloud/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-cloud");
            $.each(respuesta, function(id, name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>' )
            })
        }
    });
}

function getClient_Message(){
    $.ajax({
        url:"http://130.162.214.38:80/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-client");
            $.each(respuesta, function(id, name){
                $select.append('<option value='+name.idClient+'>'+name.name+'</option>' )
            })
        }
    });
}