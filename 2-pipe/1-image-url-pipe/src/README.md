## Pipes и их применение

Товары которые приходят с сервера имеют структуру
```ts
export interface IProduct {
  _id: string;
  subCategory: string;
  feedbacksCount: number;
  count?: number;
  name: string;
  description: string;
  feedbacks?: IFeedback;
  characteristics?: ICharacteristics[];
  price: number;
  status: boolean;
  images: IProductImage[];
  rating: number;
}

export interface IProductImage {
  url: string;
  source: string;
}

```
Как видно поле images содержит ряд изображений, которые относятся к товару.
Напишите pipe который при пременению к полю images будет возвращать путь к первому изображению

Не меняйте структуру html и стили компонетов

Для запуска окружения непрерывной разработки выполните команду

```bash
npm run start:2-pipe_1-image-url-pipe
```

Для проверки своего решения выполните

```bash
npm run test:2-pipe_1-image-url-pipe
```

Для проверки стилистики кода

```bash
npm run lint:2-pipe_1-image-url-pipe
```
