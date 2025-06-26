
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Star, Coffee, Sparkles } from "lucide-react";

const Index = () => {
  const handleButtonClick = (action: string) => {
    console.log(`Натиснуто: ${action}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className="p-8 text-center shadow-xl">
          <div className="mb-6">
            <Sparkles className="w-16 h-16 mx-auto text-purple-600 mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Вітаємо! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Ласкаво просимо до нашого React проекту
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-700">Любов</h3>
              <p className="text-sm text-gray-500">До розробки</p>
            </Card>
            
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-700">Якість</h3>
              <p className="text-sm text-gray-500">У кожній деталі</p>
            </Card>
            
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <Coffee className="w-8 h-8 text-brown-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-700">Кава</h3>
              <p className="text-sm text-gray-500">Для натхнення</p>
            </Card>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 mb-6">
              Цей проект створено з використанням React, TypeScript, Tailwind CSS та Shadcn UI
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleButtonClick("Розпочати")}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Розпочати роботу
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => handleButtonClick("Дізнатися більше")}
              >
                Дізнатися більше
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Створено з ❤️ за допомогою Lovable
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
