function multiplication()
{
    var p=eval(document.getElementById('id1').value)
    var t=eval(document.getElementById('id2').value)
    var r=eval(document.getElementById('id3').value)
    var simpleinterest=(p*t*r)/100
    alert(simpleinterest)
}
function Erasedata()
{
    document.getElementById('id1').value=""
    document.getElementById('id2').value=""
    document.getElementById('id3').value=""
}