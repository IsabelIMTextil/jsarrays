alert("En la dietética ´Tu salud más saludable´ podemos ofrecerte estas galletas: . ")

var productos = ["1. Bread Net", "2. Cereal Mix", "3. Frutigran", "4. Nutresan Algarroba y avena", "5. Granix salvado", "6. María E. Algarroba", "7. María E. Avena", "8. Pepas La Francia"]
var precios = [950, 500, 650, 1050, 456, 2870, 2870, 1145]
var indice = 0
totalProductos = precios * unidades

console.log(productos.length)

while(indice<productos.length){
    console.log("Producto " + productos[indice] + ". " + " Precio: $ " + precios[indice])

    indice++
}


var seleccion = prompt("Seleccioná un producto, introduciendo su número (1-" + productos.length +"):")   

var unidades = parseInt(prompt("Cuántas unidades quiere?"))

//var precioTotal = unidades * precios[indice]

alert("Total a abonar $" + " " + totalProductos)

console.log("Total a abonar $" + " " + totalProductos)






