"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function VeridiaService() {
  const planes = [
    {
      nombre: "Veridia Basic",
      precio: "0.06 BTC",
      caracteristicas: [
        "Análisis psicológico básico",
        "Patrones de manipulación estándar",
        "Monitoreo emocional",
        "Reportes semanales",
        "Panel de control básico",
        "1 objetivo específico"
      ]
    },
    {
      nombre: "Veridia Advanced",
      precio: "0.12 BTC",
      caracteristicas: [
        "Análisis psicológico profundo",
        "Manipulación emocional avanzada",
        "Control subliminal",
        "Monitoreo en tiempo real",
        "Reportes diarios detallados",
        "Hasta 3 objetivos",
        "Panel de control avanzado",
        "Soporte prioritario"
      ]
    },
    {
      nombre: "Veridia Elite",
      precio: "0.25 BTC",
      caracteristicas: [
        "Perfil psicológico completo",
        "Manipulación personalizada",
        "Control mental avanzado",
        "Implantación de ideas",
        "Monitoreo neuronal",
        "Objetivos ilimitados",
        "Panel personalizado",
        "Soporte VIP 24/7",
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
            Veridia
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Plataforma avanzada de manipulación psicológica y control mental.
            Influencia subliminal con resultados garantizados.
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
          <h2 className="text-2xl font-bold mb-6 text-red-400">Tecnología Avanzada</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Capacidades</h3>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Análisis neuronal profundo
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Manipulación emocional precisa
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Control subliminal avanzado
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Implantación de pensamientos
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Características</h3>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Monitoreo en tiempo real
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Análisis predictivo
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Patrones personalizados
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Reportes detallados
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-black/50 backdrop-blur-sm p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Áreas de Aplicación</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">Control Individual</h3>
              <ul className="text-gray-400 space-y-3">
                <li>• Manipulación emocional</li>
                <li>• Control de comportamiento</li>
                <li>• Implantación de ideas</li>
                <li>• Modificación de creencias</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">Control Grupal</h3>
              <ul className="text-gray-400 space-y-3">
                <li>• Influencia masiva</li>
                <li>• Manipulación social</li>
                <li>• Control de opinión</li>
                <li>• Ingeniería social avanzada</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">Aplicaciones</h3>
              <ul className="text-gray-400 space-y-3">
                <li>• Control corporativo</li>
                <li>• Manipulación política</li>
                <li>• Influencia personal</li>
                <li>• Control institucional</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/20 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-red-400">Proceso de Implementación</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Metodología</h3>
              <ol className="text-gray-400 space-y-3 list-decimal pl-4">
                <li>Análisis del objetivo</li>
                <li>Perfil psicológico detallado</li>
                <li>Diseño de estrategia</li>
                <li>Implementación gradual</li>
                <li>Monitoreo continuo</li>
                <li>Ajustes en tiempo real</li>
                <li>Evaluación de resultados</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Garantías</h3>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Resultados garantizados
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Discreción absoluta
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  Soporte continuo
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
          <h2 className="text-2xl font-bold mb-4">Inicia el Control Mental</h2>
          <p className="text-gray-400 mb-8">Contacta para una consulta personalizada sobre tu caso</p>
          <p className="text-red-500 font-bold text-lg">dphack-profesional@proton.me</p>
        </div>
      </div>
    </main>
  );
}
