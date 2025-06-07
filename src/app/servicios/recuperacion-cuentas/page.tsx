"use client"

import { Button } from "@/components/ui/button"

export default function RecuperacionCuentasPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
          Recuperación de Cuentas
        </h1>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-300">
            Servicio profesional de recuperación de cuentas bloqueadas o comprometidas. Especialistas en recuperación de acceso a redes sociales y wallets de criptomonedas.
          </p>

          <div className="grid gap-6 mt-8">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">Recuperación de Redes Sociales</h3>
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

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">Recuperación de Wallets Blockchain</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Bitcoin</li>
                <li>• Ethereum</li>
                <li>• Binance Smart Chain</li>
                <li>• Solana</li>
                <li>• Polygon</li>
                <li>• Wallets bloqueadas</li>
                <li>• Recuperación de claves privadas</li>
                <li>• Acceso a smart contracts</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">Características del Servicio</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Proceso 100% discreto</li>
                <li>• Tiempo de recuperación rápido</li>
                <li>• Sin rastros detectables</li>
                <li>• Soporte 24/7</li>
                <li>• Garantía de éxito</li>
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
