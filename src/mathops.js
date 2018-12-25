
class MathOps {
  constructor(){
    this.name="ngaco";
  }

  penjumlahan(a, b){
    var c = a+b
    console.log(a+"+"+b+" = "+c)
  }

  nama_mu(user_name){
    this.name=user_name;
  }

  sayHi(){
    console.log("ngaco bin ajaib "+this.name);
  }
};


module.exports = MathOps;
