var typed = new Typed(".text", {
  strings: ["Desenvolvedora Web.", "Desenvolvedora Front-End.", "Programadora."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  smartBackspace: true, // mantém o que é igual e apaga só o final
  loop: true
});

function enviarWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá! Meu nome é ${nome}.
Email: ${email}
Mensagem: ${mensagem}`;

  const numeroWhatsApp = "5579999208053";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}
