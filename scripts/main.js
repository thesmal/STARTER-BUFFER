// Declare a Fireball Bullet
const fireball = new FireBulletType
fireball.damage = 900
fireball.lifetime = 500
fireball.fragBullets = 10
fireball.fragBullet = Blocks.duo.ammoTypes.get(Items.silicon)

// Make Alpha OP
UnitTypes.alpha.weapons.get(0).bullet = fireball
UnitTypes.alpha.health = 99999
UnitTypes.alpha.range = 200
UnitTypes.alpha.mineTier = 100
UnitTypes.alpha.itemCapacity = 99999
UnitTypes.alpha.mineSpeed = 999999
UnitTypes.alpha.buildSpeed = 999999

// Make Evoke OP
UnitTypes.evoke.health = 99999
UnitTypes.evoke.range = 200
UnitTypes.evoke.mineTier = 100
UnitTypes.evoke.itemCapacity = 99999
UnitTypes.evoke.mineSpeed = 999999
UnitTypes.evoke.buildSpeed = 999999

// Core Upgrade
Blocks.coreShard.health = 99999
Blocks.coreShard.itemCapacity = 99999
Blocks.coreBastion.health = 99999
Blocks.coreBastion.itemCapacity = 99999

// Duo & Scatter
Blocks.duo.ammoTypes.get(Items.copper).damage = 999999
Blocks.duo.health = 999999
Blocks.scatter.targetGround = true
Blocks.scatter.health = 999999
Blocks.scatter.ammoTypes.get(Items.lead).collidesGround = true

// Walls
Blocks.copperWall.health = 999999
Blocks.berylliumWall.health = 6666

// Mechanical Drill
Blocks.mechanicalDrill.health = 999999
Blocks.mechanicalDrill.drillTime = 1
Blocks.mechanicalDrill.tier = 100

// Plasma Bore
Blocks.plasmaBore.health = 999999
Blocks.plasmaBore.drillTime = 1

// Impact Drill
Blocks.impactDrill.health = 999999
Blocks.impactDrill.drillTime = 1

// Cliff Crusher
Blocks.cliffCrusher.health = 999999
Blocks.cliffCrusher.drillTime = 1

// Conveyors
Blocks.conveyor.speed = 999999
Blocks.conveyor.displayedSpeed = 999999
Blocks.conveyor.itemCapacity = 15
Blocks.conveyor.health = 666666
Blocks.duct.itemCapacity = 666
Blocks.duct.health = 666666

// Silicon
Blocks.siliconArcFurnace.productionTime = 1

// CREATIVE MODE STUFFFFFF
Blocks.itemSource.buildVisibility = BuildVisibility.shown
Blocks.payloadSource.buildVisibility = BuildVisibility.shown
Blocks.liquidSource.buildVisibility = BuildVisibility.shown
