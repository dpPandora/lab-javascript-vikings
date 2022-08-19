// Soldier
class Soldier {
    health;
    strength;
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
//==================================
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    name;
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
//==================================
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) return `${this.name} has died in act of combat`;
        else return `${this.name} has received ${damage} points of damage`;
    }
    battleCry () {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) return `A Saxon has died in combat`;
        else return `A Saxon has received ${damage} points of damage`;
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
//==================================
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
//==================================
    vikingAttack() {
        var result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack());
        if (result === `A Saxon has died in combat`) this.saxonArmy.shift();

        return result;
    }
    saxonAttack () {
        var result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack());
        if (result === `${this.vikingArmy[0].name} has died in act of combat`) this.vikingArmy.shift();

        return result;
    }
//==================================
    showStatus() {
        if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
        else if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";
        else return "Vikings and Saxons are still in the thick of battle.";
    }
}
