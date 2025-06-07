"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function PhishingService() {
  const servicios = [
    {
      nombre: "Phishing Básico",
      precio: "0.02 BTC",
      caracteristicas: [
        "1 página clonada",
        "Hosting incluido",
        "Certificado SSL",
        "Panel de control básico",
        "1 mes de servicio",
        "Soporte básico"
      ]
    },
    {
      nombre: "Phishing Avanzado",
      precio: "0.045 BTC",
      caracteristicas: [
        "3 páginas clonadas",
        "Hosting premium",
        "Certificado SSL EV",
        "Bypass de seguridad",
        "Panel de control avanzado",
        "3 meses de servicio",
        "Soporte prioritario"
      ]
    },
    {
      nombre: "Phishing Enterprise",
      precio: "0.09 BTC",
      caracteristicas: [
        "Páginas ilimitadas",
        "Hosting dedicado",
        "SSL Wildcard",
        "Bypass avanzado",
        "Panel personalizado",
        "6 meses de servicio",
        "Soporte VIP 24/7",
        "Informes detallados"
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
          <h1 className="text-4xl font-bold mb-4">Phishing Profesional</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Servicios de phishing de alta calidad con páginas clonadas indistinguibles de las originales.
            Infraestructura completa y bypass de seguridad incluidos.
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
                <li>• Servidores offshore anónimos</li>
                <li>• Certificados SSL válidos</li>
                <li>• Dominios similares</li>
                <li>• Panel de administración</li>
                <li>• Sistema anti-detección</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Características Avanzadas</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Clonación perfecta de sitios</li>
                <li>• Bypass de 2FA</li>
                <li>• Recolección de datos en tiempo real</li>
                <li>• Filtros de seguridad</li>
                <li>• Estadísticas detalladas</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-zinc-800 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Proceso del Servicio</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Fases de Implementación</h3>
              <ol className="text-gray-400 space-y-2 list-decimal pl-4">
                <li>Análisis del sitio objetivo</li>
                <li>Clonación y personalización</li>
                <li>Configuración de infraestructura</li>
                <li>Implementación de seguridad</li>
                <li>Pruebas y ajustes</li>
                <li>Despliegue y monitoreo</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué tan realistas son las páginas?</h3>
              <p className="text-gray-400">Nuestras páginas son copias exactas de los sitios originales, incluyendo todas las funcionalidades y diseño.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Cómo se entregan los datos?</h3>
              <p className="text-gray-400">Los datos se entregan en tiempo real a través del panel de control y también mediante notificaciones cifradas.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué medidas anti-detección incluyen?</h3>
              <p className="text-gray-400">Implementamos múltiples capas de seguridad, incluyendo bypass de WAF, filtros de bots y geolocalización.</p>
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
                <li>• Comunicación cifrada</li>
                <li>• Sin registros de actividad</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Pago</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Pago exclusivo en Bitcoin</li>
                <li>• Wallet única por servicio</li>
                <li>• Sistema de escrow disponible</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Comienza tu Campaña</h2>
          <p className="text-gray-400 mb-8">Contacta ahora para iniciar tu campaña de phishing profesional</p>
          <p className="text-blue-400 font-bold">dphack-profesional@proton.me</p>
        </div>
      </div>
    </main>
  );
}
