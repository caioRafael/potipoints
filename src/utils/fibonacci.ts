export default function fibonacci(){
    var fibonacci: number[] = [];
    
    for (var i = 0; i <= 11; i++) {
      if (i < 1) {
        fibonacci.push(0)
      }else
      if (i < 2) {
        fibonacci.push(1);
      } else {
        var num1: number = fibonacci[i - 1];
        var num2: number = fibonacci[i - 2];
        var num3: number = fibonacci[i - 1] + fibonacci[i - 2];
    
        fibonacci.push(num3);
      }
    }

    let noRepeat = fibonacci.filter((el, i) => {
        return fibonacci.indexOf(el) === i;
    })

    return noRepeat
}

