"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LanguageSelector } from "@/components/language-selector";
import { useTranslations } from "@/components/providers";
import { Service, ServiceKey } from "@/types/translations";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const { t } = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const servicios: Service[] = [
    {
      id: 1,
      key: "geotracker",
      verificado: true,
      destacado: true,
      ruta: "/servicios/geotracker",
      gradient: "from-red-500/20 to-purple-500/20"
    },
    {
      id: 2,
      key: "zenythos",
      verificado: true,
      destacado: true,
      ruta: "/servicios/zenythos",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 3,
      key: "veridia",
      verificado: true,
      destacado: true,
      ruta: "/servicios/veridia",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 4,
      key: "espionaje_social",
      verificado: true,
      destacado: true,
      ruta: "/servicios/espionaje-social",
      gradient: "from-pink-500/20 to-red-500/20"
    },
    {
      id: 5,
      key: "espionaje_corporativo",
      verificado: true,
      destacado: true,
      ruta: "/servicios/espionaje-corporativo",
      gradient: "from-violet-500/20 to-indigo-500/20"
    },
    {
      id: 6,
      key: "recuperacion_cuentas",
      verificado: true,
      destacado: true,
      ruta: "/servicios/recuperacion-cuentas",
      gradient: "from-amber-500/20 to-yellow-500/20"
    },
    {
      id: 7,
      key: "hacking",
      verificado: true,
      ruta: "/servicios/hacking-medida",
      gradient: "from-green-500/20 to-blue-500/20"
    },
    {
      id: 8,
      key: "ransomware",
      verificado: true,
      ruta: "/servicios/ransomware",
      gradient: "from-yellow-500/20 to-red-500/20"
    },
    {
      id: 9,
      key: "ddos",
      verificado: true,
      ruta: "/servicios/ddos",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      id: 10,
      key: "carding",
      verificado: true,
      ruta: "/servicios/carding",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: 11,
      key: "phishing",
      verificado: true,
      ruta: "/servicios/phishing",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 12,
      key: "data",
      verificado: true,
      ruta: "/servicios/datos-robados",
      gradient: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:dphack-profesional@proton.me?subject=Consulta Segura&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <LanguageSelector />
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10" />
        <div className="relative z-10 text-center px-4">
          <div className="mb-8 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25 animate-pulse"></div>
            <h1 className="relative text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
              {t.hero.title}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            {t.hero.subtitle}
          </p>
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg max-w-2xl mx-auto border border-red-500/20">
            <h2 className="text-xl font-semibold mb-4 text-red-400">{t.hero.criticalInfo.title}</h2>
            <ul className="text-gray-400 space-y-2 text-left">
              <li className="flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                {t.hero.criticalInfo.payments}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                {t.hero.criticalInfo.communication}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                {t.hero.criticalInfo.anonymity}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                {t.hero.criticalInfo.support}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Servicios Destacados */}
      <section className="py-20 px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-purple-500/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 relative text-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25"></div>
            <h2 className="relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
              {t.services.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio) => (
              <Link href={servicio.ruta} key={servicio.id}>
                <Card 
                  className={`group relative bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 p-6 hover:border-red-500/50 transition-all cursor-pointer overflow-hidden ${
                    servicio.destacado ? 'ring-2 ring-red-500/20' : ''
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${servicio.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
                        {t.services[servicio.key as ServiceKey].title}
                        {servicio.verificado && (
                          <svg 
                            className="w-5 h-5 text-red-500" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                          >
                            <path 
                              d="M9 12l2 2 4-4" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </h3>
                    </div>
                    <p className="text-gray-400">{t.services[servicio.key as ServiceKey].description}</p>
                    <div className="pt-4 border-t border-zinc-800/50">
                      <p className="text-red-400 font-medium">{t.services[servicio.key as ServiceKey].price}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Garantías */}
      <section className="py-20 px-8 bg-gradient-to-b from-black to-[#0a0a0a] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-purple-500/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 relative text-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25"></div>
            <h2 className="relative text-4xl font-bold">{t.whyUs.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors">
              <h3 className="text-2xl font-semibold mb-6 text-red-400">{t.whyUs.guarantees.title}</h3>
              <ul className="text-gray-400 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.guarantees.verified}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.guarantees.escrow}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.guarantees.refund}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.guarantees.references}
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900/30 backdrop-blur-sm p-8 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors">
              <h3 className="text-2xl font-semibold mb-6 text-red-400">{t.whyUs.security.title}</h3>
              <ul className="text-gray-400 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.security.encryption}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.security.noLogs}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.security.payment}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">►</span>
                  {t.whyUs.security.anonymity}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="py-20 px-8 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-red-500/5" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="mb-12 relative text-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25"></div>
            <h2 className="relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
              {t.contact.title}
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <Input
                  type="text"
                  placeholder={t.contact.form.name}
                  className="relative bg-black border-zinc-800 text-white placeholder:text-gray-500 focus:border-red-500/50"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>
            <div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <Input
                  type="email"
                  placeholder={t.contact.form.email}
                  className="relative bg-black border-zinc-800 text-white placeholder:text-gray-500 focus:border-red-500/50"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <Textarea
                  placeholder={t.contact.form.message}
                  className="relative bg-black border-zinc-800 text-white placeholder:text-gray-500 focus:border-red-500/50 min-h-[150px]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
            </div>
            <div className="text-center">
              <Button
                type="submit"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <span className="relative px-8 py-2 bg-black rounded-lg leading-none flex items-center">
                  {t.contact.form.submit}
                </span>
              </Button>
            </div>
          </form>
        </div>
      </section>

      <footer className="py-12 px-8 bg-[#0a0a0a] border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">{t.footer.rights}</p>
          <p className="text-red-500 mt-4 font-medium">{t.footer.email}</p>
        </div>
      </footer>
    </main>
  );
}
