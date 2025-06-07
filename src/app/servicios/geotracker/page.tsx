"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function GeoTrackerService() {
  const planes = [
    {
      nombre: "GeoTracker Basic",
      precio: "0.02 BTC",
      caracteristicas: [
        "Rastreo GPS en tiempo real",
        "Historial de ubicaciones 30 días",
        "Precisión de 10 metros",
        "Actualización cada 5 minutos",
        "Panel de control básico",
        "Soporte por email"
      ]
    },
    {
      nombre: "GeoTracker Pro",
      precio: "0.05 BTC",
      caracteristicas: [
        "Rastreo GPS & GSM en tiempo real",
        "Historial ilimitado",
        "Precisión de 3 metros",
        "Actualización en tiempo real",
        "Geofencing avanzado",
        "Modo sigiloso mejorado",
        "Panel de control premium",
        "Soporte prioritario 24/7"
      ]
    },
    {
      nombre: "GeoTracker Elite",
      precio: "0.12 BTC",
      caracteristicas: [
        "Rastreo GPS, GSM & WiFi",
        "Monitoreo de comunicaciones",
        "Precisión de 1 metro",
        "Actualización instantánea",
        "Control remoto total",
        "Modo fantasma indetectable",
        "Panel personalizado",
        "Soporte VIP dedicado",
        "Implementación profesional"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8">
          <Link href="/">
            <Button variant="link" className="text-red-400 hover:text-red-300">
              ← Volver a Inicio
            </Button>
          </Link>
        </nav>

        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
            GeoTracker Pro
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sistema avanzado de rastreo y monitoreo en tiempo real. 
            Localización precisa y seguimiento continuo con tecnología militar.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {planes.map((plan, index) => (
            <Card key={index} className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 p-6 hover:border-red-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-red-400">{plan.nombre}</h3>
              <p className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
                {plan.precio}
              </p>
              <ul className="space-y-3 text-gray-400">
                {plan.caracteristicas.map((caracteristica, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {caracteristica}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </section>

        <section className="bg-zinc-900/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/20 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-red-400">Características Técnicas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Tecnología Avanzada</h3>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Triangulación multi-señal (GPS, GSM, WiFi)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Algoritmos predictivos de movimiento
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Sistema anti-detección avanzado
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Encriptación militar de datos
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Funcionalidades</h3>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Monitoreo en tiempo real 24/7
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Alertas y notificaciones instantáneas
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Control remoto del dispositivo
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Reportes detallados automatizados
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-black/50 backdrop-blur-sm p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-400">¿Cómo se instala?</h3>
              <p className="text-gray-400">El sistema puede ser instalado remotamente o físicamente según el plan elegido. Ofrecemos servicio de instalación profesional para garantizar máxima efectividad.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-400">¿Es detectable?</h3>
              <p className="text-gray-400">Nuestro sistema utiliza tecnología militar de ocultamiento, haciéndolo prácticamente indetectable por métodos convencionales.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-400">¿Qué alcance tiene?</h3>
              <p className="text-gray-400">El sistema funciona globalmente gracias a nuestra red de servidores distribuidos y tecnología multi-señal.</p>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/20 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-red-400">Proceso de Implementación</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Pasos</h3>
              <ol className="text-gray-400 space-y-3 list-decimal pl-4">
                <li>Contacto inicial y evaluación</li>
                <li>Selección del plan</li>
                <li>Pago en Bitcoin</li>
                <li>Configuración del sistema</li>
                <li>Instalación/Implementación</li>
                <li>Verificación y pruebas</li>
                <li>Entrega de accesos</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Garantías</h3>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Efectividad garantizada
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Soporte técnico continuo
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Actualizaciones incluidas
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Confidencialidad absoluta
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Contacta Ahora</h2>
          <p className="text-gray-400 mb-8">Obtén acceso al sistema de rastreo más avanzado del mercado</p>
          <p className="text-red-500 font-bold text-lg">dphack-profesional@proton.me</p>
        </div>
      </div>
    </main>
  );
}
