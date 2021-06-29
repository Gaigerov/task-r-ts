import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import TableHeader from '../table-header';
import TableForm from '../table-form';
import TaskList from '../task-list';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSwatchbook} from '@fortawesome/free-solid-svg-icons';
import Pagination from '../pagination';
import DeskPage from '../desk-page';
import {sortBy, reverse} from 'lodash';
import {Task} from '../../types';
import {PageName} from '../../enums';
import {TASK_ON_PAGE} from '../../consts';
import {StateModel} from '../../store/types';
import {useSelector} from 'react-redux';

moment.locale('ru');

type OwnProps = {};



const App: React.FC<OwnProps> = () => {
   
    const pageName = useSelector((state: StateModel) => state.pageName);
    const searchValue = useSelector((state: StateModel) => state.searchValue);
    const tasks = useSelector((state: StateModel) => state.tasks);

    // getTasksFromStorage = () => {
    //     return getStorageValue(localStorage, StoreKey.Tasks);
    // }

    // saveTasksToStorage = (tasks: Task[]) => {
    //     setStorageValue(localStorage, StoreKey.Tasks, tasks);
    //     return {
    //         tasks
    //     }
    // }

    // createTask = (task: Task) => {
    //     const taskList = this.props.tasks.concat(task);
    //     this.saveTasksToStorage(taskList);
    // }

    // removeTask = (removeTaskId: string) => {
    //     const taskList = this.props.tasks.filter((task: Task) => task.id !== removeTaskId);
    //     this.saveTasksToStorage(taskList);
    // }

    // clearTaskList = () => {
    //     this.setState(state => {
    //         return {
    //             ...state,
    //             tasks: [],
    //             pagination: {
    //                 page: 0
    //             },
    //         };
    //     });
    // }

    // editTask = (taskToEdit: Task) => {
    //     const editTaskId = form.editTaskId;
    //     const taskList = this.props.tasks.map((task: Task) => {
    //         if (task.id === editTaskId) {
    //             return taskToEdit;
    //         }
    //         return task;
    //     });
    //     this.setState(state => {
    //         return {
    //             ...state,
    //             form: {
    //                 ...state.form,
    //                 values: {
    //                     ...state.form.values,
    //                     ...EMPTY_TASK,
    //                 },
    //             },
    //         };
    //     });
    //     this.handleClearForm();
    //     this.saveTasksToStorage(taskList);
    // }

    // changeFormStatus = (editTaskId: string) => {
    //     const findTask = this.state.tasks.find(task => task.id === editTaskId) ?? EMPTY_TASK;
    //     this.setState(state => {
    //         return {
    //             ...state,
    //             form: {
    //                 ...state.form,
    //                 status: findTask.id === undefined ? FormStatus.Create : FormStatus.Edit,
    //                 editTaskId,
    //                 values: {
    //                     ...findTask,
    //                 },
    //             }
    //         };
    //     });
    // }

    // toggleTaskImportant = (taskId: string) => {
    //     const taskList = this.state.tasks.map(task => {
    //         if (task.id === taskId) {
    //             return {
    //                 ...task,
    //                 important: !task.important,
    //             };
    //         }
    //         return task;
    //     });
    //     this.saveTasksToStorage(taskList);
    // }

    // handleInput = (event: React.SyntheticEvent<HTMLInputElement>) => {
    //     const {id, value, checked, type} = event.currentTarget;

    //     this.setState(state => {
    //         return {
    //             ...state,
    //             form: {
    //                 ...state.form,
    //                 values: {
    //                     ...state.form.values,
    //                     [id]: type === 'checkbox' ? checked : value,
    //                 },
    //             },
    //         };
    //     });
    // }

    // handleSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     const task = this.state.form.values;
    //     if (this.state.form.status === FormStatus.Create) {
    //         this.createTask({
    //             ...task,
    //             status: TaskStatus.Pending,
    //             id: v4(),
    //         });
    //         this.handleClearForm();
    //     }
    //     if (this.state.form.status === FormStatus.Edit) {
    //         this.editTask(task);
    //         this.handleClearForm();
    //     }
    //     this.setState(state => {
    //         return {
    //             ...state,
    //             form: {
    //                 ...state.form,
    //                 status: FormStatus.Create,
    //             }
    //         }
    //     });
    // }

    // handleClearForm = () => {
    //     this.setState(state => {
    //         const tableForm = state.form.values;
    //         const clearForm = Object.keys(tableForm).reduce((newState, key) => {
    //             const value = tableForm[key];
    //             const emptyValue = typeof value === 'string' ? '' : false;
    //             return {
    //                 ...newState,
    //                 [key]: emptyValue,
    //             };
    //         }, {});
    //         return {
    //             ...state,
    //             form: {
    //                 ...state.form,
    //                 values: clearForm,
    //             },
    //         };
    //     });
    //     this.changeFormStatus('');
    // }

    const filteredTasks = reverse(tasks.filter((task: Task) => {
        const title = task.title.toLowerCase();
        const description = task.description.toLowerCase();
        const searchLowerCaseValue = searchValue.toLowerCase();
        return title.includes(searchLowerCaseValue) || description.includes(searchLowerCaseValue);
    }));

    const sortedTasks = reverse(sortBy(filteredTasks, m => m.important));

    const pageCount = Math.ceil(sortedTasks.length / TASK_ON_PAGE);

        return (
            <div>
                <div className="d-flex pt-3 pl-3">
                    <span className="text-primary">
                        <FontAwesomeIcon icon={faSwatchbook} size="2x" />
                    </span>
                    <h2>Менеджер задач</h2>
                </div>
                <div className="container-fluid">
                    <TableHeader
                    />
                    {pageName === PageName.Main ? <div className="d-flex ml-2 mr-2 row">
                        <div className="card col-12 col-md-6 col-lg-4">
                            <TableForm
                            />
                        </div>
                        <div className="card col-12 col-md-6 col-lg-8">
                            <TaskList
                                tasks={sortedTasks}
                            />
                            <Pagination
                                onPageCount={pageCount}
                            />
                        </div>
                    </div> : <div>
                        <DeskPage
                                tasks={sortedTasks}
                        />
                    </div>}
                </div>
            </div>
        );
    }

