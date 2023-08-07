export interface Script{
  id: number;
  name: string;
  scripts: Script[];
  execs: Exec[];
  fichiers: Fichier[];
  status: string;


}
export interface Exec{
  id: number;
  name: string;
}
export interface Fichier{
  id: number;
  name: string;
}
