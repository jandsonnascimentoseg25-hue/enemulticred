import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award } from "lucide-react";
const Hero = () => {
  return <section id="home" className="bg-gradient-to-br from-bb-blue via-accent to-bb-navy min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Seu Parceiro em{" "}
                <span className="text-secondary">Soluções Financeiras</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">Correspondente oficial do Banco do Brasil desde 2019</p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">1.377.614</div>
                <div className="text-blue-100">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">6+</div>
                <div className="text-blue-100">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">TODOS</div>
                <div className="text-blue-100">Estados Atendidos</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="yellow" size="lg" className="text-lg px-8" onClick={() => window.open('https://wa.me/5571993068074', '_blank')}>
                Simule Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary" onClick={() => document.getElementById('sobre')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Conheça Nossa História
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-8">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-secondary" />
                <span className="text-blue-100">Seguro e Confiável</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-secondary" />
                <span className="text-blue-100">Parceiro Oficial BB</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center">
                  <img src="/lovable-uploads/13a8f5ea-dde2-47eb-ad6a-4996ee41d3ba.png" alt="ENEMULTCRED" className="h-12 w-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Atendimento Personalizado
                </h3>
                <p className="text-blue-100">
                  Oferecemos um atendimento personalizado com foco na real necessidade de cada cliente.
                </p>
                <div className="flex justify-center">
                  <Button variant="cta" onClick={() => window.open('https://wa.me/5571993068074', '_blank')}>
                    Fale com um Especialista
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;