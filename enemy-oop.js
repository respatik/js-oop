class enemy {
    constructor (name, speed, healthPoint, attackPoint, isDead){
        this.name = name;
        this.speed = speed;
        this.healthPoint = healthPoint;
        this.attackPoint = attackPoint;
        this.isDead = isDead;
    }
    // detail(){
    //     return `${this.name}`, `${this.healthPoint}`;
    // }
}

class pocong extends enemy {

    jump(){
        this.attackPoint += 100;
        return this.attackPoint;
    }

    superJump(){
        this.attackPoint += 1000;
        return this.attackPoint;
    }

}

let alpha = new pocong ("wild pocong", 100, 1000, 300, true);

console.log(alpha.jump());
console.log(alpha.superJump());

class zombie extends enemy {

    walking(){
        this.attackPoint += 10;
        return this.attackPoint;
    }

    running(){
        this.attackPoint += 500;
        return this.attackPoint;
    }

}

let beta = new zombie ("wild zombie", 50, 1000, 100, true);

console.log(beta.walking());
console.log(beta.running());
