var result= prompt("wanna know your result?");

        
if(result >= 85 && result <= 100){
    document.write("A+");
}else if(result >= 75 && result <= 84){
    document.write("A");
}else if(result >= 65 && result <= 74){
    document.write("B");
}else if(result >= 45 && result <= 64){
    document.write("C");
}else if(result >= 33 && result <= 44){
    document.write("D");
}else if(result < 33){
    document.write("F");
}else{
    document.write("tor result na");
}