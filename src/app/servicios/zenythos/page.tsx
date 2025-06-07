"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ZenythosService() {
  const planes = [
    {
      nombre: "Zenythos Standard",
      precio: "0.04 BTC",
      caracteristicas: [
        "Framework base",
        "20 módulos de explotación",
        "Actualizaciones mensuales",
        "Bypass básico de seguridad",
        "Panel de control estándar",
        "Soporte básico"
      ]
    },
    {
      nombre: "Zenythos Professional",
      precio: "0.08 BTC",
      caracteristicas: [
        "Framework completo",
        "50+ módulos de explotación",
        "Actualizaciones semanales",
        "Bypass avanzado de seguridad",
        "Zero-day exploits incluidos",
        "Panel de control avanzado",
        "Soporte prioritario 24/7",
        "Capacitación básica incluida"
      ]
    },
    {
      nombre: "Zenythos Enterprise",
      precio: "0.15 BTC",
      caracteristicas: [
        "Framework personalizado",
        "Módulos ilimitados",
        "Actualizaciones diarias",
        "Bypass militar de seguridad",
        "Zero-day exclusivos",
        "Panel personalizado",
        "Soporte VIP dedicado",
        "Capacitación completa",
        "Desarrollo de exploits a medida"
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
            Zenythos 2.0
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Framework de penetración y explotación automatizada de última generación.
            Potencia militar en tus manos.
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
              <h3 className="text-xl font-semibold mb-4">Módulos Principales</h3>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Exploits Zero-Day actualizados
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Sistema de evasión avanzado
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Módulos de persistencia
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Herramientas post-explotación
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Capacidades</h3>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Automatización de ataques
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Bypass de sistemas SIEM
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Explotación silenciosa
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Generación de informes
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-black/50 backdrop-blur-sm p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Características Avanzadas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">Explotación</h3>
              <ul className="text-gray-400 space-y-3">
                <li>• Exploits personalizados</li>
                <li>• Bypass de EDR/AV</li>
                <li>• Shellcodes polimórficos</li>
                <li>• Inyección de código avanzada</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">Post-Explotación</h3>
              <ul className="text-gray-400 space-y-3">
                <li>• Persistencia indetectable</li>
                <li>• Pivoting automático</li>
                <li>• Exfiltración sigilosa</li>
                <li>• Limpieza de logs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">Automatización</h3>
              <ul className="text-gray-400 space-y-3">
                <li>• Scripts personalizados</li>
                <li>• Cadenas de explotación</li>
                <li>• Reconocimiento automático</li>
                <li>• Reportes detallados</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/20 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-red-400">Proceso de Implementación</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Pasos</h3>
              <ol className="text-gray-400 space-y-3 list-decimal pl-4">
                <li>Evaluación de necesidades</li>
                <li>Selección de plan</li>
                <li>Pago en Bitcoin</li>
                <li>Configuración personalizada</li>
                <li>Entrega de accesos</li>
                <li>Capacitación (según plan)</li>
                <li>Soporte continuo</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Garantías</h3>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Actualizaciones continuas
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Soporte técnico especializado
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Garantía de funcionamiento
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Confidencialidad total
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Obtén Acceso Ahora</h2>
          <p className="text-gray-400 mb-8">Contacta para recibir una demo personalizada del framework</p>
          <p className="text-red-500 font-bold text-lg">dphack-profesional@proton.me</p>
        </div>
      </div>
    </main>
  );
}
