class enemy {
    constructor (name, speed, healthPoint, attackPoint, isDead){
        this.name = name;
        this.speed = speed;
        this.healthPoint = healthPoint;
        this.attackPoint = attackPoint;
        this.isDead = isDead;
    }
    detail(){
        return `${this.name}`, `${this.healthPoint}`;
    }
}

class pocong extends enemy {
    constructor(attackPoint){
        super(attackPoint)
    }

    jump(){
        this.attackPoint += 100;
        return this.attackPoint;
    }

    superJump(){
        this.attackPoint += 1000;
        return this.attackPoint;
    }

}

let alpha = new pocong (100);

console.log(alpha.jump());
console.log(alpha.superJump());

class zombie extends enemy {
    constructor(attackPoint){
        super(attackPoint)
    }

    walking(){
        this.attackPoint += 10;
        return this.attackPoint;
    }

    running(){
        this.attackPoint += 500;
        return this.attackPoint;
    }

}

let beta = new zombie (100);

console.log(beta.walking());
console.log(beta.running());
