import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  Instagram, 
  MapPin, 
  Clock, 
  MessageCircle,
  Briefcase
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
  };

  const handleTrabalheConosco = () => {
    const message = `Olá! Tenho interesse em trabalhar na ENEMULTCRED. Gostaria de saber mais sobre as oportunidades disponíveis.`;
    window.open(`https://wa.me/5571982031254?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você com o melhor atendimento personalizado. 
            Escolha a forma de contato que preferir.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  Simulação de Crédito
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Fale diretamente com nossos especialistas para simular seu crédito
                </p>
                <Button 
                  variant="bb" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/5571993068074', '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp: (71) 99306-8074
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  Suporte por E-mail
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Envie suas dúvidas e solicitações por e-mail
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('mailto:suportedeatendimento@segline.srv.br', '_blank')}
                >
                  Enviar E-mail
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-pink-500" />
                  Redes Sociais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Acompanhe nossas novidades no Instagram
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://www.instagram.com/enemulticred_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
                >
                  @enemulticred_
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-secondary/10 to-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-bb-navy" />
                  Trabalhe Conosco
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Faça parte da nossa equipe de sucesso
                </p>
                <Button 
                  variant="yellow" 
                  className="w-full"
                  onClick={handleTrabalheConosco}
                >
                  Quero Trabalhar Aqui
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">Nome</label>
                      <Input
                        type="text"
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">E-mail</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground">Telefone</label>
                    <Input
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground">Mensagem</label>
                    <Textarea
                      value={formData.mensagem}
                      onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                      required
                      rows={4}
                      className="mt-1"
                      placeholder="Como podemos ajudar você?"
                    />
                  </div>
                  
                  <Button type="submit" variant="bb" size="lg" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>

                {/* Business Hours */}
                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4" />
                    Horário de Atendimento
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Segunda a Sexta: 8h às 17h
                  </p>
                </div>

                {/* Location */}
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4" />
                    Nossa Localização
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Matriz: Estado da Bahia<br />
                    Atendemos todo o território brasileiro
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;