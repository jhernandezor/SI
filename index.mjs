export const handler = async (event) => {

   
    const horaActual = new Date().toLocaleTimeString('es-CO', { 
        timeZone: 'America/Bogota' 
    });

    const message = `¡Hola desde Lambda! La hora es: ${horaActual}`;

       const response = {
        statusCode: 200,
        body: JSON.stringify({ 
            message: message 
        }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

    return response;
};