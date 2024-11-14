export class QuestionDTO {
    readonly nombre: string;
    readonly descripcion: string;
    readonly fotos: string[];
    

    // Cuestionario
    readonly cuestionario: PreguntaDTO[];
}

export class PreguntaDTO {
    readonly numero: number; // Número de la pregunta
    readonly pregunta: string; // El texto de la pregunta
    readonly tipo: 'multiple'; // Solo permite preguntas de tipo 'multiple'
    readonly opciones: string[]; // Contiene las opciones de respuesta
}


