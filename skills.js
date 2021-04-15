var skillList = {
	'RangedExpertise': {title: 'Ranged Expertise', img: 'img/inquisitor/ranged_expertise.png', url: 'https://grimdawn.fandom.com/wiki/Ranged_Expertise_(Skill)'},
	'BurstingRound': {title: 'Bursting Round', img: 'img/inquisitor/bursting_round.png', url: 'https://grimdawn.fandom.com/wiki/Bursting_Round_(Skill)'},
	'WordofRenewal': {title: 'Word of Renewal', img: 'img/inquisitor/word_of_renewal.png', url: 'https://grimdawn.fandom.com/wiki/Word_of_Renewal_(Skill)'},
	'DeadlyAim': {title: 'Deadly Aim', img: 'img/inquisitor/deadly_aim.png', url: 'https://grimdawn.fandom.com/wiki/Deadly_Aim_(Skill)'},
	'ChillingRounds': {title: 'Chilling Rounds', img: 'img/inquisitor/chilling_rounds.png', url: 'https://grimdawn.fandom.com/wiki/Chilling_Rounds_(Skill)'},
	'InquisitorSeal': {title: 'Inquisitor Seal', img: 'img/inquisitor/inquisitor_seal.png', url: 'https://grimdawn.fandom.com/wiki/Inquisitor_Seal_(Skill)'},
	'StormSpread': {title: 'Storm Spread', img: 'img/inquisitor/storm_spread.png', url: 'https://grimdawn.fandom.com/wiki/Storm_Spread_(Skill)'},
	'ArcaneEmpowerment': {title: 'Arcane Empowerment', img: 'img/inquisitor/arcane_empowerment.png', url: 'https://grimdawn.fandom.com/wiki/Arcane_Empowerment_(Skill)'},
	'NullField': {title: 'Null Field', img: 'img/inquisitor/null_field.png', url: 'https://grimdawn.fandom.com/wiki/Null_Field_(Skill)'},
	'SteelResolve': {title: 'Steel Resolve', img: 'img/inquisitor/steel_resolve.png', url: 'https://grimdawn.fandom.com/wiki/Steel_Resolve_(Skill)'},
	'RuneofKalistor': {title: 'Rune of Kalastor', img: 'img/inquisitor/rune_of_kalastor.png', url: 'https://grimdawn.fandom.com/wiki/Rune_of_Kalastor_(Skill)'},
	'Vigor': {title: 'Vigor', img: 'img/inquisitor/vigor.png', url: 'https://grimdawn.fandom.com/wiki/Vigor_(Skill)'},
	'Ignition': {title: 'Ignition', img: 'img/inquisitor/ignition.png', url: 'https://grimdawn.fandom.com/wiki/Ignition_(Skill)'},
	'AuraofCenture': {title: 'Aura of Censure', img: 'img/inquisitor/aura_of_censure.png', url: 'https://grimdawn.fandom.com/wiki/Aura_of_Censure_(Skill)'},

	'MarkoviansAdvantage': {title: 'Markovian’s Advantage', img: 'img/soldier/markovian_s_advantage.png', url: "https://grimdawn.fandom.com/wiki/Markovian's_Advantage_(Skill)"},
	'FieldCommand': {title: 'Field Command', img: 'img/soldier/field_command.png', url: 'https://grimdawn.fandom.com/wiki/Field_Command_(Skill)'},	
	'OleronsRage': {title: 'Oleron’s Rage', img: 'img/soldier/oleron_s_rage.png', url: "https://grimdawn.fandom.com/wiki/Oleron's_Rage_(Skill)"},
	'Cadence': {title: 'Cadence', img: 'img/soldier/cadence.png', url: 'https://grimdawn.fandom.com/wiki/Cadence_(Skill)'},
	'FightingSpirit': {title: 'Fighting Spirit', img: 'img/soldier/fighting_spirit.png', url: 'https://grimdawn.fandom.com/wiki/Fighting_Spirit_(Skill)'},
	'FightingForm': {title: 'Fighting Form', img: 'img/soldier/fighting_form.png', url: 'https://grimdawn.fandom.com/wiki/Fighting_Form_(Skill)'},
	'WarCry': {title: 'War Cry', img: 'img/soldier/war_cry.png', url: 'https://grimdawn.fandom.com/wiki/War_Cry_(Skill)'},
	'DecoratedSoldier': {title: 'Decorated Soldier', img: 'img/soldier/decorated_soldier.png', url: 'https://grimdawn.fandom.com/wiki/Decorated_Soldier_(Skill)'},
	'SquadTactics': {title: 'Squad Tactics', img: 'img/soldier/squad_tactics.png', url: 'https://grimdawn.fandom.com/wiki/Squad_Tactics_(Skill)'},
	'BreakMorale': {title: 'Break Morale', img: 'img/soldier/break_morale.png', url: 'https://grimdawn.fandom.com/wiki/Break_Morale_(Skill)'},
	'ScarsofBattle': {title: 'Scars of Battle', img: 'img/soldier/scars_of_battle.png', url: 'https://grimdawn.fandom.com/wiki/Scars_of_Battle_(Skill)'},
	'DeadlyMomentum': {title: 'Deadly Momentum', img: 'img/soldier/deadly_momentum.png', url: 'https://grimdawn.fandom.com/wiki/Deadly_Momentum_(Skill)'},

	'FireStrike': {title: 'Fire Strike', img: 'img/demolitionist/fire_strike.png', url: 'https://grimdawn.fandom.com/wiki/Fire_Strike_(Skill)'},
	'FlameTouched': {title: 'Flame Touched', img: 'img/demolitionist/flame_touched.png', url: 'https://grimdawn.fandom.com/wiki/Flame_Touched_(Skill)'},
	'BlackwaterCocktail': {title: 'Blackwater Cocktail', img: 'img/demolitionist/blackwater_cocktail.png', url: 'https://grimdawn.fandom.com/wiki/Blackwater_Cocktail_(Skill)'},
	'ExplosiveStrike': {title: 'Explosive Strike', img: 'img/demolitionist/explosive_strike.png', url: 'https://grimdawn.fandom.com/wiki/Explosive_Strike_(Skill)'},
	'HighPotency': {title: 'High Potency', img: 'img/demolitionist/high_potency.png', url: 'https://grimdawn.fandom.com/wiki/High_Potency_(Skill)'},
	'VindictiveFlame': {title: 'Vindictive Flame', img: 'img/demolitionist/vindictive_flame.png', url: 'https://grimdawn.fandom.com/wiki/Vindictive_Flame_(Skill)'},
	'SearingMight': {title: 'Searing Might', img: 'img/demolitionist/searing_might.png', url: 'https://grimdawn.fandom.com/wiki/Searing_Might_(Skill)'},
	'Grenado': {title: 'Grenado', img: 'img/demolitionist/grenado.png', url: 'https://grimdawn.fandom.com/wiki/Grenado_(Skill)'},
	'DemonFire': {title: 'Demon Fire', img: 'img/demolitionist/demon_fire.png', url: 'https://grimdawn.fandom.com/wiki/Demon_Fire_(Skill)'},
	'UlzuinsWrath': {title: "Ulzuin's Wrath", img: 'img/demolitionist/ulzuin_s_wrath.png', url: "https://grimdawn.fandom.com/wiki/Ulzuin's_Wrath_(Skill)"},
	'AgonizingFlames': {title: 'Agonizing Flames', img: 'img/demolitionist/agonizing_flames.png', url: 'https://grimdawn.fandom.com/wiki/Agonizing_Flames_(Skill)'},
	'ThermiteMine': {title: 'Thermite Mine', img: 'img/demolitionist/thermite_mine.png', url: 'https://grimdawn.fandom.com/wiki/Thermite_Mine_(Skill)'},
	'BlastShield': {title: 'Blast Shield', img: 'img/demolitionist/blast_shield.png', url: 'https://grimdawn.fandom.com/wiki/Blast_Shield_(Skill)'},
	'Flashbang': {title: 'Flashbang', img: 'img/demolitionist/flashbang.png', url: 'https://grimdawn.fandom.com/wiki/Flashbang_(Skill)'},
	'SearingLight': {title: 'Searing Light', img: 'img/demolitionist/searing_light.png', url: 'https://grimdawn.fandom.com/wiki/Searing_Light_(Skill)'},
	'Temper': {title: 'Temper', img: 'img/demolitionist/temper.png', url: 'https://grimdawn.fandom.com/wiki/Temper_(Skill)'},
	
	'BruteForce': {title: 'Brute Force', img: 'img/shaman/brute_force.png', url: 'https://grimdawn.fandom.com/wiki/Brute_Force_(Skill)'},
	'DevouringSwarm': {title: 'Devouring Swarm', img: 'img/shaman/devouring_swarm.png', url: 'https://grimdawn.fandom.com/wiki/Devouring_Swarm_(Skill)'},
	'MogdrogensPact': {title: 'Mogdrogen’s Pact', img: 'img/shaman/mogdrogen_s_pact.png', url: "https://grimdawn.fandom.com/wiki/Mogdrogen's_Pact_(Skill)"},
	'GraspingVines': {title: 'Grasping Vines', img: 'img/shaman/grasping_vines.png', url: 'https://grimdawn.fandom.com/wiki/Grasping_Vines_(Skill)'},
	'HeartoftheWild': {title: 'Heart of the Wild', img: 'img/shaman/heart_of_the_wild.png', url: 'https://grimdawn.fandom.com/wiki/Heart_of_the_Wild_(Skill)'},
	'OakSkin': {title: 'Oak Skin', img: 'img/shaman/oak_skin.png', url: 'https://grimdawn.fandom.com/wiki/Oak_Skin_(Skill)'},
	'EntanglingVines': {title: 'Entangling Vines', img: 'img/shaman/entangling_vines.png', url: 'https://grimdawn.fandom.com/wiki/Entangling_Vines_(Skill)'},
	'WendigoTotem': {title: 'Wendigo Totem', img: 'img/shaman/wendigo_totem.png', url: 'https://grimdawn.fandom.com/wiki/Wendigo_Totem_(Skill)'},
	'StormTotem': {title: 'Storm Totem ', img: 'img/shaman/storm_totem.png', url: 'https://grimdawn.fandom.com/wiki/Storm_Totem_(Skill)'},
	'CorruptedStorm': {title: 'Corrupted Storm', img: 'img/shaman/corrupted_storm.png', url: 'https://grimdawn.fandom.com/wiki/Corrupted_Storm_(Skill)'},
	'BloodPact': {title: 'Blood Pact', img: 'img/shaman/blood_pact.png', url: 'https://grimdawn.fandom.com/wiki/Blood_Pact_(Skill)'},
	'Savagery': {title: 'Savagery', img: 'img/shaman/savagery.png', url: 'https://grimdawn.fandom.com/wiki/Savagery_(Skill)'},
	'MightoftheBear': {title: 'Might of the Bear', img: 'img/shaman/might_of_the_bear.png', url: 'https://grimdawn.fandom.com/wiki/Might_of_the_Bear_(Skill)'},
	'FeralHunger': {title: 'Feral Hunger', img: 'img/shaman/feral_hunger.png', url: 'https://grimdawn.fandom.com/wiki/Feral_Hunger_(Skill)'},
	'TenacityoftheBoar': {title: 'Tenacity of the Boar', img: 'img/shaman/tenacity_of_the_boar.png', url: 'https://grimdawn.fandom.com/wiki/Tenacity_of_the_Boar_(Skill)'},
	'StormTouched': {title: 'Storm Touched', img: 'img/shaman/storm_touched.png', url: 'https://grimdawn.fandom.com/wiki/Storm_Touched_(Skill)'},
	
	'CurseofFrailty': {title: 'Curse of Frailty', img: 'img/occultist/curse_of_frailty.png', url: 'https://grimdawn.fandom.com/wiki/Curse_of_Frailty_(Skill)'},
	'BloodyPox': {title: 'Bloody Pox', img: 'img/occultist/bloody_pox.png', url: 'https://grimdawn.fandom.com/wiki/Bloody_Pox_(Skill)'},
	'SolaelsWitchfire': {title: 'Solael’s Witchfire', img: 'img/occultist/solael_s_witchfire.png', url: "https://grimdawn.fandom.com/wiki/Solael's_Witchfire_(Skill)"},
	'Vulnerability': {title: 'Vulnerability', img: 'img/occultist/vulnerability.png', url: 'https://grimdawn.fandom.com/wiki/Vulnerability_(Skill)'},
	'BloodofDreeg': {title: 'Blood of Dreeg', img: 'img/occultist/blood_of_dreeg.png', url: 'https://grimdawn.fandom.com/wiki/Blood_of_Dreeg_(Skill)'},
	'Wasting': {title: 'Wasting', img: 'img/occultist/wasting.png', url: 'https://grimdawn.fandom.com/wiki/Wasting_(Skill)'},
	'SecondRite': {title: 'Second Rite', img: 'img/occultist/second_rite.png', url: 'https://grimdawn.fandom.com/wiki/Second_Rite_(Skill)'},
	'AspectoftheGuardian': {title: 'Aspect of Guardian', img: 'img/occultist/aspect_of_guardian.png', url: 'https://grimdawn.fandom.com/wiki/Aspect_of_the_Guardian_(Skill)'},
	'Possession': {title: 'Possession', img: 'img/occultist/possession.png', url: 'https://grimdawn.fandom.com/wiki/Possession_(Skill)'},
	'Manipulation': {title: 'Manipulation', img: 'img/occultist/manipulation.png', url: 'https://grimdawn.fandom.com/wiki/Manipulation_(Skill)'},
	'SummonFamiliar': {title: 'Summon Familiar', img: 'img/occultist/summon_familiar.png', url: 'https://grimdawn.fandom.com/wiki/Summon_Familiar_(Skill)'},
	'SummonHellhound': {title: 'Summon Hellhound', img: 'img/occultist/summon_hellhound.png', url: 'https://grimdawn.fandom.com/wiki/Summon_Hellhound_(Skill)'},
	'StormSpirit': {title: 'Storm Spirit', img: 'img/occultist/storm_spirit.png', url: 'https://grimdawn.fandom.com/wiki/Storm_Spirit_(Skill)'},
	'Hellfire': {title: 'Hellfire', img: 'img/occultist/hellfire.png', url: 'https://grimdawn.fandom.com/wiki/Hellfire_(Skill)'},
	'BondsofBysmiel': {title: 'Bonds of Bysmiel', img: 'img/occultist/bonds_of_bysmiel.png', url: 'https://grimdawn.fandom.com/wiki/Bonds_of_Bysmiel_(Skill)'},
	
	'RaiseSkeletons': {title: 'Raise Skeletons', img: 'img/necromancer/raise_skeletons.png', url: 'https://grimdawn.fandom.com/wiki/Raise_Skeletons_(Skill)'},
	'SpectralBinding': {title: 'Spectral Binding', img: 'img/necromancer/spectral_binding.png', url: 'https://grimdawn.fandom.com/wiki/Spectral_Binding_(Skill)'},
	'UndeadLegion': {title: 'Undead Legion', img: 'img/necromancer/undead_legion.png', url: 'https://grimdawn.fandom.com/wiki/Undead_Legion_(Skill)'},
	'SummonBlightFiend': {title: 'Summon Blight Fiend', img: 'img/necromancer/summon_blight_fiend.png', url: 'https://grimdawn.fandom.com/wiki/Summon_Blight_Fiend_(Skill)'},
	'SpectralWrath': {title: 'Spectral Wrath', img: 'img/necromancer/spectral_wrath.png', url: 'https://grimdawn.fandom.com/wiki/Spectral_Wrath_(Skill)'},
	'WilloftheCrypt': {title: 'Will of the Crypt', img: 'img/necromancer/will_of_the_crypt.png', url: 'https://grimdawn.fandom.com/wiki/Will_of_the_Crypt_(Skill)'},
	'RottingFumes': {title: 'Rotting Fumes', img: 'img/necromancer/rotting_fumes.png', url: 'https://grimdawn.fandom.com/wiki/Rotting_Fumes_(Skill)'},
	'CalloftheGrave': {title: 'Call of the Grave', img: 'img/necromancer/call_of_the_grave.png', url: 'https://grimdawn.fandom.com/wiki/Call_of_the_Grave_(Skill)'},
	'BlightBurst': {title: 'Blight Burst', img: 'img/necromancer/blight_burst.png', url: 'https://grimdawn.fandom.com/wiki/Blight_Burst_(Skill)'},
	'MasterofDeath': {title: 'Master of Death', img: 'img/necromancer/master_of_death.png', url: 'https://grimdawn.fandom.com/wiki/Master_of_Death_(Skill)'},
};

var skillTriggerList = [].slice.call(document.querySelectorAll('skill'));
var skillList = skillTriggerList.map(function(skillTriggerEl) {
	var skillKey = skillTriggerEl.innerHTML.replace(/[^A-Za-z0-9]/g, '');
	var newItem = document.createElement('b');
	if (skillList.hasOwnProperty(skillKey)) {
		var skill = skillList[skillKey];
		newItem.innerHTML = '<a href="' + skill.url + '"><img src="' + skill.img + '" alt="' + skill.title + '" title="' + skill.title + '" /></a>';
	} else {
		newItem.innerHTML = 'Unknown skill ' + skillKey;
	}
	skillTriggerEl.parentNode.replaceChild(newItem, skillTriggerEl);
});