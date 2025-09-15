import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Award, Clock } from "lucide-react";
const Partnership = () => {
  const benefits = [{
    icon: Shield,
    title: "Segurança Garantida",
    description: "Todas as operações são realizadas com a segurança do Banco do Brasil"
  }, {
    icon: Award,
    title: "Credibilidade",
    description: "Parceria oficial que garante confiança e transparência"
  }, {
    icon: Clock,
    title: "Agilidade",
    description: "Processos otimizados para aprovação mais rápida"
  }, {
    icon: CheckCircle,
    title: "Qualidade",
    description: "Atendimento especializado e personalizado"
  }];
  return <section className="py-20 bg-gradient-to-br from-bb-blue to-bb-navy">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Parceria com o{" "}
                <span className="text-secondary">Banco do Brasil</span>
              </h2>
              <p className="text-xl text-blue-100">
                Desde 2009, somos correspondente bancário autorizado, 
                oferecendo todos os produtos e serviços com a confiança 
                e segurança da maior instituição financeira do país.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Como Atuamos</h3>
              <p className="text-blue-100">
                Como correspondente autorizado do Banco do Brasil, intermediamos 
                a contratação de produtos financeiros, oferecendo atendimento 
                personalizado e especializado, sempre seguindo as diretrizes 
                e padrões de qualidade da instituição.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-4">Por que Escolher a ENEMULTCRED?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>6+ anos de experiência no mercado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Mais de 1.377.614 clientes satisfeitos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Atendimento personalizado e humanizado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Presença em todos estados brasileiros</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="grid gap-6">
            {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return <Card key={index} className="bg-white/10 border-white/20 text-white backdrop-blur-sm hover:bg-white/20 transition-all">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="bg-secondary/20 rounded-full p-3">
                      <IconComponent className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{benefit.title}</h4>
                      <p className="text-blue-100">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>;
          })}
            
            {/* CTA Card */}
            <Card className="bg-secondary/20 border-secondary/30 text-white backdrop-blur-sm">
              <CardContent className="text-center p-8 space-y-4">
                <h4 className="text-2xl font-bold">Pronto para Começar?</h4>
                <p className="text-blue-100">
                  Fale com nossos especialistas e descubra as melhores soluções para você
                </p>
                <Button variant="yellow" size="lg" onClick={() => window.open('https://wa.me/5571993068074', '_blank')}>
                  Falar com Especialista
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Partnership;