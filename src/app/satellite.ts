export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		return this.type === 'Space Debris';
	
		}
		// let i = 0;
		// while (i< Satellite.length){
		// 	if (Satellite[i].type.includes("Space Debris")){
		// 		return true;
		// 		i++;
		// 	} else {
		// 		return false;
		// 		i++;
		// 	}
		// }
// 		for(let i = 0; i< Satellite.length; i++) {
// 			if (Satellite[i].type.includes("Space Debris")){
// 				return true;
// 			}  else {
// 				return false;
// 			}
		
//    }



}

// TODO 3a: fix isSpaceDebris check
