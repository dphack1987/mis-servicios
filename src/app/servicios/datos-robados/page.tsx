"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DatosRobados() {
  const paquetes = [
    {
      nombre: "Paquete Básico",
      precio: "0.005 BTC",
      caracteristicas: [
        "Bases de datos de emails filtrados",
        "Credenciales básicas",
        "Actualización mensual",
        "Soporte básico"
      ]
    },
    {
      nombre: "Paquete Premium",
      precio: "0.015 BTC",
      caracteristicas: [
        "Datos financieros completos",
        "Información de tarjetas de crédito",
        "Credenciales premium",
        "Actualización semanal",
        "Soporte prioritario 24/7"
      ]
    },
    {
      nombre: "Paquete Corporativo",
      precio: "0.05 BTC",
      caracteristicas: [
        "Datos corporativos sensibles",
        "Información bancaria empresarial",
        "Credenciales de alto nivel",
        "Actualización diaria",
        "Soporte VIP dedicado"
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
          <h1 className="text-4xl font-bold mb-4">Venta de Datos Robados</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Accede a bases de datos exclusivas con información sensible y verificada. 
            Todos nuestros datos son actualizados regularmente y verificados antes de su entrega.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {paquetes.map((paquete, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 p-6">
              <h3 className="text-xl font-bold mb-4">{paquete.nombre}</h3>
              <p className="text-blue-400 text-2xl font-bold mb-6">{paquete.precio}</p>
              <ul className="space-y-3 text-gray-400">
                {paquete.caracteristicas.map((caracteristica, idx) => (
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
                <li>Contacta vía email: dphack-profesional@proton.me</li>
                <li>Especifica el paquete deseado</li>
                <li>Recibirás la wallet de Bitcoin para el pago</li>
                <li>Envía comprobante de pago</li>
                <li>Recibirás los datos en formato comprimido y cifrado</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Garantías</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Datos 100% verificados</li>
                <li>• Actualizaciones según el paquete</li>
                <li>• Soporte post-venta</li>
                <li>• Reemplazo en caso de datos inválidos</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-zinc-800 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Los datos están actualizados?</h3>
              <p className="text-gray-400">Sí, todos nuestros datos se actualizan según la frecuencia especificada en cada paquete.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué formato tienen los datos?</h3>
              <p className="text-gray-400">Los datos se entregan en formato CSV o SQL, según preferencia del cliente.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Ofrecen muestras?</h3>
              <p className="text-gray-400">Sí, podemos proporcionar una muestra pequeña para verificar la calidad de los datos.</p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className="text-gray-400 mb-8">Contacta ahora y obtén acceso a datos exclusivos</p>
          <p className="text-blue-400 font-bold">dphack-profesional@proton.me</p>
        </div>
      </div>
    </main>
  );
}
