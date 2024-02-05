

// declare a fireball bullet
const fireball = new FireBulletType
fireball.damage = 900
fireball.lifetime = 500
fireball.fragBullets = 10
fireball.fragBullet = Blocks.duo.ammoTypes.get(Items.silicon)




// Make alpha OP
UnitTypes.alpha.weapons.get(0).bullet = fireball
UnitTypes.alpha.health = 99999
UnitTypes.alpha.range = 200
UnitTypes.alpha.mineTier = 100
UnitTypes.alpha.itemCapacity = 99999
UnitTypes.alpha.mineSpeed = 999999
UnitTypes.alpha.buildSpeed = 999999

// Core upgrade
Blocks.coreShard.health = 99999
Blocks.coreShard.itemCapacity = 99999

//Duo & scatter
Blocks.duo.ammoTypes.get(Items.copper).damage = 999999
Blocks.duo.health = 999999
Blocks.scatter.targetGround = true
Blocks.scatter.health = 999999
Blocks.scatter.ammoTypes.get(Items.lead).collidesGround = true

// wol
Blocks.copperWall.health = 999999

//drill
Blocks.mechanicalDrill.health = 999999
Blocks.mechanicalDrill.drillTime = 1
Blocks.mechanicalDrill.tier = 100

//conveyor
Blocks.conveyor.speed = 999999
Blocks.conveyor.displayedSpeed = 999999
Blocks.conveyor.health = 666666

//other junk
Blocks.itemSource.buildVisibility = BuildVisibility.shown
Blocks.itemSource.buildVisibility = BuildVisibility.sandboxOnly = false
Blocks.stoneWall.destructible = true
Blocks.stoneWall.buildVisibility = BuildVisibility.shown
Blocks.stoneWall.buildVisibility = BuildVisibility.editorOnly = false
