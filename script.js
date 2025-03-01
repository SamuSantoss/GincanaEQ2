function verificarAcerto() {
    const numerosCorretos = [6, 2, 4, 0];
    const numerosDigitados = [
        parseInt(document.getElementById("num1").value),
        parseInt(document.getElementById("num2").value),
        parseInt(document.getElementById("num3").value),
        parseInt(document.getElementById("num4").value)
    ];
    
    if (JSON.stringify(numerosDigitados) === JSON.stringify(numerosCorretos)) {
        document.getElementById("resultado").innerText = "Parabéns, você acertou!";
        document.getElementById("resultado").style.color = "white";
        document.getElementById("resultado2").innerText = "Em todas estas coisas, porém, somos mais que vencedores, por meio daquele que nos amou. Porque eu estou bem certo de que nem a morte, nem a vida, nem os anjos, nem os principados, nem as coisas do presente, nem do porvir, nem os poderes, nem a altura, nem a profundidade, nem qualquer outra criatura poderá separar-nos do amor de Deus, que está em Cristo Jesus, nosso Senhor. Romanos 8:37-39";
        document.getElementById("resultado").style.color = "white";
    } else {
        document.getElementById("resultado").innerText = "Tente novamente!";
        document.getElementById("resultado").style.color = "red";
    }
}