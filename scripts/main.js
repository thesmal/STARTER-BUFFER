// declare a fireball bullet
const fireball = new FireBulletType
fireball.damage = 900
fireball.lifetime = 500




// Make alpha OP
UnitTypes.alpha.weapons.get(0).bullet = fireball
UnitTypes.alpha.health = 99999
UnitTypes.alpha.range = 200
UnitTypes.alpha.mineTier = 100
UnitTypes.alpha.itemCapacity = 99999
UnitTypes.alpha.mineSpeed = 999999


Blocks.coreShard.health = 99999
Blocks.coreShard.itemCapacity = 99999

