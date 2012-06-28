jQuery.fn.validaHora = function(o){
  var defaults = {
    full:false
  }
  var confs = $.extend(defaults,o);

  this.change(function(){
    hrs = (this.value.substring(0, 2));
    min = (this.value.substring(3, 5));
    seg = (this.value.substring(6, 8));

    if(confs.full){
      var reg = /^(0[1-9]|1[0-9]|2[0-3]):([012345][0-9]):([012345][0-9])$/;
    }else{
      var reg = /^(0[1-9]|1[0-9]|2[0-3]):([012345][0-9])$/;
    }

    if(!this.value.match(reg)){
      this.value='';
      alert('Hora informada é inválida');
      return false;
    }
    return true;
  });
};