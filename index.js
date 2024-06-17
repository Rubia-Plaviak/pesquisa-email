let usuario = [
  {
    nome: "Rubia",
    email: "rubiaplaviak@gmail.com",
    idade: 24,
  },
  {
    nome: "Matheus",
    email: "mathplav@gmail.com",
    idade: 28,
  },
  {
    nome: "Josiane",
    email: "josianeapsiqueira@gmail.com",
    idade: 44,
  },
  {
    nome: "Rubens",
    email: "rubenseduardoagomes@gmail.com",
    idade: 44,
  },
  {
    nome: "Ana",
    email: "anaplaviak@gmail.com",
    idade: 50,
  },
  {
    nome: "Marcos",
    email: "marcosplaviak@gmail.com",
    idade: 56,
  },
];
console.log("Olá, tudo bem? Qual o seu email?");

process.stdin.on("data", function (data) {
  let email = data.toString().trim();
  let usuarios;
  for (let i = 0; i < usuario.length, i++; ) {
    if (usuario[i].email === email) {
      usuarios = usuario[i];
    }
    if (usuario) {
      console.log(usuario);
    } else {
      console.log("Usuario não encontrado");
    }
  }
});
