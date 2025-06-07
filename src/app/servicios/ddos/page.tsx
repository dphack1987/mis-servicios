"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DDoSService() {
  const servicios = [
    {
      nombre: "Ataque Básico",
      precio: "0.015 BTC",
      caracteristicas: [
        "Hasta 50 Gbps de potencia",
        "24 horas de duración",
        "Layer 4 & 7",
        "Panel de control básico",
        "Soporte básico"
      ]
    },
    {
      nombre: "Ataque Avanzado",
      precio: "0.035 BTC",
      caracteristicas: [
        "Hasta 200 Gbps de potencia",
        "72 horas de duración",
        "Layer 4 & 7 avanzado",
        "Bypass de protecciones",
        "Panel de control completo",
        "Soporte prioritario"
      ]
    },
    {
      nombre: "Ataque Enterprise",
      precio: "0.08 BTC",
      caracteristicas: [
        "500+ Gbps de potencia",
        "1 semana de duración",
        "Layer 4 & 7 premium",
        "Bypass avanzado",
        "Panel personalizado",
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
          <h1 className="text-4xl font-bold mb-4">Servicios DDoS</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Ataques DDoS de alta potencia con infraestructura botnet distribuida.
            Capacidad para derribar cualquier objetivo con garantía de efectividad.
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
              <h3 className="text-xl font-semibold mb-4">Tipos de Ataques</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• UDP Flood</li>
                <li>• TCP SYN Flood</li>
                <li>• HTTP/HTTPS Flood</li>
                <li>• DNS Amplification</li>
                <li>• NTP Amplification</li>
                <li>• SSDP Reflection</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Características</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Botnet distribuida globalmente</li>
                <li>• IP rotativas</li>
                <li>• Bypass de protecciones</li>
                <li>• Panel de control en tiempo real</li>
                <li>• Estadísticas detalladas</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-zinc-800 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Proceso del Servicio</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Pasos</h3>
              <ol className="text-gray-400 space-y-2 list-decimal pl-4">
                <li>Contacto inicial y especificación del objetivo</li>
                <li>Análisis de viabilidad</li>
                <li>Selección del paquete</li>
                <li>Pago en Bitcoin</li>
                <li>Configuración del ataque</li>
                <li>Monitoreo y ajustes</li>
                <li>Informe de resultados</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué tan efectivos son los ataques?</h3>
              <p className="text-gray-400">Nuestros ataques tienen una tasa de éxito del 99% incluso contra objetivos protegidos por servicios anti-DDoS.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Pueden atacar cualquier objetivo?</h3>
              <p className="text-gray-400">Sí, nuestra infraestructura puede manejar cualquier tipo de objetivo, incluyendo sitios protegidos por Cloudflare y similares.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Ofrecen pruebas gratuitas?</h3>
              <p className="text-gray-400">Ofrecemos una demostración de 5 minutos para verificar la efectividad del servicio.</p>
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
          <h2 className="text-2xl font-bold mb-4">Inicia tu Ataque</h2>
          <p className="text-gray-400 mb-8">Contacta ahora para comenzar tu ataque DDoS</p>
          <p className="text-blue-400 font-bold">dphack-profesional@proton.me</p>
        </div>
      </div>
    </main>
  );
}
