import { mailOptions, transporter } from "@/config/nodemailer";

const htmlTemplate = (data) => {
    return `
    <div style="border: 1px solid #ccc; padding: 16px;">
        <h3>Has recibido un agendamiento desde tu página web</h3>
        <p><b>Email: </b>${data.email}</p>
        <p><b>Teléfono: </b>${data.phone}</p>
        <p><b>Contactar por: </b>${data.option === 'whatsapp' ? 'Whatsapp' : 'Video Llamada'}</p>
    </div>`
} 
    

export const POST = async (request) => {
    if (request.method !== "POST") {
        return new Response("Bad Request", {
            status: 400,
            headers: { 'Content-Type': 'text/plain' },
        });
    } else {
        const data = await request.json();
        console.log(data);

        try {
            // await transporter.sendMail({
            //     ...mailOptions,
            //     subject: "Consulta agendada Web",
            //     text: "www.romerovaldes.cl",
            //     html: htmlTemplate(data)
            // })
        } catch (error) {
            console.log(error);
        }

        return new Response(JSON.stringify({ message: '¡Datos recibidos correctamente!' }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
};