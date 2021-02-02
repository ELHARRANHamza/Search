var btn_Filter=document.getElementById('btnFilter');
var txtNom = document.getElementById('txt_Search');
var table=document.getElementById('table_');
var tr=table.getElementsByTagName('tr');
var txtNom = document.getElementById('txt_Search');
var td,
search;
btn_Filter.onclick=function(){
    for(i=1;i<tr.length;i++){
        td=tr[i].getElementsByTagName('td')[1];
        
search=td.innerHTML || td.innerText;
       
         if(search==txtNom.value){
tr[i].style.display='';
         }else{
             tr[i].style.display='none'
         }
    }
}