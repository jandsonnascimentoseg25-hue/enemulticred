import { Card, CardContent } from "@/components/ui/card";
import { Building2, Target, Eye, Heart, MapPin } from "lucide-react";
const About = () => {
  return <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Sobre a ENEMULTCRED</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Parceiro oficial do Banco do Brasil desde 2019, oferecendo soluções financeiras com agilidade e atendimento personalizado em todos os estados do Brasil.</p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Nossa História</h3>
            <p className="text-lg text-muted-foreground">Desde 2019, a ENEMULTCRED atua como correspondente bancário autorizado do Banco do Brasil, construindo uma trajetória sólida baseada na confiança e excelência no atendimento.</p>
            <p className="text-lg text-muted-foreground">Com matriz no Estado da Bahia, expandimos nossa atuação em todo território brasileiro, sempre mantendo nosso compromisso com a qualidade e transparência nos serviços prestados.</p>
            <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-semibold text-foreground">Parceiro Oficial</h4>
                <p className="text-muted-foreground">Banco do Brasil desde 2019</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Nossa Presença</h3>
            <p className="text-lg text-muted-foreground mb-4">Matriz na Bahia e atuação em todo território brasileiro.</p>
            <div className="grid gap-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">Todo Território Brasileiro</span>
                <span className="text-sm text-muted-foreground">- Atuação Nacional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Missão</h3>
              <p className="text-muted-foreground">
                Oferecer agilidade nas melhores soluções em concessão de crédito, 
                com atendimento personalizado.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="bg-accent/10 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Visão</h3>
              <p className="text-muted-foreground">
                Ser padrão nacional na prestação de serviços de correspondente bancário.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="bg-secondary/20 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Heart className="h-8 w-8 text-bb-navy" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Valores</h3>
              <p className="text-muted-foreground">
                Atendimento de qualidade, comportamento ético, transparência nos negócios 
                e sigilo nas informações.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;