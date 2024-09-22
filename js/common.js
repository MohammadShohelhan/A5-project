function getId(id){
  const value =document.getElementById(id);
  return value;
}
function getValue(id){
  const Id =document.getElementById(id);
  const value = parseFloat( Id.value);
  return value;
}
function getInnerText(id){
  const Id = document.getElementById(id);
  const value = parseFloat(Id.innerHTML);
  return value;
}
// function getId(){

// }
