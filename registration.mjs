export function registrationEmail(name, phone) {
  name = name.replace(/\s+/g, ' ').trim();
  phone = phone.trim();
  if (name.length < 2 || name.length > 100) throw new Error('Preencha o seu nome completo.');
  if (!/^[+\d\s().-]+$/.test(phone) || phone.replace(/\D/g, '').length < 7 || phone.replace(/\D/g, '').length > 15 || phone.length > 30) throw new Error('Preencha um telefone válido, incluindo o indicativo do país.');
  const subject = 'Inscrição — CONFERÊNCIA ABV 2026';
  const body = `Olá, equipa Abundante Vida Londres!\r\n\r\nGostaria de me inscrever na CONFERÊNCIA ABV 2026, dia 20 de setembro, às 14h.\r\n\r\nNome Completo: ${name}\r\nTelefone/WhatsApp: ${phone}\r\n\r\nEstou ciente da contribuição de £5 por participante para os custos da conferência. Por favor, enviem as orientações de pagamento.\r\n\r\nAguardo a confirmação da minha inscrição. Obrigado(a)!`;
  return `mailto:abundantevidalondon@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

if (typeof document !== 'undefined') {
  const form = document.getElementById('registration-form');
  const name = document.getElementById('full-name');
  const phone = document.getElementById('phone');
  const status = document.getElementById('registration-status');
  const retry = document.getElementById('email-retry');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    try {
      const href = registrationEmail(name.value, phone.value);
      retry.href = href;
      retry.hidden = false;
      status.textContent = 'Mensagem preparada. Envie-a no seu aplicativo de e-mail. Se o aplicativo não abrir, escreva para o endereço abaixo com o seu nome e telefone/WhatsApp. A vaga ainda não está confirmada.';
      window.location.href = href;
    } catch (error) {
      status.textContent = error.message;
    }
  });
  form.addEventListener('input', () => { retry.hidden = true; retry.removeAttribute('href'); status.textContent = ''; });
  for (const field of form.querySelectorAll('input, button')) field.disabled = false;
}
