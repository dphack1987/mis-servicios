"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CardingService() {
  const servicios = [
    {
      nombre: "Dumps Básicos",
      precio: "0.01 BTC",
      caracteristicas: [
        "Dumps Track 1/2",
        "CVV verificados",
        "Balance mínimo garantizado",
        "Reemplazo en caso de error",
        "Soporte básico"
      ]
    },
    {
      nombre: "Fullz Premium",
      precio: "0.025 BTC",
      caracteristicas: [
        "Información completa de titular",
        "SSN/DOB incluidos",
        "Datos bancarios verificados",
        "Alto balance garantizado",
        "Soporte prioritario",
        "Reemplazos ilimitados"
      ]
    },
    {
      nombre: "Paquete Empresarial",
      precio: "0.06 BTC",
      caracteristicas: [
        "Tarjetas corporativas",
        "Límites elevados",
        "Información empresarial completa",
        "Acceso a bases premium",
        "Soporte VIP 24/7",
        "Garantía extendida"
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
          <h1 className="text-4xl font-bold mb-4">Servicios de Carding</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Acceso a dumps y fullz verificados con altas tasas de éxito.
            Todos nuestros datos son testeados antes de la entrega.
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
          <h2 className="text-2xl font-bold mb-6">Información del Servicio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Proceso de Compra</h3>
              <ol className="text-gray-400 space-y-2 list-decimal pl-4">
                <li>Contacto inicial vía email cifrado</li>
                <li>Selección del paquete deseado</li>
                <li>Verificación de disponibilidad</li>
                <li>Pago en Bitcoin</li>
                <li>Entrega de datos cifrados</li>
                <li>Verificación y soporte</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Garantías</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Datos 100% verificados</li>
                <li>• Balance garantizado</li>
                <li>• Reemplazo gratuito</li>
                <li>• Soporte post-venta</li>
                <li>• Sistema de escrow disponible</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-zinc-800 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué información incluyen los dumps?</h3>
              <p className="text-gray-400">Los dumps incluyen toda la información de la banda magnética (Track 1/2) necesaria para la clonación física.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué es un Fullz?</h3>
              <p className="text-gray-400">Un Fullz incluye toda la información personal y financiera del titular: nombre, dirección, SSN, DOB, número de tarjeta, fecha de expiración, CVV, etc.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Ofrecen garantía?</h3>
              <p className="text-gray-400">Sí, todos nuestros productos tienen garantía de reemplazo en caso de error o invalidez.</p>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Medidas de Seguridad</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Comunicación Segura</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Email: dphack-profesional@proton.me</li>
                <li>• Comunicación cifrada</li>
                <li>• Sin registros de conversaciones</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Método de Pago</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Pago exclusivo en Bitcoin</li>
                <li>• Wallet única por transacción</li>
                <li>• Escrow disponible para grandes órdenes</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className="text-gray-400 mb-8">Contacta ahora para acceder a nuestros servicios premium de carding</p>
          <p className="text-blue-400 font-bold">dphack-profesional@proton.me</p>
        </div>
      </div>
    </main>
  );
}
