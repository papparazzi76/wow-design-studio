import { Check, Star, Globe, ShoppingCart, Zap, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Web Básica",
      subtitle: "Presencia Online",
      icon: Globe,
      price: "GRATIS",
      period: "primer año",
      maintenance: "290 €/año",
      originalPrice: null,
      popular: false,
      features: [
        "Hasta 5 secciones (Inicio, Quiénes somos, Servicios, Galería, Contacto)",
        "Diseño moderno basado en plantilla adaptable (responsive)",
        "Formulario de contacto + Google Maps",
        "Integración básica con redes sociales",
        "Optimizada para móviles y buscadores",
        "Hosting, dominio .com o .es incluido",
        "Copias de seguridad automáticas",
        "Actualizaciones técnicas y soporte",
        "Pequeños cambios puntuales (textos, imágenes)"
      ],
      gradient: "from-primary/20 to-secondary/20",
      borderGradient: "from-primary to-secondary"
    },
    {
      name: "Web Profesional", 
      subtitle: "Negocio en Marcha",
      icon: Star,
      price: "450 €",
      period: "primer año",
      maintenance: "390 €/año",
      originalPrice: "o gratis con contrato de 24 meses",
      popular: true,
      features: [
        "Todo lo incluido en la Web Básica",
        "Hasta 10 páginas de contenido",
        "Diseño visual personalizado (colores, tipografías, estructura)",
        "Mapa de calor, formularios avanzados",
        "Calendario de reservas (opcional)",
        "Asesoramiento en redacción de contenidos",
        "SEO inicial incluido",
        "Soporte prioritario"
      ],
      gradient: "from-accent/30 to-primary/30",
      borderGradient: "from-accent to-primary"
    },
    {
      name: "Web con Tienda Online",
      subtitle: "Venta Directa", 
      icon: ShoppingCart,
      price: "desde 890 €",
      period: "primer año",
      maintenance: "490 €/año",
      originalPrice: "según complejidad",
      popular: false,
      features: [
        "Hasta 50 productos (ampliable)",
        "Pasarela de pago (Stripe, PayPal)",
        "Integración con WhatsApp, RRSS y Google Shopping",
        "Automatización básica de pedidos y envíos",
        "Formación básica en gestión de tienda",
        "Panel de administración completo",
        "Gestión de inventario",
        "Reportes de ventas"
      ],
      gradient: "from-secondary/20 to-accent/20",
      borderGradient: "from-secondary to-accent"
    }
  ];

  const additionalServices = [
    { name: "SEO local inicial", price: "desde 90 €" },
    { name: "Redacción de contenidos optimizados", price: "desde 50 €/página" },
    { name: "Fotografía profesional o de producto", price: "consultar" },
    { name: "Creación de perfiles Google Business / RRSS", price: "60 €" },
    { name: "Integración con herramientas de IA", price: "consultar" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground font-medium">Planes y Precios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Elige tu{" "}
            <span className="gradient-text">Presencia Digital</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desde una presencia básica hasta una tienda online completa. 
            Todos nuestros planes incluyen hosting, dominio y soporte técnico.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative group ${
                  plan.popular ? 'scale-105 lg:scale-110' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-accent to-accent-glow px-6 py-2 rounded-full text-accent-foreground font-bold text-sm shadow-lg">
                      ⭐ MÁS POPULAR
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`
                  relative h-full p-8 rounded-2xl border transition-all duration-500
                  ${plan.popular 
                    ? 'border-accent/50 bg-gradient-to-br from-accent/5 to-primary/5 glow-card' 
                    : 'border-border bg-gradient-to-br from-card/50 to-background/50 hover:border-primary/30'
                  }
                  group-hover:scale-105 group-hover:glow-primary
                  backdrop-blur-sm
                `}>
                  
                  {/* Icon and Title */}
                  <div className="text-center mb-8">
                    <div className={`
                      inline-flex items-center justify-center w-16 h-16 rounded-full mb-4
                      bg-gradient-to-br ${plan.gradient}
                      border border-border/50
                    `}>
                      <IconComponent className="w-8 h-8 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground font-medium">"{plan.subtitle}"</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <p className="text-sm text-muted-foreground">{plan.originalPrice}</p>
                    )}
                    <p className="text-lg font-semibold text-foreground mt-2">
                      Mantenimiento: <span className="text-accent">{plan.maintenance}</span>
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`
                      w-full font-semibold py-6 text-lg transition-all duration-300
                      ${plan.popular 
                        ? 'bg-gradient-to-r from-accent to-accent-glow hover:from-accent-glow hover:to-accent text-accent-foreground shadow-lg hover:shadow-xl hover:scale-105' 
                        : 'bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow'
                      }
                    `}
                  >
                    Solicitar {plan.name}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-br from-card/30 to-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text-accent">Servicios Adicionales</span> (opcionales)
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/30">
                <span className="text-foreground font-medium">{service.name}</span>
                <span className="text-accent font-bold">{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Conditions */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm border border-border/50 rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold mb-6 text-center">
            ✅ <span className="gradient-text">Condiciones Especiales</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div className="space-y-3">
              <p>• Todos los planes incluyen certificado SSL, dominio, hosting y soporte</p>
              <p>• Renovación automática salvo aviso con 15 días de antelación</p>
            </div>
            <div className="space-y-3">
              <p>• Diseño web gratuito sujeto a permanencia mínima de 12 meses</p>
              <p>• Se entrega contrato firmado detallando condiciones</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-background/80 to-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">
            📅 <span className="gradient-text">Solicita tu web hoy</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Comienza a tener presencia profesional en internet sin coste inicial
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow px-8 py-6 text-lg font-semibold group"
              onClick={() => window.open('https://wa.me/611040204', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              WhatsApp: 611 040 204
            </Button>
            
            <Button 
              variant="outline"
              className="border-accent/50 hover:bg-accent/10 px-8 py-6 text-lg font-semibold group"
              onClick={() => window.open('mailto:mariscalimagen@gmail.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              mariscalimagen@gmail.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;