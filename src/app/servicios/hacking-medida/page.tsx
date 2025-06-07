"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HackingMedida() {
  const servicios = [
    {
      nombre: "Hacking Básico",
      precio: "0.03 BTC",
      caracteristicas: [
        "Acceso a cuentas sociales",
        "Bypass de autenticación básica",
        "Informe detallado",
        "1 objetivo específico"
      ]
    },
    {
      nombre: "Hacking Avanzado",
      precio: "0.08 BTC",
      caracteristicas: [
        "Acceso a sistemas complejos",
        "Bypass de autenticación 2FA",
        "Persistencia garantizada",
        "Múltiples objetivos",
        "Informe técnico completo"
      ]
    },
    {
      nombre: "Hacking Empresarial",
      precio: "0.25 BTC",
      caracteristicas: [
        "Penetración de redes corporativas",
        "Exfiltración de datos",
        "Persistencia avanzada",
        "Múltiples vectores de ataque",
        "Soporte técnico 24/7",
        "Informe ejecutivo detallado"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8">
          <Link href="/">
            <Button variant="link" className="text-gray-400 hover:text-white">
              ← Volver a Inicio
            </Button>
          </Link>
        </nav>

        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Hacking a Medida</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Servicios profesionales de hacking personalizado para objetivos específicos.
            Garantizamos discreción total y resultados verificables.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {servicios.map((servicio, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 p-6">
              <h3 className="text-xl font-bold mb-4">{servicio.nombre}</h3>
              <p className="text-blue-400 text-2xl font-bold mb-6">{servicio.precio}</p>
              <ul className="space-y-3 text-gray-400">
                {servicio.caracteristicas.map((caracteristica, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {caracteristica}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </section>

        <section className="bg-zinc-900 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Metodología de Trabajo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Proceso</h3>
              <ol className="text-gray-400 space-y-2 list-decimal pl-4">
                <li>Análisis inicial del objetivo</li>
                <li>Propuesta técnica detallada</li>
                <li>Acuerdo de términos y pago</li>
                <li>Ejecución del servicio</li>
                <li>Verificación y entrega de resultados</li>
                <li>Soporte post-servicio</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Garantías</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Éxito garantizado o reembolso</li>
                <li>• Discreción absoluta</li>
                <li>• Sin rastros detectables</li>
                <li>• Soporte técnico continuo</li>
                <li>• Informes detallados</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-zinc-800 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Cuánto tiempo toma el servicio?</h3>
              <p className="text-gray-400">El tiempo varía según la complejidad del objetivo, generalmente entre 24-72 horas para servicios básicos y 1-2 semanas para servicios avanzados.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué información necesitan?</h3>
              <p className="text-gray-400">Requerimos información básica del objetivo: URLs, nombres de usuario, correos electrónicos o cualquier otro dato relevante según el caso.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Es detectable el ataque?</h3>
              <p className="text-gray-400">Utilizamos técnicas avanzadas de evasión y ocultamiento. Nuestros métodos son indetectables para la mayoría de sistemas de seguridad.</p>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Medidas de Seguridad</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Comunicación</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Email cifrado: dphack-profesional@proton.me</li>
                <li>• Mensajería cifrada disponible</li>
                <li>• Sin registros de conversaciones</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Pago</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Solo Bitcoin</li>
                <li>• Wallet única por cliente</li>
                <li>• Sistema de escrow disponible</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Contacta Ahora</h2>
          <p className="text-gray-400 mb-8">Describe tu objetivo y recibirás una propuesta personalizada</p>
          <p className="text-blue-400 font-bold">dphack-profesional@proton.me</p>
        </div>
      </div>
    </main>
  );
}
