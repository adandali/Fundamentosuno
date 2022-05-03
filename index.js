let arreglo = [[1,2,3],[4,5,6],[7,8,9]]

for(let i=0, j=0; i<3; i++){
    console.log(arreglo[i][j], arreglo[i][j+1], arreglo[i][j+2]);
}

console.log("\n","salida 1","\n");

for (let i=2,j=2; i >=0; i-- ){   
    console.log(arreglo[i][j], arreglo[i][j-1], arreglo[i][j-2]);      
}

console.log("\n","salida 2","\n");

for(let i=0,j=0;j<3;j++){
    console.log(arreglo[i][j], arreglo[i+1][j], arreglo[i+2][j]); 
}

console.log("\n","salida 3","\n");

for(let i=2,j=2;j>=0;j--){
    console.log(arreglo[i][j], arreglo[i-1][j], arreglo[i-2][j]); 
}