export default App;


/**
 * (+) Для всех компонентов более двух пропсов перенос строки
 * (+) Внутри jsx двойные ковычки
 * (+) Убрать бинды сделав все методы стрелочными функциями
 * (+) Проверить чтобы не было document.query
 * (+) Когда нажимаю submit и форма в статусе create то вызов функции createTask и очищать после
 * (+) Оформить карточки
 *
 * (+) Сделать адаптиную страницу на bootstrap (доделать, пример удалить)
 * (+) Перенести стейт формы из TableForm в App (state.form.values) и все методы
 * (+) При нажатии на карандаш, нужно загружать даные в форму
 * (+) При нажатии на удаление - удалять таску
 * (+) При нажатии на звезду - менять важность задачи
 * (на занятиях)
 * (+) Удаление тасок
 * (+) Отображение дат Moment.js
 * (+) Пагинация
 * (+) Фильтрация (по названию задачи, по дате\диапазон)
 * (+) Календарь
 * (+) Переезд на typescript
 * Драг-дроп задач по статусам (В ожидании\ В работе\ Выполнено)
 * Внедрение Redux (Что такое контекст)
 * React Redux Form
 * Переезд на функциональные компоненты
 * Научимся прогонять тесты после пуша в мастер (TI\CD)
 * Автовыкладка на github pages
 */

/**
 * (+) Пагинацию доделать (+)
 * (+) Почитать про импорты и экспорты (одноврмененный импорт и экспорт одной строкой, переименование дефолтных и не дефолтных импортов)
 * (+) Кнопка star внутри тасок должна менять значение импорт в тасках
 * (+) Редактирование тасок
 * (+) Сортировка задач по важности (важные всегда в начале) (+)
 * (+) При наведении на иконки тасок должен менятся их цвет. Звезда - желтый, редактировние - зеленый, удаление - красный
 * (+) Курсор на кнопках должен быть пальцем (+)
 * (+) При наведении на таски должны подсвечиваться (это есть в бутстрепе)
 * (+) Название события - звездочка должна иметь отступ
 * (+) Верстка страницы "Работа с задачами", три колонки. Все задачи должны отобразится в колонке - в ожидании (+)
 *
 * (+) Страницы должны начинатся с "1"
 * (+) Когда запись редактируется, она должна выделятся синим (используй классы и информацию из стейта) (+/-)
 * (+) Сделать кнопку "Удалить все таски"
 * (+) Объеденить список тасок в одну лист группу https://getbootstrap.com/docs/5.0/components/list-group/ (+)
 *
 * (+) При очистке списка, страница должна сбрасыватся на 0
 * (+) Сделать переход между Страницами "Редактирование задач" и "Работа с задачами" (+)
 * (+) Верстка календаря (+/-)
 * (+) Логика открытия\закрытия календаря (+)
 * (+) Описать propTypes для всех компонентов (+)
 * (+) Переключение месяцев, и между ними кнопка показать текущий месяц (+).
 * (+) Выбранный день должен быть выделен жирным и фоном (+).
 * (+) День можно выбрать (+\-)
 * (+) Принаведении на день месяца работает ховер(фон меняется)\палец (+)
 *
 * typescript:
 * Базовые типы, Объявление переменных, Интерфейсы, Классы, Функции (+/-)
 * Задания по ts (+)
 *
 * redux:
 * Создать поле input в redux, которое хранит текст
 * Пробросить данные из этого поля в кастомный инпут
 * Написать диспатч хендлер, который при событиии  onChange передает данные в store
 * Сделать это не в App
 * 
 * Дописать экшены для таск листа и формы
 * Переписать все хендлеры на actions.[bla-bla]
 * Начинай переход на функциональные компоненты
 *
 */
