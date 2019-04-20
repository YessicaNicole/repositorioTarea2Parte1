var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ejercicio1',function(req, res, next){
  var vector=req.query.params;
  console.log(req.query);
  vector=vector.split('-');
  var pares=0;
  var impares=0;
  for(var i=0;i<vector.length;i++)
    if(i%2==0)
      pares+=parseInt(vector[i]);
    else {
      impares+=parseInt(vector[i]);
    }
    var resul=new Array(pares,impares);
    res.status(200).json({
      result:resul
    });
    return;
});


router.post('/ejercicio2',function(req,res,next){

    var picture=req.body.parametros.split("-");
    var aux=new Array;
    var borde='';
    for(var i=0; i<picture[0].length+2;i++){
    borde=borde+'*';
    aux[0]=borde;
  }
    aux[picture.length+1]=borde;
    for(var j=1;j<picture.length+1;j++){
      aux[j]='*'+picture[j-1]+'*';
    }
      res.status(200).json(aux);
});

/*router.post('/ejercicio3',function(req,res){
    var arreglo1=req.body.dato1.split("-");
    var arreglo2=req.body.dato2.split("-");
      if(arreglo1.length==arreglo2.length){
        var cont=0;
        var p=new Array();
        for(var i=0; i<arreglo1.length;i++){
          if(arreglo1[i]!=arreglo2[i]){
            if(cont==2)
              res.status(200).json({
                resul:false
              });
              p[cont++]=i;
          }
          res.status(200).json({
            resul:(((cont==2 && arreglo2[p[0]]==arreglo1[p[1]] && arreglo1[p[0]]==arreglo2[p[1]])||cont==0)? true:false)
          });
        }
        else{
          res.status(200).json({
            resul:false
          });
        }
    }
      return;
});*/

router.get('/ejercicio3',function(req,res,next){
  var arreglo=req.query.dato.split("*");
  var resp ;
  var cont =0;
  var dato1= new Array();
  var dato2= new Array();

  dato1=arreglo[0].split("-").sort();
  dato2=arreglo[1].split("-").sort();
      for(var i=0; i<dato1.length; i++) {
        for(var j=0; j<dato2.length; j++){
          if(dato1[i]==dato2[j]){
            cont++
          }
      }
    }
    if(cont==dato1.length && cont==dato2.length){
      resp='true';
    }
    else{
      resp='false';
    }
    res.status(200).json(resp);
});



router.post('/test', function(req, res, next) {
var data = req.body
res.status(200).json(data);
});

router.get('/ejercicio4', function(req,res,next){
  var InputArray=req.query.params.split('*');
  for(var i=0;i<InputArray.length;i++)
    InputArray[i]=parseInt(InputArray[i]);
  var cont=0;
  for(var i=1;i<InputArray.length;i++)
    while(InputArray[i]<=InputArray[i-1]){
      InputArray[i]++;
      cont++;
    }

  res.status(200).json({
    result:cont
  });
  return;
});

module.exports = router;
