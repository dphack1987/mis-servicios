export type ServiceKey = 'geotracker' | 'zenythos' | 'veridia' | 'hacking' | 'ransomware' | 'ddos' | 'carding' | 'phishing' | 'data' | 'espionaje_social' | 'espionaje_corporativo' | 'recuperacion_cuentas';

export type ServiceTranslation = {
  title: string;
  description: string;
  price: string;
};

export type Service = {
  id: number;
  key: ServiceKey;
  verificado: boolean;
  destacado?: boolean;
  ruta: string;
  gradient: string;
};

export type TranslationType = {
  hero: {
    title: string;
    subtitle: string;
    criticalInfo: {
      title: string;
      payments: string;
      communication: string;
      anonymity: string;
      support: string;
    };
  };
  services: {
    title: string;
    geotracker: ServiceTranslation;
    zenythos: ServiceTranslation;
    veridia: ServiceTranslation;
    hacking: ServiceTranslation;
    ransomware: ServiceTranslation;
    ddos: ServiceTranslation;
    carding: ServiceTranslation;
    phishing: ServiceTranslation;
    data: ServiceTranslation;
    espionaje_social: ServiceTranslation;
    espionaje_corporativo: ServiceTranslation;
    recuperacion_cuentas: ServiceTranslation;
  };
  whyUs: {
    title: string;
    guarantees: {
      title: string;
      verified: string;
      escrow: string;
      refund: string;
      references: string;
    };
    security: {
      title: string;
      encryption: string;
      noLogs: string;
      payment: string;
      anonymity: string;
    };
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    rights: string;
    email: string;
  };
};
