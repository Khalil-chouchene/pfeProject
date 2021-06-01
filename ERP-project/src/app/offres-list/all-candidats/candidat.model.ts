
export class Candidate {
  public nom: string ;
  public prenom: string;
  public titre?: string;
  public adress?: string ;
  public tel?: number;

  constructor(nom: string, prenom: string, titre: string, adress: string, tele: number){
    this.nom = nom ;
    this.prenom = prenom;
    this.tel = tele;
    this.adress = adress;
    this.titre = titre;
  }

}
