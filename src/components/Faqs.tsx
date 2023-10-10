import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Что такое \'Yurt\' и для чего оно предназначено?',
      answer:
        'Yurt\' - это приложение, созданное для соединения казахстанцев по всему миру. Оно предоставляет платформу для общения, обмена информацией и поиска соотечественников рядом с вами.',
    },
    {
      question: 'Могу ли я использовать \'Yurt\', находясь за пределами Казахстана?',
      answer:
        'Конечно! \'Yurt\' создано, чтобы соединять казахстанцев по всему миру, независимо от их местоположения.',
    },
  ],
  [
    {
      question: 'Могу ли я организовывать мероприятия для казахстанцев через \'Yurt\'?',
      answer:
        'Да, с помощью функции \'Форум\' вы можете создать и распространить информацию о вашем событии среди сообщества.',
    },
    {
      question: 'Могут ли не казахстанцы использовать \'Yurt\'?"',
      answer:
        'Yurt\' ориентировано на казахстанцев, но если вы интересуетесь культурой и сообществом Казахстана, вы можете присоединиться и использовать приложение.',
    },
  ],
  [
    {
      question: 'Как обеспечивается безопасность моих данных?',
      answer:
          'Мы придаем большое значение конфиденциальности и безопасности данных. Все ваши личные данные защищены современными методами шифрования',
    },
    {
      question: 'Могу ли я использовать \'Yurt\', находясь за пределами Казахстана?',
      answer:
          'Конечно! \'Yurt\' создано, чтобы соединять казахстанцев по всему миру, независимо от их местоположения.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
