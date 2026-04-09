document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-scroll]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const target=document.querySelector(btn.getAttribute('data-scroll'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
  const form=document.getElementById('inquiryForm');
  if(!form) return;
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const val=id=>(document.getElementById(id)?.value||'').trim();
    const msg=document.getElementById('formMessage');
    if(!val('name')||!val('phone')||!val('goal')){
      if(msg) msg.textContent=form.dataset.error||'Please complete the required fields.';
      return;
    }
    const na=form.dataset.na||'N/A';
    const none=form.dataset.none||'None';
    const lines=[
      form.dataset.intro||'New inquiry',
      `${form.dataset.labelName||'Name'}: ${val('name')||na}`,
      `${form.dataset.labelPhone||'Phone'}: ${val('phone')||na}`,
      `${form.dataset.labelGoal||'Goal'}: ${val('goal')||na}`,
      `${form.dataset.labelTime||'Preferred time'}: ${val('time')||none}`,
      `${form.dataset.labelNotes||'Notes'}: ${val('notes')||none}`,
    ];
    if(msg) msg.textContent=form.dataset.success||'Opening WhatsApp...';
    window.open(`https://wa.me/201005252119?text=${encodeURIComponent(lines.join('\n'))}`,'_blank');
  });
});
