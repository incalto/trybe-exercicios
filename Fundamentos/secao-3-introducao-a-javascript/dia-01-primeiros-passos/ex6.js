let piece = "pawn";
piece = piece.toLowerCase();

switch (piece){
    case "pawn":
        console.log("Anda para frente e come na diagonal");
        break;
    case "bishop":
        console.log("Anda na diagonal");
        break;
    case "knight":
        console.log("Anda em 'L'");
        break;
    case "rook":
        console.log("Anda na horizontal e vertical");
        break;
    case "queen":
        console.log("Anda em todas direções quantas casas quiser");
        break;
    case "king":
        console.log("Anda em qualquer direção 1 casa");
        break;
    default:
        console.log("Peça inválida.");
}