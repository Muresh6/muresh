'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#dialog-content');
let opener = null;
const closeDialog = () => dialog.close();
document.querySelector('.dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeDialog(); } });
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); opener?.focus(); });

const dishes = [
  {name:'Garden bowl',category:'Mains',price:'RM22',icon:'🥗',description:'Roasted vegetables, grains and a bright citrus dressing.'},
  {name:'Herb roast chicken',category:'Mains',price:'RM28',icon:'🍗',description:'Herb-roasted chicken with seasonal vegetables and potatoes.'},
  {name:'Tomato & basil pasta',category:'Mains',price:'RM24',icon:'🍝',description:'Slow-cooked tomato sauce, basil and a little parmesan.'},
  {name:'Lemon cake',category:'Desserts',price:'RM14',icon:'🍰',description:'A slice of citrus cake with a light lemon glaze.'},
  {name:'Iced matcha',category:'Drinks',price:'RM13',icon:'🍵',description:'Matcha and milk, poured over ice.'},
  {name:'Cold brew',category:'Drinks',price:'RM12',icon:'☕',description:'Slow-steeped coffee, served cold and smooth.'}
];
function renderBloom() {
  content.innerHTML = `<div class="demo-intro"><h2 id="dialog-title">Bloom Kitchen</h2><p>A restaurant website concept. Try the menu filters below.</p></div><div class="demo-tabs" role="group" aria-label="Filter menu">${['All','Mains','Desserts','Drinks'].map((name,i)=>`<button class="demo-tab" data-category="${name}" aria-pressed="${i===0}">${name}</button>`).join('')}</div><div class="menu-grid" aria-live="polite"></div><p class="demo-note">Illustrative restaurant, menu and prices. This demo does not take orders or bookings.</p>`;
  const render = category => {
    content.querySelector('.menu-grid').innerHTML = dishes.filter(d => category === 'All' || d.category === category).map(d=>`<article class="menu-item"><span class="dish-icon" aria-hidden="true">${d.icon}</span><h3>${d.name}</h3><p>${d.description}</p><strong>${d.price}</strong></article>`).join('');
  };
  content.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click',()=>{
    content.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    render(button.dataset.category);
  }));
  render('All');
}

function renderNorthline() {
  content.innerHTML = `<div class="demo-intro"><h2 id="dialog-title">Northline</h2><p>A service-business concept with an enquiry builder. Try it with sample details.</p></div><form class="quote-form"><label class="field">Your name<input name="name" required maxlength="70" autocomplete="name" placeholder="e.g. Alex"></label><label class="field">Type of service<select name="service"><option>Installation</option><option>Maintenance</option><option>Repairs</option></select></label><label class="field field-wide">What do you need?<textarea name="details" required maxlength="700" placeholder="Briefly describe the work…"></textarea></label><button class="button button-dark field-wide" type="submit">Preview enquiry <span aria-hidden="true">↗</span></button></form><div id="quote-result" aria-live="polite"></div><p class="demo-note">Northline is an illustrative business. Previewing keeps your details in this browser only. The optional WhatsApp button sends your brief to Muresh, the portfolio owner, not to an electrical contractor.</p>`;
  content.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name')).trim();
    const details = String(data.get('details')).trim();
    if (!name || !details) { event.currentTarget.querySelector(!name ? '[name="name"]' : '[name="details"]').focus(); return; }
    const brief = `Demo enquiry\nName: ${name}\nService: ${data.get('service')}\nDetails: ${details}`;
    const result = content.querySelector('#quote-result');
    result.replaceChildren();
    const preview = document.createElement('p');
    preview.className = 'quote-preview';
    preview.textContent = brief;
    const send = document.createElement('a');
    send.className = 'button button-dark';
    send.textContent = 'Discuss this demo with Muresh ↗';
    send.href = 'https://wa.me/60103918896?text=' + encodeURIComponent('Hi Muresh, I tried your Northline website concept.\n\n' + brief);
    send.target = '_blank'; send.rel = 'noopener noreferrer';
    result.append(preview,send);
  });
}

const projects = [
  {name:'Website launch',client:'Bloom concept',status:'In progress',progress:75},
  {name:'Client portal',client:'Workspace concept',status:'In progress',progress:48},
  {name:'Monthly report',client:'Reporting concept',status:'Completed',progress:100},
  {name:'Booking experience',client:'Service concept',status:'Planning',progress:15},
  {name:'Product catalogue',client:'Retail concept',status:'Completed',progress:100}
];
function renderFlowboard() {
  content.innerHTML = `<div class="demo-intro"><h2 id="dialog-title">Flowboard</h2><p>A project dashboard concept. Search by project or filter by status.</p></div><div class="dashboard-stats"><div><span>Total projects</span><strong>5</strong></div><div><span>In progress</span><strong>2</strong></div><div><span>Completed</span><strong>2</strong></div></div><label for="project-search" class="eyebrow" style="margin-bottom:8px">FIND A PROJECT</label><input id="project-search" class="demo-search" type="search" placeholder="Search projects…"><div class="demo-tabs" role="group" aria-label="Filter project status">${['All','In progress','Completed','Planning'].map((s,i)=>`<button class="demo-tab" data-status="${s}" aria-pressed="${i===0}">${s}</button>`).join('')}</div><div class="demo-table-scroll"><table class="demo-table"><thead><tr><th scope="col">PROJECT</th><th scope="col">STATUS</th><th scope="col">PROGRESS</th></tr></thead><tbody></tbody></table></div><p class="demo-count" role="status"></p><p class="demo-note">All projects and figures are fictional sample data. The demo runs entirely in your browser.</p>`;
  let status = 'All';
  const render = () => {
    const query = content.querySelector('#project-search').value.toLowerCase().trim();
    const rows = projects.filter(p => (status === 'All' || p.status === status) && (p.name + ' ' + p.client).toLowerCase().includes(query));
    content.querySelector('tbody').innerHTML = rows.length ? rows.map(p=>`<tr><td>${p.name}</td><td><span class="flow-status ${p.status === 'Completed' ? 'done' : ''}">${p.status}</span></td><td><progress max="100" value="${p.progress}" aria-label="${p.name} progress"></progress>${p.progress}%</td></tr>`).join('') : '<tr><td colspan="3" class="empty-state">No matching projects. Try another search or status.</td></tr>';
    content.querySelector('.demo-count').textContent = `Showing ${rows.length} of ${projects.length} sample projects`;
  };
  content.querySelector('#project-search').addEventListener('input',render);
  content.querySelectorAll('[data-status]').forEach(button=>button.addEventListener('click',()=>{
    status = button.dataset.status;
    content.querySelectorAll('[data-status]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    render();
  }));
  render();
}

const renderers = {bloom:renderBloom,northline:renderNorthline,flowboard:renderFlowboard};
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
  opener = button;
  renderers[button.dataset.project]();
  dialog.showModal();
  document.body.classList.add('modal-open');
  document.querySelector('.dialog-close').focus();
}));
