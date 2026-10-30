'use strict';
document.querySelectorAll('.certificate-button img, #certificate-dialog img').forEach(img => {
  img.src = 'assets/access-bars-certificate-clear.jpg';
  img.removeAttribute('srcset');
  const frame = document.createElement('span');
  frame.className = 'certificate-photo-view';
  img.replaceWith(frame);
  frame.append(img);
});
const content = `
<section class="added-section added-pains"><div class="wrap"><h2>Знакомо?</h2><div class="pain-list"><p>Ты ходишь к психологу — он даёт домашнее задание. Ты его не делаешь. Чувствуешь вину.</p><p>Ты скачала три приложения для медитации. Открыла одно. Два раза.</p><p>Ты прочитала «Силу настоящего», «Атомные привычки» и ещё штук пять книг. Ничего не изменилось.</p><p>Ты знаешь, что надо делать. Но не делаешь. И это бесит.</p></div><p class="added-closing">Хорошая новость: можно по-другому. Я тоже когда-то устала от бесконечной работы над собой. Дальше расскажу, что нашла вместо неё и как это может выглядеть для тебя.</p></div></section>
<section class="added-section added-steps"><div class="wrap"><p class="section-label">По шагам</p><h2>Как это выглядит</h2><ol class="steps-list"><li><strong>Созваниваемся на 5 минут</strong><span>Решаем, где удобно в центре Москвы. Я подбираю коворкинг поближе к тебе.</span></li><li><strong>Ты приходишь</strong><span>Ложишься на кушетку. Одежду снимать не надо. Могу укрыть пледом.</span></li><li><strong>45–60 минут я работаю</strong><span>Можешь уснуть. Можешь не уснуть. Можешь молчать. Можешь говорить. Оба варианта ок.</span></li></ol></div></section>
<section class="added-section added-bonus" id="quiz"><div class="wrap"><p class="section-label">Бонус</p><h2>Пройди квиз — получи разрешение ничего не делать.</h2><p class="added-intro">Официальное. С моей подписью. Где я лично разрешаю тебе прекратить себя мучить.</p><div class="qz" id="qz-widget"><div class="qz-bar"><div class="qz-fill"></div></div>
<div class="qz-step active" data-q="1"><h3>Сколько книг по саморазвитию ты прочитала за последний год?</h3><div class="qz-opts"><button class="qz-opt">Ни одной — я не верю в эту херню</button><button class="qz-opt">Пару. Было интересно. Ничего не изменилось</button><button class="qz-opt">Больше пяти. Я знаю все техники</button><button class="qz-opt">Сбилась со счёта — меня от этого уже тошнит</button></div></div>
<div class="qz-step" data-q="2"><h3>Что ты чувствуешь, когда слышишь «тебе надо поработать над собой»?</h3><div class="qz-opts"><button class="qz-opt">Согласие — да, надо бы</button><button class="qz-opt">Раздражение — опять я что-то должна</button><button class="qz-opt">Усталость — я уже столько работала, где результат?</button><button class="q-opt qz-opt">Хочется послать этого человека</button></div></div>
<div class="qz-step" data-q="3"><h3>Ты ходила к психологу?</h3><div class="qz-opts"><button class="qz-opt">Нет, мне нечего там делать</button><button class="qz-opt">Да, помогло</button><button class="qz-opt">Хожу до сих пор. Лучше, но с «но»</button><button class="qz-opt">Да. Дал домашнее задание. Не сделала. Чувствую вину</button><button class="qz-opt">Я сама психолог. Ко мне тоже ходят. И я устала</button></div></div>
<div class="qz-step" data-q="4"><h3>Что тебе ближе?</h3><div class="qz-opts"><button class="qz-opt">«Я сама разберусь»</button><button class="qz-opt">«Помогите мне разобраться»</button><button class="qz-opt">«Не хочу больше разбираться. Пусть само как-то»</button><button class="qz-opt">«Оставьте меня в покое»</button></div></div>
<div class="qz-step" data-q="5"><h3>А теперь честно — чего ты хочешь?<small>(этот вопрос от меня лично)</small></h3><div class="qz-opts"><button class="qz-opt">Чтобы кто-то наконец сказал, что со мной всё ок</button><button class="qz-opt">Чтобы перестало крутить в голове</button><button class="qz-opt">Чтобы меня оставили в покое — все, включая меня саму</button><button class="qz-opt">Не знаю. Поэтому и здесь</button></div></div>
<div class="qz-form"><h3>Куда прислать сертификат?</h3><label>Как тебя зовут<input class="qz-name" placeholder="Твоё имя" autocomplete="given-name"></label><p>Выбери мессенджер</p><div class="qz-deliv"><button class="qz-deliv-opt sel" data-delivery="whatsapp" type="button">WhatsApp</button><button class="qz-deliv-opt" data-delivery="max" type="button">MAX</button></div><label class="qz-contact-label">Номер телефона<input class="qz-contact" placeholder="+7 999 000-00-00" inputmode="tel" autocomplete="tel"></label><p class="qz-error" role="alert" hidden>Укажи имя и номер телефона.</p><button class="qz-btn qz-cert-request" type="button">Получить сертификат</button></div>
<div class="qz-done"><h3>Сертификат готов ✦</h3><p>Нажми кнопку, чтобы написать мне. После сообщения я пришлю файл в выбранный мессенджер.</p><img class="qz-cert" alt="Сертификат с именем участника"><button class="qz-btn qz-delivery-link qz-booking" type="button"></button></div></div></div></section>`;
document.querySelector('.about')?.insertAdjacentHTML('beforebegin', content);
document.querySelector('.stories')?.remove();
const quiz=document.querySelector('#qz-widget');
if(quiz){const steps=[...quiz.querySelectorAll('.qz-step')],fill=quiz.querySelector('.qz-fill');let current=1;const show=n=>{steps.forEach(s=>s.classList.toggle('active',Number(s.dataset.q)===n));fill.style.width=`${n/5*100}%`};quiz.querySelectorAll('.qz-opt').forEach(opt=>opt.addEventListener('click',()=>{const step=opt.closest('.qz-step');step.querySelectorAll('.qz-opt').forEach(x=>x.classList.remove('sel'));opt.classList.add('sel');setTimeout(()=>{if(current<5){current++;show(current)}else{steps.forEach(x=>x.classList.remove('active'));quiz.querySelector('.qz-form').classList.add('active');fill.style.width='100%'}},380)}));quiz.querySelectorAll('.qz-deliv-opt').forEach(opt=>opt.addEventListener('click',()=>{quiz.querySelectorAll('.qz-deliv-opt').forEach(x=>x.classList.remove('sel'));opt.classList.add('sel')}));quiz.querySelector('.qz-booking').addEventListener('click',()=>document.querySelector('#booking-dialog')?.showModal());quiz.querySelector('.qz-btn:not(.qz-booking)').addEventListener('click',()=>{const name=quiz.querySelector('.qz-name').value.trim()||'Друг',delivery=quiz.querySelector('.qz-deliv-opt.sel').dataset.delivery,image=new Image();image.crossOrigin='anonymous';image.onload=()=>{const c=document.createElement('canvas'),x=c.getContext('2d');c.width=image.naturalWidth;c.height=image.naturalHeight;x.drawImage(image,0,0);x.font=`600 ${Math.round(c.width*.072)}px Cormorant Garamond, Georgia, serif`;x.fillStyle='#7a2230';x.textAlign='center';x.textBaseline='middle';x.fillText(name,c.width*.5,c.height*.4);const data=c.toDataURL('image/png');quiz.querySelector('.qz-cert').src=data;quiz.querySelector('.qz-form').classList.remove('active');quiz.querySelector('.qz-done').classList.add('active');if(delivery==='dl'){const a=document.createElement('a');a.href=data;a.download=`Razreshenie_${name}.png`;a.click()}else window.open(`https://wa.me/79951513253?text=${encodeURIComponent(`Юль, прошла квиз — хочу сеанс. Меня зовут ${name}`)}`,'_blank','noopener')};image.onerror=()=>window.open('https://wa.me/79951513253','_blank','noopener');image.src='https://i.ibb.co/S4sXPx5R/Chat-GPT-29-2026-03-39-26.png'})}

