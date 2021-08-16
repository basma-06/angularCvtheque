/* @basma création d'une class movie */
export class Movie {
    id: number;
    titre: string;
    categorie: string;
    description:string;
    image:string;
    created_at:Date;
    updated_at:Date;
    deleted_at:Date;

	constructor(id = 0, titre = '' , categorie = '', description = '' , image = '', created_at = Date, updated_at = Date, deleted_at = Date) {
        this.id = id;
        this.titre = titre;
        this.categorie = categorie;
        this.description = description;
        this.image = image;
        this.created_at = new Date;
        this.updated_at = new Date;
        this.deleted_at = new Date;
	}

}





