"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function RansomwareService() {
  const servicios = [
    {
      nombre: "Ransomware Básico",
      precio: "0.08 BTC",
      caracteristicas: [
        "Ransomware personalizado",
        "Panel de control básico",
        "Cifrado AES-256",
        "Soporte de implementación",
        "1 mes de infraestructura"
      ]
    },
    {
      nombre: "Ransomware Avanzado",
      precio: "0.15 BTC",
      caracteristicas: [
        "Ransomware personalizado avanzado",
        "Panel de control completo",
        "Cifrado híbrido AES-256 + RSA-4096",
        "Propagación automática",
        "Bypass de antivirus",
        "3 meses de infraestructura",
        "Soporte técnico 24/7"
      ]
    },
    {
      nombre: "Ransomware Empresarial",
      precio: "0.35 BTC",
      caracteristicas: [
        "Solución empresarial completa",
        "Panel de control premium",
        "Cifrado militar",
        "Propagación inteligente",
        "Evasión avanzada de seguridad",
        "6 meses de infraestructura",
        "Soporte VIP dedicado",
        "Personalización total"
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
          <h1 className="text-4xl font-bold mb-4">Ransomware as a Service</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Soluciones de ransomware personalizadas con infraestructura completa y soporte técnico.
            Máxima efectividad y discreción garantizada.
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
          <h2 className="text-2xl font-bold mb-6">Características Técnicas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Infraestructura</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Servidores anónimos distribuidos</li>
                <li>• Red TOR integrada</li>
                <li>• Sistema de pago automatizado</li>
                <li>• Panel de control seguro</li>
                <li>• Backup de claves de descifrado</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Características Avanzadas</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Cifrado de última generación</li>
                <li>• Bypass de sistemas de seguridad</li>
                <li>• Propagación inteligente</li>
                <li>• Persistencia avanzada</li>
                <li>• Limpieza de logs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-zinc-800 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Proceso de Implementación</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Fases del Servicio</h3>
              <ol className="text-gray-400 space-y-2 list-decimal pl-4">
                <li>Análisis de requerimientos</li>
                <li>Desarrollo personalizado</li>
                <li>Configuración de infraestructura</li>
                <li>Pruebas de efectividad</li>
                <li>Implementación</li>
                <li>Monitoreo y soporte</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué incluye la infraestructura?</h3>
              <p className="text-gray-400">Servidores C2, panel de control, sistema de pago automatizado y toda la infraestructura necesaria para la operación.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué tan seguro es el servicio?</h3>
              <p className="text-gray-400">Utilizamos las mejores prácticas de seguridad y anonimato. Toda la infraestructura está protegida y distribuida.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Ofrecen soporte técnico?</h3>
              <p className="text-gray-400">Sí, todos los paquetes incluyen soporte técnico. Los planes avanzados incluyen soporte 24/7.</p>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Medidas de Seguridad</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Comunicación</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Email: dphack-profesional@proton.me</li>
                <li>• Comunicación cifrada end-to-end</li>
                <li>• Sin logs ni registros</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Pago</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Pago exclusivo en Bitcoin</li>
                <li>• Wallet única por cliente</li>
                <li>• Sistema de escrow disponible</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Comienza Ahora</h2>
          <p className="text-gray-400 mb-8">Contacta para recibir una propuesta personalizada</p>
          <p className="text-blue-400 font-bold">dphack-profesional@proton.me</p>
        </div>
      </div>
    </main>
  );
}
