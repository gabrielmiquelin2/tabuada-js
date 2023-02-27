function tabuada (){
   let num = document.getElementById("txtn")
   let tab = document.getElementById("seltab")
    if(num.value.length == 0){
      window.alert("Dígite um número")
    }else{
      let n = Number(num.value)//convertendo em number
      let c = 1
      tab.innerHTML = ""//para não ficar varias tabuada acumulada no seletor
      while(c <= 10){
          let item = document.createElement("option")//cirei esse elemento option, que é como se eu tivesse criado no html
          item.text = `${n} x ${c} = ${n*c}`
          item.value = `tab${c}`
          tab.appendChild(item) //adcionei o elemento filho no caso o ITEM
          c++
      }
    }

}