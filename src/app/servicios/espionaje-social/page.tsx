"use client"

import { Button } from "@/components/ui/button"

export default function EspionajeSocialPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
          Espionaje de Redes Sociales
        </h1>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-300">
            Servicio profesional de espionaje y monitoreo de redes sociales. Acceso completo a la información digital de cualquier objetivo.
          </p>

          <div className="grid gap-6 mt-8">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">Servicios Incluidos</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Acceso a mensajes privados y conversaciones</li>
                <li>• Monitoreo de actividad en tiempo real</li>
                <li>• Recuperación de mensajes eliminados</li>
                <li>• Acceso a fotos y videos privados</li>
                <li>• Rastreo de conexiones y contactos</li>
                <li>• Informes detallados de actividad</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">Plataformas Soportadas</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Instagram</li>
                <li>• Facebook</li>
                <li>• Twitter/X</li>
                <li>• TikTok</li>
                <li>• LinkedIn</li>
                <li>• Snapchat</li>
                <li>• WhatsApp</li>
                <li>• Telegram</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Button className="w-full bg-gradient-to-r from-red-500 to-purple-600 text-white py-6 text-lg hover:opacity-90">
              Contactar para más información
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
