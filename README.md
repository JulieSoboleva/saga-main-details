[![Build status](https://ci.appveyor.com/api/projects/status/r43lf4ia8kgk9nqr?svg=true)](https://ci.appveyor.com/project/juliesoboleva/saga-main-details)

[Ссылка на Github Pages](https://juliesoboleva.github.io/saga-main-details/)


Список и детали
===

Напишите проект, использующий React Router и Redux Observable, который удовлетворяет следующим условиям:

На главной странице показывается список услуг, редактирование не нужно, достаточно просто ссылок — данные загружаются методом GET на http://localhost:7070/api/services.

При переходе по ссылке (/:id/details), загружаются детали услуги — GET на http://locahost:7070/api/services/:id.

При загрузке должен отображаться индикатор загрузки, что на странице списка, что на странице деталей:

![](./assets/spinner.png)

При ошибке должно показываться сообщение об ошибке и кнопка «Повторить запрос», при нажатии на которую осуществляется попытка снова выполнить запрос с индикатором загрузки и т. д.:

![](./assets/retry.png)

Готовый бэкенд расположен в каталоге `backend`.

