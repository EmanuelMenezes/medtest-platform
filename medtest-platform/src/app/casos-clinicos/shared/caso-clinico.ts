export interface CameraPosition {
  x: number,
  y: number
}

export interface Dialogo {
  speechText: string,
  actorName: string,
  questions?: Question[],

}

export interface Question {
  questionId: number,
  colisor: string,
  responses: Response[]
}

export interface Response {
  text: string,
  isCorrect: boolean,
  nextQuestionId: number,
  response: string
}

export interface CasoClinico {
  nomePaciente: string,
  posicaoCamera: CameraPosition,
  descricao: string,
  anamnese: {
    colisor: string,
    dialogo: Dialogo[],
  }
  exameFisico: {
    colisor: string,
    dialogo: Dialogo[]
  },
  diagnostico: Dialogo

}


