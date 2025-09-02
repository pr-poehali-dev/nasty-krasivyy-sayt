import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const galleryImages = [
    {
      src: "https://cdn.poehali.dev/files/aa7b761d-6a98-4532-920d-40b7b6ea9fac.jpg",
      title: "Моя любимая Настя",
      description: "Самая красивая улыбка в мире"
    },
    {
      src: "/img/d50ab5eb-d09f-43af-80d0-65144fd797dd.jpg",
      title: "Наши моменты",
      description: "Каждый день с тобой — праздник"
    },
    {
      src: "/img/80fd25b0-e4dd-4661-9acf-172d7770c295.jpg",
      title: "Воспоминания",
      description: "Наша история любви"
    },
    {
      src: "/img/15e10ab0-a633-4fab-b4df-fb5400e1494f.jpg",
      title: "Мечты сбываются",
      description: "Вместе к новым горизонтам"
    }
  ];

  const memories = [
    {
      icon: "Heart",
      title: "Первая встреча",
      description: "Тот самый день, когда всё изменилось. Твои глаза сразу покорили моё сердце.",
      date: "Особенный день"
    },
    {
      icon: "Star",
      title: "Первое признание",
      description: "Слова, которые изменили нашу жизнь. Я знал, что ты — моя судьба.",
      date: "Незабываемый момент"
    },
    {
      icon: "Sparkles",
      title: "Наши приключения",
      description: "Каждый день с тобой — новое открытие. Спасибо за все эти прекрасные воспоминания.",
      date: "Каждый день"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/30 to-rose-100/30" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full text-sm text-pink-600 mb-6 border border-pink-200/50">
              <Icon name="Sparkles" size={16} />
              Для самой прекрасной девушки
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-rose-500 to-pink-600 bg-clip-text text-transparent mb-6">
              Настя
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ты — моё солнце, мой свет, моё всё. Этот сайт создан с любовью, чтобы показать, как ты прекрасна и как сильно я тебя люблю.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Icon name="Heart" size={20} className="mr-2" />
                Моя любовь
              </Button>
              <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full text-lg transition-all duration-300">
                <Icon name="Camera" size={20} className="mr-2" />
                Посмотреть галерею
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Наша галерея
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Каждое фото — это частичка нашего счастья, запечатлённая навсегда
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-xl font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-25 to-rose-25">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Наши воспоминания
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Моменты, которые навсегда останутся в моём сердце
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memories.map((memory, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={memory.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{memory.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{memory.description}</p>
                <div className="text-sm text-pink-500 font-medium">{memory.date}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Love Message Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="p-12 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200/50 shadow-xl">
            <div className="mb-8">
              <Icon name="Heart" size={48} className="text-pink-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Моё сердце принадлежит тебе
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Настя, ты — самое дорогое, что есть в моей жизни. Каждый день с тобой — это подарок. 
                Твоя улыбка освещает мой мир, твой смех — музыка для моей души. 
                Спасибо за то, что ты есть в моей жизни. Я люблю тебя больше всех слов.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-pink-500">
              <Icon name="Heart" size={20} />
              <span className="font-medium">С бесконечной любовью</span>
              <Icon name="Heart" size={20} />
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-pink-200/50">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-500">
            Сделано с ❤️ специально для Насти • 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;