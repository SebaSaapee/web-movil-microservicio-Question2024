import * as mongoose from 'mongoose';

// Esquema para las preguntas dentro de un cuestionario
export const PreguntaSchema = new mongoose.Schema(
    {
        pregunta: { type: String, required: true },
        tipo: { type: String, enum: ['abierta', 'multiple', 'escala'], required: true },
        opciones: [{ type: String }], // Opciones solo para preguntas de tipo 'multiple'
        respuestaEscala: { type: Number, min: 1, max: 5 }, // Solo para preguntas de tipo 'escala'
        respuestaAbierta: { type: String }, // Solo para preguntas de tipo 'abierta'
    },
    { _id: false } // No se necesita un _id separado para cada pregunta
);

// Esquema principal para los cuestionarios
export const QuestionSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: true },
        descripcion: { type: String, required: true },
       
       
        fotos: [{ type: String }],
       
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Referencia al modelo User
      
        cuestionario: [PreguntaSchema], // Array de preguntas
    },
    { timestamps: true } // Añade createdAt y updatedAt
);

// Índice único para el nombre del cuestionario
QuestionSchema.index({ nombre: 1 }, { unique: true });