'use strict';

  function applyTheme(theme){const current=theme==='dark'?'dark':'light';document.documentElement.dataset.theme=current;const button=$('#themeToggle');if(button){button.textContent=current==='dark'?'☼':'◐';button.title=current==='dark'?'Ganti ke tema terang':'Ganti ke tema gelap';button.setAttribute('aria-label',current==='dark'?'Aktifkan tema terang':'Aktifkan tema gelap')}const meta=$('meta[name="theme-color"]');if(meta)meta.content=current==='dark'?'#141d18':'#f5f5ef'}
  function toggleTheme(){const next=document.documentElement.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem(THEME_KEY,next)}catch(e){console.warn('Tema tidak dapat disimpan',e)}applyTheme(next)}
  let initialTheme='light';try{initialTheme=localStorage.getItem(THEME_KEY)==='dark'?'dark':'light'}catch(e){}applyTheme(initialTheme);
  function save(){localStorage.setItem(KEY,JSON.stringify(db));const status=$('#savedStatus');if(status)status.textContent='Terakhir disimpan '+new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});renderNavCounts()}
  function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function toast(msg,error=false){const el=document.createElement('div');el.className='toast'+(error?' error':'');el.textContent=msg;document.body.append(el);setTimeout(()=>el.remove(),2600)}
  const byId=(arr,id)=>arr.find(x=>x.id===id);
  function renderNavCounts(){$('#playerNavCount').textContent=db.players.length;$('#instrumentNavCount').textContent=db.instruments.length;$('#songNavCount').textContent=db.songs.length}
  function setPage(next){page=next;$('#sidebar').classList.remove('open');render()}
  function head(eyebrow,title,desc,button=''){return `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${desc}</p></div>${button}</div>`}
  function actionBtn(label,onclick,cls='btn btn-primary',icon='+'){return `<button class="${cls}" onclick="${onclick}"><span>${icon}</span>${label}</button>`}
  function empty(icon,title,desc,action=''){return `<div class="empty-state"><div class="empty-icon">${icon}</div><b>${title}</b>${desc}${action?`<div style="margin-top:13px">${action}</div>`:''}</div>`}
  function render(){renderNavCounts();$('#pageCrumb').textContent=names[page];$$('.nav-item[data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===page));const root=$('#pageContent');root.innerHTML=({beranda:home,pemain:players,instrumen:instruments,repertoar:songs,kalender:calendar,data:dataPage}[page])();bindPageEvents()}
