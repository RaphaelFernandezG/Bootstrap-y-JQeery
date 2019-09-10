	console.log("ingresa");

	$("#selh3").click(function(event){
			$("#contenedor").load('selecciones/colombia.html')
		});

	$("li a").click(function(event){
		event.preventDefault();
		if($(this).data('seleccion')!=null){
			$("#contenedor").load('selecciones/'+$(this).data('seleccion')+'html')
		}
	});

	var part="";
	$.getJSON('partidos.json',function(datos){
		$("#contenido").html('');
		$.each(datos["partidos"], function(idx,partido){
			$("#contenido").append("<tr>"+"<td>"+partido["fecha"]+"</td><td>"+partido["equipo1"]+"</td><td>"+partido.equipo2+"</td>"+"</tr>");
		});
	});



