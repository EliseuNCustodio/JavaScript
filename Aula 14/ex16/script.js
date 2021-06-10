
function soma()
{
    //alert ("Olá");
var msg=window.document.getElementById('res');
var kn = window.document.getElementById('inicial');
var rz = window.document.getElementById('razao');
var fin = window.document.getElementById('fim');
var i=0;
if(inicial.value.length==0|| fim.value.length==0|| razao.value.length==0)
    {
        res.innerHTML='impossivel contar'
        window.alert('[Erro] Faltam dados!')
    }
    else
    {
    n1=Number(kn.value);
    n2=Number(rz.value);
    n3=Number(fin.value);
    if(n1<n3)
        for (var i=n1;i<=n3;i+=n2 )
        {
            msg.innerHTML += `${i} \u{1F603}`;
        }
        else{
            for(var i=n1;i>=n3;i-=n2)
            {
                msg.innerHTML += `${i} \u{1F603}`;
            }
        }
        res.innerHTML+=`\u{1F3C1}`
    }
    
}