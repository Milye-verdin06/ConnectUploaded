export class Usuario{

  constructor(
    public mail: string,
    public password: string,
    public idUsuario: number,
    public nombre?: string,
    public imagen?: string,
    public google?: boolean,
    public activo?: boolean,
    public nativo?: boolean
  ){}
}
