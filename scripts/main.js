let BT = true
//lightning dude
const zapzap = new LightningBulletType
zapzap.damage = 99999999
zapzap.range = 100

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
Blocks.conveyor.itemCapacity = 15
Blocks.conveyor.health = 666666

//other junk
Blocks.itemSource.buildVisibility = BuildVisibility.shown
Blocks.payloadSource.buildVisibility = BuildVisibility.shown
Blocks.liquidSource.buildVisibility = BuildVisibility.shown
Blocks.stoneWall.destructible = true
Blocks.stoneWall.buildVisibility = BuildVisibility.shown

//listen for the client load event
Events.on(ClientLoadEvent, () => {
  //get the script console fragment
  let scriptfrag = Vars.ui.scriptfrag;

  //check if the last command is "wut"
  if(scriptfrag.getLastCommand() == "wut"){
    //print "lol" to the console
    scriptfrag.addMessage("[accent]lol[]");
    //toggle the value of BT
    BT = !BT;
  }

  //do something based on the value of BT
  if(BT){
    UnitTypes.alpha.weapons.get(0).bullet = fireball
  }else{
    UnitTypes.alpha.weapons.get(0).bullet = zapzap
  }
});

