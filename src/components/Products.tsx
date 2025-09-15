import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Banknote, Users, PiggyBank, Building, Shield, Gem, Smile } from "lucide-react";
const Products = () => {
  const products = [{
    icon: CreditCard,
    title: "Empréstimo Consignado",
    description: "Crédito com desconto em folha, ideal para INSS, servidores e conveniados.",
    features: ["Menor taxa de juros", "Desconto em folha", "Aprovação rápida"],
    color: "primary"
  }, {
    icon: Banknote,
    title: "Empréstimo Pessoal",
    description: "Dinheiro direto na conta, sem desconto em folha.",
    features: ["Sem garantia", "Liberação rápida", "Condições flexíveis"],
    color: "accent"
  }, {
    icon: Users,
    title: "Empréstimo para Trabalhador",
    description: "Crédito para CLT com condições especiais.",
    features: ["Para CLT", "Taxas competitivas", "Processo simplificado"],
    color: "secondary"
  }, {
    icon: PiggyBank,
    title: "Consórcio",
    description: "Compra programada de bens sem juros.",
    features: ["Sem juros", "Contemplação garantida", "Diversos segmentos"],
    color: "primary"
  }, {
    icon: Building,
    title: "Abertura de Conta",
    description: "Conta digital ou tradicional com acesso a serviços bancários.",
    features: ["Conta digital", "Sem tarifas", "Cartão de crédito"],
    color: "accent"
  }, {
    icon: Shield,
    title: "Seguros",
    description: "Proteção para vida, bens e preservação do seu patrimônio.",
    features: ["Proteção completa", "Coberturas variadas", "Tranquilidade"],
    color: "secondary"
  }, {
    icon: Gem,
    title: "Ourocap",
    description: "Capitalização com sorteios e resgate final.",
    features: ["Sorteios mensais", "Resgate garantido", "Investimento seguro"],
    color: "primary"
  }, {
    icon: Smile,
    title: "Plano Odontológico",
    description: "Atendimento acessível e com boa cobertura.",
    features: ["Rede credenciada", "Sem carência", "Preço acessível"],
    color: "accent"
  }];
  const publicoAtendido = ["Servidores federais, estaduais e municipais", "Forças armadas", "Aposentados e pensionistas do INSS", "Funcionários de empresas privadas conveniadas com o BB"];
  return <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Produtos e Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Contamos com soluções completas em produtos e serviços para atender com eficiência os clientes do Banco do Brasil.

        </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => {
          const IconComponent = product.icon;
          const isHighlighted = index < 2; // Destaca os dois primeiros produtos

          return <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${isHighlighted ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto rounded-full p-4 w-16 h-16 flex items-center justify-center ${product.color === 'primary' ? 'bg-primary/10' : product.color === 'accent' ? 'bg-accent/10' : 'bg-secondary/10'}`}>
                    <IconComponent className={`h-8 w-8 ${product.color === 'primary' ? 'text-primary' : product.color === 'accent' ? 'text-accent' : 'text-bb-navy'}`} />
                  </div>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => <li key={idx} className="text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>)}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full mt-4" onClick={() => window.open('https://wa.me/5571993068074', '_blank')}>
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Public Target Section */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Público Atendido (Consignado)
              </h3>
              <ul className="space-y-4">
                {publicoAtendido.map((item, index) => <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>)}
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Simule seu Crédito</h4>
                <p className="mb-6 text-blue-100">
                  Descubra as melhores condições para o seu perfil
                </p>
                <Button variant="yellow" size="lg" onClick={() => window.open('https://wa.me/5571993068074', '_blank')}>
                  Simular Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Products;