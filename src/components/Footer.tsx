import { Instagram, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-bb-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/lovable-uploads/13a8f5ea-dde2-47eb-ad6a-4996ee41d3ba.png" alt="ENEMULTCRED" className="h-12 w-auto brightness-0 invert" />
            <p className="text-blue-100">Correspondente oficial do Banco do Brasil desde 2019. Soluções financeiras com segurança e confiança.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/enemulticred_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:suportedeatendimento@segline.srv.br" className="text-blue-200 hover:text-secondary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://wa.me/5571991068932" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-secondary transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Nossos Serviços</h3>
            <ul className="space-y-2 text-blue-100">
              <li>Empréstimo Consignado</li>
              <li>Empréstimo Pessoal</li>
              <li>Consórcio</li>
              <li>Abertura de Conta</li>
              <li>Seguros</li>
              <li>Plano Odontológico</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(71) 99106-8932</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5" />
                <span className="text-sm">suportedeatendimento@segline.srv.br</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">Matriz: Bahia<br />Atuação: Todo território brasileiro</span>
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Nossa Experiência</h3>
            <div className="space-y-3">
              <div>
                <div className="text-2xl font-bold text-secondary">1.377.614</div>
                <div className="text-blue-100 text-sm">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">6+</div>
                <div className="text-blue-100 text-sm">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">Todos</div>
                <div className="text-blue-100 text-sm">Estados Atendidos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-100 text-sm text-center md:text-left">
              © 2024 ENEMULTCRED. Todos os direitos reservados. | 
              Correspondente Bancário do Banco do Brasil desde 2019
            </div>
            <div className="text-blue-100 text-sm">
              Desenvolvido com ❤️ para nossos clientes
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;