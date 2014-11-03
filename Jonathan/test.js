var warn = '\nResponde UNICAMENTE con "si" o "no"';
var a = prompt('Estás pensando es un animal grande?' + warn).toLowerCase();

if (a == 'si')
{
  a = prompt('Camina en 2 patas?' + warn).toLowerCase();
  
  if (a == 'si')
  {
    a = prompt('Es un Ave?' + warn).toLowerCase();
    
    if (a == 'si')
    {
      alert('Es una Avestruz!');
    }
    else
    {
      alert('Es un Canguro!');
    }
  }
  else
  {
    a = prompt('Tiene Cuernos?' + warn).toLowerCase();
    
    if (a == 'si')
    {
      a = prompt('Vive en el Agua?' + warn).toLowerCase();
      if (a == 'si')
      {
        alert('Es un hipopótamo!');
      }
      else
      {
        alert('Es un Elefante!');
      }
    }
    else
    {
      a = prompt('Es de color negro?' + warn).toLowerCase();
      if (a == 'si')
      {
        alert('Es un Puma!');
      }
      else
      {
        alert('Es un Leon!');
      }
    }
  }
}

else

{
  a = prompt('Es doméstico?' + warn).toLowerCase();
  if (a == 'si')
  {
    a = prompt('Te ama y piensa que eres un HACK?' + warn).toLowerCase();
    if (a == 'si')
    {
      alert('Es un Perro!');
    }
    else
    {
      alert('De seguro es un gato -_-');
    }
  }
  else
  {
    a = prompt('El humano viene de la evolucion del mismo?' + warn).toLowerCase();
    if (a == 'si')
    {
      alert('Es un mono!');
    }
    else
    {
      a = prompt('Es un ave?' + warn).toLowerCase();
      if (a == 'si')
      {
        a = prompt('Puede Volar?' + warn).toLowerCase();
        if (a == 'si')
        {
          a = prompt('Es nocturno?' + warn).toLowerCase();
          if (a == 'si')
          {
            alert('Es un buho!');
          }
          else
          {
            a = prompt('Es griz?' + warn).toLowerCase();
            if (a == 'si')
            {
              alert('Es una paloma!');
            }
            else
            {
              alert('Es un ave cualquiera!');
            }
          }
        }
        else
        {
          alert('Es un pinguino!');
        }
      }
      else
      {
        alert('No se que es!');
      }
    }
  }
}
