/* @basma création d'une class personne */
export class Personne {
    id: number;
    name: string;
    firstname: string;
    age:number;
    image:string;
    cin:number;
    job:string;

	constructor(id = 0, name = '' , firstname = '', age = 0 , image = '', cin = 1, job = '') {
        this.id = id;
        this.name = name;
        this.firstname = firstname;
        this.age = age;
        this.image = image;
        this.cin = cin;
        this.job = job;
	}

}





