'use strict';

  document.addEventListener('click',e=>{const nav=e.target.closest('[data-page]');if(nav){setPage(nav.dataset.page);return}if(e.target.id==='menuToggle')$('#sidebar').classList.toggle('open')});
  window.setPage=setPage;window.openPlayerForm=openPlayerForm;window.openInstrumentForm=openInstrumentForm;window.openSongForm=openSongForm;window.openEventForm=openEventForm;window.openAttendance=openAttendance;window.openQuickAdd=openQuickAdd;window.openOrchestraForm=openOrchestraForm;window.viewSong=viewSong;window.exportXML=exportXML;window.exportJSON=exportJSON;window.closeModal=closeModal;window.deletePlayer=deletePlayer;window.deleteInstrument=deleteInstrument;window.deleteSong=deleteSong;window.deleteEvent=deleteEvent;
  $('#themeToggle').onclick=toggleTheme;
  render();
