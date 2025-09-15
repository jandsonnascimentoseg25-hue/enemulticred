import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Globe, Brain, Headphones, Sparkles, CheckCircle } from "lucide-react";

const WorkWithUs = () => {
  const tools = [
    {
      icon: CheckCircle,
      text: "Listas de clientes segmentadas"
    },
    {
      icon: MessageSquare,
      text: "Disparo de e-mails e mensagens automatizados"
    },
    {
      icon: Globe,
      text: "Base de dados de toda a cidade de atuação"
    },
    {
      icon: Brain,
      text: "Sistema próprio para busca de clientes e análise de crédito"
    },
    {
      icon: Headphones,
      text: "Suporte de atendimento dedicado para te ajudar a alcançar seus objetivos"
    },
    {
      icon: Sparkles,
      text: "E muito mais!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-bb-blue to-bb-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trabalhe Conosco
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Seja um parceiro ENEMULTCRED e tenha acesso às melhores ferramentas 
            e suporte para potencializar seus resultados no mercado financeiro.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Ferramentas e Suporte para seu Dia a Dia:
              </h3>
              
              <div className="space-y-4">
                {tools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                      <IconComponent className="h-6 w-6 text-secondary flex-shrink-0" />
                      <span className="text-blue-100">{tool.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-4">Por que Ser Nosso Parceiro?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Comissões competitivas do mercado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Treinamento e capacitação contínua</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Suporte técnico e comercial dedicado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Crescimento profissional e pessoal</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-2xl">Junte-se à Nossa Equipe</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-blue-100">
                  Faça parte da equipe ENEMULTCRED e construa uma carreira 
                  sólida no mercado financeiro com todo o suporte necessário.
                </p>
                <Button 
                  variant="yellow" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/5571982031254?text=Ol%C3%A1!%20Tenho%20interesse%20em%20trabalhar%20na%20ENEMULTCRED.%20Gostaria%20de%20saber%20mais%20sobre%20as%20oportunidades%20dispon%C3%ADveis.', '_blank')}
                >
                  Quero Ser Parceiro
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-secondary/20 border-secondary/30 text-white backdrop-blur-sm">
              <CardContent className="text-center p-6 space-y-4">
                <Brain className="h-10 w-10 text-secondary mx-auto" />
                <h4 className="text-xl font-bold">Tecnologia de Ponta</h4>
                <p className="text-blue-100">
                  Utilize nossas ferramentas exclusivas para maximizar 
                  suas vendas e otimizar seu tempo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;