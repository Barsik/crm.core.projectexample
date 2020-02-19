# Золотое Яблоко [CRM]

TODO: описание

## Сожержание

* [Главная](#Золотое-Яблоко-`CRM`)
* [Организация ветвления](#Организация-ветвления)
* [Сборка проекта](#Сборка-проекта)

## Сборка проекта
Если прооект Columbus.GoldApple.Crm.Plugins не собирается с iLmerge и ругается на метаданные какой-нибудь библиотеки, то необходимо из `{SolutionFolder}\packages` удалить файл *.pdb этой библиотеки.

## Организация ветвления
На проекте используется стандартная модель ветвления `Git-flow`. Возможны следующие тип веток:
- `develop` - основная ветка для разработки
- `master` - главная ветка проекта. production-ready код
- `feature/` - ветки фич
- `release/` - ветки релизов
- `hotfix/` - ветки для исправления ошибок на продуктивной среде
Основные правила:
1) В `develop` ветку код попадает только из `feature/`
2) В `master` ветку код попадает только из `release/`
3) Чтобы начать новую задачу, нужно создать ветку в `feature/`, сделав ответвление из актуальной версии `develop`
4) Для завершения задачи необходимо сделать `pull-request` своей ветки из `feature/`
5) В случае ошибки на проде необходимо создать ветку в `hotfix/`, ответвли из актуальной версии `master`
6) Для закрытия бага делается два `pull-request` в `master` и в `develop` // TODO: нужно обсудить
7) Все коммиты должны быть с комментариями
8) Формат комментария должен быть следующим: TODO
9) Название веток `feature/` должно соответствовать формату: `feature/[номер задачи]-[краткое название (опционально)]`. Например, `feature/CR-12345-super-builder` или `feature/CR-12345`

Исходя из вышеуказанной парадигмы, процесс разработки выглядит следующим образом: 
1) переходим в ветку `develop`
2) берем последние изменения
3) создаем новую вектку в `feature/`4
4) выполняем задачу
5) берем последние изменения из `develop`
6) если есть конфликты, то решаем их
7) создаем `pull-request`