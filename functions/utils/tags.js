const getModifiedTag = (bigger, smaller) => {
  if(!Array.isArray(bigger) || !Array.isArray(smaller) || bigger.length === 0 || smaller.length >= bigger.length ) return null;
  return bigger.filter((element) => !smaller.includes(element))[0];
};

const isCreateOp = (data) => {
  /*
  e.data.exists() &&
      (
          (Object.keys(e.data.val()).length === 1 && Object.keys(e.data.previous.val()).length > 0) ||
          (Object.keys(e.data.val()).length > 1 && Object.keys(e.data.val()).length > Object.keys(e.data.previous.val()).length)
      )
   */
  //si existen los datos y si antes no habia datos y ahora si o antes habia menos datos de los que hay ahora entonces true!!
  if(data.exists()){
    const currentSize = Object.keys(data.val()).length;
    console.log('Size: ' + currentSize);
    console.log('Prev: ' + JSON.stringify(data.previous));
    console.log('Es null: ' + Object.keys(data.previous).length);

    if(currentSize === 1 && Object.keys(data.previous.val()).length === 0) return true;
    else if(currentSize > 1 && Object.keys(data.previous).length > 0 && Object.keys(data.previous.val()).length < currentSize) return true;
    else return false;
  }
  return false;
};


module.exports = {
  getModifiedTag,
  isCreateOp
}
