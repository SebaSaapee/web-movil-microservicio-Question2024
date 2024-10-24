

export class QuestionDTO {
    readonly nombre: string;
    readonly descripcion: string;
    readonly fotos: string[];
    readonly user_id: string;

    // Cuestionario
    readonly cuestionario: PreguntaDTO[];
}

export class PreguntaDTO {
    readonly pregunta: string; // El texto de la pregunta
    readonly tipo: 'abierta' | 'multiple' | 'escala'; // Tipo de la pregunta
    readonly opciones?: string[]; // Solo para preguntas de tipo 'multiple', contiene las opciones de respuesta
    readonly respuestaEscala?: number; // Solo para preguntas de tipo 'escala', valor entre 1 y 5
    readonly respuestaAbierta?: string; // Solo para preguntas de tipo 'abierta', una respuesta de texto
}


