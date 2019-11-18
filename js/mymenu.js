let m_id = new Array('s_mn_1','s_mn_2','s_mn_3','s_mn_4','s_mn_5');
listStart = function allclose() {
  for (i=0; i < m_id.length; i++){
  document.getElementById(m_id[i]).style.display = "none";
  }
}
function menuOpen(id){
  for (i=0; i < m_id.length; i++){
  if (id != m_id[i]){
  document.getElementById(m_id[i]).style.display = "none";
  }
  }
  if (document.getElementById(id).style.display == "block"){
  document.getElementById(id).style.display = "none";
  }else{
  document.getElementById(id).style.display = "block";
  }
}
window.onload=listStart;