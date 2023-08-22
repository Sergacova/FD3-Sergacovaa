import {EventEmitter} from 'events';

let clientsEvents=new EventEmitter(); 
//в потоке clientsEvents будут все события, связанные с MobileCompany:
//EEdit - редактирование клиента
//EDelete - удаление клиента
//ESaveNewClient - создание нового клиента
//ECancelForm - закрытие формы редактирования/создания клиента, без сохранения данных
//EFilterAll - фильтрация: отобразить всех клиентов
//EFilterActive - фильтрация: отобразить активных клиентов
//EFilterBlocked - фильтрация: отобразить заблокированных клиентов

export {clientsEvents};