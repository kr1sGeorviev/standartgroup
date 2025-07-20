import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaHome, FaClipboardCheck, FaHardHat, FaWrench, FaBuilding, FaTools } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-yellow-400">СТАНДАРТ</span> ГРУП
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Изграждаме качество, доставяме професионални строителни решения от над 20 години
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Безплатна консултация
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Нашите проекти
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Нашите Услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Специализирани сме в изчерпателни строителни услуги - от техническо ръководство до изпълнение на строително-монтажни работи
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClipboardCheck className="text-2xl text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Техническо Ръководство</h3>
              <p className="text-gray-600">Пълно управление на строителните процеси за еднофамилни жилищни сгради</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBuilding className="text-2xl text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Инвеститорски Контрол</h3>
              <p className="text-gray-600">Професионално съпровождение от идея до завършване на проекта</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHome className="text-2xl text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Строителство</h3>
              <p className="text-gray-600">Изпълнение на всички видове строително-монтажни работи</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWrench className="text-2xl text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">ВиК Инсталации</h3>
              <p className="text-gray-600">Професионални водопроводни и канализационни системи</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Детайлни Услуги</h2>
            <p className="text-xl text-gray-600">Нашите експертизи и специализации</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Management */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaClipboardCheck className="text-yellow-400 mr-3" />
                Техническо Ръководство
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Изготвяне на календарно-сетев график (КСС)</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Линейни графици за ефективно планиране</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Заявки за материали по видове работи</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Текущ контрол на изпълнението</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Изготвяне на актове съгласно ЗУТ</span>
                </div>
              </div>
            </div>

            {/* Investment Control */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaBuilding className="text-yellow-400 mr-3" />
                Инвеститорски Контрол
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Предпроектни проучвания и оценка на парцели</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Изготвяне на проектен бюджет и КСС</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Консултации за избор на изпълнител</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Координация в хода на проектирането</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Контрол на качеството и количеството</span>
                </div>
              </div>
            </div>

            {/* Construction */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaHardHat className="text-yellow-400 mr-3" />
                Строителство
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Бетонови фундаменти за сглобяеми къщи</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Бетонови фундаменти за ажурни огради</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Конструктивна част на еднофамилни сгради</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">ВиК инсталации на новопостроени сгради</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Площадкови ВиК и дренаж</span>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaTools className="text-yellow-400 mr-3" />
                Допълнителни Услуги
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Външни ВиК връзки за еднофамилни сгради</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Вертикална планировка</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Изкопни работи</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Кофраж, армировка и бетон</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Топлоизолация и хидроизолация</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">За СТАНДАРТ ГРУП</h2>
              <p className="text-lg text-gray-600 mb-6">
                С над две десетилетия опит в строителната индустрия, СТАНДАРТ ГРУП се утвърди като доверено име в доставянето на висококачествени строителни проекти. Нашият ангажимент към отличност, безопасност и удовлетвореност на клиентите ни отличава.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaCheckCircle className="text-yellow-400 mr-3 text-xl" />
                  <span className="text-gray-700">Лицензирани и застраховани изпълнители</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-yellow-400 mr-3 text-xl" />
                  <span className="text-gray-700">Опитен екип от професионалисти</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-yellow-400 mr-3 text-xl" />
                  <span className="text-gray-700">Качествени материали и изработка</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-yellow-400 mr-3 text-xl" />
                  <span className="text-gray-700">Завършване на проектите навреме</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-lg">Снимка на строителна площадка</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-700">Завършени Проекта</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-700">Години Опит</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-700">Членове на Екипа</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-700">Доволни Клиенти</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Какво Казват Нашите Клиенти</h2>
            <p className="text-xl text-gray-600">Не просто приемайте нашата дума</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                &quot;СТАНДАРТ ГРУП завършиха ремонт на нашия офис навреме и в рамките на бюджета. Вниманието им към детайлите и професионалният подход надхвърли очакванията ни.&quot;
              </p>
              <div className="font-semibold">Сара Джонсън</div>
              <div className="text-gray-500">Изпълнителен директор, ТехКорп</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                &quot;Екипът на СТАНДАРТ ГРУП трансформира нашия остарял дом в модерно произведение на изкуството. Горещо препоръчваме техните услуги!&quot;
              </p>
              <div className="font-semibold">Михаил Чен</div>
              <div className="text-gray-500">Собственик на дом</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                &quot;Професионална, надеждна и качествена работа. СТАНДАРТ ГРУП са нашият избор за строителен партньор от години.&quot;
              </p>
              <div className="font-semibold">Лиза Родригес</div>
              <div className="text-gray-500">Управител на имоти</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свържете Се С Нас</h2>
            <p className="text-xl text-gray-300">Готови сте да започнете вашия строителен проект?</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Информация за Контакт</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="text-yellow-400 mr-3" />
                  <span>(02) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-yellow-400 mr-3" />
                  <span>info@standardgroup.bg</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-yellow-400 mr-3" />
                  <span>ул. &quot;Строителна&quot; 123, София 1000</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Работно Време</h4>
                <p className="text-gray-300">Понеделник - Петък: 8:00 - 18:00</p>
                <p className="text-gray-300">Събота: 9:00 - 15:00</p>
                <p className="text-gray-300">Неделя: Затворено</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Заявка за Оферта</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Име"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Фамилия"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Имейл адрес"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
                />
                <textarea
                  placeholder="Детайли за проекта"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Изпрати Съобщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 СТАНДАРТ ГРУП. Всички права запазени.</p>
        </div>
      </footer>
    </main>
  )
}
