
function contarOvejas(ovejas) {
  const filtro = ovejas.filter(  element=> element.color === 'rojo' && element.name.toLowerCase().includes('a') && element.name.toLowerCase().includes('n')		);
 return filtro
}
