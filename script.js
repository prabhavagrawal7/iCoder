var div2="<table>",div3="<table>",div1="<table>",global="<table>",div4="<table>",educational="<table>",div1and2="<table>";
function openContest(element){
  open(element.id);
}
function openVirtual(element){
    open(element.id);
}
$('.sidebar a').click(function(){
    console.log('clicked');
    $('.sidebar a.active').removeClass('active');
    $(this).addClass('active');
})
function showContent(div){
    const area=document.querySelector('.content');
   const id=div.id;
   if(id=='div1'){
     area.innerHTML=div1;
   }
   else if(id=='div2'){
    area.innerHTML=div2;
   }
   else if(id=='div3'){
    area.innerHTML=div3;
   }
   else if(id=='div4'){
    area.innerHTML=div4;
   }
   else if(id=='div1and2'){
    area.innerHTML=div1and2;
   }
   else if(id=='global'){
    area.innerHTML=global;
   }
   else if(id=='educational'){
    area.innerHTML=educational;
   }
}
    $(document).ready(function(){
     $('#contests').click(function(){
         console.log('clicked');
         if($('#contests-list').css('visibility')=='hidden'){
             console.log('hidden');
             $('#contests-list').css({'visibility':'visible'});
         }
         else {
             $('#contests-list').css({'visibility':'hidden'});
         }
     })
    
    })
    // https://codeforces.com/contestRegistration/1562/virtual/true
    // https://codeforces.com/contest/1562

function  distributeData(data){
 data.forEach(function(element){
     if(element.name.includes('Educational')){
        var curr=`
        <tr class="contest-row">
           <td class="contest-name" >${element.name}</td>
          <td class="solve-contest" id="https://codeforces.com/contest/${element.id}" onclick="openContest(this)">Solve</td>
           <td class="contest-separater"></td>
           <td class="virtual-contest" id=" https://codeforces.com/contestRegistration/${element.id}/virtual/true" onclick="openVirtual(this)">Start Virtual</td>
       </tr>
       <tr class="contest-row-separater"></tr>
        `;
        educational+=curr;
    }
    else if(element.name.includes('Global')){
        var curr=`
        <tr class="contest-row">
           <td class="contest-name" >${element.name}</td>
          <td class="solve-contest" id="https://codeforces.com/contest/${element.id}" onclick="openContest(this)">Solve</td>
           <td class="contest-separater"></td>
           <td class="virtual-contest" id=" https://codeforces.com/contestRegistration/${element.id}/virtual/true" onclick="openVirtual(this)">Start Virtual</td>
       </tr>
       <tr class="contest-row-separater"></tr>
        `;
        global+=curr;
    }
    else if(element.name.includes('Div. 1 + Div. 2')){
        var curr=`
        <tr class="contest-row">
           <td class="contest-name" >${element.name}</td>
          <td class="solve-contest" id="https://codeforces.com/contest/${element.id}" onclick="openContest(this)">Solve</td>
           <td class="contest-separater"></td>
           <td class="virtual-contest" id=" https://codeforces.com/contestRegistration/${element.id}/virtual/true" onclick="openVirtual(this)">Start Virtual</td>
       </tr>
       <tr class="contest-row-separater"></tr>
        `;
        div1and2+=curr;
    }
 else if(element.name.includes('Div. 1')){
      var curr=`
      <tr class="contest-row">
         <td class="contest-name" >${element.name}</td>
        <td class="solve-contest" id="https://codeforces.com/contest/${element.id}" onclick="openContest(this)">Solve</td>
         <td class="contest-separater"></td>
         <td class="virtual-contest" id=" https://codeforces.com/contestRegistration/${element.id}/virtual/true" onclick="openVirtual(this)">Start Virtual</td>
     </tr>
     <tr class="contest-row-separater"></tr>
      `;
      div1+=curr;
  }
  else if(element.name.includes('Div. 2')){
     var curr=`
     <tr class="contest-row">
        <td class="contest-name" >${element.name}</td>
       <td class="solve-contest" id="https://codeforces.com/contest/${element.id}" onclick="openContest(this)">Solve</td>
        <td class="contest-separater"></td>
        <td class="virtual-contest" id=" https://codeforces.com/contestRegistration/${element.id}/virtual/true" onclick="openVirtual(this)">Start Virtual</td>
    </tr>
    <tr class="contest-row-separater"></tr>
     `;
     div2+=curr;
 }
  else if(element.name.includes('Div. 3')){
     var curr=`
     <tr class="contest-row">
        <td class="contest-name" >${element.name}</td>
       <td class="solve-contest" id="https://codeforces.com/contest/${element.id}" onclick="openContest(this)">Solve</td>
        <td class="contest-separater"></td>
        <td class="virtual-contest" id=" https://codeforces.com/contestRegistration/${element.id}/virtual/true" onclick="openVirtual(this)">Start Virtual</td>
    </tr>
    <tr class="contest-row-separater"></tr>
     `;
     div3+=curr;
 }
  else if(element.name.includes('Div. 4')){
     var curr=`
     <tr class="contest-row">
        <td class="contest-name" >${element.name}</td>
       <td class="solve-contest" id="https://codeforces.com/contest/${element.id}" onclick="openContest(this)">Solve</td>
        <td class="contest-separater"></td>
        <td class="virtual-contest" id=" https://codeforces.com/contestRegistration/${element.id}/virtual/true" onclick="openVirtual(this)">Start Virtual</td>
    </tr>
    <tr class="contest-row-separater"></tr>
     `;
     div4+=curr;
 }

  
  
 }); 
 div1+="</table>",div2+="</table>",div3+="</table>",div4+="</table>",global+="</table>",educational+="</table>",div1and2+="</table>";
}
async function getapi(url){
    const response= await fetch(url);
    var data = await response.json();    
    console.log(data);
    return data;
}

async function fillarrays(){
    const alldivs= await getapi('https://codeforces.com/api/contest.list?gym=false');
     distributeData(alldivs.result);
 }
 fillarrays();