// The quiz has no server: a filled contact is required before the certificate is revealed,
// then the visitor is taken to the chosen messenger to send that contact to Julia.
if (quiz) {
  const contactInput = quiz.querySelector('.qz-contact');
  const contactLabel = quiz.querySelector('.qz-contact-label');
  const error = quiz.querySelector('.qz-error');
  const requestButton = quiz.querySelector('.qz-cert-request');
  const deliveryButton = quiz.querySelector('.qz-delivery-link');
  const selectedDelivery = () => quiz.querySelector('.qz-deliv-opt.sel')?.dataset.delivery;
  const updateContactLabel = () => {
    contactLabel.firstChild.textContent = 'Номер телефона';
    contactInput.placeholder = '+7 999 000-00-00'; contactInput.inputMode = 'tel';
  };
  quiz.querySelectorAll('.qz-deliv-opt').forEach(button => button.addEventListener('click', updateContactLabel));
  updateContactLabel();
  const makeCertificate = (name, complete) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    const paint = source => {
      const canvas = document.createElement('canvas');
      canvas.width = source?.naturalWidth || 1600; canvas.height = source?.naturalHeight || 1000;
      const context = canvas.getContext('2d');
      if (source) context.drawImage(source, 0, 0);
      else { context.fillStyle = '#f6e5df'; context.fillRect(0, 0, canvas.width, canvas.height); context.strokeStyle = '#c9a961'; context.lineWidth = 8; context.strokeRect(35, 35, canvas.width - 70, canvas.height - 70); context.fillStyle = '#426777'; context.font = '72px Georgia'; context.textAlign = 'center'; context.fillText('РАЗРЕШЕНИЕ', canvas.width / 2, 230); context.font = '42px Georgia'; context.fillText('ничего не делать', canvas.width / 2, 310); }
      context.font = `400 ${Math.round(canvas.width * .092)}px "Marck Script", cursive`;
      context.fillStyle = '#2462ad'; context.textAlign = 'center'; context.textBaseline = 'middle';
      context.save(); context.translate(canvas.width * .5, canvas.height * .4); context.rotate(-.035);
      context.fillText(name, 0, 0); context.restore();
      complete(canvas.toDataURL('image/png'));
    };
    const withFont = source => document.fonts.load('72px "Marck Script"').catch(() => {}).then(() => paint(source));
    image.onload = () => withFont(image); image.onerror = () => withFont();
    image.src = 'assets/permission-certificate.jpg';
  };
  quiz.addEventListener('click', event => {
    const target = event.target.closest('.qz-cert-request, .qz-delivery-link');
    if (!target) return;
    event.stopImmediatePropagation();
    if (target.classList.contains('qz-cert-request')) {
      const name = quiz.querySelector('.qz-name').value.trim();
      const contact = contactInput.value.trim();
      if (!name || !contact) { error.hidden = false; (!name ? quiz.querySelector('.qz-name') : contactInput).focus(); return; }
      error.hidden = true;
      makeCertificate(name, data => {
        quiz.querySelector('.qz-cert').src = data;
        quiz.querySelector('.qz-form').classList.remove('active'); quiz.querySelector('.qz-done').classList.add('active');
        deliveryButton.textContent = selectedDelivery() === 'max' ? 'Открыть MAX и вставить сообщение →' : 'Написать в WhatsApp →';
        deliveryButton.dataset.name = name; deliveryButton.dataset.contact = contact; deliveryButton.dataset.delivery = selectedDelivery();
      });
      return;
    }
    const message = `Юлия, я прошла квиз. Меня зовут ${target.dataset.name}. Пришли, пожалуйста, сертификат в ${target.dataset.delivery === 'max' ? 'MAX' : 'WhatsApp'} по номеру: ${target.dataset.contact}`;
    if (target.dataset.delivery === 'max') {
      navigator.clipboard?.writeText(message).catch(() => {});
      window.open('https://max.ru/u/f9LHodD0cOL5aLSzYDBotzUH5e8lNNIxes0kPNpu0vthLGxybMEYItW7y1I', '_blank', 'noopener');
    } else window.open(`https://wa.me/79951513253?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  }, true);
}

const heroLead = document.querySelector('.hero-body .lead');
if (heroLead) {
  heroLead.textContent = 'Вам не нужно ничего объяснять, вспоминать и делать правильно.';
  heroLead.classList.add('hero-emphasis');
}
const heroDescription = document.querySelector('.hero-body p:not(.lead):not(.aside)');
if (heroDescription) heroDescription.textContent = 'Вы располагаетесь на кушетке. А Я провожу сеанс. Вам не нужно снова пересказывать прошлое, искать причины и выполнять домашние задания.';
document.querySelector('.hero-body .aside')?.remove();
const heroPhoto = document.querySelector('.hero-photo img');
if (heroPhoto) {
  heroPhoto.src = 'assets/hero-julia-camera.jpg';
  heroPhoto.removeAttribute('srcset'); heroPhoto.removeAttribute('sizes');
  heroPhoto.alt = 'Юлия Ермолова, практик Access Bars';
}
const aboutPhoto = document.querySelector('.about-photo img');
if (aboutPhoto) {
  aboutPhoto.src = 'assets/julia-about-portrait.jpg';
  aboutPhoto.removeAttribute('srcset'); aboutPhoto.removeAttribute('sizes');
  aboutPhoto.alt = 'Юлия Ермолова, практик Access Bars';
}
document.querySelector('.about .split > div:first-child')?.insertAdjacentHTML('beforeend', `<div class="about-personal"><p class="section-label">Обо мне</p><h3>Кто я и почему ты здесь.</h3><p>Меня зовут Юля. Я прочитала дофига книг по саморазвитию. Ходила к психологам. Пробовала медитации, аффирмации, дневники благодарности, расстановки, холотроп, энеаграмму, матрицу судьбы и ещё хер знает что. Сбилась со счёта — меня от этого уже тошнит.</p><p>Меняла всё — работу, город, отношения, причёску. Ничего не помогало надолго.</p><p>А потом попросила у Вселенной: покажи что-то, что реально работает, без бесконечной работы над собой. И мне показали Access Bars. Год ходила на сеансы сама — просто лежала и получала. Потом поняла, что хочу делать это для других, и обучилась.</p><blockquote>Я лично провожу индивидуальные сеансы в Москве. Это возможность отпустить то, что мешает жить — без разбора прошлой жизни и тяжёлой самостоятельной проработки.</blockquote><p>Про технику. Access Bars — это 32 точки на голове. Каждая отвечает за свою сферу: деньги, контроль, творчество, спокойствие, тело, старение. Когда я их касаюсь, мозг «перезагружает» заевшие мысли, которые крутятся по кругу. Это не массаж головы и не расслабление. Это работа с тем, что застряло.</p><p>«Жить в лёгкости, радости и великолепии» — звучит пафосно, знаю. Но после сеанса понимаешь: это не пафос. Это состояние, в котором ты наконец перестаёшь тащить всё на себе.</p></div>`);
document.querySelector('.session .condition:last-of-type')?.insertAdjacentHTML('afterend','<p class="condition">Оплата после сеанса — наличными или переводом на карту.</p>');
document.querySelector('.faq-grid')?.insertAdjacentHTML('beforeend', `<details class="question"><summary><h3>Это массаж головы?</h3><span class="round">+</span></summary><div class="answer"><p>Нет. Массаж — про мышцы. Здесь — про то, что крутится в голове. Работа с 32 точками.</p></div></details><details class="question"><summary><h3>А если я ничего не почувствую?</h3><span class="round">+</span></summary><div class="answer"><p>Тогда ты просто 45 минут никому ничего не должна. Это уже результат.</p></div></details><details class="question"><summary><h3>Сколько сеансов нужно?</h3><span class="round">+</span></summary><div class="answer"><p>Сколько захочешь. Кто-то приходит раз, кто-то раз в месяц. Никаких курсов и абонементов.</p></div></details>`);
document.querySelector('.final .closing-copy')?.insertAdjacentHTML('afterbegin','<p class="section-label">И последнее</p><p class="final-added-copy">Полежать дома на диване — это не то же самое. Здесь — 45 минут, где с тебя ничего не требуют. Ни действий, ни инсайтов, ни «работы над собой». Ты лежишь. Я работаю с точками на голове.</p>');
const sessionPhoto = document.querySelector('.session-photo img');
if (sessionPhoto) {
  sessionPhoto.src = 'assets/julia-portrait-shoulder.jpg';
  sessionPhoto.removeAttribute('srcset'); sessionPhoto.removeAttribute('sizes');
  sessionPhoto.alt = 'Юлия Ермолова';
}
const finalPhoto = document.querySelector('.final .photo img');
if (finalPhoto) {
  finalPhoto.src = 'assets/julia-portrait-seated.jpg';
  finalPhoto.removeAttribute('srcset'); finalPhoto.removeAttribute('sizes');
  finalPhoto.alt = 'Юлия Ермолова';
}
document.querySelector('.added-pains .wrap')?.insertAdjacentHTML('beforeend', '<figure class="pains-photo"><img src="assets/session-client-vertical.jpg" alt="Юлия Ермолова проводит сеанс Access Bars" loading="lazy"></figure>');
const addedSteps = document.querySelector('.added-steps');
const about = document.querySelector('.about');
if (about && addedSteps) about.insertAdjacentElement('afterend', addedSteps);
const bonus = document.querySelector('.added-bonus');
const faq = document.querySelector('.faq');
if (bonus && faq) faq.insertAdjacentElement('afterend', bonus);
document.querySelectorAll('.added-pains, .about, .added-steps, .session, .certificate, .faq, .added-bonus, .final').forEach((section, index) => {
  const ornament = document.createElement('span');
  ornament.className = `page-botanical ${index % 2 ? 'page-botanical-left' : 'page-botanical-right'}`;
  ornament.setAttribute('aria-hidden', 'true');
  section.prepend(ornament);
});

// Agreed copy revisions.
heroLead.textContent = 'Тебе не нужно ничего объяснять, вспоминать и делать правильно.';
if (heroDescription) heroDescription.textContent = 'Ты располагаешься на кушетке, а я провожу сеанс. Не нужно снова пересказывать прошлое, искать причины и выполнять домашние задания.';
const aboutCopy = document.querySelector('.about .split > div:first-child');
const aboutParagraphs = aboutCopy?.querySelectorAll(':scope > p');
const aboutText = [
  'Меня зовут Юлия Ермолова. Я практик Access Bars и лично провожу сеансы.',
  'Перед началом немного поговорим. Можешь рассказать, что тебя привело и что хотелось бы изменить. Если не знаешь, как это объяснить, — ничего страшного. Подготовленная речь и презентация на двадцать слайдов не нужны.',
  'Потом ты устраиваешься на кушетке — прямо в одежде. Я мягко касаюсь определённых точек на голове.',
  'Можешь говорить или молчать. Можешь уснуть или не уснуть. Специально расслабляться, искать правильные ощущения и срочно ловить озарение не требуется.',
  'Если что-то некомфортно — скажи мне. Мы изменим прикосновение или остановимся.'
];
if (aboutParagraphs?.length >= 6) {
  aboutText.forEach((text, index) => { aboutParagraphs[index].textContent = text; });
  aboutParagraphs[5].remove();
}
const personalParagraphs = document.querySelectorAll('.about-personal > p:not(.section-label)');
if (personalParagraphs[0]) personalParagraphs[0].textContent = personalParagraphs[0].textContent.replace('Меня зовут Юля.', 'Меня зовут Юлия.');
const firstStep = document.querySelector('.added-steps .steps-list li:first-child');
if (firstStep) {
  firstStep.querySelector('strong').textContent = 'Договариваемся в переписке';
  firstStep.querySelector('span').textContent = 'Ты оставляешь заявку, и я пишу тебе в ответ. Обсуждаем удобные день и время, я подбираю кабинет в центре Москвы. Когда место подтверждено, согласовываем встречу.';
}
const thirdStepText = document.querySelector('.added-steps .steps-list li:nth-child(3) span');
if (thirdStepText) thirdStepText.textContent = 'Я мягко касаюсь точек на голове. Если возникнут вопросы или захочется сделать паузу — просто скажи мне.';
const sessionHeading = document.querySelector('.session h2');
if (sessionHeading) sessionHeading.innerHTML = '<span>Начни с одного сеанса.</span> <span>Дальше — по твоим ощущениям.</span>';
const sessionConditions = document.querySelectorAll('.session .condition');
if (sessionConditions[2]) sessionConditions[2].textContent = 'Одной встречи может быть недостаточно. Количество сеансов индивидуально: после первого мы обсудим твои ощущения и решим, как двигаться дальше. Покупать курс заранее не нужно.';
const faqItems = document.querySelectorAll('.faq-grid .question');
const faqAnswers = [
  'Специальные знания не нужны. Перед началом я расскажу, как проходит сеанс, и отвечу на вопросы.',
  'Ты сама выбираешь, чем делиться. Подробную историю жизни рассказывать не обязательно.',
  'Тебе не нужно добиваться определённого состояния. Скажи мне, как ты себя чувствуешь, — вместе найдём, как сделать встречу комфортнее.',
  'У каждого свой опыт, поэтому заранее предсказать изменения я не могу. Одинаковый результат после одной встречи не обещаю.',
  'Напиши мне в удобный мессенджер. Мы обсудим время и подберём кабинет в центре Москвы. Созваниваться не нужно.'
];
faqAnswers.forEach((answer, index) => { const p = faqItems[index]?.querySelector('.answer p'); if (p) p.textContent = answer; });
const countFaq = [...faqItems].find(item => item.querySelector('h3')?.textContent.includes('Сколько сеансов'));
if (countFaq) countFaq.querySelector('.answer p').textContent = 'Это индивидуально: одной встречи может быть недостаточно. После первого сеанса обсудим твои ощущения и решим, как двигаться дальше. Покупать курс заранее не нужно.';
const bookingTitle = document.querySelector('#booking-title');
if (bookingTitle) bookingTitle.textContent = 'Выбери мессенджер';
const bookingIntro = document.querySelector('#booking-dialog > p:not(.booking-privacy)');
if (bookingIntro) bookingIntro.textContent = 'Напиши мне, чтобы согласовать день и время сеанса.';
document.querySelectorAll('.hero-photo img, .pains-photo img, .about-photo img, .session-photo img').forEach(img => {
  const blend = document.createElement('div');
  blend.className = 'portrait-blend';
  img.replaceWith(blend);
  blend.append(img);
});


// Each section gives a reason to book and opens the same messenger chooser.
document.querySelectorAll('[data-booking]').forEach(button => {
  button.innerHTML = 'Записаться на сеанс <span aria-hidden="true">→</span>';
});
function sectionBooking(text) {
  const block = document.createElement('div');
  block.className = 'section-booking';
  const copy = document.createElement('p');
  copy.textContent = text;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'cta';
  button.dataset.booking = '';
  button.innerHTML = 'Записаться на сеанс <span aria-hidden="true">→</span>';
  button.addEventListener('click', () => {
    const dialog = document.querySelector('#booking-dialog');
    if (typeof openDialog === 'function') openDialog(dialog, button);
    else if (dialog && !dialog.open) dialog.showModal();
  });
  block.append(copy, button);
  return block;
}
document.querySelector('.added-pains .pain-list')?.insertAdjacentHTML('afterbegin', '<p>На работе ты незаменима. Дома — тоже. Всё держится на тебе. Удобно всем. Кроме тебя.</p><p>Близкие спрашивают, почему ты такая раздражённая. Может, потому что даже отдых всей семьи почему-то организуешь ты.</p><p>Легла спать. Мозг открыл совещание: что не доделала, кому не так ответила и что опять будет завтра. Протокол — до трёх ночи.</p><p>Сначала разберёшься с работой, домом и чужими проблемами. Потом отдохнёшь. Спойлер: это «потом» всё время переносят.</p>');
document.querySelector('.added-closing')?.after(sectionBooking('Узнала себя? Я предлагаю начать с сеанса Access Bars: на 45–60 минут выйти из режима «всё на мне». Ты лежишь, я работаю с точками на голове. Без очередного задания стать лучшей версией себя.'));
document.querySelector('.about-personal')?.before(sectionBooking('Здесь не нужно быть прилежной ученицей. Если такой формат тебе ближе, давай договоримся о встрече.'));
document.querySelector('.about-personal')?.append(sectionBooking('Я сначала попробовала этот подход на себе. Теперь ты можешь прийти ко мне и составить собственное впечатление.'));
document.querySelector('.added-steps .wrap')?.append(sectionBooking('Всё начинается с сообщения. Напиши, когда тебе удобно, — я подберу кабинет и согласую с тобой встречу. Без предварительного собеседования.'));
const sessionButton = document.querySelector('.session [data-booking]');
if (sessionButton) {
  const text = document.createElement('p');
  text.className = 'booking-context';
  text.textContent = 'Хочешь понять, подходит ли тебе этот формат? Давай выберем время для первой встречи — так у тебя будет собственный опыт, а не ещё одна теория.';
  sessionButton.before(text);
}
document.querySelector('.certificate-grid')?.append(sectionBooking('Обучение я прошла. Лично работать с тобой тоже буду я. Если хочешь познакомиться с практикой, приходи на сеанс.'));
document.querySelector('.faq > .wrap')?.append(sectionBooking('Остались вопросы? Напиши мне — отвечу и помогу выбрать время. Знать об Access Bars всё до первой встречи необязательно.'));
document.querySelector('.added-bonus > .wrap')?.append(sectionBooking('Сертификат можно оставить себе. А если хочется выделить время на настоящую паузу — приходи на сеанс. Здесь можно пойти дальше слов и действительно дать себе отдохнуть.'));
const finalButton = document.querySelector('.final [data-booking]');
if (finalButton) {
  const text = document.createElement('p');
  text.className = 'booking-context';
  text.textContent = 'Если всё время находится что-то важнее твоего отдыха, давай выберем время для тебя. День и место согласуем в переписке.';
  finalButton.before(text);
}

document.querySelectorAll('.page-botanical').forEach(ornament => {
  const section = ornament.parentElement;
  section.after(ornament);
});
const heroDivider = document.createElement('span');
heroDivider.className = 'page-botanical page-botanical-right';
heroDivider.setAttribute('aria-hidden', 'true');
document.querySelector('.hero')?.after(heroDivider);
const personalBlock = document.querySelector('.about-personal');
const personalPhoto = document.querySelector('.about-photo');
if (personalBlock && personalPhoto) personalBlock.prepend(personalPhoto);

const heroOffer = document.querySelector('.hero-facts');
if (heroOffer) heroOffer.innerHTML = '<strong class="hero-offer-price">5 900 ₽ <span>за сеанс</span></strong><span class="hero-offer-details">45–60 минут · отдельный кабинет в коворкинге в центре Москвы</span>';
document.querySelectorAll('main [data-booking]').forEach(button => {
  if (button.closest('.hero')) return;
  const terms = document.createElement('div');
  terms.className = 'booking-terms';
  terms.innerHTML = '<strong>5 900 ₽ за сеанс</strong><span>45–60 минут · отдельный кабинет в коворкинге в центре Москвы</span>';
  button.after(terms);
});
document.querySelector('.final .facts')?.remove();
if (sessionConditions[1]) sessionConditions[1].textContent = 'Отдельный кабинет в коворкинге в центре Москвы. Точное место и время согласуем заранее. Выдаю чек.';
